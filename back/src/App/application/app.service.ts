import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  private defaultPort = 3000;

  getPort(): number {
    return this.configService.get<number>('port') || this.defaultPort;
  }

  getApiURL(): string {
    const apiUrl = this.configService.get<string>('API_URL');

    if (!apiUrl) {
      throw new Error('API_URL is not defined');
    }

    return apiUrl;
  }

  getApiKey(): string {
    const apiKey = this.configService.get<string>('API_KEY');

    if (!apiKey) {
      throw new Error('API_KEY is not defined');
    }

    return apiKey;
  }
}
