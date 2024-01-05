import { createSelector } from 'reselect';
import { TUserState } from '../reducers/userReducer';
import { TRootState } from '../store';

const selectUserReducer = (state: TRootState): TUserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const selectAllUsers = createSelector(
  [selectUserReducer],
  (user) => user.allUsers
);

export const selectIsLoading = createSelector(
  [selectUserReducer],
  (user) => user.isLoading
);

export const selectIsMobileOpen = createSelector(
  [selectUserReducer],
  (user) => user.isMobileOpen
);
