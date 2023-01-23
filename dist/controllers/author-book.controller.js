"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorBookController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AuthorBookController = class AuthorBookController {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async find(id, filter) {
        return this.authorRepository.books(id).find(filter);
    }
    async create(id, book) {
        return this.authorRepository.books(id).create(book);
    }
    async patch(id, book, where) {
        return this.authorRepository.books(id).patch(book, where);
    }
    async delete(id, where) {
        return this.authorRepository.books(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/authors/{id}/books', {
        responses: {
            '200': {
                description: 'Array of Author has many Book through AuthorsBooks',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Book) },
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
], AuthorBookController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/authors/{id}/books', {
        responses: {
            '200': {
                description: 'create a Book model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Book) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Book, {
                    title: 'NewBookInAuthor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorBookController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/authors/{id}/books', {
        responses: {
            '200': {
                description: 'Author.Book PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Book, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Book))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorBookController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/authors/{id}/books', {
        responses: {
            '200': {
                description: 'Author.Book DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Book))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorBookController.prototype, "delete", null);
AuthorBookController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AuthorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AuthorRepository])
], AuthorBookController);
exports.AuthorBookController = AuthorBookController;
//# sourceMappingURL=author-book.controller.js.map