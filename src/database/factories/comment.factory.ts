import { setSeederFactory } from 'typeorm-extension';
import { Comments } from '../entity/comment.entities';
import { Questions } from "../entity/question.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(Comments, async (faker) => {
  const comment = new Comments();
  const question = await new Questions().getRandomQuestion();
  const user = await new Users().getRandomUser();

  faker.locale = 'ko';
  comment.content = faker.lorem.sentence();
  comment.QuestionId = question.id;
  comment.UserId = user.id;

  return comment;
})
