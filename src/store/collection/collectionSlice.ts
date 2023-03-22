import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosCollection, IAddLibraryToCollection, IDeleteLibraryInCollection, IGetCollection, IUpdateLibraryDetails } from '../../services/collectionApi/collectionApi';
import { ICollectionState } from './collectionModels';

const initialState: ICollectionState = {
  loading: false,
  libraries: [],
  error: ''
};

export const fetchCollection = createAsyncThunk('collection/fetchCollection', (payLoad: IGetCollection) => {
  return axiosCollection
    .get(`/collections/${payLoad.collectionId}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const addLibraryToCollection = createAsyncThunk('collection/addLibraryToCollection', (payLoad: IAddLibraryToCollection) => {
  return axiosCollection
    .post(`/collections/${payLoad.collectionId}/libraries`, payLoad)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const updateLibraryDetails = createAsyncThunk('collection/updateLibraryDetails', (payload: IUpdateLibraryDetails) => {
  return axiosCollection
    .patch(`/collections/${payload.collectionId}/libraries/${payload.libraryId}`, payload)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const deleteLibraryInCollection = createAsyncThunk('collection/deleteLibraryInCollection', (payload: IDeleteLibraryInCollection) => {
  return axiosCollection
    .delete(`/collections/${payload.collectionId}/libraries/${payload.libraryId}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

const collectionSlice = createSlice({
  name: 'collection',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.libraries = action.payload.libraries;
        state.error = '';
      })
      .addCase(fetchCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(addLibraryToCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLibraryToCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.libraries = action.payload.libraries;
        state.error = '';
      })
      .addCase(addLibraryToCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(updateLibraryDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateLibraryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.libraries = action.payload.libraries;
        state.error = '';
      })
      .addCase(updateLibraryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(deleteLibraryInCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteLibraryInCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.libraries = action.payload.libraries;
        state.error = '';
      })
      .addCase(deleteLibraryInCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  }
});

export default collectionSlice.reducer;
export const collectionActions = collectionSlice.actions;
