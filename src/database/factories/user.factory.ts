import { setSeederFactory } from 'typeorm-extension';
import { Users } from '../entity/user.entities';
import { Tiers } from "../entity/tier.entities";

export default setSeederFactory(Users, (faker) => {
  const user = new Users();
  user.password = faker.internet.password();
  user.point = faker.datatype.number({ min: 0, max: 1000 });
  user.nickName = faker.helpers.unique(faker.internet.userName);
  user.email = faker.internet.email(user.nickName);
  user.TierId = Number(faker.random.numeric(1));

  // // Tier Entity와의 관계 설정
  // const tier = new Tiers();
  // // tier.tierName = faker.animal.type();
  // user.TierId = tier.id;

  return user;
})