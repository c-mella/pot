import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const getProjectNameFromIndex = (indexPath: string): string | null => {
  if (!fs.existsSync(indexPath)) return null;

  const content = fs.readFileSync(indexPath, 'utf-8');
  const match = content.match(/export\s+const\s+projectName\s*=\s*['"`](.+?)['"`]/);

  return match ? match[1] : null;
};

const getProjectsFromFolder = (
  baseDir: string,
  status: 'active' | 'archived'
) => {
  const fullDir = path.resolve(baseDir, status);
  if (!fs.existsSync(fullDir)) return [];

  return fs.readdirSync(fullDir).map((dir) => {
    const projectPath = path.join(fullDir, dir);
    const indexPath = path.join(projectPath, 'index.tsx');
    const name = getProjectNameFromIndex(indexPath);
    if (!name) return null;

    return {
      name,
      thumbnail: `/static/${status}/${dir}/thumbnail.png`,
      status,
      slug: `${status}/${dir}`,
    };
  }).filter(Boolean);
};

router.get('/projects', (req, res) => {
  const basePath = path.resolve(__dirname, '../../projects');
  const activeProjects = getProjectsFromFolder(basePath, 'active');
  const archivedProjects = getProjectsFromFolder(basePath, 'archived');

  res.json([...activeProjects, ...archivedProjects]);
});

export default router;