"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const author_model_1 = require("./author.model");
const authors_books_model_1 = require("./authors-books.model");
let Book = class Book extends repository_1.Entity {
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
], Book.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "publishedDate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Book.prototype, "price", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => author_model_1.Author, { through: { model: () => authors_books_model_1.AuthorsBooks } }),
    tslib_1.__metadata("design:type", Array)
], Book.prototype, "authors", void 0);
Book = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Book);
exports.Book = Book;
//# sourceMappingURL=book.model.js.map