import { setSeederFactory } from 'typeorm-extension';
import { ReComments } from '../entity/recomment.entites';
import { Comments } from "../entity/comment.entites";

export default setSeederFactory(ReComments, (faker) => {
  const recomment = new ReComments();

  faker.locale = 'ko';

  recomment.comment = faker.lorem.sentence();

  const comment = new Comments();
  comment.comment = faker.lorem.sentence();
  recomment.Comments = comment;

  return recomment;
})