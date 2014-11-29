import { Main } from './index'
export function main() {
  let out = new Main();

  var start = Date.now();
  out.method().then(() => {
    console.log(Date.now() - start, '<< time')
  })
}

export function throws() {
  let out = new Main();
  out.throws()
}
