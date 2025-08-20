import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  selectedLanguage: string;

  @IsString()
  @IsNotEmpty()
  city: string;
}
