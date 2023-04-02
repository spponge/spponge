/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { Comments } from 'src/entity/comment.entities';
import { CommentRepository } from './comment.repository.interface';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/input/create-comment.dto';

class FakeCommentRepository implements CommentRepository {
    private readonly comments: Comments[] = [
        {
            id: 1,
            content: '댓글1',
            QuestionId: 1,
            UserId: 4,
            Replies: [],
            Users: null,
            Questions: null,
        },
        {
            id: 2,
            content: '댓글2',
            QuestionId: 1,
            UserId: 5,
            Replies: [],
            Users: null,
            Questions: null,
        },
        {
            id: 3,
            content: '댓글3',
            QuestionId: 2,
            UserId: 6,
            Replies: [],
            Users: null,
            Questions: null,
        },
    ];

    async create(createCommentDto: CreateCommentDto, userId: number): Promise<void> {}

    async findAllByQuestionId(QuestionId: number): Promise<Comments[]> {
        return this.comments.filter(comment => comment.QuestionId === QuestionId);
    }
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

    describe('findAllByQuestionId', () => {
        it('해당하는 질문의 모든 댓글들을 가져와야 한다.', async () => {
            const QuestionId = 1;
            const result = await commentService.findAllByQuestionId(QuestionId);
            expect(result).toEqual([
                {
                    id: 1,
                    content: '댓글1',
                    QuestionId: 1,
                    UserId: 4,
                    Replies: [],
                    Users: null,
                    Questions: null,
                },
                {
                    id: 2,
                    content: '댓글2',
                    QuestionId: 1,
                    UserId: 5,
                    Replies: [],
                    Users: null,
                    Questions: null,
                },
            ]);
        });
    });
});
