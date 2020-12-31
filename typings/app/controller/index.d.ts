// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHello from '../../../app/controller/hello';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    hello: ExportHello;
    home: ExportHome;
  }
}
