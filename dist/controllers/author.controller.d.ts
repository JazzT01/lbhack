import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Author } from '../models';
import { AuthorRepository } from '../repositories';
export declare class AuthorController {
    authorRepository: AuthorRepository;
    constructor(authorRepository: AuthorRepository);
    create(author: Omit<Author, 'id'>): Promise<Author>;
    count(where?: Where<Author>): Promise<Count>;
    find(filter?: Filter<Author>): Promise<Author[]>;
    updateAll(author: Author, where?: Where<Author>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Author>): Promise<Author>;
    updateById(id: number, author: Author): Promise<void>;
    replaceById(id: number, author: Author): Promise<void>;
    deleteById(id: number): Promise<void>;
}
