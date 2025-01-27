import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetNewsParams } from "../api/api";

interface NewsState extends GetNewsParams {
  allNews: any[];
  sourceTypes: any[];
  tags: any[];
  loading: boolean;
}

const initialState: NewsState = {
  loading: false,
  allNews: [],
  sourceTypes: [],
  tags: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<any[]>) => {
      state.tags = action.payload || [];
    },
    setSelectedTag: (state, action: PayloadAction<any>) => {
      state.selectedTags = action.payload || null;
    },
    setSourceTypes: (state, action: PayloadAction<any[]>) => {
      state.sourceTypes = action.payload || [];
    },
    setSelectedSourceType: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.sourceTypeId = action.payload;
    },

    filterNewsByKeyword: (state, action: PayloadAction<string>) => {
      const keyword = action.payload.toLowerCase();
      state.searchKeyword = keyword;
    },

    setSelectedDay: (
      state,
      action: PayloadAction<{ from?: string; to?: string }>
    ) => {
      state.selectedDay = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setTags,
  setSelectedTag,
  setSourceTypes,
  setSelectedSourceType,
  filterNewsByKeyword,
  setSelectedDay,
  setLoading,
} = newsSlice.actions;

export default newsSlice.reducer;
