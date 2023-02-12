import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockApi from "../../utils/mockApi";

const initialState = {
  listDisabled: [],
  listActive: [],
};

const updateList = (list) => {
  let result = list.sort((x, y) => {
    let a = x.name.toUpperCase(),
      b = y.name.toUpperCase();
    return a === b ? 0 : a > b ? 1 : -1;
  });
  return result;
};

export const fetchClientDataActive = createAsyncThunk(
  "clientData/fetchClientDataActive",
  async () => {
    try {
      const response = await mockApi("active");
      return response;
    } catch (err) {
      alert(err);
    }
  }
);

export const fetchClientDataDisabled = createAsyncThunk(
  "clientData/fetchClientDataDisabled",
  async () => {
    try {
      const response = await mockApi("disabled");
      return response;
    } catch (err) {
      alert(err);
    }
  }
);

export const clientDataSlice = createSlice({
  name: "clientData",
  initialState,
  reducers: {
    handleClientDataActive(state, action) {
      state.listActive = action.payload;
    },
    handleClientDataDisabled(state, action) {
      state.listDisabled = action.payload;
    },
    handleDisabledClient(state, action) {
      const userIndex = state.listActive.findIndex(
        (user) => user.id === action.payload
      );
      const [client] = state.listActive.splice(userIndex, 1);
      state.listDisabled.push(client);
      state.listDisabled = updateList(state.listDisabled);
    },
    handleEnableClient(state, action) {
      const userIndex = state.listDisabled.findIndex(
        (user) => user.id === action.payload
      );
      const [client] = state.listDisabled.splice(userIndex, 1);
      state.listActive.push(client);
      state.listActive = updateList(state.listActive);
    },
    handlePostClient(state, action) {
      state.listActive.push(action.payload);
      state.listActive = updateList(state.listActive);
    },
    handlePutClient(state, action) {
      const { payload: values } = action;
      const userIndex = state.listActive.findIndex(
        (user) => user.id === values.id
      );
      state.listActive[userIndex] = values;
      state.listActive = updateList(state.listActive);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClientDataActive.fulfilled, (state, action) => {
      state.listActive = updateList(action.payload);
    });
    builder.addCase(fetchClientDataDisabled.fulfilled, (state, action) => {
      state.listDisabled = updateList(action.payload);
    });
  },
});

export const {
  handleClientDataActive,
  handleClientDataDisabled,
  handleDisabledClient,
  handleEnableClient,
  handlePostClient,
  handlePutClient,
} = clientDataSlice.actions;

export const selectClientDataActive = (state) => state.clientData.listActive;
export const selectClientDataDisabled = (state) =>
  state.clientData.listDisabled;

export default clientDataSlice.reducer;
