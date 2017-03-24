export class Project {
  id: number;
  title: { type: String, required: true, unique: true };
  category: { type: String, default: 'design', required: true };
  link: { type: String, required: true };
  thumbnail_url: { type: String, required: true };
  blurb: { type: String, required: true };
  content: { type: String, required: true };


    constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}

