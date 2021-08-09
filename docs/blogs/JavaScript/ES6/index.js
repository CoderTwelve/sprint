function* GenFunc() {
  yield 'hello'
  yield 'world'
  return 'end'
}
const g = GenFunc();
// g.next() // { value: 'hello', done: false }
// g.next() // { value: 'world', done: false }
// g.next() // { value: 'end', done: true }
// for(let res of g) {
//   console.log(res);
// }
// console.log(g.next());
for(let i = 0; i < 3; i++) {
  console.log(g.next());
}