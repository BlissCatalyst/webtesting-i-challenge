module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let fixedItem = item;
  fixedItem.durability = 100;
  console.log(item);
  return { ...fixedItem };
}

function get(item) {
  return { ...item };
}
