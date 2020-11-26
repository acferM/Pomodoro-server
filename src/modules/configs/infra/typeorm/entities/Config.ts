import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('configs')
class Config {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  owner_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @Column()
  name: string;

  @Column()
  focus_time: string;

  @Column()
  pause_time: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Config;
