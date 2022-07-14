"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
const uuid_1 = require("uuid");
exports.todos = [
    {
        id: (0, uuid_1.v4)(),
        title: 'Todo 1',
        description: 'This is the first todo',
    },
    {
        id: (0, uuid_1.v4)(),
        title: 'Todo 2',
        description: 'This is the second todo',
    },
    {
        id: (0, uuid_1.v4)(),
        title: 'Todo 3',
    },
];
