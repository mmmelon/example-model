/*
Place here all your database read operations and database collection declaration
Try to make it as clear as possible
*/

Tasks = new Mongo.Collection("Tasks");

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
