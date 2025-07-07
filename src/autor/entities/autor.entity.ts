import { Libro } from 'src/libro/entities/libro.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany(() => Libro, (libro) => libro.autor)
  libros: Libro[];
}
