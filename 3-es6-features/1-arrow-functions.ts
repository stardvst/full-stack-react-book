function MyFunction() {
  console.log(this)
}

MyFunction(); // node global object
const test = new MyFunction(); // MyFunction
