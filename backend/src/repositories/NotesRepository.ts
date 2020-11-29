import Notes from '../models/Notes';
// Data Transfer Object
interface CreateNoteDTO {
  title: string;
  describle: string;
  content: string;
}

class NotesRepository {
  private notes: Notes[];

  constructor() {
    this.notes = [];
  }

  public all(): Notes[] {
    return this.notes;
  }

  public create({ title, describle, content }: CreateNoteDTO): Notes {
    const note = new Notes({ title, describle, content });

    this.notes.push(note);

    return note;
  }
}

export default NotesRepository;
