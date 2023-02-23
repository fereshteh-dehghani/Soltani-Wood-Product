import FuseHighlight from '@fuse/core/FuseHighlight';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function FuseAuthorizationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseAuthorization
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseAuthorization</code> جزء مجوز Fuse React است. با مشاهده <b>تنظیمات مسیر</b> و <b>user.role</b>دسترسی کاربران غیرمجاز را محدود می کند.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Setup
      </Typography>

      <Typography className="mb-16" component="p">
      کامپوننت باید کامپوننت FuseTheme را بپیچد.      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        src/app/App.js
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/App.js')}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      پیکربندی
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
      پیکربندی مسیر:      </Typography>

      <Typography className="mb-16" component="p">
      برای کنترل دسترسی از طریق نقش‌های مجوز، باید مجوز (aut) را در <b>فایل‌های پیکربندی مسیر</b> تعریف کنید.
      </Typography>

      <Typography className="mt-32 mb-8" variant="subtitle2">
      مثال استفاده:      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        src/app/main/auth/admin-role-example/AdminRoleExampleConfig.js
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/main/auth/admin-role-example/AdminRoleExampleConfig.js')}
      </FuseHighlight>

      <Typography className="my-16" component="p">
      همچنین می‌توانید مقادیر اعتبار متفاوتی را برای مسیرهای جداگانه با نوشتن مقدار auth در داخل شی مسیر بدهید.
      </Typography>

      <Paper className="max-w-md my-16">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold text-14">
                Authorization Role (auth) options
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>null</code>
              </TableCell>
              <TableCell>Do not check, allow everyone</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>[]</code>
              </TableCell>
              <TableCell>Only guest allowed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>[admin,user]</code>
              </TableCell>
              <TableCell>Only 'admin' and 'user' roles are allowed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Typography className="mt-48 mb-8" variant="h6">
        User.role Configuration-پیکربندی:
      </Typography>

      <Typography className="mb-16" component="p">
        User <b>role</b> and <b>data</b> are stored at <b>auth.user</b> in the redux store.
      </Typography>

      <Typography className="mb-16" component="p">
      پس از ورود موفقیت آمیز، user.role به روز می شود و FuseAuthorization به طور خودکار کاربر مجاز را تغییر مسیر می دهد.
      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        src/app/auth/store/reducers/user.reducer.js (initial user state)
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`  
                const initialState = {
                role: [],//guest
                data: {
                    'displayName': 'فاطمه کاظمی زاده',
                    'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
                    'email'      : 'fkazemi5236@gmail.com',
                    shortcuts    : [
                      'calendar',
                      'mail',
                      'contacts',
                      'todo'
                    ]
                  }
                };
       `}
      </FuseHighlight>

      <Paper className="max-w-md my-16">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold text-14">User Role options</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>null</code> or <code>undefined</code> or <code>[]</code>
              </TableCell>
              <TableCell>Guest</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>['admin','user']</code> (array)
              </TableCell>
              <TableCell>User has roles 'admin' and 'user'</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>"admin"</code> (string)
              </TableCell>
              <TableCell>User has 'admin' role</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Typography className="mt-48 mb-8" variant="h6">
      پیکربندی آیتم ناوبری:      </Typography>

      <Typography className="mb-16" component="p">
        You can control the navigation <b>item/group/collapse</b> visibility by adding <b>auth</b>
        property in <code>src/app/fuse-configs/NavigationConfig.js</code>.
      </Typography>

      <Typography className="mt-32 mb-8" variant="subtitle2">
      مثال استفاده:      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					 {
						'id'   : 'only-admin-navigation-item',
						'title': 'Nav item only for Admin',
						'type' : 'item',
						'auth' : authRoles.admin,//['admin']
						'url'  : '/auth/admin-role-example',
						'icon' : 'verified_user'
					  },
				`}
      </FuseHighlight>

      <Typography className="mt-48 mb-4" variant="h5">
      محافظت از اعتبار کل برنامه:      </Typography>

      <Typography className="mb-12" variant="subtitle2">
        On routesConfig.js file
      </Typography>

      <Typography className="mb-16" component="p">
      اگر نمی خواهید auth را در پیکربندی هر صفحه تنظیم کنید.        <br />
        You can give default auth role value in the{' '}
        <code>src/app/fuse-configs/routesConfig.js</code>
        file,
        <br />
        Set defaultAuth paramater
        <code>FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user'])</code>
        ,
        <br />
        The individual route configs which has auth option won't be overridden,
        <br />
        With this configuration below, makes <b>whole app</b> auth protected by default:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					import {Redirect} from 'react-router-dom';
					import FuseUtils from '@fuse/utils';
					import {appsConfigs} from 'app/main/apps/appsConfigs';
					import {pagesConfigs} from 'app/main/pages/pagesConfigs';
					import {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';
					import {UserInterfaceConfig} from 'app/main/user-interface/UserInterfaceConfig';
					import {DocumentationConfig} from 'app/main/documentation/DocumentationConfig';
					import {LoginConfig} from 'app/main/login/LoginConfig';
					import {RegisterConfig} from 'app/main/register/RegisterConfig';
					import {LogoutConfig} from 'app/main/logout/LogoutConfig';
					import {CallbackConfig} from 'app/main/callback/CallbackConfig';
					
					const routeConfigs = [
						...appsConfigs,
						...pagesConfigs,
						...authRoleExamplesConfigs,
						UserInterfaceConfig,
						DocumentationConfig,
						LogoutConfig,
						LoginConfig,
						RegisterConfig,
						LogoutConfig,
						CallbackConfig,
					];
					
					const routes = [
						...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
						{
							path     : '/',
							exact    : true,
							element:() => <Navigate to="/apps/dashboards/analytics"/>
						},
						{
							element:() => <Navigate to="/pages/errors/error-404"/>
						}
					];
					
					export default routes;
				`}
      </FuseHighlight>

      <Typography className="mt-48 mb-4" variant="h5">
      به همه (مهمان، کاربر) اجازه دسترسی به صفحه ریشه (/) به عنوان صفحه فرود داده شود      </Typography>

      <Typography className="mb-16" component="p">
        After configuring to make whole app protected as above, we need to set{' '}
        <code>auth:null</code> at the route: <code>/</code> to make it accessible for everyone.
        <br />
        If you redirect the main route (/), also make sure to set the redirected route config
        <code>auth:null</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					import {Redirect} from 'react-router-dom';
					import FuseUtils from '@fuse/utils';
					import {appsConfigs} from 'app/main/apps/appsConfigs';
					import {pagesConfigs} from 'app/main/pages/pagesConfigs';
					import {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';
					import {UserInterfaceConfig} from 'app/main/user-interface/UserInterfaceConfig';
					import {DocumentationConfig} from 'app/main/documentation/DocumentationConfig';
					import {LoginConfig} from 'app/main/login/LoginConfig';
					import {RegisterConfig} from 'app/main/register/RegisterConfig';
					import {LogoutConfig} from 'app/main/logout/LogoutConfig';
					import {CallbackConfig} from 'app/main/callback/CallbackConfig';
					
					const routeConfigs = [
						...appsConfigs,
						...pagesConfigs,
						...authRoleExamplesConfigs,
						UserInterfaceConfig,
						DocumentationConfig,
						LogoutConfig,
						LoginConfig,
						RegisterConfig,
						LogoutConfig,
						CallbackConfig
					];
					
					const routes = [
						//if you want to make whole app auth protected by default change defaultAuth for example:
						// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
						// The individual route configs which has auth option won't be overridden.
						...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin', 'staff', 'user']),
						{
							path     : '/',
							exact    : true,
							auth     : null,
							element:LandingPage
						},
						{
							element:() => <Navigate to="/pages/errors/error-404"/>
						}
					];
					
					export default routes;
				`}
      </FuseHighlight>

      <Typography className="mt-48 mb-4" variant="h5">
      کاربر وارد شده را بسته به نقش او به یک مسیر خاص هدایت کنید      </Typography>

      <Typography className="mb-16" component="p">
        Before dispatching <b>SET_USER_DATA</b> action you can set loginRedirectUrl on
      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        src/app/auth/store/userSlice.js
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					export const setUserData = user => async (dispatch, getState) => {
					
					  /*
            You can redirect the logged-in user to a specific route depending on his role
            */
            if (user.loginRedirectUrl) {
              settingsConfig.loginRedirectUrl = user.loginRedirectUrl; // for example 'apps/academy'
            }
						
						/*
							Set User Settings
						*/
						dispatch(setDefaultSettings(user.data.settings));
						
						dispatch(setUser(user));
					};
				`}
      </FuseHighlight>
      <Typography className="mt-48 mb-4" variant="h5">
      خطای کشف نشده: بیش از حداکثر عمق به‌روزرسانی: حلقه‌های بی‌نهایت      </Typography>
      <Typography className="mb-16" component="p">
        If you are getting this error, make sure authenticated user has rights to access main route{' '}
        <b>"/"</b>
        or it's redirected route path.
      </Typography>
      <Typography className="mb-16" component="p">
        After successful login, every authenticated user should be able to access to main route path{' '}
        <b>"/"</b> or redirected route path.
      </Typography>
    </>
  );
}

export default FuseAuthorizationDoc;
