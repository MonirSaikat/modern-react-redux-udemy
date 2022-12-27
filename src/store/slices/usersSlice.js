import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';
const { createSlice } = require('@reduxjs/toolkit');

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers:{},
  extraReducers(builder) {
    /**
     * Fetch users cases
     */
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    /**
     * Add use cases
     */
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    /**
     * Remove user cases
     */
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.data = state.data.filter(user => user.id !== action.payload.id);
    });
  }
});

export const usersReducer = usersSlice.reducer;
export const {} = usersSlice.actions;
