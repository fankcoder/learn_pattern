// 产品类
class House {
    constructor() {
      this.walls = null;
      this.doors = null;
      this.windows = null;
      this.roof = null;
    }
  
    toString() {
      return `Walls: ${this.walls}, Doors: ${this.doors}, Windows: ${this.windows}, Roof: ${this.roof}`;
    }
  }
  
  // 抽象生成器
  class HouseBuilder {
    buildWalls() {}
    buildDoors() {}
    buildWindows() {}
    buildRoof() {}
    getHouse() {}
  }
  
  // 具体生成器
  class ConcreteHouseBuilder extends HouseBuilder {
    constructor() {
      super();
      this.house = new House();
    }
  
    buildWalls() {
      this.house.walls = "4 walls";
    }
  
    buildDoors() {
      this.house.doors = "2 doors";
    }
  
    buildWindows() {
      this.house.windows = "4 windows";
    }
  
    buildRoof() {
      this.house.roof = "Slanted roof";
    }
  
    getHouse() {
      return this.house;
    }
  }
  
  // 指挥者
  class Director {
    constructor(builder) {
      this.builder = builder;
    }
  
    constructHouse() {
      this.builder.buildWalls();
      this.builder.buildDoors();
      this.builder.buildWindows();
      this.builder.buildRoof();
      return this.builder.getHouse();
    }
  }
  
  // 使用生成器模式
  const builder = new ConcreteHouseBuilder();
  const director = new Director(builder);
  const house = director.constructHouse();
  
  console.log(house.toString());  // 输出: Walls: 4 walls, Doors: 2 doors, Windows: 4 windows, Roof: Slanted roof
  