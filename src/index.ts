class Human{
    public name : string;
    public age : number;
    public gender : string;
    constructor(
        name:string, age:number, gender:string
    ){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("hynn", 18, "femail");

const person = {
    name:"nicolas",
    gender:"male",
    age:22
}


const sayHi = (person:Human):void => {
    console.log(`hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
}

sayHi(lynn);

export {};