import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { LoginRequestDTO } from '../../dtos/request/login-request.dto';
import { RegisterRequestDTO } from '../../dtos/request/register-request.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() LoginRequestDTOS: LoginRequestDTO) {
    return this.authService.login(LoginRequestDTOS);
  }

  @Post('/register')
  async register(@Body() RegisterRequestDTOS: RegisterRequestDTO) {
    return this.authService.create(RegisterRequestDTOS);
  }
}
