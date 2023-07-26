import { RuralProducerEntity } from '@modules/rural-producer/entities/rural-producer.entity';
import { PlantedCropsEnum } from '@modules/rural-producer/enum';
import { MigrationInterface, QueryRunner } from "typeorm";

export class Seed1690368962607 implements MigrationInterface {
    name = 'Seed1690368962607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            queryRunner.manager.create<RuralProducerEntity>(RuralProducerEntity, {
                document: '14264605000102',
                name: 'Keanu Reeves',
                city: 'Toronto',
                state: 'ON',
                farmName: 'Riverdale Farm',
                farmTotalArea: 120,
                farmArableArea: 60,
                farmVegetationArea: 20,
                plantedCrops: [PlantedCropsEnum.COTTON, PlantedCropsEnum.SUGAR_CANE]
            })
        );

        await queryRunner.manager.save(
            queryRunner.manager.create<RuralProducerEntity>(RuralProducerEntity, {
                document: '13839075000102',
                name: 'Hugh Jackman',
                city: 'Sydney',
                state: 'NSW',
                farmName: 'Growht Grain',
                farmTotalArea: 100,
                farmArableArea: 50,
                farmVegetationArea: 10,
                plantedCrops: [PlantedCropsEnum.COTTON, PlantedCropsEnum.SOY]
            })
        );

        await queryRunner.manager.save(
            queryRunner.manager.create<RuralProducerEntity>(RuralProducerEntity, {
                document: '42929991046',
                name: 'Thomas Cruise',
                city: 'Syracuse',
                state: 'NY',
                farmName: 'Brady Farm',
                farmTotalArea: 110,
                farmArableArea: 50.5,
                farmVegetationArea: 20,
                plantedCrops: [PlantedCropsEnum.COTTON, PlantedCropsEnum.SOY]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM rural_producers`);
    }

}
