import { setSeederFactory } from 'typeorm-extension';
import { CategoryUsers } from '../entity/categoryUser.entities';
import { Users } from "../entity/user.entities";
import { Categories } from "../entity/category.entities";

export default setSeederFactory(CategoryUsers, (faker) => {
  const categoryUser = new CategoryUsers();

  // faker.locale = 'ko';
  //
  // // 관계설정
  // const user = new Users();
  // user.email = faker.internet.email();
  // user.password = faker.internet.password();
  // user.point = faker.datatype.number({ min: 0, max: 1000 });
  // user.nickName = faker.internet.userName();
  // categoryUser.Users = user;

  const category = new Categories();
  // 랜덤 카테고리 값 배열
  const categories = ["교육, 학문", "컴퓨터통신", "게임", "엔터테인먼트, 예술", "생활", "건강", "사회, 정치", "경제", "여행", "스포츠, 레저", "쇼핑"];
  category.category = categories[faker.datatype.number({ min: 0, max: categories.length - 1 })];

  return categoryUser;
})
