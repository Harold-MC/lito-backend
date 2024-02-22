import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/sqlite';
import { Company } from '../database/entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: EntityRepository<Company>,
    private readonly em: EntityManager,
  ) {}

  async findAllAsync() {
    return await this.companyRepository.findAll();
  }

  async findPopularCompanies() {
    // NOTE: for this example, the most popular companies are the first 6
    return await this.companyRepository.findAll({ limit: 6 });
  }

  async removeAsync(id: string) {
    return await this.companyRepository.nativeDelete({ id });
  }

  async updateAsync(id: string, model: Company) {

      const updatable = this.companyRepository.merge(model)

      await this.companyRepository.nativeUpdate({ id }, updatable);
    
  }

  async addAsync(model: Company) {

    const insertable = new Company()

    // we can use automapper here
    insertable.description = model.description
    insertable.image = model.image
    insertable.name = model.name

    await this.em.persistAndFlush(insertable)
  
}
}
