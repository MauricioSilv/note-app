import { Router } from 'express';
import NotesRepository from '../repositories/NotesRepository';

const notesRouter = Router();
const notesRepository = new NotesRepository();

notesRouter.post('/', (request, response) => {
  const { title, describle, content } = request.body;

  const note = notesRepository.create(title, describle, content);

  return response.json(note);
});

export default notesRouter;
