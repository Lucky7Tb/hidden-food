/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@supabase/gotrue-js/dist/module/GoTrueApi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/GoTrueApi.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoTrueApi)
/* harmony export */ });
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fetch */ "./node_modules/@supabase/gotrue-js/dist/module/lib/fetch.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/constants */ "./node_modules/@supabase/gotrue-js/dist/module/lib/constants.js");
/* harmony import */ var _lib_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/cookies */ "./node_modules/@supabase/gotrue-js/dist/module/lib/cookies.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/helpers */ "./node_modules/@supabase/gotrue-js/dist/module/lib/helpers.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class GoTrueApi {
    constructor({ url = '', headers = {}, cookieOptions, fetch, }) {
        this.url = url;
        this.headers = headers;
        this.cookieOptions = Object.assign(Object.assign({}, _lib_constants__WEBPACK_IMPORTED_MODULE_1__.COOKIE_OPTIONS), cookieOptions);
        this.fetch = fetch;
    }
    /**
     * Creates a new user.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     *
     * @param attributes The data you want to create the user with.
     * @param jwt A valid JWT. Must be a full-access API key (e.g. service_role key).
     */
    createUser(attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/admin/users`, attributes, {
                    headers: this.headers,
                });
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.get)(this.fetch, `${this.url}/admin/users`, {
                    headers: this.headers,
                });
                return { data: data.users, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Creates a new user using their email address.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param data Optional user metadata.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */
    signUpWithEmail(email, password, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = '';
                if (options.redirectTo) {
                    queryString = '?redirect_to=' + encodeURIComponent(options.redirectTo);
                }
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/signup${queryString}`, { email, password, data: options.data }, { headers });
                const session = Object.assign({}, data);
                if (session.expires_in)
                    session.expires_at = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_3__.expiresAt)(data.expires_in);
                return { data: session, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Logs in an existing user using their email address.
     * @param email The email address of the user.
     * @param password The password of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    signInWithEmail(email, password, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = '?grant_type=password';
                if (options.redirectTo) {
                    queryString += '&redirect_to=' + encodeURIComponent(options.redirectTo);
                }
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/token${queryString}`, { email, password }, { headers });
                const session = Object.assign({}, data);
                if (session.expires_in)
                    session.expires_at = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_3__.expiresAt)(data.expires_in);
                return { data: session, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Signs up a new user using their phone number and a password.
     * @param phone The phone number of the user.
     * @param password The password of the user.
     * @param data Optional user metadata.
     */
    signUpWithPhone(phone, password, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/signup`, { phone, password, data: options.data }, { headers });
                const session = Object.assign({}, data);
                if (session.expires_in)
                    session.expires_at = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_3__.expiresAt)(data.expires_in);
                return { data: session, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Logs in an existing user using their phone number and password.
     * @param phone The phone number of the user.
     * @param password The password of the user.
     */
    signInWithPhone(phone, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                const queryString = '?grant_type=password';
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/token${queryString}`, { phone, password }, { headers });
                const session = Object.assign({}, data);
                if (session.expires_in)
                    session.expires_at = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_3__.expiresAt)(data.expires_in);
                return { data: session, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Sends a magic login link to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    sendMagicLinkEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = '';
                if (options.redirectTo) {
                    queryString += '?redirect_to=' + encodeURIComponent(options.redirectTo);
                }
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/magiclink${queryString}`, { email }, { headers });
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Sends a mobile OTP via SMS. Will register the account if it doesn't already exist
     * @param phone The user's phone number WITH international prefix
     */
    sendMobileOTP(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/otp`, { phone }, { headers });
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Send User supplied Mobile OTP to be verified
     * @param phone The user's phone number WITH international prefix
     * @param token token that user was sent to their mobile phone
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    verifyMobileOTP(phone, token, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/verify`, { phone, token, type: 'sms', redirect_to: options.redirectTo }, { headers });
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param data Optional user metadata
     */
    inviteUserByEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = '';
                if (options.redirectTo) {
                    queryString += '?redirect_to=' + encodeURIComponent(options.redirectTo);
                }
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/invite${queryString}`, { email, data: options.data }, { headers });
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Sends a reset request to an email address.
     * @param email The email address of the user.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    resetPasswordForEmail(email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = Object.assign({}, this.headers);
                let queryString = '';
                if (options.redirectTo) {
                    queryString += '?redirect_to=' + encodeURIComponent(options.redirectTo);
                }
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/recover${queryString}`, { email }, { headers });
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Create a temporary object with all configured headers and
     * adds the Authorization token to be used on request methods
     * @param jwt A valid, logged-in JWT.
     */
    _createRequestHeaders(jwt) {
        const headers = Object.assign({}, this.headers);
        headers['Authorization'] = `Bearer ${jwt}`;
        return headers;
    }
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     */
    signOut(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/logout`, {}, { headers: this._createRequestHeaders(jwt), noResolveJson: true });
                return { error: null };
            }
            catch (e) {
                return { error: e };
            }
        });
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param provider One of the providers supported by GoTrue.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */
    getUrlForProvider(provider, options) {
        const urlParams = [`provider=${encodeURIComponent(provider)}`];
        if (options === null || options === void 0 ? void 0 : options.redirectTo) {
            urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
        }
        if (options === null || options === void 0 ? void 0 : options.scopes) {
            urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
        }
        return `${this.url}/authorize?${urlParams.join('&')}`;
    }
    /**
     * Gets the user details.
     * @param jwt A valid, logged-in JWT.
     */
    getUser(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.get)(this.fetch, `${this.url}/user`, {
                    headers: this._createRequestHeaders(jwt),
                });
                return { user: data, data, error: null };
            }
            catch (e) {
                return { user: null, data: null, error: e };
            }
        });
    }
    /**
     * Updates the user data.
     * @param jwt A valid, logged-in JWT.
     * @param attributes The data you want to update.
     */
    updateUser(jwt, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.put)(this.fetch, `${this.url}/user`, attributes, {
                    headers: this._createRequestHeaders(jwt),
                });
                return { user: data, data, error: null };
            }
            catch (e) {
                return { user: null, data: null, error: e };
            }
        });
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     *
     * @param uid The user uid you want to remove.
     * @param jwt A valid JWT. Must be a full-access API key (e.g. service_role key).
     */
    deleteUser(uid, jwt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.remove)(this.fetch, `${this.url}/admin/users/${uid}`, {}, {
                    headers: this._createRequestHeaders(jwt),
                });
                return { user: data, data, error: null };
            }
            catch (e) {
                return { user: null, data: null, error: e };
            }
        });
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */
    refreshAccessToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/token?grant_type=refresh_token`, { refresh_token: refreshToken }, { headers: this.headers });
                const session = Object.assign({}, data);
                if (session.expires_in)
                    session.expires_at = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_3__.expiresAt)(data.expires_in);
                return { data: session, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Set/delete the auth cookie based on the AuthChangeEvent.
     * Works for Next.js & Express (requires cookie-parser middleware).
     */
    setAuthCookie(req, res) {
        if (req.method !== 'POST') {
            res.setHeader('Allow', 'POST');
            res.status(405).end('Method Not Allowed');
        }
        const { event, session } = req.body;
        if (!event)
            throw new Error('Auth event missing!');
        if (event === 'SIGNED_IN') {
            if (!session)
                throw new Error('Auth session missing!');
            (0,_lib_cookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(req, res, {
                name: this.cookieOptions.name,
                value: session.access_token,
                domain: this.cookieOptions.domain,
                maxAge: this.cookieOptions.lifetime,
                path: this.cookieOptions.path,
                sameSite: this.cookieOptions.sameSite,
            });
        }
        if (event === 'SIGNED_OUT')
            (0,_lib_cookies__WEBPACK_IMPORTED_MODULE_2__.deleteCookie)(req, res, this.cookieOptions.name);
        res.status(200).json({});
    }
    /**
     * Get user by reading the cookie from the request.
     * Works for Next.js & Express (requires cookie-parser middleware).
     */
    getUserByCookie(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.cookies) {
                    throw new Error('Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!');
                }
                if (!req.cookies[this.cookieOptions.name]) {
                    throw new Error('No cookie found!');
                }
                const token = req.cookies[this.cookieOptions.name];
                const { user, error } = yield this.getUser(token);
                if (error)
                    throw error;
                return { token, user, data: user, error: null };
            }
            catch (e) {
                return { token: null, user: null, data: null, error: e };
            }
        });
    }
    /**
     * Generates links to be sent via email or other.
     * @param type The link type ("signup" or "magiclink" or "recovery" or "invite").
     * @param email The user's email.
     * @param password User password. For signup only.
     * @param data Optional user metadata. For signup only.
     * @param redirectTo The link type ("signup" or "magiclink" or "recovery" or "invite").
     */
    generateLink(type, email, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_0__.post)(this.fetch, `${this.url}/admin/generate_link`, {
                    type,
                    email,
                    password: options.password,
                    data: options.data,
                    redirect_to: options.redirectTo,
                }, { headers: this.headers });
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
}
//# sourceMappingURL=GoTrueApi.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/GoTrueClient.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/GoTrueClient.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoTrueClient)
/* harmony export */ });
/* harmony import */ var _GoTrueApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoTrueApi */ "./node_modules/@supabase/gotrue-js/dist/module/GoTrueApi.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/helpers */ "./node_modules/@supabase/gotrue-js/dist/module/lib/helpers.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/constants */ "./node_modules/@supabase/gotrue-js/dist/module/lib/constants.js");
/* harmony import */ var _lib_polyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/polyfills */ "./node_modules/@supabase/gotrue-js/dist/module/lib/polyfills.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




