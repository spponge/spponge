import { setSeederFactory } from "typeorm-extension";
import { QuestionLikes } from "../entity/questionLike.entites";
import { Questions } from "../entity/question.entites";
import { Users } from "../entity/user.entites";

export default setSeederFactory(QuestionLikes, (faker) => {
  const questionLike = new QuestionLikes();

  faker.locale = "ko";

  // 관계설정
  const question = new Questions();
  question.title = faker.lorem.sentence();
  question.content = faker.lorem.paragraph();
  questionLike.Questions = question;

  // const user = new Users();
  // user.email = faker.internet.email();
  // user.password = faker.internet.password();
  // user.point = faker.datatype.number({ min: 0, max: 1000 });
  // user.nickName = faker.internet.userName();
  // questionLike.Users = user;

  return questionLike;
});