import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './modules/drivers/drivers.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DriversModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
