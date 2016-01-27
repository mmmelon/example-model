/*
Place here your triggers.
Functions that should be called when something happens.
*/

Task.Triggers = {};

//For example, when we create a Task we want to create some activity. Just call this function when you create a task
Task.Triggers.createActivity = function({userId,task,type}){
    console.log("create activity");
}
