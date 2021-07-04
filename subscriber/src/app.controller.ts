import { Body, Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  private readonly logger = new Logger('AppController');

  @MessagePattern('accumulate')
  accumulate(@Body('data') data: number[]): number {
    this.logger.log(`Accumulating ${data.toString()}`);
    return this.mathService.accumulate(data);
  }
}
