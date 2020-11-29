import { Router } from 'express';
import NotesRepository from '../repositories/NotesRepository';
import CreateNoteService from '../services/CreateNoteService';

const notesRouter = Router();
const notesRepository = new NotesRepository();

notesRouter.get('/', (request, response) => {
  const notes = notesRepository.all();

  return response.json(notes);
});

notesRouter.post('/', (request, response) => {
  try {
    const { title, describle, content } = request.body;

    const createNotes = new CreateNoteService(notesRepository);

    const note = createNotes.execute({
      title,
      describle,
      content,
    });

    return response.json(note);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default notesRouter;