(0,_lib_polyfills__WEBPACK_IMPORTED_MODULE_3__.polyfillGlobalThis)(); // Make "globalThis" available
const DEFAULT_OPTIONS = {
    url: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.GOTRUE_URL,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_HEADERS,
};
class GoTrueClient {
    /**
     * Create a new client for use in the browser.
     * @param options.url The URL of the GoTrue server.
     * @param options.headers Any additional headers to send to the GoTrue server.
     * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.localStorage
     * @param options.cookieOptions
     * @param options.fetch A custom fetch implementation.
     */
    constructor(options) {
        this.stateChangeEmitters = new Map();
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.currentUser = null;
        this.currentSession = null;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.persistSession = settings.persistSession;
        this.localStorage = settings.localStorage || globalThis.localStorage;
        this.api = new _GoTrueApi__WEBPACK_IMPORTED_MODULE_0__["default"]({
            url: settings.url,
            headers: settings.headers,
            cookieOptions: settings.cookieOptions,
            fetch: settings.fetch,
        });
        this._recoverSession();
        this._recoverAndRefresh();
        // Handle the OAuth redirect
        if (settings.detectSessionInUrl && (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.isBrowser)() && !!(0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('access_token')) {
            this.getSessionFromUrl({ storeSession: true }).then(({ error }) => {
                if (error) {
                    console.error('Error getting session from URL.', error);
                }
            });
        }
    }
    /**
     * Creates a new user.
     * @type UserCredentials
     * @param email The user's email address.
     * @param password The user's password.
     * @param phone The user's phone number.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param data Optional user metadata.
     */
    signUp({ email, password, phone }, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this._removeSession();
                const { data, error } = phone && password
                    ? yield this.api.signUpWithPhone(phone, password, {
                        data: options.data,
                    })
                    : yield this.api.signUpWithEmail(email, password, {
                        redirectTo: options.redirectTo,
                        data: options.data,
                    });
                if (error) {
                    throw error;
                }
                if (!data) {
                    throw 'An error occurred on sign up.';
                }
                let session = null;
                let user = null;
                if (data.access_token) {
                    session = data;
                    user = session.user;
                    this._saveSession(session);
                    this._notifyAllSubscribers('SIGNED_IN');
                }
                if (data.id) {
                    user = data;
                }
                return { user, session, error: null };
            }
            catch (e) {
                return { user: null, session: null, error: e };
            }
        });
    }
    /**
     * Log in an existing user, or login via a third-party provider.
     * @type UserCredentials
     * @param email The user's email address.
     * @param password The user's password.
     * @param refreshToken A valid refresh token that was returned on login.
     * @param provider One of the providers supported by GoTrue.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */
    signIn({ email, phone, password, refreshToken, provider }, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this._removeSession();
                if (email && !password) {
                    const { error } = yield this.api.sendMagicLinkEmail(email, {
                        redirectTo: options.redirectTo,
                    });
                    return { user: null, session: null, error };
                }
                if (email && password) {
                    return this._handleEmailSignIn(email, password, {
                        redirectTo: options.redirectTo,
                    });
                }
                if (phone && !password) {
                    const { error } = yield this.api.sendMobileOTP(phone);
                    return { user: null, session: null, error };
                }
                if (phone && password) {
                    return this._handlePhoneSignIn(phone, password);
                }
                if (refreshToken) {
                    // currentSession and currentUser will be updated to latest on _callRefreshToken using the passed refreshToken
                    const { error } = yield this._callRefreshToken(refreshToken);
                    if (error)
                        throw error;
                    return {
                        user: this.currentUser,
                        session: this.currentSession,
                        error: null,
                    };
                }
                if (provider) {
                    return this._handleProviderSignIn(provider, {
                        redirectTo: options.redirectTo,
                        scopes: options.scopes,
                    });
                }
                throw new Error(`You must provide either an email, phone number or a third-party provider.`);
            }
            catch (e) {
                return { user: null, session: null, error: e };
            }
        });
    }
    /**
     * Log in a user given a User supplied OTP received via mobile.
     * @param phone The user's phone number.
     * @param token The user's password.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    verifyOTP({ phone, token }, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this._removeSession();
                const { data, error } = yield this.api.verifyMobileOTP(phone, token, options);
                if (error) {
                    throw error;
                }
                if (!data) {
                    throw 'An error occurred on token verification.';
                }
                let session = null;
                let user = null;
                if (data.access_token) {
                    session = data;
                    user = session.user;
                    this._saveSession(session);
                    this._notifyAllSubscribers('SIGNED_IN');
                }
                if (data.id) {
                    user = data;
                }
                return { user, session, error: null };
            }
            catch (e) {
                return { user: null, session: null, error: e };
            }
        });
    }
    /**
     * Inside a browser context, `user()` will return the user data, if there is a logged in user.
     *
     * For server-side management, you can get a user through `auth.api.getUserByCookie()`
     */
    user() {
        return this.currentUser;
    }
    /**
     * Returns the session data, if there is an active session.
     */
    session() {
        return this.currentSession;
    }
    /**
     * Force refreshes the session including the user data in case it was updated in a different session.
     */
    refreshSession() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
                    throw new Error('Not logged in.');
                // currentSession and currentUser will be updated to latest on _callRefreshToken
                const { error } = yield this._callRefreshToken();
                if (error)
                    throw error;
                return { data: this.currentSession, user: this.currentUser, error: null };
            }
            catch (e) {
                return { data: null, user: null, error: e };
            }
        });
    }
    /**
     * Updates user data, if there is a logged in user.
     */
    update(attributes) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
                    throw new Error('Not logged in.');
                const { user, error } = yield this.api.updateUser(this.currentSession.access_token, attributes);
                if (error)
                    throw error;
                if (!user)
                    throw Error('Invalid user data.');
                const session = Object.assign(Object.assign({}, this.currentSession), { user });
                this._saveSession(session);
                this._notifyAllSubscribers('USER_UPDATED');
                return { data: user, user, error: null };
            }
            catch (e) {
                return { data: null, user: null, error: e };
            }
        });
    }
    /**
     * Sets the session data from refresh_token and returns current Session and Error
     * @param refresh_token a JWT token
     */
    setSession(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!refresh_token) {
                    throw new Error('No current session.');
                }
                const { data, error } = yield this.api.refreshAccessToken(refresh_token);
                if (error) {
                    return { session: null, error: error };
                }
                this._saveSession(data);
                this._notifyAllSubscribers('SIGNED_IN');
                return { session: data, error: null };
            }
            catch (e) {
                return { error: e, session: null };
            }
        });
    }
    /**
     * Overrides the JWT on the current client. The JWT will then be sent in all subsequent network requests.
     * @param access_token a jwt access token
     */
    setAuth(access_token) {
        this.currentSession = Object.assign(Object.assign({}, this.currentSession), { access_token, token_type: 'bearer', user: null });
        return this.currentSession;
    }
    /**
     * Gets the session data from a URL string
     * @param options.storeSession Optionally store the session in the browser
     */
    getSessionFromUrl(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.isBrowser)())
                    throw new Error('No browser detected.');
                const error_description = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('error_description');
                if (error_description)
                    throw new Error(error_description);
                const provider_token = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('provider_token');
                const access_token = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('access_token');
                if (!access_token)
                    throw new Error('No access_token detected.');
                const expires_in = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('expires_in');
                if (!expires_in)
                    throw new Error('No expires_in detected.');
                const refresh_token = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('refresh_token');
                if (!refresh_token)
                    throw new Error('No refresh_token detected.');
                const token_type = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('token_type');
                if (!token_type)
                    throw new Error('No token_type detected.');
                const timeNow = Math.round(Date.now() / 1000);
                const expires_at = timeNow + parseInt(expires_in);
                const { user, error } = yield this.api.getUser(access_token);
                if (error)
                    throw error;
                const session = {
                    provider_token,
                    access_token,
                    expires_in: parseInt(expires_in),
                    expires_at,
                    refresh_token,
                    token_type,
                    user: user,
                };
                if (options === null || options === void 0 ? void 0 : options.storeSession) {
                    this._saveSession(session);
                    const recoveryMode = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.getParameterByName)('type');
                    this._notifyAllSubscribers('SIGNED_IN');
                    if (recoveryMode === 'recovery') {
                        this._notifyAllSubscribers('PASSWORD_RECOVERY');
                    }
                }
                // Remove tokens from URL
                window.location.hash = '';
                return { data: session, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session
     * and log them out - removing all items from localstorage and then trigger a "SIGNED_OUT" event.
     *
     * For server-side management, you can disable sessions by passing a JWT through to `auth.api.signOut(JWT: string)`
     */
    signOut() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token;
            this._removeSession();
            this._notifyAllSubscribers('SIGNED_OUT');
            if (accessToken) {
                const { error } = yield this.api.signOut(accessToken);
                if (error)
                    return { error };
            }
            return { error: null };
        });
    }
    /**
     * Receive a notification every time an auth event happens.
     * @returns {Subscription} A subscription object which can be used to unsubscribe itself.
     */
    onAuthStateChange(callback) {
        try {
            const id = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.uuid)();
            const subscription = {
                id,
                callback,
                unsubscribe: () => {
                    this.stateChangeEmitters.delete(id);
                },
            };
            this.stateChangeEmitters.set(id, subscription);
            return { data: subscription, error: null };
        }
        catch (e) {
            return { data: null, error: e };
        }
    }
    _handleEmailSignIn(email, password, options = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error } = yield this.api.signInWithEmail(email, password, {
                    redirectTo: options.redirectTo,
                });
                if (error || !data)
                    return { data: null, user: null, session: null, error };
                if (((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.confirmed_at) || ((_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.email_confirmed_at)) {
                    this._saveSession(data);
                    this._notifyAllSubscribers('SIGNED_IN');
                }
                return { data, user: data.user, session: data, error: null };
            }
            catch (e) {
                return { data: null, user: null, session: null, error: e };
            }
        });
    }
    _handlePhoneSignIn(phone, password) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error } = yield this.api.signInWithPhone(phone, password);
                if (error || !data)
                    return { data: null, user: null, session: null, error };
                if ((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.phone_confirmed_at) {
                    this._saveSession(data);
                    this._notifyAllSubscribers('SIGNED_IN');
                }
                return { data, user: data.user, session: data, error: null };
            }
            catch (e) {
                return { data: null, user: null, session: null, error: e };
            }
        });
    }
    _handleProviderSignIn(provider, options = {}) {
        const url = this.api.getUrlForProvider(provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes,
        });
        try {
            // try to open on the browser
            if ((0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.isBrowser)()) {
                window.location.href = url;
            }
            return { provider, url, data: null, session: null, user: null, error: null };
        }
        catch (e) {
            // fallback to returning the URL
            if (url)
                return { provider, url, data: null, session: null, user: null, error: null };
            return { data: null, user: null, session: null, error: e };
        }
    }
    /**
     * Attempts to get the session from LocalStorage
     * Note: this should never be async (even for React Native), as we need it to return immediately in the constructor.
     */
    _recoverSession() {
        var _a;
        try {
            const json = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.isBrowser)() && ((_a = this.localStorage) === null || _a === void 0 ? void 0 : _a.getItem(_lib_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE_KEY));
            if (!json || typeof json !== 'string') {
                return null;
            }
            const data = JSON.parse(json);
            const { currentSession, expiresAt } = data;
            const timeNow = Math.round(Date.now() / 1000);
            if (expiresAt >= timeNow && (currentSession === null || currentSession === void 0 ? void 0 : currentSession.user)) {
                this._saveSession(currentSession);
                this._notifyAllSubscribers('SIGNED_IN');
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */
    _recoverAndRefresh() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const json = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.isBrowser)() && (yield this.localStorage.getItem(_lib_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE_KEY));
                if (!json) {
                    return null;
                }
                const data = JSON.parse(json);
                const { currentSession, expiresAt } = data;
                const timeNow = Math.round(Date.now() / 1000);
                if (expiresAt < timeNow) {
                    if (this.autoRefreshToken && currentSession.refresh_token) {
                        const { error } = yield this._callRefreshToken(currentSession.refresh_token);
                        if (error) {
                            console.log(error.message);
                            yield this._removeSession();
                        }
                    }
                    else {
                        this._removeSession();
                    }
                }
                else if (!currentSession || !currentSession.user) {
                    console.log('Current session is missing data.');
                    this._removeSession();
                }
                else {
                    // should be handled on _recoverSession method already
                    // But we still need the code here to accommodate for AsyncStorage e.g. in React native
                    this._saveSession(currentSession);
                    this._notifyAllSubscribers('SIGNED_IN');
                }
            }
            catch (err) {
                console.error(err);
                return null;
            }
        });
    }
    _callRefreshToken(refresh_token) {
        var _a;
        if (refresh_token === void 0) { refresh_token = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.refresh_token; }
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!refresh_token) {
                    throw new Error('No current session.');
                }
                const { data, error } = yield this.api.refreshAccessToken(refresh_token);
                if (error)
                    throw error;
                if (!data)
                    throw Error('Invalid session data.');
                this._saveSession(data);
                this._notifyAllSubscribers('TOKEN_REFRESHED');
                this._notifyAllSubscribers('SIGNED_IN');
                return { data, error: null };
            }
            catch (e) {
                return { data: null, error: e };
            }
        });
    }
    _notifyAllSubscribers(event) {
        this.stateChangeEmitters.forEach((x) => x.callback(event, this.currentSession));
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */
    _saveSession(session) {
        this.currentSession = session;
        this.currentUser = session.user;
        const expiresAt = session.expires_at;
        if (expiresAt) {
            const timeNow = Math.round(Date.now() / 1000);
            const expiresIn = expiresAt - timeNow;
            const refreshDurationBeforeExpires = expiresIn > 60 ? 60 : 0.5;
            this._startAutoRefreshToken((expiresIn - refreshDurationBeforeExpires) * 1000);
        }
        // Do we need any extra check before persist session
        // access_token or user ?
        if (this.persistSession && session.expires_at) {
            this._persistSession(this.currentSession);
        }
    }
    _persistSession(currentSession) {
        const data = { currentSession, expiresAt: currentSession.expires_at };
        (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.isBrowser)() && this.localStorage.setItem(_lib_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE_KEY, JSON.stringify(data));
    }
    _removeSession() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentSession = null;
            this.currentUser = null;
            if (this.refreshTokenTimer)
                clearTimeout(this.refreshTokenTimer);
            (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.isBrowser)() && (yield this.localStorage.removeItem(_lib_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE_KEY));
        });
    }
    /**
     * Clear and re-create refresh token timer
     * @param value time intervals in milliseconds
     */
    _startAutoRefreshToken(value) {
        if (this.refreshTokenTimer)
            clearTimeout(this.refreshTokenTimer);
        if (value <= 0 || !this.autoRefreshToken)
            return;
        this.refreshTokenTimer = setTimeout(() => this._callRefreshToken(), value);
        if (typeof this.refreshTokenTimer.unref === 'function')
            this.refreshTokenTimer.unref();
    }
}
//# sourceMappingURL=GoTrueClient.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoTrueApi": () => (/* reexport safe */ _GoTrueApi__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "GoTrueClient": () => (/* reexport safe */ _GoTrueClient__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _GoTrueApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoTrueApi */ "./node_modules/@supabase/gotrue-js/dist/module/GoTrueApi.js");
/* harmony import */ var _GoTrueClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoTrueClient */ "./node_modules/@supabase/gotrue-js/dist/module/GoTrueClient.js");
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/types */ "./node_modules/@supabase/gotrue-js/dist/module/lib/types.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/lib/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/lib/constants.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GOTRUE_URL": () => (/* binding */ GOTRUE_URL),
/* harmony export */   "AUDIENCE": () => (/* binding */ AUDIENCE),
/* harmony export */   "DEFAULT_HEADERS": () => (/* binding */ DEFAULT_HEADERS),
/* harmony export */   "EXPIRY_MARGIN": () => (/* binding */ EXPIRY_MARGIN),
/* harmony export */   "STORAGE_KEY": () => (/* binding */ STORAGE_KEY),
/* harmony export */   "COOKIE_OPTIONS": () => (/* binding */ COOKIE_OPTIONS)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@supabase/gotrue-js/dist/module/lib/version.js");

