/*
Place here all your database writing calls
Try to make it as clear as possible
*/

Task.Write = {};

if(Meteor.isServer){
    Tasks._ensureIndex( { "removedAt": 1 }, { expireAfterSeconds: 5184000 } );
}

Task.Write.create = function({task}){
    Tasks.insert(task);
}
