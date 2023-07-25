import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRuralProducersTable1690318578190 implements MigrationInterface {
    name = 'CreateRuralProducersTable1690318578190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."plantedCrops" AS ENUM('SOY', 'CORN', 'COTTON', 'COFFEE', 'SUGAR_CANE')`);
        await queryRunner.query(`CREATE TABLE "rural_producer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "document" character varying NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "farmName" character varying NOT NULL, "farmTotalArea" numeric(11,2) NOT NULL, "farmArableArea" numeric(11,2) NOT NULL, "farmVegetationArea" numeric(11,2) NOT NULL, "plantedCrops" "public"."plantedCrops" array, CONSTRAINT "UQ_2ac7f52e1cff6e3e212734f47ed" UNIQUE ("document"), CONSTRAINT "PK_66e7fb5e6de76aea10691fbaca5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rural_producer"`);
        await queryRunner.query(`DROP TYPE "public"."plantedCrops"`);
    }

}
