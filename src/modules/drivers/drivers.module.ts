// modules/drivers/drivers.module.ts
import { Module } from '@nestjs/common';
import { DriversController } from './infraestructure/controllers/drivers.controllers';

@Module({
  controllers: [DriversController],
  providers: [],
})
export class DriversModule {}
