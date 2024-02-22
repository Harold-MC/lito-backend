import { Migration } from '@mikro-orm/migrations';

export class Migration20240222065944 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `companies` (`id` text not null, `name` text not null, `description` text not null, `image` text not null, primary key (`id`));');
  }

}
