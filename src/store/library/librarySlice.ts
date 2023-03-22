import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosLibrary, IDeleteCard, IDeleteStack, IGetLibrary, IPostCard, IPostStack, IUpdateCardCompleted, IUpdateStackDetails } from '../../services/libraryApi/LibraryApi';
import { ILibraryState } from './libraryModels';

const initialState: ILibraryState = {
  loading: false,
  library: null,
  error: ''
};

export const fetchLibrary = createAsyncThunk('library/fetchlibrary', (payload: IGetLibrary) => {
  return axiosLibrary
    .get(`/libraries/${payload.libraryId}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const addStack = createAsyncThunk('library/addStack', (payload: IPostStack) => {
  return axiosLibrary
    .post(`/libraries/${payload.libraryId}/stacks`, payload)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const updateStackDetails = createAsyncThunk('library/updateStackDetails', (payload: IUpdateStackDetails) => {
  return axiosLibrary
    .patch(`/libraries/${payload.libraryId}/stacks/${payload.stackId}`, payload)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const deleteStack = createAsyncThunk('library/deleteStack', (payLoad: IDeleteStack) => {
  return axiosLibrary
    .delete(`/libraries/${payLoad.libraryId}/stacks/${payLoad.stackId}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const addCard = createAsyncThunk('library/addCard', (payload: IPostCard) => {
  return axiosLibrary
    .post(`/libraries/${payload.libraryId}/stacks/${payload.stackId}/cards`, payload)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const deleteCard = createAsyncThunk('library/deleteCard', (payload: IDeleteCard) => {
  return axiosLibrary
    .delete(`/libraries/${payload.libraryId}/stacks/${payload.stackId}/cards/${payload.cardId}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

export const updateCardCompleted = createAsyncThunk('library/updateCardComplete', (payload: IUpdateCardCompleted) => {
  return axiosLibrary
    .patch(`/libraries/${payload.libraryId}/stacks/${payload.stackId}/cards/${payload.cardId}/completed`, payload)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
});

const librarySlice = createSlice({
  name: 'library',
  initialState: initialState,
  reducers: {
    updateLibraryName(state, action) {
      if (state.library === null || state.library === undefined) {
        return;
      }
      state.library.libraryDetails.name = action.payload;
    },
    setLibrary(state, action) {
      state.library = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibrary.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
        state.error = '';
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(addStack.pending, (state) => {
        state.loading = true;
      })
      .addCase(addStack.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
        state.error = '';
      })
      .addCase(addStack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(updateStackDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStackDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
        state.error = '';
      })
      .addCase(updateStackDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(deleteStack.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStack.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
      })
      .addCase(deleteStack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(addCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
        state.error = '';
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(deleteCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
        state.error = '';
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(updateCardCompleted.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCardCompleted.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload;
        state.error = '';
      })
      .addCase(updateCardCompleted.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  }
});

export default librarySlice.reducer;
export const libraryActions = librarySlice.actions;
