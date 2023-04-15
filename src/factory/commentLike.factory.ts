import { setSeederFactory } from 'typeorm-extension';
import { CommentLikes } from '../entity/commentLike.entites';
import { Comments } from "../entity/comment.entites";
import { Users } from "../entity/user.entites";

export default setSeederFactory(CommentLikes, (faker) => {
  const commentLike = new CommentLikes();

  faker.locale = 'ko';

  // 관계설정
  const comment = new Comments();
  comment.comment = faker.lorem.sentence();
  commentLike.Comments = comment;

  // const user = new Users();
  // user.email = faker.internet.email();
  // user.password = faker.internet.password();
  // user.point = faker.datatype.number({ min: 0, max: 1000 });
  // user.nickName = faker.internet.userName();
  // commentLike.Users = user;

  return commentLike;
})