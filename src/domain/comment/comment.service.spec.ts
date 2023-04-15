/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { Comments } from 'src/entity/comment.entities';
import { ICommentRepository } from './comment.repository.interface';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

class FakeCommentRepository implements ICommentRepository {
    async create(createCommentDto: CreateCommentDto, UserId: number): Promise<void> {}
    async findOne(CommentId: number): Promise<Comments> {
        const result = {
            id: 1,
            content: '댓글1',
            QuestionId: 1,
            UserId: 4,
            ReComments: [],
            Users: null,
            Questions: null,
            CommentLikes: null,
        };
        return result;
    }
    async findAllByQuestionId(QuestionId: number): Promise<Comments[]> {
        const result = [
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
        ];
        return result;
    }
    async update(CommentId: number, updateCommentDto: UpdateCommentDto, UserId: number): Promise<void> {}
    async delete(CommentId: number, UserId: number): Promise<void> {}
}

describe('CommentService', () => {
    let commentService: CommentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommentService,
                {
                    provide: ICommentRepository,
                    useClass: FakeCommentRepository,
                },
            ],
        }).compile();

        commentService = module.get<CommentService>(CommentService);
    });

    describe('create', () => {
        it('댓글이 생성되어야 한다.', async () => {
            const createCommentDto: CreateCommentDto = { content: 'Test comment', QuestionId: 1 };
            const UserId = 4;
            const result = await commentService.create(createCommentDto, UserId);
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
                    ReComments: [],
                    Users: null,
                    Questions: null,
                    // CommentLikes: null,
                },
                {
                    id: 2,
                    content: '댓글2',
                    QuestionId: 1,
                    UserId: 5,
                    ReComments: [],
                    Users: null,
                    Questions: null,
                    // CommentLikes: null,
                },
            ]);
        });
    });

    describe('update', () => {
        it('댓글이 수정되어야 한다.', async () => {
            const updateCommentDto: UpdateCommentDto = { content: 'Test comment' };
            const CommentId = 1;
            const UserId = 4;
            const result = await commentService.update(CommentId, updateCommentDto, UserId);
            expect(result).toBe(undefined);
        });
    });

    describe('delete', () => {
        it('댓글이 삭제되어야 한다.', async () => {
            const id = 1;
            const UserId = 4;
            const result = await commentService.delete(id, UserId);
            expect(result).toBe(undefined);
        });
    });
});
