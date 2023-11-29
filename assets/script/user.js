'use strict'

class User {
    #id;
    #name;
    #userName;
    #email;
    constructor(id, name, userName, email){
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id(){ return this.#id; }
    get name(){ return this.#name; }
    get userName(){ return this.#userName; }
    get email(){ return this.#email; }

    getInfo(){
        return {
            'id': this.#id,
            'name': this.#name,
            'userName': this.#userName,
            'email': this.#email,
        };
    }
}

class Profile extends User {
    #pages;
    #groups;
    #canMonetize;
    constructor(id, name, userName, email, pages, groups, canMonetize){
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() { return this.#pages; }
    get groups() { return this.#groups; }
    get canMonetize() { return this.#canMonetize; }

    getInfo(){
        return {
            'id': super.id,
            'name': super.name,
            'userName': super.userName,
            'email': super.email,
            'pages': this.pages,
            'groups': this.groups,
            'canMonetize': this.canMonetize,
        };
    }
}

export {Profile};