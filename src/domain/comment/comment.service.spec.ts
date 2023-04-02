/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CommentRepository } from './comment.repository.interface';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/input/create-comment.dto';

class FakeCommentRepository implements CommentRepository {
    async create(createCommentDto: CreateCommentDto, userId: number): Promise<void> {}
}

describe('CommentService', () => {
    let commentService: CommentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommentService,
                {
                    provide: CommentRepository,
                    useClass: FakeCommentRepository,
                },
            ],
        }).compile();

        commentService = module.get<CommentService>(CommentService);
    });

    describe('create', () => {
        it('댓글이 생성되어야 한다.', async () => {
            const createCommentDto: CreateCommentDto = { content: 'Test comment', questionId: 1 };
            const user = 4;
            const result = await commentService.create(createCommentDto, user);
            expect(result).toBe(undefined);
        });
    });
});
