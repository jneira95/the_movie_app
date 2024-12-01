import { Module } from '@nestjs/common';
import { TheMovieDbService } from './infrastructure/the-movie-db/the-movie-db.service';

@Module({
  providers: [TheMovieDbService],
})
export class SharedModule {}
