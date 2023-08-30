const persons =[{
    firstName: "Artur",
    lastName: "Konarski",
    age: 36,
    hobbies:["gaming", "movies", "svimming", "New technology", "Photography" ],
    car: "mondeo",
    adresse: ""
    
    
},{
    firstName: "John",
    lastName: "Doe",
    age: 24,
    hobbies:["boobies", "drinking", "partyparty", "fishing", "playing on instruments"],
    car: "vw bettle"


}
]
const Artur = persons[0]
const John = persons[1]

console.log(persons[0].firstName)
console.log(persons[0])
console.log(persons[1].firstName)
console.log(persons[1].car)
console.log(persons[0], persons[1])

console.log(persons[1].hobbies)



class PersonData {
    constructor(name, lastName,age,hobbies,car,adresse){
   this.name = name;
   this.lastName = lastName;
   this.age = age;
   this.hobbies = hobbies;
   this.car = car;
   this.adresse = adresse;
   console.log(`My name is ${this.name} ${lastName} I'm ${age} years old. My hobbies are ${hobbies}.I'm driving ${car} and i live in ${adresse}  `)

}
}
const persondata = new PersonData("Artur", "Konarski", 36, "gaming, movies","Mondeo", "Undrumsdal");

const persondata1 = new PersonData("Bob", "Joe", 42, "fishing and sailing", "Porshe", "Barcelona"  )


console.log(persondata)
console.log(persondata1)