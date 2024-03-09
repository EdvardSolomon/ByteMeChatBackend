import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities';
import { RoomsService } from './room.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [],
  providers: [RoomsService],
})
export class RoomsModule {}
