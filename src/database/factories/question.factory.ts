import { setSeederFactory } from 'typeorm-extension';
import { Questions } from '../entity/question.entities';
import { Users } from "../entity/user.entities";

export default setSeederFactory(Questions, async (faker) => {
  const question = new Questions();
  const user = await new Users().getRandomUser();

  faker.locale = 'ko';

  question.title = faker.lorem.sentence();
  question.content = faker.lorem.paragraph();

  // 관계설정
  question.UserId = user[0].id;

  return question;
})
