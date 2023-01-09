export class Post {
    id!: number;
    description?: string;
    file?: File;
    authorId!: number;
    created_date!: Date;
}