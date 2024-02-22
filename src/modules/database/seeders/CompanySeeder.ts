import type { EntityManager } from '@mikro-orm/sqlite';
import { Seeder } from '@mikro-orm/seeder';
import { Company } from '../entities/company.entity';

export class CompanySeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const companies = [
      {
        name: 'Angloamericana de Seguros, S. A.',
        description: 'Av. Gustavo Mejía Ricart No. 8,',
        image: 'http://www.angloamericana.com.do/wp-content/uploads/2022/11/Logo-1.png',
      },
      {
        name: 'Aseguradora Agropecuaria Dominicana, S.A.',
        description: '(AGRODOSA)',
        image: 'https://i0.wp.com/agricultura.gob.do/wp-content/uploads/2020/09/LOGO-DE-AGRODOSA.jpg',
      },
      {
        name: 'Atlántica Seguros, S.A.',
        description: 'Av. Roberto Pastoriza No. 315,',
        image: 'https://www.atlantica.do/wp-content/uploads/2018/10/atlantica-seguros-logo.png',
      },
      {
        name: 'Compañía Dominicana de Seguros, S.A.',
        description: 'Av. Nuñez de Cáceres No. 12, ',
        image: 'http://www.angloamericana.com.do/wp-content/uploads/2022/11/Logo-1.png',
      },
      {
        name: 'Confederación del Canada Dominicana, S.A.',
        description: 'Av. Nuñez de Cáceres No. 12, ',
        image: 'http://confedom.com/media/15obmyuy/logoluconfedom.png',
      },
      {
        name: 'Angloamericana de Seguros 2',
        description: 'Av. Gustavo Mejía Ricart No. 8,',
        image: 'http://www.angloamericana.com.do/wp-content/uploads/2022/11/Logo-1.png',
      },
      {
        name: 'Aseguradora Agropecuaria Dominicana 2',
        description: '(AGRODOSA)',
        image: 'https://i0.wp.com/agricultura.gob.do/wp-content/uploads/2020/09/LOGO-DE-AGRODOSA.jpg',
      },
      {
        name: 'Atlántica Seguros, S.A 2',
        description: 'Av. Roberto Pastoriza No. 315,',
        image: 'https://www.atlantica.do/wp-content/uploads/2018/10/atlantica-seguros-logo.png',
      },
      {
        name: 'Compañía Dominicana de Seguros, S.A 2',
        description: 'Av. Nuñez de Cáceres No. 12, ',
        image: 'http://www.angloamericana.com.do/wp-content/uploads/2022/11/Logo-1.png',
      },
      {
        name: 'Confederación del Canada Dominicana, S.A 2',
        description: 'Av. Nuñez de Cáceres No. 12, ',
        image: 'http://confedom.com/media/15obmyuy/logoluconfedom.png',
      },
    ];

    companies.forEach((company) => {
      em.create(Company, company);
    });
  }
}
