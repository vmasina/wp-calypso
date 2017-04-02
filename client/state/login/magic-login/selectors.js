
export const isShowingRequestPage = state => !! state.login.magicLogin.isShowingRequestPage;
export const isShowingInterstitialPage = state => !! state.login.magicLogin.isShowingInterstitialPage;
export const isShowingExpiredPage = state => !! state.login.magicLogin.isShowingExpiredPage;
export const isShowingCheckYourEmailPage = state => !! state.login.magicLogin.isShowingCheckYourEmailPage;

export const isFetchingEmail = state => state.login.magicLogin.isFetchingEmail;
export const requestEmailError = state => state.login.magicLogin.requestEmailError;
export const requestedEmailSuccessfully = state => state.login.magicLogin.requestedEmailSuccessfully;

export const isFetchingAuth = state => state.login.magicLogin.isFetchingAuth;
export const requestAuthError = state => state.login.magicLogin.requestAuthError;
export const requestAuthStatus = state => state.login.magicLogin.requestAuthStatus;

export const emailAddressFormInput = state => state.login.magicLogin.emailAddressFormInput;
export const emailAddressFormInputIsValid = state => state.login.magicLogin.emailAddressFormInputIsValid;
