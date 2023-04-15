import { setSeederFactory } from 'typeorm-extension';
import { Users } from '../entity/user.entities';
import { Tiers } from '../entity/tier.entities';

export default setSeederFactory(Users, faker => {
    const user = new Users();

    faker.locale = 'ko';

    user.email = faker.internet.email();
    user.password = faker.internet.password();
    user.point = faker.datatype.number({ min: 0, max: 1000 });
    user.nickName = faker.internet.userName();

    // Tier Entity와의 관계 설정
    const tier = new Tiers();
    tier.tierName = faker.animal.type();
    user.Tiers = tier;

    return user;
});
