import { setSeederFactory } from "typeorm-extension";
import { QuestionLikes } from "../entity/questionLike.entities";
import { Questions } from "../entity/question.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(QuestionLikes, async (faker) => {
  const questionLike = new QuestionLikes();
  const question = await new Questions().getRandomQuestion();
  const user = await new Users().getRandomUser();

  questionLike.QuestionId = question.id;
  questionLike.UserId = user.id;

  return questionLike;
});
