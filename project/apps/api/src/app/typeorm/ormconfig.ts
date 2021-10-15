import { ConnectionOptions } from 'typeorm';
import * as entities from './entities';

const TypeOrmOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  migrationsRun: true,
  entities: Object.values(entities),
  migrations: [__dirname + '/migrations/*.ts'],
  cli: {
    migrationsDir: __dirname + '/migrations',
  },
};

export default TypeOrmOptions;
