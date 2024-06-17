import create from 'zustand';

interface State {
  example: string;
  setExample: (example: string) => void;
}

export const useStore = create<State>((set) => ({
  example: '',
  setExample: (example) => set({ example }),
}));
