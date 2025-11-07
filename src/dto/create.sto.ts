import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStoDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}