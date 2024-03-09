import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities';
import { MessagesService } from './message.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [],
  providers: [MessagesService],
})
export class MessagesModule {}
