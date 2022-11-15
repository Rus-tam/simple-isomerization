import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { DeleteDateColumn } from 'typeorm';

@Entity()
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vesselVolume: number;

  @Column()
  feedTemperature: number;

  @Column()
  feedMassFlow: number;

  @Column()
  conversion: number;

  @Column()
  massFraction_trButene: number;

  @Column()
  massFraction_cisButene: number;

  @Column()
  feedMassDensity: number;

  @Column()
  createdAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}
