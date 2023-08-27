import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Mysql2022@#',
        database: 'PETS',
        entities: ['dist/**/*.entity{.ts,.js}'],
        //Deixar false se ja tiver tabela criada no Mysql Marcello Fobtes 27/08/2023
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
