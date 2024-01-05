import { AnyAction } from 'redux';

import {
  setIsMobileOpen,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signUpFailed,
  signInFailed,
  updateSuccess,
  deleteSuccess,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailed,
} from '../actions/userActions';
import { TCurrentUser } from '../../types';

export type TUserState = {
  readonly currentUser: TCurrentUser | null;
  readonly allUsers: TCurrentUser[];
  readonly isMobileOpen: boolean;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: TUserState = {
  currentUser: null,
  allUsers: [],
  isMobileOpen: false,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): TUserState => {
  if (setIsMobileOpen.match(action)) {
    return {
      ...state,
      isMobileOpen: action.payload,
    };
  }

  if (signInSuccess.match(action) || updateSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    };
  }

  if (signOutSuccess.match(action) || deleteSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      isLoading: false,
    };
  }

  if (fetchUsersStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchUsersSuccess.match(action)) {
    return {
      ...state,
      allUsers: action.payload,
      isLoading: false,
    };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action) ||
    fetchUsersFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};
