import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Company } from '../database/entities/company.entity';
import { CompanyService } from './company.service';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findCompanies() {
    return this.companyService.findAllAsync();
  }

  @Get('popular')
  findPopularCompanies() {
    return this.companyService.findPopularCompanies();
  }

  @Delete(':id')
  removeCompany(@Param('id') id: string) {
    return this.companyService.removeAsync(id);
  }

  @Put(':id')
  updateCompany(@Param('id') id: string, @Body() model: Company) {
    return this.companyService.updateAsync(id, model);
  }

  @Post()
  insertCompany(@Body() model: Company) {
    return this.companyService.addAsync(model);
  }
}