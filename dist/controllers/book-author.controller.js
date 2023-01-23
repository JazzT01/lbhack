"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BookAuthorController = class BookAuthorController {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async find(id, filter) {
        return this.bookRepository.authors(id).find(filter);
    }
    async create(id, author) {
        return this.bookRepository.authors(id).create(author);
    }
    async patch(id, author, where) {
        return this.bookRepository.authors(id).patch(author, where);
    }
    async delete(id, where) {
        return this.bookRepository.authors(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/books/{id}/authors', {
        responses: {
            '200': {
                description: 'Array of Book has many Author through AuthorsBooks',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Author) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/books/{id}/authors', {
        responses: {
            '200': {
                description: 'create a Author model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Author) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Author, {
                    title: 'NewAuthorInBook',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/books/{id}/authors', {
        responses: {
            '200': {
                description: 'Book.Author PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Author, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Author))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/books/{id}/authors', {
        responses: {
            '200': {
                description: 'Book.Author DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Author))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorController.prototype, "delete", null);
BookAuthorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BookRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BookRepository])
], BookAuthorController);
exports.BookAuthorController = BookAuthorController;
//# sourceMappingURL=book-author.controller.js.map