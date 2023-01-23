import { Entity } from '@loopback/repository';
import { Book } from './book.model';
export declare class Author extends Entity {
    id?: number;
    name: string;
    books: Book[];
    constructor(data?: Partial<Author>);
}
export interface AuthorRelations {
}
export type AuthorWithRelations = Author & AuthorRelations;
