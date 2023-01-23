"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AuthorController = class AuthorController {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async create(author) {
        return this.authorRepository.create(author);
    }
    async count(where) {
        return this.authorRepository.count(where);
    }
    async find(filter) {
        return this.authorRepository.find(filter);
    }
    async updateAll(author, where) {
        return this.authorRepository.updateAll(author, where);
    }
    async findById(id, filter) {
        return this.authorRepository.findById(id, filter);
    }
    async updateById(id, author) {
        await this.authorRepository.updateById(id, author);
    }
    async replaceById(id, author) {
        await this.authorRepository.replaceById(id, author);
    }
    async deleteById(id) {
        await this.authorRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/authors'),
    (0, rest_1.response)(200, {
        description: 'Author model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Author) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Author, {
                    title: 'NewAuthor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/authors/count'),
    (0, rest_1.response)(200, {
        description: 'Author model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Author)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/authors'),
    (0, rest_1.response)(200, {
        description: 'Array of Author model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Author, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Author)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/authors'),
    (0, rest_1.response)(200, {
        description: 'Author PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Author, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Author)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Author, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/authors/{id}'),
    (0, rest_1.response)(200, {
        description: 'Author model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Author, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Author, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/authors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Author PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Author, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Author]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/authors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Author PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Author]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/authors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Author DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteById", null);
AuthorController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AuthorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AuthorRepository])
], AuthorController);
exports.AuthorController = AuthorController;
//# sourceMappingURL=author.controller.js.map