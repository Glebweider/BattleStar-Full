import { Injectable } from '@nestjs/common';
const os = require('os')

@Injectable()
export class StatsService {
    async Stats(){
        let TotalMem = Math.trunc(os.totalmem() / 1024 / 1024);
        let FreeMem = Math.trunc(os.freemem() / 1024 / 1024 / TotalMem * 100);
        return {
            "TotalMemory": `${TotalMem}MB`,
            "FreeMemory": `${FreeMem}%`,
            "UpTime": os.uptime() / 60,
            "LoadAvg": os.loadavg(),
            "Platform": os.platform(),
            "NetInterface": os.networkInterfaces(),
            "Cpus": os.cpus(),
        }
    }
}
