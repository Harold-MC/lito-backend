import {  Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity({ collection: 'companies' })
export class Company  {
  @PrimaryKey({ type: 'uuid' })
  id: string = v4();

  @Property()
  name: string;

  @Property({ type: 'TEXT' })
  description: string;

  @Property()
  image: string;

}
