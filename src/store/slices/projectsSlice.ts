// store/slices/projectsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperienceDocument, ProjectDocument } from "../../../prismicio-types";

interface ProjectsState {
  items: ProjectDocument[];
}

const initialState: ProjectsState = {
  items: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<ProjectDocument[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
