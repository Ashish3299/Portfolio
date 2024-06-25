// store/slices/experienceSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperienceDocument } from "../../../prismicio-types";

interface ExperienceState {
  items: ExperienceDocument[];
}

const initialState: ExperienceState = {
  items: [],
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExperience: (state, action: PayloadAction<ExperienceDocument[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setExperience } = experienceSlice.actions;

export default experienceSlice.reducer;
