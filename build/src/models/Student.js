"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StudentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phones: [{
            namenum: { type: String },
            number: { type: String }
        }],
    studies: [{ type: String, required: true }]
});
exports.default = mongoose_1.model('Student', StudentSchema);
