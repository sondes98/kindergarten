
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addNewEvent = createAsyncThunk(
  'events/addnewevent',
  async (info, { rejectWithValue, dispatch }) => {
    const formData = new FormData();
    formData.append('photo', info.file);
    formData.append('info', JSON.stringify(info.eventInfo));
    try {
      const res = await axios.post('http://localhost:5000/auth/events/addevent', formData, {
        headers: { token: localStorage.getItem('token') },
      });
      dispatch(getEvents());
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message
          ? error.response.data.message
          : error.response.data.errors.password.msg
      );
    }
  }
);

export const getEvents = createAsyncThunk(
  'events/getEvents',
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:5000/auth/events');

      return res.data
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.delete(`http://localhost:5000/auth/events/${info.id}`, info.data, {
        headers: { token: localStorage.getItem('token') },
      });
      dispatch(getEvents());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    loading: false,
    eventsErrors: null,
  },
  extraReducers: {
    [addNewEvent.pending]: (state) => {
      state.loading = true;
    },
    [addNewEvent.fulfilled]: (state, action) => {
      state.loading = false;
      state.eventErrors = null;
    },
    [addNewEvent.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getEvents.pending]: (state) => {
      state.loading = true;
    },
    [getEvents.fulfilled]: (state, action) => {
      state.loading = false;
      state.events = action.payload;
      state.eventsErrors = null;
    },
    [getEvents.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },

  },
});

export default eventSlice.reducer;
