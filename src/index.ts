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

    getPlayerInfo(): string {

        return 'Name: ${this.name}, Skill: ${this.skill}, Level: ${this.level} ';
    }

    changeName(newName: string) {

        this.name = newName;
    }

    changeSkill(newSkill: string) {

        this.skill = newSkill;
    }

    getLevel(): number {

        return this.level;
    }

    getOrigins(origin?: string): string {

        if (origin) {
            return `The new player ${this.name}, comes from ${origin}`;
        
        } else {
            return `The new player ${this.name}, comes from an unknown galaxy,`;
        }
    }
    
    
}

    


let user1 = new Player('Devorador', 'Fire Punch', 101)
logObject(user1);

user1.changeName('Aurelio');
logObject(user1);

user1.changeSkill('Swimming');
logObject(user1);

let user2 = new Player('Devo','Eat', 200);
console.log('User2 is level:',user2.getLevel());

let user3 = new Player('Rascador','Nature', 22);
console.log(user3.getOrigins());
console.log(user3.getOrigins('Galaxy #303'));






