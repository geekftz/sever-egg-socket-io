import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  io: {
    enable: true,
    package: 'egg-socket.io',
  },
};

export default plugin;
