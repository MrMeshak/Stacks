import { ILibraryDetails } from "../library/libraryModels"

export interface ILibrarySummary {
    _id: string;
    libraryDetails: ILibraryDetails
}

export interface ICollectionState{
    loading: boolean,
    libraries: ILibrarySummary[],
    error: string;
}

