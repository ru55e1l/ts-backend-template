import { Controller, Route, Get, Tags } from 'tsoa';

@Route('group')
export class GroupController extends Controller {

  @Get('{groupId}')
  public async getGroup(groupId: number): Promise<number> {
    return 420;
  }

  @Get('{groupId}/{userId}')
  public async getUser(groupId: number, userId: number): Promise<string> {
    return ('Hello Wwwwoooooorld!');
  }

}
