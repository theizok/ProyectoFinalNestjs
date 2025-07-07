import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Editorial } from 'src/editorial/entities/editorial.entity';
import { Autor } from 'src/autor/entities/autor.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releasedAt: Date;

  @Column()
  avaliable: boolean;

  @ManyToMany(() => Editorial, (editorial) => editorial.libros)
  @JoinTable()
  editoriales: Editorial[];

  @ManyToOne(() => Autor, (autor) => autor.libros)
  autor: Autor;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.libro)
  prestamos: Prestamo[];
}
