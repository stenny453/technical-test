import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export interface TechState {
  value: Array<string>
};

const initialState: TechState = {
    value: ["HTML/CSS", "React", "VueJs", "NodeJs", "Typescript", "Java", "Python", "PHP", "Go", "C#"],
};

export const techSlice = createSlice({
    name: 'tech',
    initialState,
    reducers: {
        addTech: (state, action: PayloadAction<string>) => {
            const indexNode = state.value.lastIndexOf("NodeJs");
            if (indexNode) {
                state.value.splice(indexNode + 1, 0, action.payload);
            } else {
                state.value.push(action.payload);
            }
        }
    },
});

// Action creators are generated for each case reducer function
export const { addTech } = techSlice.actions;

export const listItem = (state: RootState) => state.tech.value;

export default techSlice.reducer;