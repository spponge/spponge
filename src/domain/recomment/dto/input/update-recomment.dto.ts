import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateReCommentDto {
    @IsString()
    @IsNotEmpty()
    content: string;
}
