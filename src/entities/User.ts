import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tbl_users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', name: 'full_name' })
  name!: string

  @Column({ type: 'varchar', name: 'email', unique: true })
  email!: string
}
