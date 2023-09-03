import { DataSource } from 'typeorm';
require('dotenv').config()


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: ['dist/**/*.entity{.ts,.js}'],
        //Deixar false se ja tiver tabela criada no Mysql Marcello Fobtes 27/08/2023
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
