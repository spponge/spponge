/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { Users } from 'src/entity/user.entities';
import { CreateUserDto } from './dto/input/create-user.dto';
import { UpdateUserDto } from './dto/input/update-user.dto';
import { VerifyUserEmailDto } from './dto/input/verify-user-email.dto';
import { IUserRepository } from './user.repository.interface';
import { UserService } from './user.service';

class FakeUserRepository implements IUserRepository {
    async create(createUserDto: CreateUserDto): Promise<void> {}
    async findUserByEmail(emailVerificationDto: VerifyUserEmailDto): Promise<Users> {
        return null;
    }
    async findUserByIdWithoutPassword(userId: number): Promise<Users> {
        const result = {
            id: 1,
            email: 'honggd@test.com',
            password: 'asdf1234!',
            point: 0,
            nickName: '홍지디',
            TierId: 1,
            Comments: null,
            ReComments: null,
            Questions: null,
            Tiers: null,
        };
        return result;
    }
    async updateNickName(updateUserDto: UpdateUserDto, UserId: number): Promise<void> {}
    async delete(UserId: number): Promise<void> {}
}

describe('UserService', () => {
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: IUserRepository,
                    useClass: FakeUserRepository,
                },
            ],
        }).compile();

        userService = module.get<UserService>(UserService);
    });

    describe('create', () => {
        it('새로운 회원 정보가 저장되어야 한다.', async () => {
            const createUserDto: CreateUserDto = {
                email: 'zxcvadsfzxv@example.com',
                password: 'asdf1234!',
                confirmPassword: 'asdf1234!',
                nickName: '테스트',
            };
            const result = await userService.create(createUserDto);
            expect(result).toBe(undefined);
        });
    });

    describe('findOne', () => {
        it('로그인한 회원의 정보가 조회되어야 한다.', async () => {
            const UserId = 1;
            const result = await userService.findOne(UserId);
            expect(result).toEqual({
                id: 1,
                email: 'honggd@test.com',
                password: 'asdf1234!',
                point: 0,
                nickName: '홍지디',
                TierId: 1,
                Comments: null,
                ReComments: null,
                Questions: null,
                Tiers: null,
            });
        });

        describe('updateNickNmae', () => {
            it('회원의 닉네임이 수정되어야 한다.', async () => {
                const updateUserDto: UpdateUserDto = { nickName: '길똥이' };
                const UserId = 1;
                const result = await userService.updateNickNmae(updateUserDto, UserId);
                expect(result).toBe(undefined);
            });
        });

        describe('delete', () => {
            it('회원이 탈퇴되어야 한다.', async () => {
                const UserId = 1;
                const result = await userService.delete(UserId);
                expect(result).toBe(undefined);
            });
        });
    });
});
