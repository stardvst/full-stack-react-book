function getLength1<T extends { hasOwnProperty: (propName: string) => boolean; length: number }>(arg: T): number {
  if (arg.hasOwnProperty('length')) {
    return arg['length'];
  }
  return 0;
}

// console.log(getLength1<number>(22));
console.log(getLength2('hello world'));

interface HasLength {
  length: number;
}

function getLength2<T extends HasLength>(arg: T): number {
  return arg.length;
}

// console.log(getLength2<number>(22));
console.log(getLength2('hello world'));
