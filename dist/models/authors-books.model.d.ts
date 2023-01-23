import { Entity } from '@loopback/repository';
export declare class AuthorsBooks extends Entity {
    id?: number;
    authorId: number;
    bookId: number;
    constructor(data?: Partial<AuthorsBooks>);
}
export interface AuthorsBooksRelations {
}
export type AuthorsBooksWithRelations = AuthorsBooks & AuthorsBooksRelations;