const GOTRUE_URL = 'http://localhost:9999';
const AUDIENCE = '';
const DEFAULT_HEADERS = { 'X-Client-Info': `gotrue-js/${_version__WEBPACK_IMPORTED_MODULE_0__.version}` };
const EXPIRY_MARGIN = 60 * 1000;
const STORAGE_KEY = 'supabase.auth.token';
const COOKIE_OPTIONS = {
    name: 'sb:token',
    lifetime: 60 * 60 * 8,
    domain: '',
    path: '/',
    sameSite: 'lax',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/lib/cookies.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/lib/cookies.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCookies": () => (/* binding */ setCookies),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie)
/* harmony export */ });
/**
 * Serialize data into a cookie header.
 */
function serialize(name, val, options) {
    const opt = options || {};
    const enc = encodeURIComponent;
    /* eslint-disable-next-line no-control-regex */
    const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    if (typeof enc !== 'function') {
        throw new TypeError('option encode is invalid');
    }
    if (!fieldContentRegExp.test(name)) {
        throw new TypeError('argument name is invalid');
    }
    const value = enc(val);
    if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError('argument val is invalid');
    }
    let str = name + '=' + value;
    if (null != opt.maxAge) {
        const maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
            throw new TypeError('option maxAge is invalid');
        }
        str += '; Max-Age=' + Math.floor(maxAge);
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError('option domain is invalid');
        }
        str += '; Domain=' + opt.domain;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError('option path is invalid');
        }
        str += '; Path=' + opt.path;
    }
    if (opt.expires) {
        if (typeof opt.expires.toUTCString !== 'function') {
            throw new TypeError('option expires is invalid');
        }
        str += '; Expires=' + opt.expires.toUTCString();
    }
    if (opt.httpOnly) {
        str += '; HttpOnly';
    }
    if (opt.secure) {
        str += '; Secure';
    }
    if (opt.sameSite) {
        const sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
            case 'lax':
                str += '; SameSite=Lax';
                break;
            case 'strict':
                str += '; SameSite=Strict';
                break;
            case 'none':
                str += '; SameSite=None';
                break;
            default:
                throw new TypeError('option sameSite is invalid');
        }
    }
    return str;
}
/**
 * Based on the environment and the request we know if a secure cookie can be set.
 */
function isSecureEnvironment(req) {
    if (!req || !req.headers || !req.headers.host) {
        throw new Error('The "host" request header is not available');
    }
    const host = (req.headers.host.indexOf(':') > -1 && req.headers.host.split(':')[0]) || req.headers.host;
    if (['localhost', '127.0.0.1'].indexOf(host) > -1 || host.endsWith('.local')) {
        return false;
    }
    return true;
}
/**
 * Serialize a cookie to a string.
 */
function serializeCookie(cookie, secure) {
    var _a, _b, _c;
    return serialize(cookie.name, cookie.value, {
        maxAge: cookie.maxAge,
        expires: new Date(Date.now() + cookie.maxAge * 1000),
        httpOnly: true,
        secure,
        path: (_a = cookie.path) !== null && _a !== void 0 ? _a : '/',
        domain: (_b = cookie.domain) !== null && _b !== void 0 ? _b : '',
        sameSite: (_c = cookie.sameSite) !== null && _c !== void 0 ? _c : 'lax',
    });
}
/**
 * Set one or more cookies.
 */
function setCookies(req, res, cookies) {
    const strCookies = cookies.map((c) => serializeCookie(c, isSecureEnvironment(req)));
    const previousCookies = res.getHeader('Set-Cookie');
    if (previousCookies) {
        if (previousCookies instanceof Array) {
            Array.prototype.push.apply(strCookies, previousCookies);
        }
        else if (typeof previousCookies === 'string') {
            strCookies.push(previousCookies);
        }
    }
    res.setHeader('Set-Cookie', strCookies);
}
/**
 * Set one or more cookies.
 */
function setCookie(req, res, cookie) {
    setCookies(req, res, [cookie]);
}
function deleteCookie(req, res, name) {
    setCookie(req, res, {
        name,
        value: '',
        maxAge: -1,
    });
}
//# sourceMappingURL=cookies.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/lib/fetch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/lib/fetch.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "put": () => (/* binding */ put),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject) => {
    if (typeof error.json !== 'function') {
        return reject(error);
    }
    error.json().then((err) => {
        return reject({
            message: _getErrorMessage(err),
            status: (error === null || error === void 0 ? void 0 : error.status) || 500,
        });
    });
};
const _getRequestParams = (method, options, body) => {
    const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
    if (method === 'GET') {
        return params;
    }
    params.headers = Object.assign({ 'Content-Type': 'text/plain;charset=UTF-8' }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return params;
};
function _handleRequest(fetcher = (cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()), method, url, options, body) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fetcher(url, _getRequestParams(method, options, body))
                .then((result) => {
                if (!result.ok)
                    throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson)
                    return resolve;
                return result.json();
            })
                .then((data) => resolve(data))
                .catch((error) => handleError(error, reject));
        });
    });
}
function get(fetcher, url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'GET', url, options);
    });
}
function post(fetcher, url, body, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'POST', url, options, body);
    });
}
function put(fetcher, url, body, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'PUT', url, options, body);
    });
}
function remove(fetcher, url, body, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'DELETE', url, options, body);
    });
}
//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/lib/helpers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/lib/helpers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expiresAt": () => (/* binding */ expiresAt),
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "getParameterByName": () => (/* binding */ getParameterByName)
/* harmony export */ });
function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
const isBrowser = () => typeof window !== 'undefined';
function getParameterByName(name, url) {
    var _a;
    if (!url)
        url = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) || '';
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/lib/polyfills.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/lib/polyfills.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfillGlobalThis": () => (/* binding */ polyfillGlobalThis)
/* harmony export */ });
/**
 * https://mathiasbynens.be/notes/globalthis
 */
function polyfillGlobalThis() {
    if (typeof globalThis === 'object')
        return;
    try {
        Object.defineProperty(Object.prototype, '__magic__', {
            get: function () {
                return this;
            },
            configurable: true,
        });
        // @ts-expect-error 'Allow access to magic'
        __magic__.globalThis = __magic__;
        // @ts-expect-error 'Allow access to magic'
        delete Object.prototype.__magic__;
    }
    catch (e) {
        if (typeof self !== 'undefined') {
            // @ts-expect-error 'Allow access to globals'
            self.globalThis = self;
        }
    }
}
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/lib/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/lib/types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@supabase/gotrue-js/dist/module/lib/version.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@supabase/gotrue-js/dist/module/lib/version.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
// generated by genversion
const version = '1.21.6';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgrestClient)
/* harmony export */ });
/* harmony import */ var _lib_PostgrestQueryBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/PostgrestQueryBuilder */ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestQueryBuilder.js");
/* harmony import */ var _lib_PostgrestRpcBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/PostgrestRpcBuilder */ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestRpcBuilder.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/constants */ "./node_modules/@supabase/postgrest-js/dist/module/lib/constants.js");



class PostgrestClient {
    /**
     * Creates a PostgREST client.
     *
     * @param url  URL of the PostgREST endpoint.
     * @param headers  Custom headers.
     * @param schema  Postgres schema to switch to.
     */
    constructor(url, { headers = {}, schema, fetch, } = {}) {
        this.url = url;
        this.headers = Object.assign(Object.assign({}, _lib_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_HEADERS), headers);
        this.schema = schema;
        this.fetch = fetch;
    }
    /**
     * Authenticates the request with JWT.
     *
     * @param token  The JWT token to use.
     */
    auth(token) {
        this.headers['Authorization'] = `Bearer ${token}`;
        return this;
    }
    /**
     * Perform a table operation.
     *
     * @param table  The table name to operate on.
     */
    from(table) {
        const url = `${this.url}/${table}`;
        return new _lib_PostgrestQueryBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](url, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param head  When set to true, no data will be returned.
     * @param count  Count algorithm to use to count rows in a table.
     */
    rpc(fn, params, { head = false, count = null, } = {}) {
        const url = `${this.url}/rpc/${fn}`;
        return new _lib_PostgrestRpcBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](url, {
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
        }).rpc(params, { head, count });
    }
}
//# sourceMappingURL=PostgrestClient.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgrestClient": () => (/* reexport safe */ _PostgrestClient__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "PostgrestBuilder": () => (/* reexport safe */ _lib_types__WEBPACK_IMPORTED_MODULE_3__.PostgrestBuilder),
/* harmony export */   "PostgrestQueryBuilder": () => (/* reexport safe */ _lib_PostgrestQueryBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "PostgrestFilterBuilder": () => (/* reexport safe */ _lib_PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _PostgrestClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostgrestClient */ "./node_modules/@supabase/postgrest-js/dist/module/PostgrestClient.js");
/* harmony import */ var _lib_PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/PostgrestFilterBuilder */ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js");
/* harmony import */ var _lib_PostgrestQueryBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/PostgrestQueryBuilder */ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestQueryBuilder.js");
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/types */ "./node_modules/@supabase/postgrest-js/dist/module/lib/types.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgrestFilterBuilder)
/* harmony export */ });
/* harmony import */ var _PostgrestTransformBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostgrestTransformBuilder */ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestTransformBuilder.js");

