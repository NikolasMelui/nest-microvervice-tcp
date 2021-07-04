import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathService {
  constructor(@Inject('MATH_SERVICE') private subscriberClient: ClientProxy) {}

  public accumulate(data: number[]) {
    return this.subscriberClient.send<number, number[]>('accumulate', data);
  }
}
