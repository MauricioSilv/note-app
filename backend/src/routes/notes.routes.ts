import { Router } from 'express';
import Notes from '../models/Notes';

const notesRouter = Router();

const notes: Notes[] = [];

notesRouter.post('/', (request, response) => {
  const { title, describle, content } = request.body;

  const note = new Notes(title, describle, content);

  notes.push(note);

  return response.json(note);
});

export default notesRouter;
