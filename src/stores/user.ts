import { defineStore } from 'pinia';
import { EUserRole } from 'src/enums/userTypes.enum';
import { IUser } from 'src/models/user.model';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as IUser,
  }),
  getters: {
    getUser: (state) => state.user,
    isExpert: (state) => state.user?.role === EUserRole.Expert,
    isLoggedIn: (state) => !!state.user?.id,
    isOperator: (state) => state.user?.role === EUserRole.Operator,
    roleName: (state) => state.user?.role,
    isStudent: (state) => state.user?.role === EUserRole.Student,
  },
  actions: {
    setUser(user: IUser) {
      this.user = user;
    },
    logout() {
      this.user = {} as IUser;
    },
  },
});