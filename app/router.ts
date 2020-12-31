import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller, io } = app;

  router.get('/', controller.home.index);
  router.get('/hello', controller.hello.index);

  // io.of('/').route('server', io.controller.home.server);

  io.route('chat', io.controller.chat.ping);
  io.route('disconnect', app.io.controller.chat.disconnect);
};
