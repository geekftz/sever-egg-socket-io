// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportChat from '../../../../app/io/controller/chat';

declare module 'egg' {
  interface CustomController {
    chat: ExportChat;
  }
}
