import { Controller } from 'egg';

export default class Hell0Controller extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('hello');
  }
}
