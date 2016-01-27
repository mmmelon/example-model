/*
Place here your meteor methods.
Method should only check parameters and unblock if possible.
Method code should be separated into a function.
*/

Task.Methods = {};

Task.Methods.tasks_create = function({task,userId}){
	const savedTask = Task.Write.create(task);
	if(savedTask._id){
		Task.Triggers.createActivity.call(this,{
			userId:userId,
			task:task,
			type:Activity.types.createTask
		});
	}
}

Meteor.methods({
	tasks_create:function(task){
		check(task,Match.Any);
		this.unblock();
		Task.Methods.tasks_created({task:task,userId:this.userId});
	}
});
