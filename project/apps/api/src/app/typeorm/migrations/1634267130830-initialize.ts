import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../../interface/user.interface';
import { Users } from '../entities';
export class initialize1634267130830 implements MigrationInterface {
  name = 'initialize1634267130830';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`questions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`texe\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`profiles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`url\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`questions_categories_categories\` (\`questionsId\` int NOT NULL, \`categoriesId\` int NOT NULL, INDEX \`IDX_97c90e910fb9de0f0f04dc7015\` (\`questionsId\`), INDEX \`IDX_4916181ebb291d641db25f6514\` (\`categoriesId\`), PRIMARY KEY (\`questionsId\`, \`categoriesId\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`profiles\` ADD CONSTRAINT \`FK_315ecd98bd1a42dcf2ec4e2e985\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`questions_categories_categories\` ADD CONSTRAINT \`FK_97c90e910fb9de0f0f04dc70150\` FOREIGN KEY (\`questionsId\`) REFERENCES \`questions\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`questions_categories_categories\` ADD CONSTRAINT \`FK_4916181ebb291d641db25f65142\` FOREIGN KEY (\`categoriesId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    // DBに値をinsertするサンプル
    const param: User[] = [
      {
        name: 'ゆうし',
      },
    ];
    await queryRunner.manager.save(Users, param);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`questions_categories_categories\` DROP FOREIGN KEY \`FK_4916181ebb291d641db25f65142\``
    );
    await queryRunner.query(
      `ALTER TABLE \`questions_categories_categories\` DROP FOREIGN KEY \`FK_97c90e910fb9de0f0f04dc70150\``
    );
    await queryRunner.query(
      `ALTER TABLE \`profiles\` DROP FOREIGN KEY \`FK_315ecd98bd1a42dcf2ec4e2e985\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_4916181ebb291d641db25f6514\` ON \`questions_categories_categories\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_97c90e910fb9de0f0f04dc7015\` ON \`questions_categories_categories\``
    );
    await queryRunner.query(`DROP TABLE \`questions_categories_categories\``);
    await queryRunner.query(`DROP TABLE \`profiles\``);
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(`DROP TABLE \`categories\``);
    await queryRunner.query(`DROP TABLE \`questions\``);
  }
}
