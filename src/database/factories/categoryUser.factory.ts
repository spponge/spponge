import { setSeederFactory } from 'typeorm-extension';
import { CategoryUsers } from '../entity/categoryUser.entities';
import { Users } from "../entity/user.entities";
import { Categories } from "../entity/category.entities";

export default setSeederFactory(CategoryUsers, async (faker) => {
  const categoryUser = new CategoryUsers();
  const user = await new Users().getRandomUser();
  const category = await new Categories().getRandomCategory();

  // 관계설정
  categoryUser.UserId =  user[0].id
  category.category = category[0].id

  return categoryUser;
})
