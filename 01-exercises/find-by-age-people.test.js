var findByAge = function findByAge(persons, age, younger){

    var result=[];
    for(i=0;i<persons.length;i++){
        if(!younger && persons[i].age>age){
            result.push(persons[i])
        }
        if (younger && persons[i].age<age){
            result.push(persons[i])
        }
    }
    return result;
}

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
  ]

test('should be able to find people over 50', function(){

    var result=findByAge(persons, 50)

    expect(result).toEqual([
        {
        firstName: "Virginia",
        lastName: "Woolf",
        occupation: "writer",
        age: 59,
        alive: false
        },
        {
        firstName: "bell",
        lastName: "hooks",
        occupation: "writer",
        age: 64,
        alive: true
        }
    ])
});

test('should be able to find people over 60', function(){

    var result=findByAge(persons, 60)

    expect(result).toEqual([
        {
        firstName: "bell",
        lastName: "hooks",
        occupation: "writer",
        age: 64,
        alive: true
        },
    ])
});

test('should be able to find people over 80', function(){

    var result=findByAge(persons, 80)

    expect(result).toEqual([])
});

test('should be able to find people under 45', function(){

    var result=findByAge(persons, 45, true)

    expect(result).toEqual([
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

    ])
});