class PostgrestFilterBuilder extends _PostgrestTransformBuilder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        /** @deprecated Use `contains()` instead. */
        this.cs = this.contains;
        /** @deprecated Use `containedBy()` instead. */
        this.cd = this.containedBy;
        /** @deprecated Use `rangeLt()` instead. */
        this.sl = this.rangeLt;
        /** @deprecated Use `rangeGt()` instead. */
        this.sr = this.rangeGt;
        /** @deprecated Use `rangeGte()` instead. */
        this.nxl = this.rangeGte;
        /** @deprecated Use `rangeLte()` instead. */
        this.nxr = this.rangeLte;
        /** @deprecated Use `rangeAdjacent()` instead. */
        this.adj = this.rangeAdjacent;
        /** @deprecated Use `overlaps()` instead. */
        this.ov = this.overlaps;
    }
    /**
     * Finds all rows which doesn't satisfy the filter.
     *
     * @param column  The column to filter on.
     * @param operator  The operator to filter with.
     * @param value  The value to filter with.
     */
    not(column, operator, value) {
        this.url.searchParams.append(`${column}`, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Finds all rows satisfying at least one of the filters.
     *
     * @param filters  The filters to use, separated by commas.
     * @param foreignTable  The foreign table to use (if `column` is a foreign column).
     */
    or(filters, { foreignTable } = {}) {
        const key = typeof foreignTable === 'undefined' ? 'or' : `${foreignTable}.or`;
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` exactly matches the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    eq(column, value) {
        this.url.searchParams.append(`${column}`, `eq.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` doesn't match the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    neq(column, value) {
        this.url.searchParams.append(`${column}`, `neq.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is greater than the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    gt(column, value) {
        this.url.searchParams.append(`${column}`, `gt.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is greater than or
     * equal to the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    gte(column, value) {
        this.url.searchParams.append(`${column}`, `gte.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is less than the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    lt(column, value) {
        this.url.searchParams.append(`${column}`, `lt.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is less than or equal
     * to the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    lte(column, value) {
        this.url.searchParams.append(`${column}`, `lte.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value in the stated `column` matches the supplied
     * `pattern` (case sensitive).
     *
     * @param column  The column to filter on.
     * @param pattern  The pattern to filter with.
     */
    like(column, pattern) {
        this.url.searchParams.append(`${column}`, `like.${pattern}`);
        return this;
    }
    /**
     * Finds all rows whose value in the stated `column` matches the supplied
     * `pattern` (case insensitive).
     *
     * @param column  The column to filter on.
     * @param pattern  The pattern to filter with.
     */
    ilike(column, pattern) {
        this.url.searchParams.append(`${column}`, `ilike.${pattern}`);
        return this;
    }
    /**
     * A check for exact equality (null, true, false), finds all rows whose
     * value on the stated `column` exactly match the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    is(column, value) {
        this.url.searchParams.append(`${column}`, `is.${value}`);
        return this;
    }
    /**
     * Finds all rows whose value on the stated `column` is found on the
     * specified `values`.
     *
     * @param column  The column to filter on.
     * @param values  The values to filter with.
     */
    in(column, values) {
        const cleanedValues = values
            .map((s) => {
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && new RegExp('[,()]').test(s))
                return `"${s}"`;
            else
                return `${s}`;
        })
            .join(',');
        this.url.searchParams.append(`${column}`, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Finds all rows whose json, array, or range value on the stated `column`
     * contains the values specified in `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(`${column}`, `cs.${value}`);
        }
        else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(`${column}`, `cs.{${value.join(',')}}`);
        }
        else {
            // json
            this.url.searchParams.append(`${column}`, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Finds all rows whose json, array, or range value on the stated `column` is
     * contained by the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(`${column}`, `cd.${value}`);
        }
        else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(`${column}`, `cd.{${value.join(',')}}`);
        }
        else {
            // json
            this.url.searchParams.append(`${column}`, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` is strictly to the
     * left of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeLt(column, range) {
        this.url.searchParams.append(`${column}`, `sl.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` is strictly to
     * the right of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeGt(column, range) {
        this.url.searchParams.append(`${column}`, `sr.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` does not extend
     * to the left of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeGte(column, range) {
        this.url.searchParams.append(`${column}`, `nxl.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` does not extend
     * to the right of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeLte(column, range) {
        this.url.searchParams.append(`${column}`, `nxr.${range}`);
        return this;
    }
    /**
     * Finds all rows whose range value on the stated `column` is adjacent to
     * the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeAdjacent(column, range) {
        this.url.searchParams.append(`${column}`, `adj.${range}`);
        return this;
    }
    /**
     * Finds all rows whose array or range value on the stated `column` overlaps
     * (has a value in common) with the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(`${column}`, `ov.${value}`);
        }
        else {
            // array
            this.url.searchParams.append(`${column}`, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Finds all rows whose text or tsvector value on the stated `column` matches
     * the tsquery in `query`.
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     * @param type  The type of tsquery conversion to use on `query`.
     */
    textSearch(column, query, { config, type = null, } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        }
        else if (type === 'phrase') {
            typePart = 'ph';
        }
        else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(`${column}`, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * to_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` instead.
     */
    fts(column, query, { config } = {}) {
        const configPart = typeof config === 'undefined' ? '' : `(${config})`;
        this.url.searchParams.append(`${column}`, `fts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * plainto_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'plain'` instead.
     */
    plfts(column, query, { config } = {}) {
        const configPart = typeof config === 'undefined' ? '' : `(${config})`;
        this.url.searchParams.append(`${column}`, `plfts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * phraseto_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'phrase'` instead.
     */
    phfts(column, query, { config } = {}) {
        const configPart = typeof config === 'undefined' ? '' : `(${config})`;
        this.url.searchParams.append(`${column}`, `phfts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * websearch_to_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'websearch'` instead.
     */
    wfts(column, query, { config } = {}) {
        const configPart = typeof config === 'undefined' ? '' : `(${config})`;
        this.url.searchParams.append(`${column}`, `wfts${configPart}.${query}`);
        return this;
    }
    /**
     * Finds all rows whose `column` satisfies the filter.
     *
     * @param column  The column to filter on.
     * @param operator  The operator to filter with.
     * @param value  The value to filter with.
     */
    filter(column, operator, value) {
        this.url.searchParams.append(`${column}`, `${operator}.${value}`);
        return this;
    }
    /**
     * Finds all rows whose columns match the specified `query` object.
     *
     * @param query  The object to filter with, with column names as keys mapped
     *               to their filter values.
     */
    match(query) {
        Object.keys(query).forEach((key) => {
            this.url.searchParams.append(`${key}`, `eq.${query[key]}`);
        });
        return this;
    }
}
//# sourceMappingURL=PostgrestFilterBuilder.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestQueryBuilder.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestQueryBuilder.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgrestQueryBuilder)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@supabase/postgrest-js/dist/module/lib/types.js");
/* harmony import */ var _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostgrestFilterBuilder */ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js");


class PostgrestQueryBuilder extends _types__WEBPACK_IMPORTED_MODULE_0__.PostgrestBuilder {
    constructor(url, { headers = {}, schema, fetch, } = {}) {
        super({ fetch });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
    }
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns  The columns to retrieve, separated by commas.
     * @param head  When set to true, select will void data.
     * @param count  Count algorithm to use to count rows in a table.
     */
    select(columns = '*', { head = false, count = null, } = {}) {
        this.method = 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = columns
            .split('')
            .map((c) => {
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        })
            .join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers['Prefer'] = `count=${count}`;
        }
        if (head) {
            this.method = 'HEAD';
        }
        return new _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
    insert(values, { upsert = false, onConflict, returning = 'representation', count = null, } = {}) {
        this.method = 'POST';
        const prefersHeaders = [`return=${returning}`];
        if (upsert)
            prefersHeaders.push('resolution=merge-duplicates');
        if (upsert && onConflict !== undefined)
            this.url.searchParams.set('on_conflict', onConflict);
        this.body = values;
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
    /**
     * Performs an UPSERT into the table.
     *
     * @param values  The values to insert.
     * @param onConflict  By specifying the `on_conflict` query parameter, you can make UPSERT work on a column(s) that has a UNIQUE constraint.
     * @param returning  By default the new record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     * @param ignoreDuplicates  Specifies if duplicate rows should be ignored and not inserted.
     */
    upsert(values, { onConflict, returning = 'representation', count = null, ignoreDuplicates = false, } = {}) {
        this.method = 'POST';
        const prefersHeaders = [
            `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`,
            `return=${returning}`,
        ];
        if (onConflict !== undefined)
            this.url.searchParams.set('on_conflict', onConflict);
        this.body = values;
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
    /**
     * Performs an UPDATE on the table.
     *
     * @param values  The values to update.
     * @param returning  By default the updated record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     */
    update(values, { returning = 'representation', count = null, } = {}) {
        this.method = 'PATCH';
        const prefersHeaders = [`return=${returning}`];
        this.body = values;
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
    /**
     * Performs a DELETE on the table.
     *
     * @param returning  If `true`, return the deleted row(s) in the response.
     * @param count  Count algorithm to use to count rows in a table.
     */
    delete({ returning = 'representation', count = null, } = {}) {
        this.method = 'DELETE';
        const prefersHeaders = [`return=${returning}`];
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
}
//# sourceMappingURL=PostgrestQueryBuilder.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestRpcBuilder.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestRpcBuilder.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgrestRpcBuilder)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@supabase/postgrest-js/dist/module/lib/types.js");
/* harmony import */ var _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostgrestFilterBuilder */ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestFilterBuilder.js");


class PostgrestRpcBuilder extends _types__WEBPACK_IMPORTED_MODULE_0__.PostgrestBuilder {
    constructor(url, { headers = {}, schema, fetch, } = {}) {
        super({ fetch });
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
    }
    /**
     * Perform a function call.
     */
    rpc(params, { head = false, count = null, } = {}) {
        if (head) {
            this.method = 'HEAD';
            if (params) {
                Object.entries(params).forEach(([name, value]) => {
                    this.url.searchParams.append(name, value);
                });
            }
        }
        else {
            this.method = 'POST';
            this.body = params;
        }
        if (count) {
            if (this.headers['Prefer'] !== undefined)
                this.headers['Prefer'] += `,count=${count}`;
            else
                this.headers['Prefer'] = `count=${count}`;
        }
        return new _PostgrestFilterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
}
//# sourceMappingURL=PostgrestRpcBuilder.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestTransformBuilder.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/lib/PostgrestTransformBuilder.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgrestTransformBuilder)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@supabase/postgrest-js/dist/module/lib/types.js");

/**
 * Post-filters (transforms)
 */
class PostgrestTransformBuilder extends _types__WEBPACK_IMPORTED_MODULE_0__.PostgrestBuilder {
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns  The columns to retrieve, separated by commas.
     */
    select(columns = '*') {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = columns
            .split('')
            .map((c) => {
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        })
            .join('');
        this.url.searchParams.set('select', cleanedColumns);
        return this;
    }
    /**
     * Orders the result with the specified `column`.
     *
     * @param column  The column to order on.
     * @param ascending  If `true`, the result will be in ascending order.
     * @param nullsFirst  If `true`, `null`s appear first.
     * @param foreignTable  The foreign table to use (if `column` is a foreign column).
     */
    order(column, { ascending = true, nullsFirst = false, foreignTable, } = {}) {
        const key = typeof foreignTable === 'undefined' ? 'order' : `${foreignTable}.order`;
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}.${nullsFirst ? 'nullsfirst' : 'nullslast'}`);
        return this;
    }
    /**
     * Limits the result with the specified `count`.
     *
     * @param count  The maximum no. of rows to limit to.
     * @param foreignTable  The foreign table to use (for foreign columns).
     */
    limit(count, { foreignTable } = {}) {
        const key = typeof foreignTable === 'undefined' ? 'limit' : `${foreignTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limits the result to rows within the specified range, inclusive.
     *
     * @param from  The starting index from which to limit the result, inclusive.
     * @param to  The last index to which to limit the result, inclusive.
     * @param foreignTable  The foreign table to use (for foreign columns).
     */
    range(from, to, { foreignTable } = {}) {
        const keyOffset = typeof foreignTable === 'undefined' ? 'offset' : `${foreignTable}.offset`;
        const keyLimit = typeof foreignTable === 'undefined' ? 'limit' : `${foreignTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Sets the AbortSignal for the fetch request.
     */
    abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Retrieves only one row from the result. Result must be one row (e.g. using
     * `limit`), otherwise this will result in an error.
     */
    single() {
        this.headers['Accept'] = 'application/vnd.pgrst.object+json';
        return this;
    }
    /**
     * Retrieves at most one row from the result. Result must be at most one row
     * (e.g. using `eq` on a UNIQUE column), otherwise this will result in an
     * error.
     */
    maybeSingle() {
        this.headers['Accept'] = 'application/vnd.pgrst.object+json';
        const _this = new PostgrestTransformBuilder(this);
        _this.then = ((onfulfilled, onrejected) => this.then((res) => {
            var _a, _b;
            if ((_b = (_a = res.error) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.includes('Results contain 0 rows')) {
                return onfulfilled({
                    error: null,
                    data: null,
                    count: res.count,
                    status: 200,
                    statusText: 'OK',
                    body: null,
                });
            }
            return onfulfilled(res);
        }, onrejected));
        return _this;
    }
    /**
     * Set the response type to CSV.
     */
    csv() {
        this.headers['Accept'] = 'text/csv';
        return this;
    }
}
//# sourceMappingURL=PostgrestTransformBuilder.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/lib/constants.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/lib/constants.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_HEADERS": () => (/* binding */ DEFAULT_HEADERS)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@supabase/postgrest-js/dist/module/lib/version.js");

const DEFAULT_HEADERS = { 'X-Client-Info': `postgrest-js/${_version__WEBPACK_IMPORTED_MODULE_0__.version}` };
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/lib/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/lib/types.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgrestBuilder": () => (/* binding */ PostgrestBuilder)
/* harmony export */ });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class PostgrestBuilder {
    constructor(builder) {
        this.shouldThrowOnError = false;
        Object.assign(this, builder);
        this.fetch = builder.fetch || (cross_fetch__WEBPACK_IMPORTED_MODULE_0___default());
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (typeof this.schema === 'undefined') {
            // skip
        }
        else if (['GET', 'HEAD'].includes(this.method)) {
            this.headers['Accept-Profile'] = this.schema;
        }
        else {
            this.headers['Content-Profile'] = this.schema;
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers['Content-Type'] = 'application/json';
        }
        let res = this.fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            let error = null;
            let data = null;
            let count = null;
            if (res.ok) {
                const isReturnMinimal = (_a = this.headers['Prefer']) === null || _a === void 0 ? void 0 : _a.split(',').includes('return=minimal');
                if (this.method !== 'HEAD' && !isReturnMinimal) {
                    const text = yield res.text();
                    if (!text) {
                        // discard `text`
                    }
                    else if (this.headers['Accept'] === 'text/csv') {
                        data = text;
                    }
                    else {
                        data = JSON.parse(text);
                    }
                }
                const countHeader = (_b = this.headers['Prefer']) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                const contentRange = (_c = res.headers.get('content-range')) === null || _c === void 0 ? void 0 : _c.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
            }
            else {
                error = yield res.json();
                if (error && this.shouldThrowOnError) {
                    throw error;
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status: res.status,
                statusText: res.statusText,
                body: data,
            };
            return postgrestResponse;
        }));
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError) => ({
                error: {
                    message: `FetchError: ${fetchError.message}`,
                    details: '',
                    hint: '',
                    code: fetchError.code || '',
                },
                data: null,
                body: null,
                count: null,
                status: 400,
                statusText: 'Bad Request',
            }));
        }
        return res.then(onfulfilled, onrejected);
    }
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@supabase/postgrest-js/dist/module/lib/version.js":
/*!************************************************************************!*\
  !*** ./node_modules/@supabase/postgrest-js/dist/module/lib/version.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
// generated by genversion
const version = '0.35.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RealtimeClient)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/constants */ "./node_modules/@supabase/realtime-js/dist/module/lib/constants.js");
/* harmony import */ var _lib_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/timer */ "./node_modules/@supabase/realtime-js/dist/module/lib/timer.js");
/* harmony import */ var _RealtimeSubscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RealtimeSubscription */ "./node_modules/@supabase/realtime-js/dist/module/RealtimeSubscription.js");
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! websocket */ "./node_modules/websocket/lib/browser.js");
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/serializer */ "./node_modules/@supabase/realtime-js/dist/module/lib/serializer.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const noop = () => { };
class RealtimeClient {
    /**
     * Initializes the Socket
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket.
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers The optional headers to pass when connecting.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.longpollerTimeout The maximum timeout of a long poll AJAX request. Defaults to 20s (double the server long poll timer).
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     */
    constructor(endPoint, options) {
        this.accessToken = null;
        this.channels = [];
        this.endPoint = '';
        this.headers = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_HEADERS;
        this.params = {};
        this.timeout = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_TIMEOUT;
        this.transport = websocket__WEBPACK_IMPORTED_MODULE_3__.w3cwebsocket;
        this.heartbeatIntervalMs = 30000;
        this.longpollerTimeout = 20000;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new _lib_serializer__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: [],
        };
        this.endPoint = `${endPoint}/${_lib_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSPORTS.websocket}`;
        if (options === null || options === void 0 ? void 0 : options.params)
            this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers)
            this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout)
            this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger)
            this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.transport)
            this.transport = options.transport;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs)
            this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        if (options === null || options === void 0 ? void 0 : options.longpollerTimeout)
            this.longpollerTimeout = options.longpollerTimeout;
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs
            : (tries) => {
                return [1000, 2000, 5000, 10000][tries - 1] || 10000;
            };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode
            : (payload, callback) => {
                return callback(JSON.stringify(payload));
            };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode
            : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new _lib_timer__WEBPACK_IMPORTED_MODULE_1__["default"](() => __awaiter(this, void 0, void 0, function* () {
            yield this.disconnect();
            this.connect();
        }), this.reconnectAfterMs);
    }
    /**
     * Connects the socket.
     */
    connect() {
        if (this.conn) {
            return;
        }
        this.conn = new this.transport(this.endPointURL(), [], null, this.headers);
        if (this.conn) {
            // this.conn.timeout = this.longpollerTimeout // TYPE ERROR
            this.conn.binaryType = 'arraybuffer';
            this.conn.onopen = () => this._onConnOpen();
            this.conn.onerror = (error) => this._onConnError(error);
            this.conn.onmessage = (event) => this.onConnMessage(event);
            this.conn.onclose = (event) => this._onConnClose(event);
        }
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */
    disconnect(code, reason) {
        return new Promise((resolve, _reject) => {
            try {
                if (this.conn) {
                    this.conn.onclose = function () { }; // noop
                    if (code) {
                        this.conn.close(code, reason || '');
                    }
                    else {
                        this.conn.close();
                    }
                    this.conn = null;
                    // remove open handles
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
                    this.reconnectTimer.reset();
                }
                resolve({ error: null, data: true });
            }
            catch (error) {
                resolve({ error, data: false });
            }
        });
    }
    /**
     * Logs the message. Override `this.logger` for specialized logging.
     */
    log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Registers a callback for connection state change event.
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onOpen(() => console.log("Socket opened."))
     */
    onOpen(callback) {
        this.stateChangeCallbacks.open.push(callback);
    }
    /**
     * Registers a callbacks for connection state change events.
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onOpen(() => console.log("Socket closed."))
     */
    onClose(callback) {
        this.stateChangeCallbacks.close.push(callback);
    }
    /**
     * Registers a callback for connection state change events.
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onOpen((error) => console.log("An error occurred"))
     */
    onError(callback) {
        this.stateChangeCallbacks.error.push(callback);
    }
    /**
     * Calls a function any time a message is received.
     * @param callback A function to be called when the event occurs.
     *
     * @example
     *    socket.onMessage((message) => console.log(message))
     */
    onMessage(callback) {
        this.stateChangeCallbacks.message.push(callback);
    }
    /**
     * Returns the current state of the socket.
     */
    connectionState() {
        switch (this.conn && this.conn.readyState) {
            case _lib_constants__WEBPACK_IMPORTED_MODULE_0__.SOCKET_STATES.connecting:
                return 'connecting';
            case _lib_constants__WEBPACK_IMPORTED_MODULE_0__.SOCKET_STATES.open:
                return 'open';
            case _lib_constants__WEBPACK_IMPORTED_MODULE_0__.SOCKET_STATES.closing:
                return 'closing';
            default:
                return 'closed';
        }
    }
    /**
     * Retuns `true` is the connection is open.
     */
    isConnected() {
        return this.connectionState() === 'open';
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     */
    remove(channel) {
        this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
    }
    channel(topic, chanParams = {}) {
        let chan = new _RealtimeSubscription__WEBPACK_IMPORTED_MODULE_2__["default"](topic, chanParams, this);
        this.channels.push(chan);
        return chan;
    }
    push(data) {
        let { topic, event, payload, ref } = data;
        let callback = () => {
            this.encode(data, (result) => {
                var _a;
                (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
            });
        };
        this.log('push', `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
            callback();
        }
        else {
            this.sendBuffer.push(callback);
        }
    }
    onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg) => {
            let { topic, event, payload, ref } = msg;
            if (ref && ref === this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null;
            }
            else if (event === (payload === null || payload === void 0 ? void 0 : payload.type)) {
                this._resetHeartbeat();
            }
            this.log('receive', `${payload.status || ''} ${topic} ${event} ${(ref && '(' + ref + ')') || ''}`, payload);
            this.channels
                .filter((channel) => channel.isMember(topic))
                .forEach((channel) => channel.trigger(event, payload, ref));
            this.stateChangeCallbacks.message.forEach((callback) => callback(msg));
        });
    }
    /**
     * Returns the URL of the websocket.
     */
    endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: _lib_constants__WEBPACK_IMPORTED_MODULE_0__.VSN }));
    }
    /**
     * Return the next message ref, accounting for overflows
     */
    makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
            this.ref = 0;
        }
        else {
            this.ref = newRef;
        }
        return this.ref.toString();
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * @param token A JWT string.
     */
    setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel) => channel.push(_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.access_token, {
            access_token: token,
        }));
    }
    _onConnOpen() {
        this.log('transport', `connected to ${this.endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this._resetHeartbeat();
        this.stateChangeCallbacks.open.forEach((callback) => callback());
    }
    _onConnClose(event) {
        this.log('transport', 'close', event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback) => callback(event));
    }
    _onConnError(error) {
        this.log('transport', error.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback) => callback(error));
    }
    _triggerChanError() {
        this.channels.forEach((channel) => channel.trigger(_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.error));
    }
    _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
            return url;
        }
        const prefix = url.match(/\?/) ? '&' : '?';
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback) => callback());
            this.sendBuffer = [];
        }
    }
    _resetHeartbeat() {
        this.pendingHeartbeatRef = null;
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs);
    }
    _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) {
            return;
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log('transport', 'heartbeat timeout. Attempting to re-establish connection');
            (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(_lib_constants__WEBPACK_IMPORTED_MODULE_0__.WS_CLOSE_NORMAL, 'hearbeat timeout');
            return;
        }
        this.pendingHeartbeatRef = this.makeRef();
        this.setAuth(this.accessToken);
    }
}
//# sourceMappingURL=RealtimeClient.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/RealtimeSubscription.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/RealtimeSubscription.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RealtimeSubscription)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/constants */ "./node_modules/@supabase/realtime-js/dist/module/lib/constants.js");
/* harmony import */ var _lib_push__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/push */ "./node_modules/@supabase/realtime-js/dist/module/lib/push.js");
/* harmony import */ var _lib_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/timer */ "./node_modules/@supabase/realtime-js/dist/module/lib/timer.js");



