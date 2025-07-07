import { Libro } from 'src/libro/entities/libro.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prestamo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  endedAt: Date | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.prestamos)
  usuario: Usuario;

  @ManyToOne(() => Libro, (libro) => libro.prestamos)
  libro: Libro;
}
