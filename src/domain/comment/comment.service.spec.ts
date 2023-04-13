/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { Comments } from 'src/entity/comment.entities';
import { CommentRepository } from './comment.repository.interface';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

class FakeCommentRepository implements CommentRepository {
    private readonly comments: Comments[] = [
        {
            id: 1,
            content: '댓글1',
            QuestionId: 1,
            UserId: 4,
            ReComments: [],
            Users: null,
            Questions: null,
            CommentLikes: null,
        },
        {
            id: 2,
            content: '댓글2',
            QuestionId: 1,
            UserId: 5,
            ReComments: [],
            Users: null,
            Questions: null,
            CommentLikes: null,
        },
        {
            id: 3,
            content: '댓글3',
            QuestionId: 2,
            UserId: 6,
            ReComments: [],
            Users: null,
            Questions: null,
            CommentLikes: null,
        },
    ];

    async create(createCommentDto: CreateCommentDto, userId: number): Promise<void> {}
    async findOne(commentId: number): Promise<Comments> {
        return this.comments.find(comment => comment.id === commentId);
    }
    async findAllByQuestionId(QuestionId: number): Promise<Comments[]> {
        return this.comments.filter(comment => comment.QuestionId === QuestionId);
    }
    async update(id: number, updateCommentDto: UpdateCommentDto, userId: number): Promise<void> {}
    async delete(id: number, userId: number): Promise<void> {}
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

    describe('update', () => {
        it('댓글이 수정되어야 한다.', async () => {
            const updateCommentDto: UpdateCommentDto = { content: 'Test comment' };
            const id = 1;
            const userId = 4;
            const result = await commentService.update(id, updateCommentDto, userId);
            expect(result).toBe(undefined);
        });
    });

    describe('delete', () => {
        it('댓글이 삭제되어야 한다.', async () => {
            const id = 1;
            const userId = 4;
            const result = await commentService.delete(id, userId);
            expect(result).toBe(undefined);
        });
    });
});
