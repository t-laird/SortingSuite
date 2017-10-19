function speedTestFunction (fn, array) {
  let t1 = Date.now();
  fn(array);
  let t2 = Date.now();
  
  return t2 - t1;
}

module.exports = speedTestFunction;