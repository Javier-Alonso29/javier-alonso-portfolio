
import type { DesignPattern } from '../types/DesignPattern';

const GITHUB_API_URL = 'https://api.github.com';
const REPO_OWNER = 'Javier-Alonso29';
const REPO_NAME = 'typescript_design_patterns';

// Función para decodificar base64 con soporte para UTF-8
function base64DecodeUnicode(str: string) {
    // Convertir base64 a raw binary data como UTF-8
    const binaryStr = atob(str);
    // Convertir raw binary a array de bytes
    const bytes = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
    }
    // Decodificar array de bytes como UTF-8
    return new TextDecoder('utf-8').decode(bytes);
}

export async function fetchDesignPatterns(): Promise<DesignPattern[]> {
    try {
        // Obtener todos los archivos del repositorio
        const response = await fetch(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/main?recursive=1`);
        const data = await response.json();
        
        // Filtrar archivos markdown (excluyendo README.md)
        const markdownFiles = data.tree
            .filter((item: any) => item.path.endsWith('.md'))
            .filter((item: any) => item.path !== 'README.md');

        // Obtener el contenido de cada archivo markdown y su correspondiente archivo .ts
        const patterns = await Promise.all(
            markdownFiles.map(async (file: any) => {
                // Obtener contenido del markdown
                const contentResponse = await fetch(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${file.path}`);
                const contentData = await contentResponse.json();
                const content = base64DecodeUnicode(contentData.content);

                // Extraer el tipo de patrón del path (e.g., 'Creationals/Factory' -> 'Creational')
                const type = file.path.split('/')[0];

                // Extraer el título y descripción del contenido markdown
                const lines = content.split('\n');
                const title = lines[0].replace('# ', '');
                const description = lines.find(line => line && !line.startsWith('#'))?.trim() || '';

                // Obtener el directorio del archivo markdown
                const directory = file.path.split('/').slice(0, -1).join('/');

                // Buscar archivos .ts en el mismo directorio
                const tsFiles = data.tree.filter((item: any) => 
                    item.path.startsWith(directory) && 
                    item.path.endsWith('.ts')
                );

                // Si existe algún archivo .ts, obtener su URL
                let codeUrl = '';
                if (tsFiles.length > 0) {
                    const tsResponse = await fetch(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${tsFiles[0].path}`);
                    const tsData = await tsResponse.json();
                    codeUrl = tsData.html_url;
                }

                return {
                    title,
                    description,
                    codeUrl,
                    path: file.path,
                    type,
                    lastModified: contentData.last_modified,
                    githubUrl: contentData.html_url
                };
            })
        );

        return patterns;
    } catch (error) {
        console.error('Error fetching design patterns:', error);
        return [];
    }
}
