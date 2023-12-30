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
} from '../actions/userActions';
import { TCurrentUser } from '../../types';

export type TUserState = {
  readonly currentUser: TCurrentUser | null;
  readonly isMobileOpen: boolean;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: TUserState = {
  currentUser: null,
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
    };
  }

  if (signOutSuccess.match(action) || deleteSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
