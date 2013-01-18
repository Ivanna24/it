module.exports = require("extended")()
    .register(require("is-extended"))
    .register(require("array-extended"))
    .register(require("date-extended"))
    .register(require("object-extended"))
    .register(require("string-extended"))
    .register(require("promise-extended"))
    .register(require("function-extended"))
    .register("declare", require("declare.js"));