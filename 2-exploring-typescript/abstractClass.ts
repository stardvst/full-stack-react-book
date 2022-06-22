namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`vehicle has ${this.wheelCount} wheels`);
    }
  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`updated motorcycle wheel count to ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`updated automobile wheel count to ${this.wheelCount}`);
    }
  }

  const motorCycle = new Motorcycle();
  motorCycle.updateWheelCount(3);

  const autoMobile = new Automobile();
  autoMobile.updateWheelCount(5);
}
