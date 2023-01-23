import { DefaultCrudRepository } from '@loopback/repository';
import { LocalDataSource } from '../datasources';
import { AuthorsBooks, AuthorsBooksRelations } from '../models';
export declare class AuthorsBooksRepository extends DefaultCrudRepository<AuthorsBooks, typeof AuthorsBooks.prototype.id, AuthorsBooksRelations> {
    constructor(dataSource: LocalDataSource);
}
