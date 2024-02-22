import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Company } from '../database/entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [
    MikroOrmModule.forFeature([Company]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}