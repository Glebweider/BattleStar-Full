import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
    getLatestVersion(): { version: string, lastUpdate: string } {
        const filePath = path.resolve(__dirname, '..', 'version.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const version = JSON.parse(fileContents);
        return version;
    }

}
