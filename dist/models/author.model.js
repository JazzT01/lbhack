"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const book_model_1 = require("./book.model");
const authors_books_model_1 = require("./authors-books.model");
let Author = class Author extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Author.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => book_model_1.Book, { through: { model: () => authors_books_model_1.AuthorsBooks } }),
    tslib_1.__metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Author);
exports.Author = Author;
//# sourceMappingURL=author.model.js.map