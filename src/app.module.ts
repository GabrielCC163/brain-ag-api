import { Module } from '@nestjs/common';
import { RuralProducersModule } from '@modules/rural-producer/rural-producers.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '@config/app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config as TypeOrmConfig } from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getConfig],
      cache: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...TypeOrmConfig, autoLoadEntities: true }),
    RuralProducersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
