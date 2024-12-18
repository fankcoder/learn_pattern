from abc import ABC, abstractmethod

# 抽象产品类
class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

# 具体产品类
class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# 工厂类
class AnimalFactory:
    def create_animal(self, animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()
        else:
            return None

# 使用工厂模式创建对象
factory = AnimalFactory()

dog = factory.create_animal("dog")
print(dog.speak())  # 输出: Woof!

cat = factory.create_animal("cat")
print(cat.speak())  # 输出: Meow!