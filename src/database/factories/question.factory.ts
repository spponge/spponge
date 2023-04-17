/*
import { setSeederFactory } from 'typeorm-extension';
import { Questions } from '../entity/question.entities';
import { Comments } from "../entity/comment.entities";
import { Users } from "../entity/user.entities";
import { QuestionLikes } from "../entity/questionLike.entities";

export default setSeederFactory(Questions, (faker) => {
  const question = new Questions();

  faker.locale = 'ko';

  question.title = faker.lorem.sentence();
  question.content = faker.lorem.paragraph();

  // 관계설정
  const user = new Users();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.point = faker.datatype.number({ min: 0, max: 1000 });
  user.nickName = faker.internet.userName();
  question.Users = user;

  return question;
})*/
