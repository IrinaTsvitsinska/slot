import { moduleLoader } from './js/core/ModuleLoader';
import { ReelsModule } from './js/modules/reels/ReelsModule';
import { UserInterfaceModule } from './js/modules/userInterface/UserInterface';
import { Application } from './js/modules/application/Application';
import { ServerModule } from './js/modules/server/ServerModule';
import { BigWinModule } from './js/modules/BigWin/BigWinModule';
import { BgModule } from './js/modules/Bg/BgModule';





moduleLoader.addModule("background", new BgModule);
moduleLoader.addModule("application", new Application());
moduleLoader.addModule("userInterface", new UserInterfaceModule());
moduleLoader.addModule("server", new ServerModule());
moduleLoader.addModule("reels", new ReelsModule());

moduleLoader.addModule("bigWin", new BigWinModule());


moduleLoader.initModules();
