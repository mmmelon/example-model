Package.describe({
  name: "mmmelon:example-model",
  summary: "",
  version: "0.1.0",
  git: ""
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.1");
    api.use(["meteor","check","underscore", "ddp","mongo","ecmascript"]);

    api.addFiles("source/common/model.js", ["client","server"]);
    api.addFiles("source/common/errors.js", ["client","server"]);
    api.addFiles("source/persistence/reading.js", ["client","server"]);
    api.addFiles("source/persistence/writing.js", ["client","server"]);
    api.addFiles("source/common/helpers.js", ["client","server"]);
    api.addFiles("source/client/model.js", ["client"]);
    api.addFiles("source/server/model.js", ["server"]);
    api.addFiles("source/common/methods.js", ["client","server"]);
    api.addFiles("source/common/triggers.js", ["client","server"]);

    //We only export Task, no Tasks collection as we never have to use it directly
    api.export('Task', ["client","server"]);
});


Package.onTest(function (api) {
    api.use(['mike:mocha-package@0.5.7', 'practicalmeteor:chai@2.1.0_1','practicalmeteor:sinon']);
    api.use(["meteor","check","underscore", "ddp","mongo","ecmascript"]);

    api.addFiles("source/common/model.js", ["client","server"]);
    api.addFiles("source/common/errors.js", ["client","server"]);
    api.addFiles("source/persistence/reading.js", ["client","server"]);
    api.addFiles("source/persistence/writing.js", ["client","server"]);
    api.addFiles("source/common/helpers.js", ["client","server"]);
    api.addFiles("source/client/model.js", ["client"]);
    api.addFiles("source/server/model.js", ["server"]);
    api.addFiles("source/common/methods.js", ["client","server"]);
    api.addFiles("source/common/triggers.js", ["client","server"]);

    api.addFiles("tests/stubs.js",["client","server"]);
    api.addFiles("tests/client.js","client");
    api.addFiles("tests/common.js",["client","server"]);
    api.addFiles("tests/methods.js",["client","server"]);
});
