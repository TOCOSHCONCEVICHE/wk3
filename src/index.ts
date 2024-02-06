function logObject(user: {name: string, skill: string, level: number}) {
    console.log(user);
}

class Player {
    name: string;
    skill: string;
    level: number;
    constructor(name: string, skill: string, level: number){
        this.name = name;
        this.skill = skill;
        this.level = level;


    }
    
}


let user1 = new Player('Culon', 'Volar', 101)
logObject(user1);