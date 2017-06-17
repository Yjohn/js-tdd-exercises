function getStatistics(writers, age) {
  var result={alive: 0, dead: 0};

  for (i=0;i<writers.length;i++){
    if (writers[i].alive===true){
      result.alive+=1;
    } else {
        result.dead+=1;
    }
    
  }
  return result;
}


test('function should retrieve a number of alive writers and dead', function() {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = getStatistics(persons);

  expect(result).toEqual({
alive: 2,
dead: 2
})
});
test("string", function(){})