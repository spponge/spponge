import { setSeederFactory } from "typeorm-extension";
import { QuestionLikes } from "../entity/questionLike.entities";
import { Questions } from "../entity/question.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(QuestionLikes, async (faker) => {
  const questionLike = new QuestionLikes();
  const question = new Questions().getRandomQuestion();
  const user = await new Users().getRandomUser();

  questionLike.QuestionId = question[0].id;
  questionLike.UserId = user[0].id;

  return questionLike;
});
