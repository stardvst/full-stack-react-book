namespace InterfaceNamespace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  interface Vehicle extends Thing {
    wheelCount: number;
    updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels(): void;
  }

  class Motorcycle implements Vehicle {
    name: string;
    wheelCount: number;

    constructor(name: string, wheelCount: number) {
      this.name = name;
      this.wheelCount = wheelCount;
    }

    getFullName() {
      return 'MC-' + this.name;
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`updated motorcycle wheel count to ${this.wheelCount}`);
    }

    showNumberOfWheels() {
      console.log(`vehicle has ${this.wheelCount} wheels`);
    }
  }

  const moto = new Motorcycle('beginner-cycle', 2);
  moto.showNumberOfWheels();
  moto.updateWheelCount(3);
  moto.showNumberOfWheels();
  console.log(moto.getFullName());
}
