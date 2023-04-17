import { setSeederFactory } from 'typeorm-extension';
import { Tiers } from '../entity/tier.entities';

export default setSeederFactory(Tiers, (faker) => {
  const tier = new Tiers();

  const tiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster', 'Challenger', 'Legend', 'Immortal'];
  tier.tierName = tiers[faker.datatype.number({ min: 0, max: tiers.length - 1 })];

  return tier;
})