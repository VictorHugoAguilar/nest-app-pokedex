import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  /**
   * ParseMongoIdPipe
   * @param value
   * @param metadata
   * @returns
   */
  transform(value: any, metadata: ArgumentMetadata) {
    if (!isValidObjectId(value)) {
      console.log(metadata);
      throw new BadRequestException(`${value} is not a valid MongoID`);
    }
    return value;
  }
}
