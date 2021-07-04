import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  private readonly logger = new Logger('AppController');

  @Post('accumulate')
  accumulate(@Body('data') data: number[]): number {
    this.logger.log(`Accumulating ${data.toString()}`);
    return this.mathService.accumulate(data);
  }
}
