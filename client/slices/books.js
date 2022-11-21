import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBooks } from '../api/books'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (searchfor) => {
  return await getBooks(searchfor)
})

const booksSlice = createSlice({
  name: 'bookSearchResult',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled]: (_, { payload }) => {
      return payload
    },
  },
})

export const selectBooks = (state) => state.bookSearchResult
export default booksSlice.reducer
