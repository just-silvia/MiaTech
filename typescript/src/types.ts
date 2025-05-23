export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    /* metadata?: any; */
};

//ESERCIZIO CREA INTERFACCIA UTENTE

export interface User {
    id: number;
    name: string;
    email?: string;
    //ESERCIZIO READONLY
    readonly todos: readonly Todo[];
};

//ESERCIZIO TodoWithMetadata EXTENDS Todo

export interface TodoWithMetadata extends Todo {
    metadata: any;
}

//ESERCIZIO PROJECT

export interface Project {
    users: User[];
    todos: Todo[];
}