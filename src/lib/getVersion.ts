import { execSync } from 'child_process';

export function getGitVersion(): string {
  try {
    // Intenta obtener la última etiqueta
    const tag = execSync('git describe --tags --abbrev=0').toString().trim();
    return tag;
  } catch (error) {
    // Si no hay etiquetas, devuelve la versión por defecto
    return 'v0.1.0';
  }
}