class RealtimeSubscription {
    constructor(topic, params = {}, socket) {
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = [];
        this.state = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.timeout = this.socket.timeout;
        this.joinPush = new _lib_push__WEBPACK_IMPORTED_MODULE_1__["default"](this, _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.join, this.params, this.timeout);
        this.rejoinTimer = new _lib_timer__WEBPACK_IMPORTED_MODULE_2__["default"](() => this.rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive('ok', () => {
            this.state = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent) => pushEvent.send());
            this.pushBuffer = [];
        });
        this.onClose(() => {
            this.rejoinTimer.reset();
            this.socket.log('channel', `close ${this.topic} ${this.joinRef()}`);
            this.state = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.closed;
            this.socket.remove(this);
        });
        this.onError((reason) => {
            if (this.isLeaving() || this.isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('timeout', () => {
            if (!this.isJoining()) {
                return;
            }
            this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.on(_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.reply, (payload, ref) => {
            this.trigger(this.replyEventName(ref), payload);
        });
    }
    rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
            this.rejoin();
        }
    }
    subscribe(timeout = this.timeout) {
        if (this.joinedOnce) {
            throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        }
        else {
            this.joinedOnce = true;
            this.rejoin(timeout);
            return this.joinPush;
        }
    }
    onClose(callback) {
        this.on(_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.close, callback);
    }
    onError(callback) {
        this.on(_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.error, (reason) => callback(reason));
    }
    on(event, callback) {
        this.bindings.push({ event, callback });
    }
    off(event) {
        this.bindings = this.bindings.filter((bind) => bind.event !== event);
    }
    canPush() {
        return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
            throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new _lib_push__WEBPACK_IMPORTED_MODULE_1__["default"](this, event, payload, timeout);
        if (this.canPush()) {
            pushEvent.send();
        }
        else {
            pushEvent.startTimeout();
            this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
    }
    /**
     * Leaves the channel
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */
    unsubscribe(timeout = this.timeout) {
        this.state = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.leaving;
        let onClose = () => {
            this.socket.log('channel', `leave ${this.topic}`);
            this.trigger(_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.close, 'leave', this.joinRef());
        };
        // Destroy joinPush to avoid connection timeouts during unscription phase
        this.joinPush.destroy();
        let leavePush = new _lib_push__WEBPACK_IMPORTED_MODULE_1__["default"](this, _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS.leave, {}, timeout);
        leavePush.receive('ok', () => onClose()).receive('timeout', () => onClose());
        leavePush.send();
        if (!this.canPush()) {
            leavePush.trigger('ok', {});
        }
        return leavePush;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     */
    onMessage(event, payload, ref) {
        return payload;
    }
    isMember(topic) {
        return this.topic === topic;
    }
    joinRef() {
        return this.joinPush.ref;
    }
    sendJoin(timeout) {
        this.state = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.joining;
        this.joinPush.resend(timeout);
    }
    rejoin(timeout = this.timeout) {
        if (this.isLeaving()) {
            return;
        }
        this.sendJoin(timeout);
    }
    trigger(event, payload, ref) {
        let { close, error, leave, join } = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_EVENTS;
        let events = [close, error, leave, join];
        if (ref && events.indexOf(event) >= 0 && ref !== this.joinRef()) {
            return;
        }
        let handledPayload = this.onMessage(event, payload, ref);
        if (payload && !handledPayload) {
            throw 'channel onMessage callbacks must return the payload, modified or unmodified';
        }
        this.bindings
            .filter((bind) => {
            // Bind all events if the user specifies a wildcard.
            if (bind.event === '*') {
                return event === (payload === null || payload === void 0 ? void 0 : payload.type);
            }
            else {
                return bind.event === event;
            }
        })
            .map((bind) => bind.callback(handledPayload, ref));
    }
    replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    isClosed() {
        return this.state === _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.closed;
    }
    isErrored() {
        return this.state === _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.errored;
    }
    isJoined() {
        return this.state === _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.joined;
    }
    isJoining() {
        return this.state === _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.joining;
    }
    isLeaving() {
        return this.state === _lib_constants__WEBPACK_IMPORTED_MODULE_0__.CHANNEL_STATES.leaving;
    }
}
//# sourceMappingURL=RealtimeSubscription.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealtimeClient": () => (/* reexport safe */ _RealtimeClient__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "RealtimeSubscription": () => (/* reexport safe */ _RealtimeSubscription__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Transformers": () => (/* reexport module object */ _lib_transformers__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lib_transformers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/transformers */ "./node_modules/@supabase/realtime-js/dist/module/lib/transformers.js");
/* harmony import */ var _RealtimeClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RealtimeClient */ "./node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js");
/* harmony import */ var _RealtimeSubscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RealtimeSubscription */ "./node_modules/@supabase/realtime-js/dist/module/RealtimeSubscription.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/lib/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/lib/constants.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_HEADERS": () => (/* binding */ DEFAULT_HEADERS),
/* harmony export */   "VSN": () => (/* binding */ VSN),
/* harmony export */   "DEFAULT_TIMEOUT": () => (/* binding */ DEFAULT_TIMEOUT),
/* harmony export */   "WS_CLOSE_NORMAL": () => (/* binding */ WS_CLOSE_NORMAL),
/* harmony export */   "SOCKET_STATES": () => (/* binding */ SOCKET_STATES),
/* harmony export */   "CHANNEL_STATES": () => (/* binding */ CHANNEL_STATES),
/* harmony export */   "CHANNEL_EVENTS": () => (/* binding */ CHANNEL_EVENTS),
/* harmony export */   "TRANSPORTS": () => (/* binding */ TRANSPORTS)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@supabase/realtime-js/dist/module/lib/version.js");

const DEFAULT_HEADERS = { 'X-Client-Info': `realtime-js/${_version__WEBPACK_IMPORTED_MODULE_0__.version}` };
const VSN = '1.0.0';
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
var SOCKET_STATES;
(function (SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function (CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function (CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function (TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/lib/push.js":
/*!********************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/lib/push.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Push)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/constants */ "./node_modules/@supabase/realtime-js/dist/module/lib/constants.js");

class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */
    constructor(channel, event, payload = {}, timeout = _lib_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_TIMEOUT) {
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = '';
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = '';
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived('timeout')) {
            return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
        });
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) {
            callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        }
        this.recHooks.push({ status, callback });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) {
            return;
        }
        this.ref = this.channel.socket.makeRef();
        this.refEvent = this.channel.replyEventName(this.ref);
        this.channel.on(this.refEvent, (payload) => {
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        });
        this.timeoutTimer = setTimeout(() => {
            this.trigger('timeout', {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent)
            this.channel.trigger(this.refEvent, { status, response });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) {
            return;
        }
        this.channel.off(this.refEvent);
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response, }) {
        this.recHooks
            .filter((h) => h.status === status)
            .forEach((h) => h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
}
//# sourceMappingURL=push.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/lib/serializer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/lib/serializer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Serializer)
/* harmony export */ });
// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
class Serializer {
    constructor() {
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) {
            return callback(this._binaryDecode(rawPayload));
        }
        if (typeof rawPayload === 'string') {
            return callback(JSON.parse(rawPayload));
        }
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return { ref: null, topic: topic, event: event, payload: data };
    }
}
//# sourceMappingURL=serializer.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/lib/timer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/lib/timer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */
class Timer {
    constructor(callback, timerCalc) {
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/lib/transformers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/lib/transformers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresTypes": () => (/* binding */ PostgresTypes),
/* harmony export */   "convertChangeData": () => (/* binding */ convertChangeData),
/* harmony export */   "convertColumn": () => (/* binding */ convertColumn),
/* harmony export */   "convertCell": () => (/* binding */ convertCell),
/* harmony export */   "toBoolean": () => (/* binding */ toBoolean),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toJson": () => (/* binding */ toJson),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "toTimestampString": () => (/* binding */ toTimestampString)
/* harmony export */ });
/**
 * Helpers to convert the change Payload into native JS types.
 */
// Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
var PostgresTypes;
(function (PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
/**
 * Takes an array of columns and an object of string values then converts each string value
 * to its mapped type.
 *
 * @param {{name: String, type: String}[]} columns
 * @param {Object} record
 * @param {Object} options The map of various options that can be applied to the mapper
 * @param {Array} options.skipTypes The array of types that should not be converted
 *
 * @example convertChangeData([{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age:'33'}, {})
 * //=>{ first_name: 'Paul', age: 33 }
 */
const convertChangeData = (columns, record, options = {}) => {
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key) => {
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
/**
 * Converts the value of an individual column.
 *
 * @param {String} columnName The column that you want to convert
 * @param {{name: String, type: String}[]} columns All of the columns
 * @param {Object} record The map of string values
 * @param {Array} skipTypes An array of types that should not be converted
 * @return {object} Useless information
 *
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age: '33'}, [])
 * //=> 33
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age: '33'}, ['int4'])
 * //=> "33"
 */
const convertColumn = (columnName, columns, record, skipTypes) => {
    const column = columns.find((x) => x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
        return convertCell(colType, value);
    }
    return noop(value);
};
/**
 * If the value of the cell is `null`, returns null.
 * Otherwise converts the string value to the correct type.
 * @param {String} type A postgres column type
 * @param {String} stringValue The cell value
 *
 * @example convertCell('bool', 't')
 * //=> true
 * @example convertCell('int8', '10')
 * //=> 10
 * @example convertCell('_int4', '{1,2,3,4}')
 * //=> [1,2,3,4]
 */
const convertCell = (type, value) => {
    // if data type is an array
    if (type.charAt(0) === '_') {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch (type) {
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime: // To allow users to cast it based on Timezone
        case PostgresTypes.date: // To allow users to cast it based on Timezone
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime: // To allow users to cast it based on Timezone
        case PostgresTypes.text:
        case PostgresTypes.time: // To allow users to cast it based on Timezone
        case PostgresTypes.timestamptz: // To allow users to cast it based on Timezone
        case PostgresTypes.timetz: // To allow users to cast it based on Timezone
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            // Return the value for remaining types
            return noop(value);
    }
};
const noop = (value) => {
    return value;
};
const toBoolean = (value) => {
    switch (value) {
        case 't':
            return true;
        case 'f':
            return false;
        default:
            return value;
    }
};
const toNumber = (value) => {
    if (typeof value === 'string') {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
            return parsedValue;
        }
    }
    return value;
};
const toJson = (value) => {
    if (typeof value === 'string') {
        try {
            return JSON.parse(value);
        }
        catch (error) {
            console.log(`JSON parse error: ${error}`);
            return value;
        }
    }
    return value;
};
/**
 * Converts a Postgres Array into a native JS array
 *
 * @example toArray('{}', 'int4')
 * //=> []
 * @example toArray('{"[2021-01-01,2021-12-31)","(2021-01-01,2021-12-32]"}', 'daterange')
 * //=> ['[2021-01-01,2021-12-31)', '(2021-01-01,2021-12-32]']
 * @example toArray([1,2,3,4], 'int4')
 * //=> [1,2,3,4]
 */
const toArray = (value, type) => {
    if (typeof value !== 'string') {
        return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === '{' && closeBrace === '}') {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse('[' + valTrim + ']');
        }
        catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(',') : [];
        }
        return arr.map((val) => convertCell(type, val));
    }
    return value;
};
/**
 * Fixes timestamp to be ISO-8601. Swaps the space between the date and time for a 'T'
 * See https://github.com/supabase/supabase/issues/18
 *
 * @example toTimestampString('2019-09-10 00:00:00')
 * //=> '2019-09-10T00:00:00'
 */
const toTimestampString = (value) => {
    if (typeof value === 'string') {
        return value.replace(' ', 'T');
    }
    return value;
};
//# sourceMappingURL=transformers.js.map

/***/ }),

/***/ "./node_modules/@supabase/realtime-js/dist/module/lib/version.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/module/lib/version.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
// generated by genversion
const version = '1.3.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@supabase/storage-js/dist/module/SupabaseStorageClient.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@supabase/storage-js/dist/module/SupabaseStorageClient.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupabaseStorageClient": () => (/* binding */ SupabaseStorageClient)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./node_modules/@supabase/storage-js/dist/module/lib/StorageBucketApi.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./node_modules/@supabase/storage-js/dist/module/lib/StorageFileApi.js");

class SupabaseStorageClient extends _lib__WEBPACK_IMPORTED_MODULE_0__.StorageBucketApi {
    constructor(url, headers = {}, fetch) {
        super(url, headers, fetch);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */
    from(id) {
        return new _lib__WEBPACK_IMPORTED_MODULE_1__.StorageFileApi(this.url, this.headers, id, this.fetch);
    }
}
//# sourceMappingURL=SupabaseStorageClient.js.map

/***/ }),

