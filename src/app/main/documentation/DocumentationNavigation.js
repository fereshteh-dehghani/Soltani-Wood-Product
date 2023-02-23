import { fuseReactLatestVersion } from './changelog/ChangelogDoc';
import FuseComponentsNavigation from './fuse-components/FuseComponentsNavigation';
import MaterialUIComponentsNavigation from './material-ui-components/MaterialUIComponentsNavigation';
import ThirdPartyComponentsNavigation from './third-party-components/ThirdPartyComponentsNavigation';

const DocumentationNavigation = {
  id: 'documentation',
  title: 'مستندات',
  type: 'group',
  icon: 'star',
  children: [
    {
      id: 'changelog',
      title: 'تغییرات نسخه',
      type: 'item',
      icon: 'history',
      url: '/documentation/changelog',
      badge: {
        title: fuseReactLatestVersion,
        bg: 'rgb(236, 12, 142)',
        fg: '#FFFFFF',
      },
    },
    {
      id: 'getting-started',
      title: 'شروع به کار',
      type: 'collapse',
      icon: 'play_arrow',
      children: [
        {
          id: 'introduction-doc',
          title: 'معرفی',
          type: 'item',
          url: '/documentation/getting-started/introduction',
        },
        {
          id: 'installation-doc',
          title: 'نصب و راه اندازی',
          type: 'item',
          url: '/documentation/getting-started/installation',
        },
      ],
    },
    {
      id: 'development',
      title: 'توسعه',
      type: 'collapse',
      icon: 'developer_board',
      children: [
        {
          id: 'development-server-doc',
          title: 'سرور توسعه',
          type: 'item',
          url: '/documentation/development/development-server',
        },
        {
          id: 'production-doc',
          title: 'تهیه Production Build',
          type: 'item',
          url: '/documentation/development/production',
        },
        {
          id: 'deployment-doc',
          title: 'دولوپ قالب',
          type: 'item',
          url: '/documentation/development/deployment',
        },
        {
          id: 'project-structure-doc',
          title: 'ساختار پروژه',
          type: 'item',
          url: '/documentation/development/project-structure',
        },
        {
          id: 'api-calls-doc',
          title: 'API Calls',
          type: 'item',
          url: '/documentation/development/api-calls',
        },
        {
          id: 'updating-fuse-react-doc',
          title: 'بروزرسانی Fuse React',
          type: 'item',
          url: '/documentation/development/updating-fuse-react',
        },
        {
          id: 'fuse-react-ides-vscode-webstorm-doc',
          title: 'IDEs (Webstorm, VsCode)',
          type: 'item',
          url: '/documentation/development/ides-vscode-webstorm',
        },
        {
          id: 'fuse-react-heroku-notes-doc',
          title: 'یادداشت های HEROKU',
          type: 'item',
          url: '/documentation/development/heroku-notes',
        },
      ],
    },
    {
      id: 'theming',
      title: 'تم',
      type: 'collapse',
      icon: 'palette',
      children: [
        {
          id: 'theme-schemes-doc',
          title: 'طرح های تم',
          type: 'item',
          url: '/documentation/theming/theme-schemes',
        },
        {
          id: 'theme-layouts-doc',
          title: 'لایوت های تم',
          type: 'item',
          url: '/documentation/theming/theme-layouts',
        },
        {
          id: 'page-layouts-doc',
          title: 'صفحات لایوت',
          type: 'item',
          url: '/documentation/theming/page-layouts',
        },
        {
          id: 'rtl-doc',
          title: 'پشتیبانی از راستچین و چپ چین',
          type: 'item',
          url: '/documentation/theming/rtl-support',
        },
        {
          id: 'changing-default-font-doc',
          title: 'تغییر فونت پیش فرض',
          type: 'item',
          url: '/documentation/theming/changing-default-font',
        },
      ],
    },
    {
      id: 'configs',
      title: 'Configuration',
      type: 'collapse',
      icon: 'settings',
      children: [
        {
          id: 'default-settings-doc',
          title: 'تنظیمات پیش فرض',
          type: 'item',
          url: '/documentation/configuration/settings',
        },
        {
          id: 'fuse-react-routing-doc',
          title: 'روتر ها - Routing',
          type: 'item',
          url: '/documentation/configuration/routing',
        },
        {
          id: 'fuse-react-navigation-doc',
          title: 'ناوبری - Navigation',
          type: 'item',
          url: '/documentation/configuration/navigation',
        },
        {
          id: 'fuse-react-code-splitting-doc',
          title: 'Code Splitting',
          type: 'item',
          url: '/documentation/configuration/code-splitting',
        },
        {
          id: 'fuse-react-multi-language-doc',
          title: 'چندزبانگی',
          type: 'item',
          url: '/documentation/configuration/multi-language',
        },
      ],
    },
    {
      id: 'authentication',
      title: 'احراز هویت',
      type: 'collapse',
      icon: 'verified_user',
      children: [
        {
          id: 'jwt-auth-doc',
          title: 'JWT Authentication Service',
          type: 'item',
          url: '/documentation/authentication/jwt',
        },
        {
          id: 'firebase-auth-doc',
          title: 'Firebase Authentication Service',
          type: 'item',

          url: '/documentation/authentication/firebase',
        },
        {
          id: 'auth0-auth-doc',
          title: 'Auth0 Authentication Service',
          type: 'item',
          url: '/documentation/authentication/auth0',
        },
      ],
    },
    FuseComponentsNavigation,
    MaterialUIComponentsNavigation,
    ThirdPartyComponentsNavigation,
  ],
};

export default DocumentationNavigation;
