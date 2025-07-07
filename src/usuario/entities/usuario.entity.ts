import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.usuario)
  prestamos: Prestamo[];
}