/***/ "./node_modules/@supabase/storage-js/dist/module/lib/StorageBucketApi.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@supabase/storage-js/dist/module/lib/StorageBucketApi.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageBucketApi": () => (/* binding */ StorageBucketApi)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./node_modules/@supabase/storage-js/dist/module/lib/fetch.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@supabase/storage-js/dist/module/lib/constants.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class StorageBucketApi {
    constructor(url, headers = {}, fetch) {
        this.url = url;
        this.headers = Object.assign(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_HEADERS), headers);
        this.fetch = fetch;
    }
    /**
     * Retrieves the details of all Storage buckets within an existing product.
     */
    listBuckets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.get)(this.fetch, `${this.url}/bucket`, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */
    getBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.get)(this.fetch, `${this.url}/bucket/${id}`, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @returns newly created bucket id
     */
    createBucket(id, options = { public: false }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.post)(this.fetch, `${this.url}/bucket`, { id, name: id, public: options.public }, { headers: this.headers });
                return { data: data.name, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Updates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     */
    updateBucket(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.put)(this.fetch, `${this.url}/bucket/${id}`, { id, name: id, public: options.public }, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */
    emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.post)(this.fetch, `${this.url}/bucket/${id}/empty`, {}, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */
    deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.remove)(this.fetch, `${this.url}/bucket/${id}`, {}, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
}
//# sourceMappingURL=StorageBucketApi.js.map

/***/ }),

