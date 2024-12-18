# 产品类
class House:
    def __init__(self):
        self.walls = None
        self.doors = None
        self.windows = None
        self.roof = None

    def __str__(self):
        return f"Walls: {self.walls}, Doors: {self.doors}, Windows: {self.windows}, Roof: {self.roof}"

# 抽象生成器
class HouseBuilder:
    def build_walls(self):
        pass

    def build_doors(self):
        pass

    def build_windows(self):
        pass

    def build_roof(self):
        pass

    def get_house(self):
        pass

# 具体生成器
class ConcreteHouseBuilder(HouseBuilder):
    def __init__(self):
        self.house = House()

    def build_walls(self):
        self.house.walls = "4 walls"
    
    def build_doors(self):
        self.house.doors = "2 doors"
    
    def build_windows(self):
        self.house.windows = "4 windows"
    
    def build_roof(self):
        self.house.roof = "Slanted roof"
    
    def get_house(self):
        return self.house

# 指挥者
class Director:
    def __init__(self, builder):
        self._builder = builder

    def construct_house(self):
        self._builder.build_walls()
        self._builder.build_doors()
        self._builder.build_windows()
        self._builder.build_roof()
        return self._builder.get_house()

# 使用生成器模式
builder = ConcreteHouseBuilder()
director = Director(builder)
house = director.construct_house()

print(house)  # 输出: Walls: 4 walls, Doors: 2 doors, Windows: 4 windows, Roof: Slanted roof
