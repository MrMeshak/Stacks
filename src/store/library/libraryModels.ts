export interface ICardDetails{
    _id: string;
    title: string;
    description: string;
    completed: boolean;
    color:string;
}

export interface ICard{
    _id: string;
    cardDetails: ICardDetails;
}

export interface IStackDetails{
   _id: string;
    name: string;
    color: string;
}

export interface IStack {
    _id: string;
    stackDetails: IStackDetails;
    cards: ICard [];
}

export interface ILibraryDetails{
    _id: string;
    name: string;
}

export interface ILibrary{
    _id: string;
    libraryDetails: ILibraryDetails;
    stacks: IStack[]
}

export interface ILibraryState{
    loading: boolean;
    library: ILibrary|null;
    error: string;
}