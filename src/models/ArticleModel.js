import Model from './Model';

export default class ArticleModel extends Model {

  getTitle() {
    return this.get('title');
  }

  getDate() {
    return this.get('date');
  }

  getPath() {
    return this.get('path');
  }

  getText() {
    return this.get('text');
  }
}
