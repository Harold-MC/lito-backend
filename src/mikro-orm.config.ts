import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Company } from './modules/database/entities/company.entity';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';

export default {
  metadataProvider: TsMorphMetadataProvider,
  entities: [Company],
  extensions: [Migrator, SeedManager],
  debug: false,
  logger: console.log.bind(console),
  type: process.env.MIKRO_ORM_TYPE,
  dbName: process.env.MIKRO_ORM_DB_NAME,
  migrations: {
    path: 'src/modules/database/migrations',
  },
  seeder: {
    path: 'src/modules/database/seeders',
  },
};
