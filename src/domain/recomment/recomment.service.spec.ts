/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';
import { IReCommentRepository } from './recomment.repository.interface';
import { ReCommentService } from './recomment.service';

class FakeReCommentRepository implements IReCommentRepository {
    async create(createReCommentDto: CreateReCommentDto, UserId: number): Promise<void> {}
    async findOne(ReCommentId: number): Promise<ReComments> {
        const result = {
            id: 1,
            content: '대댓글1',
            CommentId: 1,
            UserId: 2,
            Users: null,
            Comments: null,
        };
        return result;
    }
    async findAllByCommentId(CommentId: number): Promise<ReComments[]> {
        const result = [
            {
                id: 1,
                content: '대댓글1',
                CommentId: 1,
                UserId: 2,
                Users: null,
                Comments: null,
            },
            {
                id: 2,
                content: '대댓글2',
                CommentId: 1,
                UserId: 5,
                Users: null,
                Comments: null,
            },
        ];
        return result;
    }
    async update(ReCommentId: number, updateReCommentDto: UpdateReCommentDto, UserId: number): Promise<void> {}
    async delete(ReCommentId: number, UserId: number): Promise<void> {}
}

describe('ReCommentService', () => {
    let recommentService: ReCommentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ReCommentService,
                {
                    provide: IReCommentRepository,
                    useClass: FakeReCommentRepository,
                },
            ],
        }).compile();

        recommentService = module.get<ReCommentService>(ReCommentService);
    });

    describe('create', () => {
        it('대댓글이 생성되어야 한다.', async () => {
            const createReCommentDto: CreateReCommentDto = {
                content: 'Test recomment',
                CommentId: 1,
            };
            const UserId = 1;
            const result = await recommentService.create(createReCommentDto, UserId);
            expect(result).toBe(undefined);
        });
    });

    describe('findAllByCommentId', () => {
        it('해당하는 댓글의 모든 대댓글들을 가져와야 한다.', async () => {
            const CommentId = 1;
            const result = await recommentService.findAllByCommentId(CommentId);
            expect(result).toEqual([
                {
                    id: 1,
                    content: '대댓글1',
                    CommentId: 1,
                    UserId: 2,
                    Users: null,
                    Comments: null,
                },
                {
                    id: 2,
                    content: '대댓글2',
                    CommentId: 1,
                    UserId: 5,
                    Users: null,
                    Comments: null,
                },
            ]);
        });
    });

    describe('update', () => {
        it('대댓글이 수정되어야 한다.', async () => {
            const updateReCommentDto: UpdateReCommentDto = { content: '대댓글을 수정했어요.' };
            const ReCommentId = 1;
            const UserId = 2;
            const result = await recommentService.update(ReCommentId, updateReCommentDto, UserId);
            expect(result).toBe(undefined);
        });
    });

    describe('delete', () => {
        it('대댓글이 삭제되어야 한다.', async () => {
            const ReCommentId = 1;
            const UserId = 2;
            const result = await recommentService.delete(ReCommentId, UserId);
            expect(result).toBe(undefined);
        });
    });
});
