/*
Place here model functions only visible to client.
Create, delete, edit, helpers used in templates
Try to have 0 logic in templates
*/

Task.create = function({name,author}){
	var newTask = new Task({name:name,author:author,createdAt:new Date(),updatedAt:new Date()});
	var validationErrors = Task.validate(newTask);
	if(validationErrors.length){
		return {errors:validationErrors};
	}
	if(!Task.Allow.insert({userId:author,task:newTask})){
		return {errors:[Task.Errors.Validation.NoAllowed]};
	}
	Meteor.call("tasks_create",newTask);
	return {task:newTask};
}

Task.getDaysToEnd = function({endDate}){
	const oneDay = 24*60*60*1000;
	var currentDays = Math.round((endDate.getTime() - (new Date()).getTime())/(oneDay));
	return currentDays > 0 ? currentDays : 0;
}
