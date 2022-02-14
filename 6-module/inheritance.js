const animal = {
  move: true,
};
const cat = {
  __proto__: animal,
};
console.log(cat.move);
