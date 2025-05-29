import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Necesario para __filename
import { dirname } from 'path';     // Necesario para __dirname

// Recrear __filename y __dirname para entornos ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Iniciando el script de corrección de datos del Tarot...");

// --- Parte 1: Actualizar traditionalMeanings.ts ---
const traditionalMeaningsPath = path.join(__dirname, 'src', 'data', 'traditionalMeanings.ts');

fs.readFile(traditionalMeaningsPath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error al leer ${traditionalMeaningsPath}:`, err);
        return;
    }

    console.log(`Leyendo: ${traditionalMeaningsPath}`);
    let updatedMeaningsData = data;

    // Regla 1: Añadir '-de-' a IDs de cartas menores que lo necesiten
    const minorArcanaIdPattern = /(id:\s*")((as|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|sota|caballero|reina|rey)-)(bastos|copas|espadas|oros)(")/g;

    updatedMeaningsData = updatedMeaningsData.replace(minorArcanaIdPattern, (match, p1, p2, p3, p4, p5) => {
        return `<span class="math-inline">\{p1\}</span>{p3}-de-<span class="math-inline">\{p4\}</span>{p5}`;
    });
    console.log("Corrección de IDs de arcanos menores en traditionalMeanings.ts aplicada.");


    // Regla 2: Cambiar "los-enamorados" a "los-amantes" en IDs
    updatedMeaningsData = updatedMeaningsData.replace(/(id:\s*")los-enamorados(")/g, '$1los-amantes$2');
    console.log("Cambio de ID 'los-enamorados' a 'los-amantes' en traditionalMeanings.ts aplicado.");

    // Regla 3: Cambiar "Los Enamorados" a "Los Amantes" en nombres
    updatedMeaningsData = updatedMeaningsData.replace(/(nombre:\s*")Los Enamorados(")/g, '$1Los Amantes$2');
    console.log("Cambio de nombre 'Los Enamorados' a 'Los Amantes' en traditionalMeanings.ts aplicado.");

    fs.writeFile(traditionalMeaningsPath, updatedMeaningsData, 'utf8', (err) => {
        if (err) {
            console.error(`Error al escribir ${traditionalMeaningsPath}:`, err);
        } else {
            console.log(`¡${traditionalMeaningsPath} actualizado exitosamente!`);
        }
    });
});

// --- Parte 2: Actualizar cardNames.ts ---
const cardNamesPath = path.join(__dirname, 'src', 'data', 'cardNames.ts');

fs.readFile(cardNamesPath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error al leer ${cardNamesPath}:`, err);
        return;
    }

    console.log(`Leyendo: ${cardNamesPath}`);
    let updatedCardNamesData = data;

    // Cambiar "los-enamorados" a "los-amantes" en IDs de cardNames
    updatedCardNamesData = updatedCardNamesData.replace(/(id: 'los-enamorados', name: ')(Los Enamorados)(')/g, "id: 'los-amantes', name: 'Los Amantes'");
    console.log("Cambio de ID y nombre 'Los Enamorados' a 'Los Amantes' en cardNames.ts aplicado.");

    fs.writeFile(cardNamesPath, updatedCardNamesData, 'utf8', (err) => {
        if (err) {
            console.error(`Error al escribir ${cardNamesPath}:`, err);
        } else {
            console.log(`¡${cardNamesPath} actualizado exitosamente!`);
        }
    });
});

console.log("Proceso de script finalizado. Revisa los archivos para confirmar los cambios.");