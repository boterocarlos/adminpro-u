
export class User{

    constructor (
        public user_name: string,
        public user_email: string,
        public user_password: string,
        public userid?: string,
        public userroleid?: number,
        public userpersid?: number,
        public usergoogle?: boolean,
        public userimg?: string
    ){}

}