/***/ "./node_modules/@supabase/storage-js/dist/module/lib/StorageFileApi.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@supabase/storage-js/dist/module/lib/StorageFileApi.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageFileApi": () => (/* binding */ StorageFileApi)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./node_modules/@supabase/storage-js/dist/module/lib/fetch.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: 'name',
        order: 'asc',
    },
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: '3600',
    contentType: 'text/plain;charset=UTF-8',
    upsert: false,
};
class StorageFileApi {
    constructor(url, headers = {}, bucketId, fetch) {
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = fetch;
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */
    uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), (method === 'POST' && { 'x-upsert': String(options.upsert) }));
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append('cacheControl', options.cacheControl);
                    body.append('', fileBody);
                }
                else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append('cacheControl', options.cacheControl);
                }
                else {
                    body = fileBody;
                    headers['cache-control'] = `max-age=${options.cacheControl}`;
                    headers['content-type'] = options.contentType;
                }
                const _path = this._getFinalPath(path);
                const res = yield cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${this.url}/object/${_path}`, {
                    method,
                    body: body,
                    headers,
                });
                if (res.ok) {
                    // const data = await res.json()
                    // temporary fix till backend is updated to the latest storage-api version
                    return { data: { Key: _path }, error: null };
                }
                else {
                    const error = yield res.json();
                    return { data: null, error };
                }
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */
    upload(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate('POST', path, fileBody, fileOptions);
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */
    update(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate('PUT', path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file, optionally renaming it at the same time.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */
    move(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.post)(this.fetch, `${this.url}/object/move`, { bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath }, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Create signed url to download file without requiring permissions. This URL can be valid for a set number of seconds.
     *
     * @param path The file path to be downloaded, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     */
    createSignedUrl(path, expiresIn) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _path = this._getFinalPath(path);
                let data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.post)(this.fetch, `${this.url}/object/sign/${_path}`, { expiresIn }, { headers: this.headers });
                const signedURL = `${this.url}${data.signedURL}`;
                data = { signedURL };
                return { data, error: null, signedURL };
            }
            catch (error) {
                return { data: null, error, signedURL: null };
            }
        });
    }
    /**
     * Downloads a file.
     *
     * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
     */
    download(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _path = this._getFinalPath(path);
                const res = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.get)(this.fetch, `${this.url}/object/${_path}`, {
                    headers: this.headers,
                    noResolveJson: true,
                });
                const data = yield res.blob();
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Retrieve URLs for assets in public buckets
     *
     * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
     */
    getPublicUrl(path) {
        try {
            const _path = this._getFinalPath(path);
            const publicURL = `${this.url}/object/public/${_path}`;
            const data = { publicURL };
            return { data, error: null, publicURL };
        }
        catch (error) {
            return { data: null, error, publicURL: null };
        }
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to be deletes, including the path and file name. For example [`folder/image.png`].
     */
    remove(paths) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.remove)(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: paths }, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */
    // async getMetadata(id: string): Promise<{ data: Metadata | null; error: Error | null }> {
    //   try {
    //     const data = await get(`${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     return { data: null, error }
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */
    // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<{ data: Metadata | null; error: Error | null }> {
    //   try {
    //     const data = await post(`${this.url}/metadata/${id}`, { ...meta }, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     return { data: null, error }
    //   }
    // }
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     * @param options Search options, including `limit`, `offset`, and `sortBy`.
     * @param parameters Fetch parameters, currently only supports `signal`, which is an AbortController's signal
     */
    list(path, options, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), { prefix: path || '' });
                const data = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.post)(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, { headers: this.headers }, parameters);
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
    }
}
//# sourceMappingURL=StorageFileApi.js.map

/***/ }),

/***/ "./node_modules/@supabase/storage-js/dist/module/lib/constants.js":
/*!************************************************************************!*\
  !*** ./node_modules/@supabase/storage-js/dist/module/lib/constants.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_HEADERS": () => (/* binding */ DEFAULT_HEADERS)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@supabase/storage-js/dist/module/lib/version.js");

const DEFAULT_HEADERS = { 'X-Client-Info': `storage-js/${_version__WEBPACK_IMPORTED_MODULE_0__.version}` };
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@supabase/storage-js/dist/module/lib/fetch.js":
/*!********************************************************************!*\
  !*** ./node_modules/@supabase/storage-js/dist/module/lib/fetch.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "put": () => (/* binding */ put),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject) => {
    if (typeof error.json !== 'function') {
        return reject(error);
    }
    error.json().then((err) => {
        return reject({
            message: _getErrorMessage(err),
            status: (error === null || error === void 0 ? void 0 : error.status) || 500,
        });
    });
};
const _getRequestParams = (method, options, parameters, body) => {
    const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
    if (method === 'GET') {
        return params;
    }
    params.headers = Object.assign({ 'Content-Type': 'application/json' }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher = (cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()), method, url, options, parameters, body) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fetcher(url, _getRequestParams(method, options, parameters, body))
                .then((result) => {
                if (!result.ok)
                    throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson)
                    return resolve(result);
                return result.json();
            })
                .then((data) => resolve(data))
                .catch((error) => handleError(error, reject));
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'GET', url, options, parameters);
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'POST', url, options, parameters, body);
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'PUT', url, options, parameters, body);
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest(fetcher, 'DELETE', url, options, parameters, body);
    });
}
//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/@supabase/storage-js/dist/module/lib/version.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@supabase/storage-js/dist/module/lib/version.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
// generated by genversion
const version = '0.0.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SupabaseClient)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/constants */ "./node_modules/@supabase/supabase-js/dist/module/lib/constants.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/helpers */ "./node_modules/@supabase/supabase-js/dist/module/lib/helpers.js");
/* harmony import */ var _lib_SupabaseAuthClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/SupabaseAuthClient */ "./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js");
/* harmony import */ var _lib_SupabaseQueryBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/SupabaseQueryBuilder */ "./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseQueryBuilder.js");
/* harmony import */ var _supabase_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/storage-js */ "./node_modules/@supabase/storage-js/dist/module/SupabaseStorageClient.js");
/* harmony import */ var _supabase_postgrest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/postgrest-js */ "./node_modules/@supabase/postgrest-js/dist/module/index.js");
/* harmony import */ var _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/realtime-js */ "./node_modules/@supabase/realtime-js/dist/module/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const DEFAULT_OPTIONS = {
    schema: 'public',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_HEADERS,
};
/**
 * Supabase Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 */
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.headers Any additional headers to send with each network request.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.fetch A custom fetch implementation.
     */
    constructor(supabaseUrl, supabaseKey, options) {
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl)
            throw new Error('supabaseUrl is required.');
        if (!supabaseKey)
            throw new Error('supabaseKey is required.');
        supabaseUrl = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_3__.stripTrailingSlash)(supabaseUrl);
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.restUrl = `${supabaseUrl}/rest/v1`;
        this.realtimeUrl = `${supabaseUrl}/realtime/v1`.replace('http', 'ws');
        this.authUrl = `${supabaseUrl}/auth/v1`;
        this.storageUrl = `${supabaseUrl}/storage/v1`;
        this.schema = settings.schema;
        this.auth = this._initSupabaseAuthClient(settings);
        this.realtime = this._initRealtimeClient(settings.realtime);
        this.fetch = settings.fetch;
        // In the future we might allow the user to pass in a logger to receive these events.
        // this.realtime.onOpen(() => console.log('OPEN'))
        // this.realtime.onClose(() => console.log('CLOSED'))
        // this.realtime.onError((e: Error) => console.log('Socket error', e))
    }
    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */
    get storage() {
        return new _supabase_storage_js__WEBPACK_IMPORTED_MODULE_4__.SupabaseStorageClient(this.storageUrl, this._getAuthHeaders(), this.fetch);
    }
    /**
     * Perform a table operation.
     *
     * @param table The table name to operate on.
     */
    from(table) {
        const url = `${this.restUrl}/${table}`;
        return new _lib_SupabaseQueryBuilder__WEBPACK_IMPORTED_MODULE_5__.SupabaseQueryBuilder(url, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            realtime: this.realtime,
            table,
            fetch: this.fetch,
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param head   When set to true, no data will be returned.
     * @param count  Count algorithm to use to count rows in a table.
     *
     */
    rpc(fn, params, { head = false, count = null, } = {}) {
        const rest = this._initPostgRESTClient();
        return rest.rpc(fn, params, { head, count });
    }
    /**
     * Removes an active subscription and returns the number of open connections.
     *
     * @param subscription The subscription you want to remove.
     */
    removeSubscription(subscription) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._closeSubscription(subscription);
                const openSubscriptions = this.getSubscriptions().length;
                if (!openSubscriptions) {
                    const { error } = yield this.realtime.disconnect();
                    if (error)
                        return resolve({ error });
                }
                return resolve({ error: null, data: { openSubscriptions } });
            }
            catch (error) {
                return resolve({ error });
            }
        }));
    }
    _closeSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!subscription.isClosed()) {
                yield this._closeChannel(subscription);
            }
        });
    }
    /**
     * Returns an array of all your subscriptions.
     */
    getSubscriptions() {
        return this.realtime.channels;
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, localStorage, headers, }) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
        };
        return new _lib_SupabaseAuthClient__WEBPACK_IMPORTED_MODULE_6__.SupabaseAuthClient({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, headers), authHeaders),
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            localStorage,
            fetch: this.fetch,
        });
    }
    _initRealtimeClient(options) {
        return new _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_1__.RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, options), { params: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.params), { apikey: this.supabaseKey }) }));
    }
    _initPostgRESTClient() {
        return new _supabase_postgrest_js__WEBPACK_IMPORTED_MODULE_0__.PostgrestClient(this.restUrl, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            fetch: this.fetch,
        });
    }
    _getAuthHeaders() {
        var _a, _b;
        const headers = _lib_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_HEADERS;
        const authBearer = (_b = (_a = this.auth.session()) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
        headers['apikey'] = this.supabaseKey;
        headers['Authorization'] = `Bearer ${authBearer}`;
        return headers;
    }
    _closeChannel(subscription) {
        return new Promise((resolve, reject) => {
            subscription
                .unsubscribe()
                .receive('ok', () => {
                this.realtime.remove(subscription);
                return resolve(true);
            })
                .receive('error', (e) => reject(e));
        });
    }
}
//# sourceMappingURL=SupabaseClient.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoTrueApi": () => (/* reexport safe */ _supabase_gotrue_js__WEBPACK_IMPORTED_MODULE_0__.GoTrueApi),
/* harmony export */   "GoTrueClient": () => (/* reexport safe */ _supabase_gotrue_js__WEBPACK_IMPORTED_MODULE_0__.GoTrueClient),
/* harmony export */   "RealtimeClient": () => (/* reexport safe */ _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_1__.RealtimeClient),
/* harmony export */   "RealtimeSubscription": () => (/* reexport safe */ _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_1__.RealtimeSubscription),
/* harmony export */   "Transformers": () => (/* reexport safe */ _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_1__.Transformers),
/* harmony export */   "createClient": () => (/* binding */ createClient),
/* harmony export */   "SupabaseClient": () => (/* reexport safe */ _SupabaseClient__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _SupabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SupabaseClient */ "./node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js");
/* harmony import */ var _supabase_gotrue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/gotrue-js */ "./node_modules/@supabase/gotrue-js/dist/module/index.js");
/* harmony import */ var _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/realtime-js */ "./node_modules/@supabase/realtime-js/dist/module/index.js");



