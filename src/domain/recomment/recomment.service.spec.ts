/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';
import { ReCommentRepository } from './recomment.repository.interface';
import { ReCommentService } from './recomment.service';

class FakeReCommentRepository implements ReCommentRepository {
    private readonly recomments: ReComments[] = [
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
        {
            id: 3,
            content: '대댓글3',
            CommentId: 2,
            UserId: 7,
            Users: null,
            Comments: null,
        },
    ];

    async create(createReCommentDto: CreateReCommentDto, userId: number): Promise<void> {}
    async findOne(recommentId: number): Promise<ReComments> {
        return this.recomments.find(recomment => recomment.id === recommentId);
    }
    async findAllByCommentId(CommentId: number): Promise<ReComments[]> {
        return this.recomments.filter(recomment => recomment.CommentId === CommentId);
    }
    async update(id: number, updateReCommentDto: UpdateReCommentDto, userId: number): Promise<void> {}
    async delete(id: number, userId: number): Promise<void> {}
}

describe('ReCommentService', () => {
    let recommentService: ReCommentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ReCommentService,
                {
                    provide: ReCommentRepository,
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
            const userId = 1;
            const result = await recommentService.create(createReCommentDto, userId);
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
            const id = 1;
            const UserId = 2;
            const result = await recommentService.update(id, updateReCommentDto, UserId);
            expect(result).toBe(undefined);
        });
    });

    describe('delete', () => {
        it('대댓글이 삭제되어야 한다.', async () => {
            const id = 1;
            const UserId = 2;
            const result = await recommentService.delete(id, UserId);
            expect(result).toBe(undefined);
        });
    });
});
