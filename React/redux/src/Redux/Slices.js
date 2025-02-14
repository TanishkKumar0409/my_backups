import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const getData = createAsyncThunk("getData", async () => {
  const res = await fetch("http://localhost:5000/api/user/all");
  return res.json();
});
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        username: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.username !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.isError = true;
      state.isError = true;
    });
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
