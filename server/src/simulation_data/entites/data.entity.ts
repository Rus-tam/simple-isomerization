import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { DeleteDateColumn } from 'typeorm';

@Entity()
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'real' })
  vesselVolume: number;

  @Column({ type: 'real' })
  feedTemperature: number;

  @Column({ type: 'real' })
  feedMassFlow: number;

  @Column({ type: 'real' })
  conversion: number;

  @Column({ type: 'real' })
  massFraction_trButene: number;

  @Column({ type: 'real' })
  massFraction_cisButene: number;

  @Column({ type: 'real' })
  feedMassDensity: number;

  @Column()
  createdAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}
