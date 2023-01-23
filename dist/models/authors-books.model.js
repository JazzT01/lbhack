"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsBooks = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AuthorsBooks = class AuthorsBooks extends repository_1.Entity {
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
], AuthorsBooks.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AuthorsBooks.prototype, "authorId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], AuthorsBooks.prototype, "bookId", void 0);
AuthorsBooks = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuthorsBooks);
exports.AuthorsBooks = AuthorsBooks;
//# sourceMappingURL=authors-books.model.js.map