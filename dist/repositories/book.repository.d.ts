import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory } from '@loopback/repository';
import { LocalDataSource } from '../datasources';
import { Book, BookRelations, Author, AuthorsBooks } from '../models';
import { AuthorsBooksRepository } from './authors-books.repository';
import { AuthorRepository } from './author.repository';
export declare class BookRepository extends DefaultCrudRepository<Book, typeof Book.prototype.id, BookRelations> {
    protected authorsBooksRepositoryGetter: Getter<AuthorsBooksRepository>;
    protected authorRepositoryGetter: Getter<AuthorRepository>;
    readonly authors: HasManyThroughRepositoryFactory<Author, typeof Author.prototype.id, AuthorsBooks, typeof Book.prototype.id>;
    constructor(dataSource: LocalDataSource, authorsBooksRepositoryGetter: Getter<AuthorsBooksRepository>, authorRepositoryGetter: Getter<AuthorRepository>);
}
