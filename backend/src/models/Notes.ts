import { v4 as uuid } from 'uuid';

class Notes {
  id: string;

  title: string;

  describle: string;

  content: string;

  constructor({ title, describle, content }: Omit<Notes, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.describle = describle;
    this.content = content;
  }
}

export default Notes;
