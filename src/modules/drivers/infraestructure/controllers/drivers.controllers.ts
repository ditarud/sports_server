import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/common/guards/jwt-auth.guard';

@Controller('drivers')
@UseGuards(JwtAuthGuard)
export class DriversController {
  @Get()
  findAll() {
    return [{ name: 'Max Verstappen' }, { name: 'Lando Norris' }];
  }
}
