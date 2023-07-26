import { BaseEntity } from '@database/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';
import { PlantedCropsEnum } from '../enum';

@Entity('rural_producers')
export class RuralProducerEntity extends BaseEntity {
  @Column({ unique: true })
  document: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  farmName: string;

  @AfterLoad()
  _convertFarmTotalArea() {
    if (this.farmTotalArea) {
      this.farmTotalArea = parseFloat(this.farmTotalArea as any)
    }
  }
  @Column({ type: 'numeric', precision: 11, scale: 2 })
  farmTotalArea: number;

  @AfterLoad()
  _convertFarmArableArea() {
    if (this.farmArableArea) {
      this.farmArableArea = parseFloat(this.farmArableArea as any)
    }
  }
  @Column({ type: 'numeric', precision: 11, scale: 2 })
  farmArableArea: number;

  @AfterLoad()
  _convertFarmVegetationArea() {
    if (this.farmVegetationArea) {
      this.farmVegetationArea = parseFloat(this.farmVegetationArea as any)
    }
  }
  @Column({ type: 'numeric', precision: 11, scale: 2 })
  farmVegetationArea: number

  @Column({
    type: 'enum',
    enum: PlantedCropsEnum,
    array: true,
    enumName: 'plantedCrops',
    nullable: true
  })
  plantedCrops?: PlantedCropsEnum[]
}