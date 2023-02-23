import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { apiUrlLogin, currentToken, currentUser, fiscalPeriod } from './defaultValues';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    // this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Invalid access_token');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/auth/register', data).then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithEmailAndPassword = (email, userPassword) => {
    const errorMessageResp = [
      {
        message: 'خطا در عملیات',
        type: 'password',
      },
    ];
    return new Promise((resolve, reject) => {
      axios
        .post(apiUrlLogin, {
          Username: email,
          Password: userPassword,
        })
        .then((response) => {
          if (!response.message && response.data !== null && response.data !== undefined) {
            const loginUserResp = response.data;
            if (loginUserResp !== null && loginUserResp.status === 0) {
              const itemToken = { ...currentToken };
              const itemUser = { ...currentUser };
              itemToken.accessToken = loginUserResp.result.accessToken;
              itemToken.refreshToken = loginUserResp.result.refreshToken;
              itemUser.data.displayName = loginUserResp.result.fullName;
              // user.role = loginUserResp.result.roles.map((x) => x.name);
              itemUser.role = 'Admin';
              this.setSession(itemToken);
              this.setCurrentUser(itemUser);
              const itemfiscalPeriod = { ...fiscalPeriod };

              if (loginUserResp.result.fiscalPeriod != null) {
                itemfiscalPeriod.fiscalPeriodId = loginUserResp.result.fiscalPeriod.fiscalPeriodId;
                itemfiscalPeriod.title = loginUserResp.result.fiscalPeriod.title;
                itemfiscalPeriod.startDate = loginUserResp.result.fiscalPeriod.startDate;
                itemfiscalPeriod.endDate = loginUserResp.result.fiscalPeriod.endDate;
                itemfiscalPeriod.State = loginUserResp.result.fiscalPeriod.State;
              }
              this.setFiscalPeriod(itemfiscalPeriod);
              resolve(itemUser);
            } else if (loginUserResp === null) {
              reject(errorMessageResp);
            } else {
              // eslint-disable-next-line prefer-destructuring
              errorMessageResp[0].message = loginUserResp.errors[0];
              reject(errorMessageResp);
            }
          } else {
            reject(errorMessageResp);
          }
          // if (response.data.user) {
          //   this.setSession(response.data.access_token);
          //   resolve(response.data.user);
          // } else {
          //   reject(response.data.error);
          // }
        })
        .catch((error) => {
          errorMessageResp[0].message = error.message;
          reject(errorMessageResp);
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      // axios
      //   // .get('http://localhost:45225/api/Account/GetUserInfo', {
      //   .get('/api/auth/access-token', {
      //     data: {
      //       access_token: this.getAccessToken(),
      //     },
      //   })
      //   .then((response) => {
      //     if (response.data.user) {
      //       this.setSession(response.data.access_token);
      //       resolve(response.data.user);
      //     } else {
      //       this.logout();
      //       reject(new Error('Failed to login with token.'));
      //     }
      //   })
      //   .catch((error) => {
      //     this.logout();
      //     reject(new Error('Failed to login with token.'));
      //   });
      const user = this.getCurrentUser();
      if (user) {
        resolve(user);
      } else {
        this.logout();
        reject(new Error('Failed to login with token.'));
      }
    });
  };

  updateUserData = (user) => {
    return axios.post('/api/auth/user/update', {
      user,
    });
  };

  // setSession = (access_token) => {
  //   if (access_token) {
  //     localStorage.setItem('jwt_access_token', access_token);
  //     axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  //   } else {
  //     localStorage.removeItem('jwt_access_token');
  //     delete axios.defaults.headers.common.Authorization;
  //   }
  // };

  logout = () => {
    // this.setSession(null);
    localStorage.removeItem('swp_current_token');
    delete axios.defaults.headers.common.Authorization;
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  // getAccessToken = () => {
  //   return window.localStorage.getItem('jwt_access_token');
  // };

  getCurrentUser = () => {
    let user = null;
    try {
      user =
        localStorage.getItem('swp_current_user') != null
          ? JSON.parse(localStorage.getItem('swp_current_user'))
          : null;
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error);
      user = null;
    }
    return user;
  };

  setCurrentUser = (user) => {
    try {
      if (user) {
        localStorage.setItem('swp_current_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('swp_current_user');
      }
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
    }
  };

  setSession = (token) => {
    try {
      if (token === null || token.accessToken === undefined) {
        return;
      }
      if (token) {
        localStorage.setItem('swp_current_token', JSON.stringify(token));
        axios.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`;
      } else {
        localStorage.removeItem('swp_current_token');
        delete axios.defaults.headers.common.Authorization;
      }
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js : setCurrentToken -> error', error);
    }
  };

  getAccessToken = () => {
    let token = null;
    try {
      token =
        localStorage.getItem('swp_current_token') != null
          ? JSON.parse(localStorage.getItem('swp_current_token')).accessToken
          : null;
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js  : getCurrentToken -> error', error);
      token = null;
    }
    if (token !== undefined && token !== null) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    return token;
  };

  setFiscalPeriod = (currentFiscalPeriod) => {
    try {
      if (currentFiscalPeriod) {
        localStorage.setItem('gogo_current_fiscalPeriod', JSON.stringify(currentFiscalPeriod));
      } else {
        localStorage.removeItem('gogo_current_fiscalPeriod');
      }
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js : setfiscalPeriod -> error', error);
    }
  };

  getFiscalPeriod = () => {
    let currentFiscalPeriod = null;
    try {
      currentFiscalPeriod =
        localStorage.getItem('swp_current_fiscalPeriod') != null
          ? JSON.parse(localStorage.getItem('swp_current_fiscalPeriod'))
          : null;
    } catch (error) {
      console.log('>>>>: src/helpers/Utils.js  : getfiscalPeriod -> error', error);
      currentFiscalPeriod = null;
    }
    return currentFiscalPeriod;
  };
}

const instance = new JwtService();

export default instance;
