function findByName(persons, name){
    var result=[];
    for(i=0;i<persons.length;i++){
        if(persons[i].firstName===name || persons[i].lastName===name){
            result.push(persons[i])
        }
    }
    return result
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

test('return empty array where not found', function(){
    var result= findByName(persons, 'Yohannes')
    expect(result).toEqual([])
})

test('return a person whoes first name or last name will be Zadie', function(){
    var result= findByName(persons, 'Zadie')
    expect(result).toEqual([{
        firstName: "Zadie",
        lastName: "Smith",
        occupation: "writer",
        age: 41,
        alive: true
    }])
})
test('return a person whoes first name or last name will be smith', function(){
    var result= findByName(persons, 'Smith')
    expect(result).toEqual([{
        firstName: "Zadie",
        lastName: "Smith",
        occupation: "writer",
        age: 41,
        alive: true
    }])
})