import { createSlice } from "@reduxjs/toolkit";

const predefinedUser = {
    username: 'emre',
    password: '1234',
  };

const Slice = createSlice({
    name:"auth",
    initialState:{  // global statemiz bu  (başlangıç state)
        authtoken:null,
        predefinedUser: predefinedUser,
      
    },
    reducers:{  // stateye etki edicek fonksiyonlar
        login: (state, action) => {
            const { username, password } = action.payload;
            if (
              username === state.predefinedUser.username &&
              password === state.predefinedUser.password
            ) {
              state.authtoken = 'fakeTokenForTestUser';
            } else {
              throw new Error('Invalid username or password');
            }
          },

          logout: (state) => {
            state.authtoken = null;
          },
    }
})
export const { login,logout } = Slice.actions;
export default Slice;
