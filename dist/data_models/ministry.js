"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ministrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    info: {
        type: String
    },
    created_at: {
        type: Date
    },
    leaders: {
        type: [String]
    }
});

module.exports = _mongoose2.default.model("Ministry", ministrySchema);
//# sourceMappingURL=ministry.js.map