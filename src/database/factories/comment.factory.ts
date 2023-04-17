/*
import { setSeederFactory } from 'typeorm-extension';
import { Comments } from '../entity/comment.entities';
import { Questions } from "../entity/question.entities";
import { Users } from "../entity/user.entities";

export default setSeederFactory(Comments, (faker) => {
  const comment = new Comments();

  faker.locale = 'ko';
  comment.comment = faker.lorem.sentence();

  // Question Entity와의 관계 설정
  const question = new Questions();
  question.title = faker.lorem.sentence();
  question.content = faker.lorem.paragraph();
  comment.Questions = question;

  // User Entity와의 관계 설정
  const user = new Users();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.point = faker.datatype.number({ min: 0, max: 1000 });
  user.nickName = faker.internet.userName();
  comment.Users = user;

  return comment;
})*/
