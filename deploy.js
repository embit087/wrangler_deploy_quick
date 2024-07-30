// deploy.js
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));
const name = packageJson.name;

function createProject() {
  try {
    execSync(`wrangler pages project create ${name} --production-branch=production`, { stdio: 'inherit' });
  } catch (error) {
    console.log('Project already exists or there was an error creating it. Proceeding to deployment.');
  }
}

function deployProject() {
  execSync(`wrangler pages deploy ${path.resolve(__dirname)} --project-name ${name}`, { stdio: 'inherit' });
}

function main() {
  createProject();
  deployProject();
}

main();
