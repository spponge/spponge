import { setSeederFactory } from "typeorm-extension";
import { Categories } from "../entity/category.entites";

export default setSeederFactory(Categories, (faker) => {
  const category = new Categories();

  // '고정' 카테고리 값 배열
  const categories = ["교육, 학문", "컴퓨터통신", "게임", "엔터테인먼트, 예술", "생활", "건강", "사회, 정치", "경제", "여행", "스포츠, 레저", "쇼핑"];
  const selectedCategory = categories[faker.datatype.number({ min: 0, max: categories.length - 1 })];
  category.category = selectedCategory;

  return category;
});