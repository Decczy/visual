import fs from 'fs/promises';
import path from 'path';

export function readFile(pathName: string){
    return fs.readFile(pathName, {encoding: 'utf-8'})
}