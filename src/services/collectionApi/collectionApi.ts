import axios from 'axios';
import { ILibrary } from '../../store/library/libraryModels';

export const axiosCollection = axios.create({
  //baseURL: "http://localhost:4000/api/",
  baseURL: 'https://stacks-app.up.railway.app/api',
  timeout: 4000
});

export interface IGetCollection {
  collectionId: string;
}

export interface IAddLibraryToCollection {
  collectionId: string;
  library: ILibrary;
}

export interface IUpdateLibraryDetails {
  collectionId: string;
  libraryId: string;
  libraryDetails: {
    id: string;
    name: string;
  };
}

export interface IDeleteLibraryInCollection {
  collectionId: string;
  libraryId: string;
}
