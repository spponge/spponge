import { setSeederFactory } from 'typeorm-extension';
import { ReComments } from '../entity/recomment.entities';
import { Comments } from '../entity/comment.entities';

export default setSeederFactory(ReComments, faker => {
    const recomment = new ReComments();

    faker.locale = 'ko';

    recomment.content = faker.lorem.sentence();

    const comment = new Comments();
    comment.content = faker.lorem.sentence();
    recomment.Comments = comment;

    return recomment;
});
