import { Count, Filter, Where } from '@loopback/repository';
import { Book, Author } from '../models';
import { BookRepository } from '../repositories';
export declare class BookAuthorController {
    protected bookRepository: BookRepository;
    constructor(bookRepository: BookRepository);
    find(id: number, filter?: Filter<Author>): Promise<Author[]>;
    create(id: typeof Book.prototype.id, author: Omit<Author, 'id'>): Promise<Author>;
    patch(id: number, author: Partial<Author>, where?: Where<Author>): Promise<Count>;
    delete(id: number, where?: Where<Author>): Promise<Count>;
}
