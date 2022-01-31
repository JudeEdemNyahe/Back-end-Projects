class School {
    constructor(name, numberOfStudents, level) {
        this._name = name;
        this._numberOfStudents = numberOfStudents;
        this._level = level;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents != 'number') {
            console.log(`Invalid input: numberOfStudents must be set to a Number.`)
        } else {
            this._numberOfStudents = newNumberOfStudents;
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let myIndex = Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[myIndex];

    }

}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, numberOfStudents, 'primary');
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }


}


class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, numberOfStudents, 'high');
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        for (let i = 0; i < this._sportsTeams.length; i++) {
            console.log(this._sportsTeams[i])
        }
    }

}

//instances
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, `Students must be picked up by a parent, guardian, or a family member over the age of 13.`);
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
alSmith.sportsTeams;