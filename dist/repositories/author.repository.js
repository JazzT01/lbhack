"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AuthorRepository = class AuthorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, authorsBooksRepositoryGetter, bookRepositoryGetter) {
        super(models_1.Author, dataSource);
        this.authorsBooksRepositoryGetter = authorsBooksRepositoryGetter;
        this.bookRepositoryGetter = bookRepositoryGetter;
        this.books = this.createHasManyThroughRepositoryFactoryFor('books', bookRepositoryGetter, authorsBooksRepositoryGetter);
        this.registerInclusionResolver('books', this.books.inclusionResolver);
    }
};
AuthorRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Local')),
    tslib_1.__param(1, repository_1.repository.getter('AuthorsBooksRepository')),
    tslib_1.__param(2, repository_1.repository.getter('BookRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.LocalDataSource, Function, Function])
], AuthorRepository);
exports.AuthorRepository = AuthorRepository;
//# sourceMappingURL=author.repository.js.map