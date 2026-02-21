const data = [
  { name: "A", group: "X" },
  { name: "B", group: "Y" },
  { name: "C", group: "X" },
];

const grouped = {};

data.forEach(item => {
  if (!grouped[item.group]) grouped[item.group] = [];
  grouped[item.group].push(item.name);
});

console.log(grouped); 
// { X: ['A', 'C'], Y: ['B'] }