import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
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
  }
});

export const usersReducer = usersSlice.reducer;
export const {} = usersSlice.actions;
