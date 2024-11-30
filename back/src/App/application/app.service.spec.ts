import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

describe('AppService', () => {
    let service: AppService;
    let configService: ConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppService,
                {
                    provide: ConfigService,
                    useValue: {
                        get: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<AppService>(AppService);
        configService = module.get<ConfigService>(ConfigService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return the default port if no port is defined in config', () => {
        jest.spyOn(configService, 'get').mockReturnValue(undefined);
        expect(service.getPort()).toBe(3000);
    });

    it('should return the port from config if defined', () => {
        jest.spyOn(configService, 'get').mockReturnValue(4000);
        expect(service.getPort()).toBe(4000);
    });

    it('should return the API URL from config', () => {
        jest.spyOn(configService, 'get').mockReturnValue('http://api.example.com');
        expect(service.getApiURL()).toBe('http://api.example.com');
    });

    it('should throw an error if API URL is not defined', () => {
        jest.spyOn(configService, 'get').mockReturnValue(undefined);
        expect(() => service.getApiURL()).toThrow('API_URL is not defined');
    });

    it('should return the API key from config', () => {
        jest.spyOn(configService, 'get').mockReturnValue('my-api-key');
        expect(service.getApiKey()).toBe('my-api-key');
    });

    it('should throw an error if API key is not defined', () => {
        jest.spyOn(configService, 'get').mockReturnValue(undefined);
        expect(() => service.getApiKey()).toThrow('API_KEY is not defined');
    });
});