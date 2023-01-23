import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory } from '@loopback/repository';
import { LocalDataSource } from '../datasources';
import { Author, AuthorRelations, Book, AuthorsBooks } from '../models';
import { AuthorsBooksRepository } from './authors-books.repository';
import { BookRepository } from './book.repository';
export declare class AuthorRepository extends DefaultCrudRepository<Author, typeof Author.prototype.id, AuthorRelations> {
    protected authorsBooksRepositoryGetter: Getter<AuthorsBooksRepository>;
    protected bookRepositoryGetter: Getter<BookRepository>;
    readonly books: HasManyThroughRepositoryFactory<Book, typeof Book.prototype.id, AuthorsBooks, typeof Author.prototype.id>;
    constructor(dataSource: LocalDataSource, authorsBooksRepositoryGetter: Getter<AuthorsBooksRepository>, bookRepositoryGetter: Getter<BookRepository>);
}
