import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Message } from '../../message/entities/message.entity';
import { PrivacyType, RoomType } from '../enums';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @OneToMany(() => Message, (message) => message.room)
  messages: Message[];

  @Column({
    type: 'enum',
    enum: RoomType,
    default: RoomType.Private,
  })
  type: RoomType;

  @Column({
    type: 'enum',
    enum: PrivacyType,
    default: PrivacyType.Private,
  })
  privacy: PrivacyType;
}
