import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: process.cwd() + '/public',
      // exclude: ['/api*'],
    }),

    MongooseModule.forRoot('mongodb://pokemon:pokemon@localhost:2300/nest-pokemon'),

    PokemonModule,

    CommonModule,
  ],
})
export class AppModule {



}
