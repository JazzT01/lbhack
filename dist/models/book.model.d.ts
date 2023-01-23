import { Entity } from '@loopback/repository';
import { Author } from './author.model';
export declare class Book extends Entity {
    id?: number;
    title: string;
    publishedDate: string;
    price: number;
    authors: Author[];
    constructor(data?: Partial<Book>);
}
export interface BookRelations {
}
export type BookWithRelations = Book & BookRelations;
