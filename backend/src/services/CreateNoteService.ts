import Notes from '../models/Notes';
import NotesRepository from '../repositories/NotesRepository';
// DTO
interface Request {
  title: string;
  describle: string;
  content: string;
}

class CreateNoteService {
  private notesRepository: NotesRepository;

  constructor(notesRepository: NotesRepository) {
    this.notesRepository = notesRepository;
  }

  public execute({ title, describle, content }: Request): Notes {
    const note = this.notesRepository.create({
      title,
      describle,
      content,
    });

    return note;
  }
}

export default CreateNoteService;
