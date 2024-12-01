import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SharedModule,
  ],
  controllers: [],
  providers: [SharedModule],
})
export class AppModule {}
