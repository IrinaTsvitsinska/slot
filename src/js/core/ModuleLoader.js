export class ModuleLoader {
  constructor() {
    this.modules = [];
  }

  addModule(moduleName, moduleInstance) {
    this.modules.push({ moduleName, moduleInstance });
  }

  initModules() {
    const loadedModules = {};
    this.modules.forEach(({ moduleName, moduleInstance }) => {
      moduleInstance.init();
      loadedModules[moduleName] = moduleInstance;
    });
    this.modules.forEach(({ moduleInstance }) => {
      moduleInstance.load(loadedModules);
    });

  }


}

export const moduleLoader = new ModuleLoader();
