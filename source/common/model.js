/*
Place here your shared model code.
Model declaraction, validate function and Allow function helpers
*/

Task = function(object){
    if(object._id){
        this._id = object._id;
    }
    this.createdAt = object.createdAt || new Date();
    this.updatedAt = object.updatedAt || new Date();
	this.name = object.name;
	this.author = object.author;
}

Task.validate = function(task){
    var errors = [];
    if(!Match.test(task.name, String)){errors = errors.concat(Task.Errors.NameEmpty)};
    if(!Match.test(task.author, String)){errors = errors.concat(Task.Errors.AuthorEmpty)};
    if(typeof(task.name) !== "undefined" && task.name.trim().length == 0){
        errors = errors.concat(Task.Errors.NameEmpty);
    }
    if(typeof(task.name) !== "undefined" && task.name.trim().length > 300){
        errors = errors.concat(Task.Errors.NameTooLong);
    }
    return errors;
}

Task.Allow = {};

Task.Allow.insert = function({userId,task}){
    return true;
}

Task.Allow.update = function({userId,task}){
    return true;
};
