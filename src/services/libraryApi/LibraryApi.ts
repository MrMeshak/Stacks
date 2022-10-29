import axios from 'axios';

export const axiosLibrary = axios.create({
  //baseURL: "http://localhost:4000/api/",
  baseURL: 'https://stacks-app.up.railway.app/api',
  timeout: 4000
});

export interface IGetLibrary {
  libraryId: string;
}

export interface IPostLibrary {
  library: {
    id: string; //not used in api
    libraryDetails: {
      id: string; //not used in api
      name: string;
    };
    stacks: [];
  };
}

export interface IPostStack {
  libraryId: string;
  stack: {
    _id: string; //not used in api
    stackDetails: {
      _id: string; //not used in api
      name: string;
      color: string;
    };
    cards: [];
  };
}

export interface IPostCard {
  libraryId: string;
  stackId: string;
  card: {
    _id: string; //not used in api
    cardDetails: {
      _id: string; //not used in api
      title: string;
      description: string;
      completed: boolean;
      color: string;
    };
  };
}

export interface IDeleteStack {
  libraryId: string;
  stackId: string;
}

export interface IDeleteCard {
  libraryId: string;
  stackId: string;
  cardId: string;
}

export interface IUpdateStackDetails {
  libraryId: string;
  stackId: string;
  stackDetails: {
    _id: string; //not used in api
    name: string;
    color: string;
  };
}

export interface IUpdateCardCompleted {
  libraryId: string;
  stackId: string;
  cardId: string;
  completed: boolean;
}
