import { setSeederFactory } from 'typeorm-extension';
import { Users } from '../entity/user.entities';
import { Tiers } from "../entity/tier.entities";

export default setSeederFactory(Users, async (faker) => {
  const user = new Users();
  const tier = await new Tiers().getRandomTier();
  user.password = faker.internet.password();
  user.point = faker.datatype.number({ min: 0, max: 1000 });
  user.nickName = faker.helpers.unique(faker.internet.userName);
  user.email = faker.internet.email(user.nickName);
  user.TierId = tier.id;

  return user;
})
