import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Libro } from 'src/libro/entities/libro.entity';

@Entity()
export class Editorial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToMany(() => Libro, (libro) => libro.editoriales)
  libros: Libro[];
}
