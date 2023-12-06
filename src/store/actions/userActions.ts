import { USER_ACTION_TYPE, TActionWithPayload, TAction } from './actionTypes'
import { createAction, withMatcher } from '../../utils/actions'
import { TUserData } from '../../utils/firebase'
import { User } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { TCurrentUser } from '../../types'

export type TSetIsMobileOpen = TActionWithPayload<
  typeof USER_ACTION_TYPE.SET_IS_MOBILE_OPEN,
  boolean
>

export type TCheckUserSession = TAction<
  typeof USER_ACTION_TYPE.CHECK_USER_SESSION
>

export type TGoogleSignInstart = TAction<
  typeof USER_ACTION_TYPE.GOOGLE_SIGNIN_START
>

export type TEmailSingInStart = TActionWithPayload<
  typeof USER_ACTION_TYPE.EMAIL_SIGNIN_START,
  { email: string; password: string }
>

export type TSignInSuccess = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_IN_SUCCESS,
  TCurrentUser
>

export type TSignInFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_IN_FAILED,
  FirebaseError
>

export type TSignUpStart = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_UP_START,
  {
    email: string
    password: string
    username: string
  }
>

export type TSignUpSuccess = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_UP_SUCCESS,
  { user: User; additionalInfo: { [any: string]: string } }
>

export type TSignUpFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_UP_FAILED,
  FirebaseError
>

export type TSignOutStart = TAction<typeof USER_ACTION_TYPE.SIGN_OUT_START>

export type TSignOutSuccess = TAction<typeof USER_ACTION_TYPE.SIGN_OUT_SUCCESS>

export type TSignOutFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_OUT_FAILED,
  FirebaseError
>

export const setIsMobileOpen = withMatcher(
  (bool: boolean): TSetIsMobileOpen =>
    createAction(USER_ACTION_TYPE.SET_IS_MOBILE_OPEN, bool),
)

export const checkUserSession = withMatcher(
  (): TCheckUserSession => createAction(USER_ACTION_TYPE.CHECK_USER_SESSION),
)

export const googleSignInstart = withMatcher(
  (): TGoogleSignInstart => createAction(USER_ACTION_TYPE.GOOGLE_SIGNIN_START),
)

export const emailSingInStart = withMatcher(
  (email: string, password: string): TEmailSingInStart =>
    createAction(USER_ACTION_TYPE.EMAIL_SIGNIN_START, { email, password }),
)

export const signInSuccess = withMatcher(
  (user: TCurrentUser): TSignInSuccess =>
    createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user),
)

export const signInFailed = withMatcher(
  (error: FirebaseError): TSignInFailed =>
    createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error),
)

export const signUpStart = withMatcher(
  (email: string, password: string, username: string): TSignUpStart =>
    createAction(USER_ACTION_TYPE.SIGN_UP_START, {
      email,
      password,
      username,
    }),
)

export const signUpSuccess = withMatcher(
  (user: User, additionalInfo: { [any: string]: string }): TSignUpSuccess =>
    createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalInfo }),
)

export const signUpFailed = withMatcher(
  (error: FirebaseError): TSignUpFailed =>
    createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error),
)

export const signOutStart = withMatcher(
  (): TSignOutStart => createAction(USER_ACTION_TYPE.SIGN_OUT_START),
)

export const signOutSuccess = withMatcher(
  (): TSignOutSuccess => createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS),
)

export const signOutFailed = withMatcher(
  (error: FirebaseError): TSignOutFailed =>
    createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error),
)
