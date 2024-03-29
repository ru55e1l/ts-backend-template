import { Controller, Route, Get, Tags } from 'tsoa';

@Route('auth')
@Tags("Auth")
export class AuthController extends Controller {

  @Get("Auth")
  public async verify(): Promise<number> {
    return 100;
  }
}
