import { setSeederFactory } from 'typeorm-extension';
import { Tiers } from '../entity/tier.entites';

export default setSeederFactory(Tiers, (faker) => {
  const tier = new Tiers();

  faker.locale = 'ko';
  tier.tierName = faker.animal.type();

  return tier;
})