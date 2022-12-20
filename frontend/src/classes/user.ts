

export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;

    constructor(id = 0, first_name = '', last_name = '', email = '') {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }

    get name() {
        return this.first_name + ' ' + this.last_name;
    }


}