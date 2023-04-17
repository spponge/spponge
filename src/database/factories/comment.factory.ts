import { setSeederFactory } from 'typeorm-extension';
import { Comments } from '../entity/comment.entities';
import { Questions } from "../entity/question.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(Comments, async (faker) => {
  const comment = new Comments();
  const question = new Questions().getRandomQuestion();
  const user = await new Users().getRandomUser();

  faker.locale = 'ko';
  comment.content = faker.lorem.sentence();
  comment.QuestionId = question[0].id;
  comment.UserId = user[0].id;

  return comment;
})
