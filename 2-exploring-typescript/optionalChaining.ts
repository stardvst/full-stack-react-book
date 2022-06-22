namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car1: Automobile | null = new Automobile({ count: undefined });
  console.log('car1:', car1);
  console.log('wheels1:', car1?.wheels);
  console.log('count1:', car1?.wheels?.count);

  const car2: Automobile | null = new Automobile();
  console.log('car2:', car2);
  console.log('wheels2:', car2?.wheels);
  console.log('count2:', car2?.wheels?.count);
}
