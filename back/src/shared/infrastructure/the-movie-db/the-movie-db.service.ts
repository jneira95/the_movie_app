import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TheMovieDbService {
    private apiUrl: string;
    private apiKey: string;
    
    constructor(
        private configService: ConfigService,
    ) {
        const apiUrl = this.configService.get<string>('API_URL');
        const apiKey = this.configService.get<string>('API_KEY');

        if (!apiUrl) {
            throw new Error('API_URL is not defined');
        }

        if (!apiKey) {
            throw new Error('API_KEY is not defined');
        }

        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }
}
