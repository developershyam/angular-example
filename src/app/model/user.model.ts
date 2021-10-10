export class User{

    name:string;
    email:string;
    experience:number;

    constructor(
        name:string
    )
    constructor(
        name:string,
        email:string
    )
    constructor(
        name:string,
        email:string,
        experience:number
    )
    constructor(
        name:string,
        email?:string,
        experience?:number
    ){
        this.name = name;
        this.email = email?email: '';
        this.experience = experience?experience:0;
    }
}