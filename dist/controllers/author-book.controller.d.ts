import { Count, Filter, Where } from '@loopback/repository';
import { Author, Book } from '../models';
import { AuthorRepository } from '../repositories';
export declare class AuthorBookController {
    protected authorRepository: AuthorRepository;
    constructor(authorRepository: AuthorRepository);
    find(id: number, filter?: Filter<Book>): Promise<Book[]>;
    create(id: typeof Author.prototype.id, book: Omit<Book, 'id'>): Promise<Book>;
    patch(id: number, book: Partial<Book>, where?: Where<Book>): Promise<Count>;
    delete(id: number, where?: Where<Book>): Promise<Count>;
}
