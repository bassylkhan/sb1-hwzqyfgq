import { create } from 'zustand';

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    cardsViewed: number;
    points: number;
    avatarUrl: string;
  } | null;
  setUser: (user: UserState['user']) => void;
  incrementCardsViewed: () => void;
  addPoints: (points: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  incrementCardsViewed: () => 
    set((state) => ({
      user: state.user ? {
        ...state.user,
        cardsViewed: state.user.cardsViewed + 1
      } : null
    })),
  addPoints: (points) =>
    set((state) => ({
      user: state.user ? {
        ...state.user,
        points: state.user.points + points
      } : null
    }))
}));