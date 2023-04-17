import { setSeederFactory } from 'typeorm-extension';
import { ReComments } from '../entity/recomment.entities';
import { Comments } from "../entity/comment.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(ReComments, async (faker) => {
  const reComment = new ReComments();
  const comment = await new Comments().getRandomComment();
  const user = await  new Users().getRandomUser();

  faker.locale = 'ko';

  reComment.content = faker.lorem.sentence();
  reComment.CommentId = comment.id;
  reComment.UserId = user.id;

  return reComment;
})
