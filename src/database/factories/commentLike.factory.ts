import { setSeederFactory } from 'typeorm-extension';
import { CommentLikes } from '../entity/commentLike.entities';
import { Comments } from "../entity/comment.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(CommentLikes, async (faker) => {
  const commentLike = new CommentLikes();
  const comment = await new Comments().getRandomComment();
  const user = await new Users().getRandomUser();

  commentLike.CommentId = comment.id;
  commentLike.UserId = user.id;

  return commentLike;
})
