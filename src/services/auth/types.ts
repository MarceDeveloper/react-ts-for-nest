//login
export interface Login_Response {
    access_token: string;
    data_sesion:{
        userId:number,
        username:string,
        roles:Role[]
    }
}



export interface login_Data {
    username: string;
    password: string;
}
//getUserData_Response

export interface getUserData_Response {
    userId: number;
    username: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
}
