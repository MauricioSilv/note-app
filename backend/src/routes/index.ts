import { Router } from 'express';
import notesRouter from './notes.routes';

const routes = Router();

routes.use('/notes', notesRouter);

export default routes;
