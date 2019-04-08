module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let enhancedItem = { ...item };
  if (enhancedItem.enhancement !== 20) {
    enhancedItem.enhancement += 1;
  }
  return { ...enhancedItem };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let fixedItem = { ...item };
  fixedItem.durability = 100;
  return { ...fixedItem };
}

function get(item) {
  return { ...item };
}
