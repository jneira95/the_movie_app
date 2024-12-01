import { Test, TestingModule } from '@nestjs/testing';
import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDbService', () => {
  let service: TheMovieDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheMovieDbService],
    }).compile();

    service = module.get<TheMovieDbService>(TheMovieDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