/**
 * Creates a new Supabase Client.
 */
const createClient = (supabaseUrl, supabaseKey, options) => {
    return new _SupabaseClient__WEBPACK_IMPORTED_MODULE_2__["default"](supabaseUrl, supabaseKey, options);
};

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupabaseAuthClient": () => (/* binding */ SupabaseAuthClient)
/* harmony export */ });
/* harmony import */ var _supabase_gotrue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/gotrue-js */ "./node_modules/@supabase/gotrue-js/dist/module/index.js");

class SupabaseAuthClient extends _supabase_gotrue_js__WEBPACK_IMPORTED_MODULE_0__.GoTrueClient {
    constructor(options) {
        super(options);
    }
}
//# sourceMappingURL=SupabaseAuthClient.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseQueryBuilder.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseQueryBuilder.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupabaseQueryBuilder": () => (/* binding */ SupabaseQueryBuilder)
/* harmony export */ });
/* harmony import */ var _supabase_postgrest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/postgrest-js */ "./node_modules/@supabase/postgrest-js/dist/module/index.js");
/* harmony import */ var _SupabaseRealtimeClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupabaseRealtimeClient */ "./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseRealtimeClient.js");


class SupabaseQueryBuilder extends _supabase_postgrest_js__WEBPACK_IMPORTED_MODULE_0__.PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, realtime, table, fetch, }) {
        super(url, { headers, schema, fetch });
        this._subscription = new _SupabaseRealtimeClient__WEBPACK_IMPORTED_MODULE_1__.SupabaseRealtimeClient(realtime, headers, schema, table);
        this._realtime = realtime;
    }
    /**
     * Subscribe to realtime changes in your databse.
     * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
     * @param callback A callback that will handle the payload that is sent whenever your database changes.
     */
    on(event, callback) {
        if (!this._realtime.isConnected()) {
            this._realtime.connect();
        }
        return this._subscription.on(event, callback);
    }
}
//# sourceMappingURL=SupabaseQueryBuilder.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseRealtimeClient.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/lib/SupabaseRealtimeClient.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupabaseRealtimeClient": () => (/* binding */ SupabaseRealtimeClient)
/* harmony export */ });
/* harmony import */ var _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/realtime-js */ "./node_modules/@supabase/realtime-js/dist/module/index.js");

class SupabaseRealtimeClient {
    constructor(socket, headers, schema, tableName) {
        const chanParams = {};
        const topic = tableName === '*' ? `realtime:${schema}` : `realtime:${schema}:${tableName}`;
        const userToken = headers['Authorization'].split(' ')[1];
        if (userToken) {
            chanParams['user_token'] = userToken;
        }
        this.subscription = socket.channel(topic, chanParams);
    }
    getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {},
        };
        if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
            records.new = _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_0__.Transformers.convertChangeData(payload.columns, payload.record);
        }
        if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
            records.old = _supabase_realtime_js__WEBPACK_IMPORTED_MODULE_0__.Transformers.convertChangeData(payload.columns, payload.old_record);
        }
        return records;
    }
    /**
     * The event you want to listen to.
     *
     * @param event The event
     * @param callback A callback function that is called whenever the event occurs.
     */
    on(event, callback) {
        this.subscription.on(event, (payload) => {
            let enrichedPayload = {
                schema: payload.schema,
                table: payload.table,
                commit_timestamp: payload.commit_timestamp,
                eventType: payload.type,
                new: {},
                old: {},
            };
            enrichedPayload = Object.assign(Object.assign({}, enrichedPayload), this.getPayloadRecords(payload));
            callback(enrichedPayload);
        });
        return this;
    }
    /**
     * Enables the subscription.
     */
    subscribe(callback = () => { }) {
        this.subscription.onError((e) => callback('SUBSCRIPTION_ERROR', e));
        this.subscription.onClose(() => callback('CLOSED'));
        this.subscription
            .subscribe()
            .receive('ok', () => callback('SUBSCRIBED'))
            .receive('error', (e) => callback('SUBSCRIPTION_ERROR', e))
            .receive('timeout', () => callback('RETRYING_AFTER_TIMEOUT'));
        return this.subscription;
    }
}
//# sourceMappingURL=SupabaseRealtimeClient.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/lib/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/lib/constants.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_HEADERS": () => (/* binding */ DEFAULT_HEADERS)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@supabase/supabase-js/dist/module/lib/version.js");
// constants.ts

const DEFAULT_HEADERS = { 'X-Client-Info': `supabase-js/${_version__WEBPACK_IMPORTED_MODULE_0__.version}` };
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/lib/helpers.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/lib/helpers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "stripTrailingSlash": () => (/* binding */ stripTrailingSlash)
/* harmony export */ });
// helpers.ts
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function stripTrailingSlash(url) {
    return url.replace(/\/$/, '');
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@supabase/supabase-js/dist/module/lib/version.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@supabase/supabase-js/dist/module/lib/version.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
// generated by genversion
const version = '1.28.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./resources/js/library/supabase/supabase.js":
/*!***************************************************!*\
  !*** ./resources/js/library/supabase/supabase.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var supabase = __webpack_require__(/*! @supabase/supabase-js */ "./node_modules/@supabase/supabase-js/dist/module/index.js");

var supabaseClient = supabase.createClient("https://ccbzidgtbnectbxdhvtk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzQ3NTM1MywiZXhwIjoxOTUzMDUxMzUzfQ.3Cen8FU0GioyUxR3dZwfU7pj6B6aHtgLPsSuAPovQqs", {
  fetch: fetch
});
module.exports = supabaseClient;

/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/es5-ext/global.js":
/*!****************************************!*\
  !*** ./node_modules/es5-ext/global.js ***!
  \****************************************/
/***/ ((module) => {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Fallback to standard globalThis if available
	if (typeof globalThis === "object" && globalThis) return globalThis;

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of updates to Object.prototype being restricted
		// via preventExtensions, seal or freeze
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ works, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ }),

/***/ "./node_modules/websocket/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/browser.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _globalThis;
if (typeof globalThis === 'object') {
	_globalThis = globalThis;
} else {
	try {
		_globalThis = __webpack_require__(/*! es5-ext/global */ "./node_modules/es5-ext/global.js");
	} catch (error) {
	} finally {
		if (!_globalThis && typeof window !== 'undefined') { _globalThis = window; }
		if (!_globalThis) { throw new Error('Could not determine global this'); }
	}
}

var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = __webpack_require__(/*! ./version */ "./node_modules/websocket/lib/version.js");


/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
	var native_instance;

	if (protocols) {
		native_instance = new NativeWebSocket(uri, protocols);
	}
	else {
		native_instance = new NativeWebSocket(uri);
	}

	/**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */
	return native_instance;
}
if (NativeWebSocket) {
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {
		Object.defineProperty(W3CWebSocket, prop, {
			get: function() { return NativeWebSocket[prop]; }
		});
	});
}

/**
 * Module exports.
 */
module.exports = {
    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
    'version'      : websocket_version
};


/***/ }),

/***/ "./node_modules/websocket/lib/version.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/version.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ../package.json */ "./node_modules/websocket/package.json").version;


/***/ }),

/***/ "./node_modules/websocket/package.json":
/*!*********************************************!*\
  !*** ./node_modules/websocket/package.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"websocket@^1.0.34","_id":"websocket@1.0.34","_inBundle":false,"_integrity":"sha512-PRDso2sGwF6kM75QykIesBijKSVceR6jL2G8NGYyq2XrItNC2P5/qL5XeR056GhA+Ly7JMFvJb9I312mJfmqnQ==","_location":"/websocket","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"websocket@^1.0.34","name":"websocket","escapedName":"websocket","rawSpec":"^1.0.34","saveSpec":null,"fetchSpec":"^1.0.34"},"_requiredBy":["/@supabase/realtime-js"],"_resolved":"https://registry.npmjs.org/websocket/-/websocket-1.0.34.tgz","_shasum":"2bdc2602c08bf2c82253b730655c0ef7dcab3111","_spec":"websocket@^1.0.34","_where":"D:\\\\SoftwareInstallation\\\\laragon\\\\www\\\\hidden-food\\\\node_modules\\\\@supabase\\\\realtime-js","author":{"name":"Brian McKelvey","email":"theturtle32@gmail.com","url":"https://github.com/theturtle32"},"browser":"lib/browser.js","bugs":{"url":"https://github.com/theturtle32/WebSocket-Node/issues"},"bundleDependencies":false,"config":{"verbose":false},"contributors":[{"name":"Iñaki Baz Castillo","email":"ibc@aliax.net","url":"http://dev.sipdoc.net"}],"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"deprecated":false,"description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint":"^2.0.0","jshint-stylish":"^2.2.1","tape":"^4.9.1"},"directories":{"lib":"./lib"},"engines":{"node":">=4.0.0"},"homepage":"https://github.com/theturtle32/WebSocket-Node","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"license":"Apache-2.0","main":"index","name":"websocket","repository":{"type":"git","url":"git+https://github.com/theturtle32/WebSocket-Node.git"},"scripts":{"gulp":"gulp","test":"tape test/unit/*.js"},"version":"1.0.34"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/library/supabase/supabase.js");
/******/ 	
/******/ })()
;