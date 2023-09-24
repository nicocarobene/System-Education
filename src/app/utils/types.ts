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



export interface UserElement {
    id:                    number;
    username:              string;
    password:              string;
    name:                  string;
    lastname:              string;
    email:                 string;
    telefono:              string;
    enabled:               boolean;
    perfil:                string;
    authorities:           Authority[];
    credentialsNonExpired: boolean;
    accountNonExpired:     boolean;
    accountNonLocked:      boolean;
}

export interface Authority {
    authority: string;
}

export interface Category {
    id?:          number;
    title:       string;
    description: string;
}

export interface Tests {
    id?:           number;
    title:        string;
    description:  string;
    maxNote:      string;
    maxNumOfQuiz: number;
    active:       boolean;
    category:     Category;
}

export interface Quiz {
    content:       string;
    img:           string;
    option1:       string;
    option2:       string;
    option3:       string;
    option4:       string;
    correctAnswer: string;
    test:          Tests;
    id:            number;
}

