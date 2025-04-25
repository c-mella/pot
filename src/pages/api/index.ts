import express from 'express';
import path from 'path';
import projectsRouter from '../../projects';

const app = express();

app.use('/api', projectsRouter);

// Serve static thumbnails
const staticPath = path.resolve(__dirname, '../projects');
app.use('/static', express.static(staticPath));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});