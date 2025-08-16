import express from 'express';
import path from 'path';
import mustache from 'mustache-express';
import router from './routes';

const app = express();

// paths seguros tanto local quanto na Vercel
const VIEWS = path.join(process.cwd(), 'src', 'views');
const PUBLIC = path.join(process.cwd(), 'public');

app.set('view engine', 'mustache');
app.set('views', VIEWS);
app.engine('mustache', mustache());

app.use(express.static(PUBLIC));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// suas rotas
app.use(router);

export default app;
