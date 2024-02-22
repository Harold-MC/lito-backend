import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [
    CompanyModule,
    MikroOrmModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
  ],
})
export class AppModule {}
