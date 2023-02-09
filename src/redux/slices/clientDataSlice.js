import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockApi from "../../utils/mockApi";

const initialState = {
  listDisabled: [],
  listActive: [],
};

export const fetchClientDataActive = createAsyncThunk(
  "clientData/fetchClientDataActive",
  async () => {
    try {
      const response = await mockApi("active"); // TODO: requisição a API
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
      const response = await mockApi("disabled"); // TODO: requisição a API
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
      const [client] = state.listActive.splice(action.payload, 1);
      state.listDisabled.push(client);
    },
    handleEnableClient(state, action) {
      const [client] = state.listDisabled.splice(action.payload, 1);
      state.listActive.push(client);
    },
    handlePostClient(state, action) {
      state.listActive.push(action.payload);
    },
    handlePutClient(state, action) {
      const { index, values } = action.payload;
      state.listActive[index] = values;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClientDataActive.fulfilled, (state, action) => {
      state.listActive = action.payload;
    });
    builder.addCase(fetchClientDataDisabled.fulfilled, (state, action) => {
      state.listDisabled = action.payload;
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
