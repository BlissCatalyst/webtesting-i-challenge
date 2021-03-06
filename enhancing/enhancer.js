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
  let failed = { ...item };
  if (failed.enhancement < 15) {
    failed.durability -= 5;
  } else {
    failed.durability -= 10;
    if (failed.enhancement > 16) {
      failed.enhancement -= 1;
    }
  }
  return { ...failed };
}

function repair(item) {
  let fixedItem = { ...item };
  fixedItem.durability = 100;
  return { ...fixedItem };
}

function get(item) {
  let showEnhance = { ...item };
  if (showEnhance.enhancement > 0) {
    showEnhance.name = `[+ ${item.enhancement}] ${item.name}`;
  }
  return { ...showEnhance };
}
