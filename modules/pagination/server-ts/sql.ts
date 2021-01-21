import { knex } from '@gqlapp/database-server-ts';

export default class Pagination {
  public paginations() {
    return knex.select();
  }
}
