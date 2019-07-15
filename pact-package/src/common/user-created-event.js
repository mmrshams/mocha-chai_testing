class UserCreatedEvent {

    constructor(name, lastname, age, code) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.code = code;
    }


    static validateName(event) {
        if (typeof event.name !== 'string') {
            throw new Error(`User name must be a string! Invalid value: ${event.name}`);
        }
    }
    static validateLastname(event) {
        if (typeof event.lastname !== 'string') {
            throw new Error(`User lastname must be a string! Invalid value: ${event.lastname}`)
        }
    }

    static validateAge(event) {
        if (typeof event.age !== 'number') {
            throw new Error(`User age must be a number! Invalid value: ${event.age}`)
        }
    }


    static validateCode(event) {
        if (typeof event.code !== 'number') {
            throw new Error(`User id must be a number! Invalid value: ${event.code}`)
        }
    }
}

module.exports = UserCreatedEvent;