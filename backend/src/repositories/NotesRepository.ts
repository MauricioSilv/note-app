import Notes from '../models/Notes';

class NotesRepository {
  private notes: Notes[];

  constructor() {
    this.notes = [];
  }

  public all(): Notes[] {
    return this.notes;
  }

  public create(title: string, describle: string, content: string): Notes {
    const note = new Notes(title, describle, content);

    this.notes.push(note);

    return note;
  }
}

export default NotesRepository;
