export class ModuleLoader {
  constructor() {
    this.modules = [];
  }

  addModule(newModule) {
    this.modules.push(newModule);
  }

  loadModules() {
    this.modules.forEach(module => {
      module.init();
    });
  }
}

export const moduleLoader = new ModuleLoader();
