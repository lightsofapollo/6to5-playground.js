/**
Main class is the top level export it should work fine under node
*/
export class Main {
  constructor() {
    console.log('created')
  }

  throws() {
    throw new Error('exception');
  }

  compute() {
    return Promise.resolve(1);
  }

  async method() {
    yield Promise.all([this.compute(), this.compute()])
    return yield this.compute()
  }
}
