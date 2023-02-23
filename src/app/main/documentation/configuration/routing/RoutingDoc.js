import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function RoutingDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        روتر ها - Routing
      </Typography>

      <Typography className="mb-16" component="p">
        سیستم مسیریابی Fuse React بر اساس
        <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
          react-router
        </a>{' '}
        و بسته آن
        <a
          href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-router-config
        </a>
      </Typography>

      <Typography className="mb-16" component="p">
        برای رویکرد مدولار و تنظیمات فیوز مبتنی بر مسیر، ما از فایل‌های پیکربندی استفاده می‌کنیم و مسیرهایی را از آن فایل‌ها ایجاد می‌کنیم.
        <br />
        (هرچی تلاش کردم معنیش توی فارسی خوب نشد، پس انگلیسیش:)
        <br />
        For the modular approach and route based Fuse settings, we are using config files and
        generate routes from those files.
      </Typography>

      <Typography className="mb-16" component="p">
      برای مثال، نگاهی به کد زیر 
      <code>MailAppConfig.js</code>
       بیندازید. برای این مثال می‌توانید تمام تنظیمات یک مسیر خاص را به‌عنوان 
       <code>/apps/mail</code>
        لغو کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-32">
        {`
                        import i18next from 'i18next';
                        import { lazy } from 'react';
                        import { Navigate } from 'react-router-dom';
                        
                        const MailApp = lazy(() => import('./MailApp'));
                        
                        const MailAppConfig = {
                          settings: {
                            layout: {},
                          },
                          routes: [
                            {
                              path: 'apps/mail/label/:labelHandle',
                              element: <MailApp />,
                              children: [{ path: ':mailId', element: <MailApp /> }],
                            },
                            {
                              path: 'apps/mail/filter/:filterHandle',
                              element: <MailApp />,
                              children: [{ path: ':mailId', element: <MailApp /> }],
                            },
                            {
                              path: '/apps/mail/:folderHandle',
                              element: <MailApp />,
                              children: [{ path: ':mailId', element: <MailApp /> }],
                            },
                            {
                              path: 'apps/mail',
                              element: <Navigate to="/apps/mail/inbox" />,
                            },
                          ],
                        };
                        
                        export default MailAppConfig;

                            `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
      سپس مسیرها را از آن فایل در 
      <code>fuse-configs/routesConfig</code>
       وارد و تولید می کنیم

      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-32">
        {`
                                import {appsRoutes} from 'app/main/apps/mail/MailAppConfig.js';
                                import FuseUtils from '@fuse/utils';
                                import { Navigate } from 'react-router-dom';

                                const routeConfigs = [
                                    MailAppConfig
                                ];

                                export const routes = [
                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
                                     {
                                      path: '*',
                                      element: <Navigate to="pages/errors/error-404" />,
                                    },
                                ];
                            `}
      </FuseHighlight>
    </>
  );
}

export default RoutingDoc;
