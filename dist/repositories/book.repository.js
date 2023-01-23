"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let BookRepository = class BookRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, authorsBooksRepositoryGetter, authorRepositoryGetter) {
        super(models_1.Book, dataSource);
        this.authorsBooksRepositoryGetter = authorsBooksRepositoryGetter;
        this.authorRepositoryGetter = authorRepositoryGetter;
        this.authors = this.createHasManyThroughRepositoryFactoryFor('authors', authorRepositoryGetter, authorsBooksRepositoryGetter);
        this.registerInclusionResolver('authors', this.authors.inclusionResolver);
    }
};
BookRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Local')),
    tslib_1.__param(1, repository_1.repository.getter('AuthorsBooksRepository')),
    tslib_1.__param(2, repository_1.repository.getter('AuthorRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.LocalDataSource, Function, Function])
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.repository.js.map