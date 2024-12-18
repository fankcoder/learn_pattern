// 抽象产品类 (在JavaScript中不强制使用抽象类)
class Animal {
    speak() {
      throw "Method 'speak()' must be implemented.";
    }
  }
  
  // 具体产品类
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Meow!";
    }
  }
  
  // 工厂类
  class AnimalFactory {
    createAnimal(animalType) {
      if (animalType === "dog") {
        return new Dog();
      } else if (animalType === "cat") {
        return new Cat();
      }
      return null;
    }
  }
  
  // 使用工厂模式创建对象
  const factory = new AnimalFactory();
  
  const dog = factory.createAnimal("dog");
  console.log(dog.speak());  // 输出: Woof!
  
  const cat = factory.createAnimal("cat");
  console.log(cat.speak());  // 输出: Meow!
  