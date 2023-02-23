import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mock from '../mock';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import Utf8 from 'crypto-js/enc-utf8';
import jwtDecode from 'jwt-decode';
/* eslint-disable camelcase */

const authDB = {
	users: [
		{
			uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
			from: 'custom-db',
			password: 'admin',
			role: 'admin',
			data: {
				displayName: 'فاطمه کاظمی زاده ',
				photoURL: 'assets/images/avatars/Abbott.jpg',
				email: 'admin@fusetheme.com',
				settings: {
					layout: {
						style: 'layout1',
						config: {
							scroll: 'content',
							navbar: {
								display: true,
								folded: true,
								position: 'left'
							},
							toolbar: {
								display: true,
								style: 'fixed',
								position: 'below'
							},
							footer: {
								display: true,
								style: 'fixed',
								position: 'below'
							},
							mode: 'fullwidth'
						}
					},
					customScrollbars: true,
					theme: {
						main: 'defaultDark',
						navbar: 'defaultDark',
						toolbar: 'defaultDark',
						footer: 'defaultDark'
					}
				},
				shortcuts: ['calendar', 'mail', 'contacts']
			}
		},
		{
			uuid: 'XgbuVEXBU6gtSKdbTYR1Zbbby1i3',
			from: 'custom-db',
			password: 'staff',
			role: 'staff',
			data: {
				displayName: 'فاطمه کاظمی زاده ',
				photoURL: 'assets/images/avatars/Arnold.jpg',
				email: 'staff@fusetheme.com',
				settings: {
					layout: {
						style: 'layout2',
						config: {
							mode: 'boxed',
							scroll: 'content',
							navbar: {
								display: true
							},
							toolbar: {
								display: true,
								position: 'below'
							},
							footer: {
								display: true,
								style: 'fixed'
							}
						}
					},
					customScrollbars: true,
					theme: {
						main: 'greeny',
						navbar: 'mainThemeDark',
						toolbar: 'mainThemeDark',
						footer: 'mainThemeDark'
					}
				},
				shortcuts: ['calendar', 'mail', 'contacts', 'todo']
			}
		}
	]
};

mock.onGet('/api/auth').reply(async (config) => {
	const data = JSON.parse(config.data);
	const { email, password } = data;
	const user = _.cloneDeep(authDB.users.find(_user => _user.data.email === email));

	const error = [];

	if (!user) {
		error.push({
			type: 'email',
			message: 'آدرس ایمیلت رو بررسی کن'
		});
	}

	if (user && user.password !== password) {
		error.push({
			type: 'password',
			message: 'کلمه عبورت رو بررسی کن'
		});
	}


	if (error.length === 0) {
		delete user.password;

		const access_token = generateJWTToken({ id: user.uuid });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}

	return [200, { error }];
});

mock.onGet('/api/auth/access-token').reply(config => {
	const data = JSON.parse(config.data);
	const { access_token } = data;

	if(verifyJWTToken(access_token)) {
		const { id } = jwtDecode(access_token);

		const user = _.cloneDeep(authDB.users.find(_user => _user.uuid === id));

		delete user.password;

		const updatedAccessToken = generateJWTToken({ id: user.uuid });

		const response = {
			user,
			access_token: updatedAccessToken
		};

		return [200, response];
	} else{
		const error = 'Invalid access token detected';
		return [401, { error }];
	}
});

mock.onPost('/api/auth/register').reply(request => {
	const data = JSON.parse(request.data);
	const { displayName, password, email } = data;
	const isEmailExists = authDB.users.find(_user => _user.data.email === email);
	const error = [];

	if (isEmailExists) {
		error.push({
			type: 'email',
			message: 'این آدرس ایمیل از قبل توی سایت ثبت شده'
		});
	}

	if (error.length === 0) {
		const newUser = {
			uuid: FuseUtils.generateGUID(),
			from: 'custom-db',
			password,
			role: 'admin',
			data: {
				displayName,
				photoURL: 'assets/images/avatars/Abbott.jpg',
				email,
				settings: {},
				shortcuts: []
			}
		};

		authDB.users = [...authDB.users, newUser];

		const user = _.cloneDeep(newUser);

		delete user.password;

		const access_token = generateJWTToken({ id: user.uuid });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}
	return [200, { error }];
});

mock.onPost('/api/auth/user/update').reply(config => {
	const data = JSON.parse(config.data);
	const { user } = data;

	authDB.users = authDB.users.map(_user => {
		if (user.uuid === user.id) {
			return _.merge(_user, user);
		}
		return _user;
	});

	return [200, user];
});

/**
 * JWT Token Generator/Verifier Helpers
 * !! Created for Demonstration Purposes, cannot be used for PRODUCTION
 */

const jwtSecret= 'some-secret-code-goes-here';

function base64url(source)
{
	// Encode in classical base64
	let encodedSource = Base64.stringify(source);

	// Remove padding equal characters
	encodedSource = encodedSource.replace(/=+$/, '');

	// Replace characters according to base64url specifications
	encodedSource = encodedSource.replace(/\+/g, '-');
	encodedSource = encodedSource.replace(/\//g, '_');

	// Return the base64 encoded string
	return encodedSource;
}

function generateJWTToken(tokenPayload)
{
	// Define token header
	const header = {
		alg: 'HS256',
		typ: 'JWT'
	};

	// Calculate the issued at and expiration dates
	const date = new Date();
	const iat = Math.floor(date.getTime() / 1000);
	const exp = Math.floor((date.setDate(date.getDate() + 7)) / 1000);

	// Define token payload
	const payload = {
		iat: iat,
		iss: 'Fuse',
		exp: exp,
		...tokenPayload
	};

	// Stringify and encode the header
	const stringifiedHeader = Utf8.parse(JSON.stringify(header));
	const encodedHeader = base64url(stringifiedHeader);

	// Stringify and encode the payload
	const stringifiedPayload = Utf8.parse(JSON.stringify(payload));
	const encodedPayload = base64url(stringifiedPayload);

	// Sign the encoded header and mock-api
	let signature: any = encodedHeader + '.' + encodedPayload;
	signature = HmacSHA256(signature, jwtSecret);
	signature = base64url(signature);

	// Build and return the token
	return encodedHeader + '.' + encodedPayload + '.' + signature;
}

function verifyJWTToken(token)
{
	// Split the token into parts
	const parts = token.split('.');
	const header = parts[0];
	const payload = parts[1];
	const signature = parts[2];

	// Re-sign and encode the header and payload using the secret
	const signatureCheck = base64url(HmacSHA256(header + '.' + payload, jwtSecret));

	// Verify that the resulting signature is valid
	return (signature === signatureCheck);
}
