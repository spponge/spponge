import { setSeederFactory } from 'typeorm-extension';
import { ReComments } from '../entity/recomment.entities';
import { Comments } from "../entity/comment.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(ReComments, (faker) => {
  const recomment = new ReComments();
  const comment = new Comments().getRandomComment();
  const user = new Users().getRandomUser();

  faker.locale = 'ko';

  recomment.content = faker.lorem.sentence();
  recomment.CommentId = comment[0].id;
  recomment.UserId = user[0].id;

  return recomment;
})
