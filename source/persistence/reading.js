/*
Place here all your database read operations
Try to make it as clear as possible
*/

Task.Query = {};

Task.Query.findAll = function(){
	return Tasks.find();
}

Task.Query.oneByIdCursor = function({id}){
	return Tasks.find({_id:id});
}

Task.Query.oneById = function({id}){
	return Tasks.findOne(id);
}
