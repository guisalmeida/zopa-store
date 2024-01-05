import { takeLatest, all, call, put } from 'typed-redux-saga';
import { toast } from 'react-toastify';

import {
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signUpSuccess,
  signUpFailed,
  TSignInStart,
  TSignUpStart,
  TSignInFailed,
  TSignOutFailed,
  TSignUpFailed,
  TUpdateStart,
  updateSuccess,
  deleteSuccess,
  updateFailed,
  fetchUsersFailed,
  fetchUsersSuccess,
  TDeleteStart,
} from '../actions/userActions';

import {
  deleteUser,
  getUsersList,
  signInUser,
  signUpUser,
  updateUser,
} from '../../utils/api';
import axios, { AxiosError } from 'axios';
import { TCurrentUser } from '../../types';

export function* fetchUsersSaga() {
  try {
    const users = yield* call(getUsersList);

    if (axios.isAxiosError(users)) {
      yield* put(fetchUsersFailed(users.response?.data as AxiosError));
    } else if (users) {
      yield* put(fetchUsersSuccess(users as TCurrentUser[]));
    }
  } catch (error) {
    yield* put(fetchUsersFailed(error as AxiosError));
  }
}

export function* onFetchUsers() {
  yield* takeLatest('FETCH_USERS_START', fetchUsersSaga);
}

export function* signInSaga({ payload: { email, password } }: TSignInStart) {
  try {
    const res = yield* call(signInUser, email, password);

    if (axios.isAxiosError(res)) {
      yield* put(signInFailed(res.response?.data as AxiosError));
    } else if (res.status === 200) {
      const user = res.data;
      yield* put(signInSuccess(user));
      yield* call(showSuccessToast, 'Usuário logado com sucesso!');
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onSignInStart() {
  yield* takeLatest('SIGN_IN_START', signInSaga);
}

export function* signUpSaga({
  payload: { email, phone, password, username, isAdmin },
}: TSignUpStart) {
  try {
    const res = yield* call(
      signUpUser,
      username,
      email,
      phone,
      password,
      isAdmin
    );

    if (axios.isAxiosError(res)) {
      yield* put(signUpFailed(res.response?.data as AxiosError));
    } else if (res.status === 201) {
      const user = res.data;
      yield* put(signUpSuccess(user));
      yield* call(showSuccessToast, 'Usuário cadastrado com sucesso!');
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* onSignUpStart() {
  yield* takeLatest('SIGN_UP_START', signUpSaga);
}

export function* updateUserSaga({
  payload: { _id, username, phone, isAdmin },
}: TUpdateStart) {
  try {
    const res = yield* call(
      updateUser,
      _id as string,
      username,
      phone,
      isAdmin
    );
    if (axios.isAxiosError(res)) {
      yield* put(updateFailed(res.response?.data as AxiosError));
    } else if (res.data) {
      yield* put(updateSuccess(res.data));
    }
  } catch (error) {
    yield* put(updateFailed(error as Error));
  }
}

export function* onUpdateStart() {
  yield* takeLatest('UPDATE_START', updateUserSaga);
}

export function* signOutSaga() {
  try {
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onSignOutStart() {
  yield* takeLatest('SIGN_OUT_START', signOutSaga);
}

export function* deleteUserSaga({ payload: { userId } }: TDeleteStart) {
  try {
    const res = yield* call(deleteUser, userId);
    if (axios.isAxiosError(res)) {
      yield* put(signInFailed(res.response?.data as AxiosError));
    } else if (res.data) {
      yield* put(deleteSuccess());
    }
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onDeleteStart() {
  yield* takeLatest('DELETE_START', deleteUserSaga);
}

const showSuccessToast = (msg: string) => {
  return toast.success(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: false,
  });
};

const showErrorToast = (error: Error) => {
  return toast.error(error.message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: false,
  });
};

export function* showError({
  payload,
}: TSignInFailed | TSignOutFailed | TSignUpFailed) {
  yield* call(showErrorToast, payload);
}

export function* onSignInFailed() {
  yield* takeLatest('SIGN_IN_FAILED', showError);
}

export function* onSignUpFailed() {
  yield* takeLatest('SIGN_UP_FAILED', showError);
}

export function* onSignOutFailed() {
  yield* takeLatest('SIGN_OUT_FAILED', showError);
}

export function* onDeleteFailed() {
  yield* takeLatest('DELETE_FAILED', showError);
}

// export function* isUserAuthenticated() {
//   try {
//     const isUserAuth = yield* call(verifyToken, 'token')
//     if (isUserAuth.name === 'TokenExpiredError') {
//       yield* put(signInFailed(isUserAuth.message as VerifyErrors))
//     }
//   } catch (error) {
//     yield* put(signInFailed(error as AxiosError))
//   }
// }

// export function* onCheckUserSession() {
//   yield* takeLatest('CHECK_USER_SESSION', isUserAuthenticated)
// }

export function* userSaga() {
  yield* all([
    call(onUpdateStart),
    call(onDeleteStart),
    call(onSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onSignInFailed),
    call(onSignUpFailed),
    call(onSignOutFailed),
    call(onDeleteFailed),
    call(onFetchUsers),
  ]);
}
