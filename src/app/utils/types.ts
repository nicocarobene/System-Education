export interface User {
    id:        number;
    username:  string;
    name:      string;
    lastname:  string;
    email:     string;
    telefono:  string;
    enabled:   boolean;
    perfil:    string;
    password:  string;
    userRoles: UserRole[];
}

export interface UserRole {
    id:  number;
    rol: Rol;
}

export interface Rol {
    id:       number;
    name:     string;
    roleUser: any[];
}

export interface UserLogin {
    usernameOrEmail: string;
    password: string;
}


