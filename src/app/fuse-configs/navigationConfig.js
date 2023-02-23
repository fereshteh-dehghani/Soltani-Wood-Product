import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import fa from './navigation-i18n/fa';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('fa', 'navigation', fa);
i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'userManagement',
        title: 'مدیریت کاربران',
        // translate: 'USERS_MANAGEMENT',
        type: 'collapse',
        icon: 'people_alt',
        children: [
          {
            id: 'usersList-userManagement',
            title: 'لیست کاربران',
            type: 'item',
            url: 'apps/usersManagement/users-list',
          },
          {
            id: 'rolesManagement-userManagement',
            title: 'مدیریت نقش ها',
            type: 'item',
            url: 'apps/usersManagement/roles-management',
          },
          {
            id: 'userManagement-register',
            title: 'ثبت نام کاربر',
            type: 'item',
            url: 'apps/usersManagement/register/registerUser',
          },
        ],
      },
      {
        id: 'baseInformation',
        title: 'اطلاعات پایه',
        // translate: 'USERS_MANAGEMENT',
        type: 'collapse',
        icon: 'book',
        children: [
          {
            id: 'products-baseInformation',
            title: 'محصولات',
            type: 'collapse',
            icon: 'category',

            children: [
              {
                id: 'productList-baseInformation',
                title: 'لیست کالا',
                type: 'item',
                url: 'apps/baseInformation/productList',
              },
              {
                id: 'productDifination-baseInformation',
                title: 'ثبت کالا',
                type: 'item',
                url: 'apps/baseInformation/products/new',
              },
              {
                id: 'productGroup-baseInformation',
                title: 'گروه کالا',
                type: 'item',
                url: 'apps/baseInformation/product-group-list',
              },
              {
                id: 'Units-baseInformation',
                title: 'واحدهای سنجش',
                type: 'item',
                url: 'apps/baseInformation/Units',
              },
            ],
          },

          {
            id: 'banks-baseInformation',
            title: 'بانک ها',
            type: 'collapse',
            icon: 'attach_money',
            children: [
              {
                id: 'bankList-baseInformation',
                title: 'لیست بانک ها',
                type: 'item',
                url: 'apps/baseInformation/bank-list',
              },
              {
                id: 'bankAccount-baseInformation',
                title: 'حساب بانکی',
                type: 'item',
                url: 'apps/baseInformation/bank-account',
              },
            ],
          },
          {
            id: 'party-baseInformation',
            title: 'طرف حساب',
            type: 'collapse',
            icon: 'group-work',
            children: [
              {
                id: 'addParty-baseInformation',
                title: 'ثبت طرف حساب',
                type: 'item',
                url: 'apps/baseInformation/party/new',
              },
              {
                id: 'customerGroup-baseInformation',
                title: 'گروه طرف حساب',
                type: 'item',
                url: 'apps/baseInformation/party-groups',
              },
              {
                id: 'partyList-baseInformation',
                title: 'لیست طرف حساب',
                type: 'item',
                url: 'apps/baseInformation/party-list',
              },
            ],
          },
          {
            id: 'stock-baseInformation',
            title: 'موجودی',
            type: 'collapse',
            icon: 'group-work',
            children: [
              {
                id: 'stocks-baseInformation',
                title: 'انبارها',
                type: 'item',
                url: 'apps/baseInformation/stock',
              },
              {
                id: 'cash-baseInformation',
                title: 'صندوق ها',
                type: 'item',
                url: 'apps/baseInformation/cash',
              },
            ],
          },
        ],
      },
      {
        id: 'buy-and-sell',
        title: 'خرید و فروش',
        type: 'collapse',
        icon: 'euro',
        children: [
          {
            id: 'sales-invoce-buy-and-sell',
            title: 'ثبت فاکتور فروش',
            type: 'item',
            url: 'apps/buy-and-sell/sales-invoice/new',
          },
          {
            id: 'sales-invoce-buy-and-sell',
            title: 'لیست فاکتور فروش',
            type: 'item',
            url: 'apps/buy-and-sell/sales-invoice-list',
          },
        ]
      },
      {
        id: 'dashboards',
        title: 'Dashboards',
        translate: 'DASHBOARDS',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'analytics-dashboard',
            title: 'تجزیه و تحلیل',
            type: 'item',
            url: 'apps/dashboards/analytics',
          },
          {
            id: 'project-dashboard',
            title: 'پروژه ها',
            type: 'item',
            url: 'apps/dashboards/project',
          },
        ],
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'CALENDAR',
        type: 'item',
        icon: 'today',
        url: 'apps/calendar',
      },
      {
        id: '1',
        title: 'E-Commerce',
        translate: 'ECOMMERCE',
        type: 'collapse',
        icon: 'shopping_cart',
        url: 'apps/e-commerce',
        children: [
          {
            id: 'e-commerce-products',
            title: 'محصولات',
            type: 'item',
            url: 'apps/e-commerce/products',
            end: true,
          },
          {
            id: 'e-commerce-new-product',
            title: 'محصول جدید',
            type: 'item',
            url: 'apps/e-commerce/products/new',
          },
          {
            id: 'e-commerce-orders',
            title: 'سفارشات',
            type: 'item',
            url: 'apps/e-commerce/orders',
            end: true,
          },
          {
            id: 'e-commerce-order-detail',
            title: 'جزئیات سفارش',
            type: 'item',
            url: 'apps/e-commerce/orders/1',
          },
        ],
      },
      {
        id: 'academy',
        title: 'Academy',
        translate: 'ACADEMY',
        type: 'item',
        icon: 'school',
        url: 'apps/academy',
      },
      {
        id: 'mail',
        title: 'Mail',
        translate: 'MAIL',
        type: 'item',
        icon: 'email',
        url: 'apps/mail',
        badge: {
          title: 25,
          bg: '#F44336',
          fg: '#FFFFFF',
        },
      },
      {
        id: 'todo',
        title: 'To-Do',
        translate: 'TODO',
        type: 'item',
        icon: 'check_box',
        url: 'apps/todo',
        badge: {
          title: 3,
          bg: 'rgb(255, 111, 0)',
          fg: '#FFFFFF',
        },
      },
      {
        id: 'file-manager',
        title: 'File Manager',
        translate: 'FILE_MANAGER',
        type: 'item',
        icon: 'folder',
        url: 'apps/file-manager',
      },
      {
        id: 'contacts',
        title: 'Contacts',
        translate: 'CONTACTS',
        type: 'item',
        icon: 'account_box',
        url: 'apps/contacts/all',
      },
      {
        id: 'chat',
        title: 'Chat',
        translate: 'CHAT',
        type: 'item',
        icon: 'chat',
        url: 'apps/chat',
        badge: {
          title: 13,
          bg: 'rgb(9, 210, 97)',
          fg: '#FFFFFF',
        },
      },
      {
        id: 'scrumboard',
        title: 'Scrumboard',
        translate: 'SCRUMBOARD',
        type: 'item',
        icon: 'assessment',
        url: 'apps/scrumboard',
      },
      {
        id: 'notes',
        title: 'Notes',
        translate: 'NOTES',
        type: 'item',
        icon: 'note',
        url: 'apps/notes',
      },
    ],
  },
  {
    id: 'pages',
    title: 'صفحه ها',
    type: 'group',
    icon: 'pages',
    children: [
      {
        id: 'authentication',
        title: 'احراز هویت',
        type: 'collapse',
        icon: 'lock',
        badge: {
          title: 10,
          bg: '#525E8A',
          fg: '#FFFFFF',
        },
        children: [
          {
            id: 'authentication-login',
            title: 'ورود',
            type: 'item',
            url: 'pages/auth/login',
          },
          {
            id: 'login-v2',
            title: 'ورود v2',
            type: 'item',
            url: 'pages/auth/login-2',
          },
          {
            id: 'login-v3',
            title: 'ورود v3',
            type: 'item',
            url: 'pages/auth/login-3',
          },
          {
            id: 'authentication-register',
            title: 'ثبت نام',
            type: 'item',
            url: 'pages/auth/register',
          },
          {
            id: 'authentication-register-v2',
            title: 'ثبت نام v2',
            type: 'item',
            url: 'pages/auth/register-2',
          },
          {
            id: 'authentication-register-v3',
            title: 'ثبت نام v3',
            type: 'item',
            url: 'pages/auth/register-3',
          },
          {
            id: 'authentication-forgot-password',
            title: 'فراموشی رمز',
            type: 'item',
            url: 'pages/auth/forgot-password',
          },
          {
            id: 'authentication-forgot-password-v2',
            title: 'فراموشی رمز v2',
            type: 'item',
            url: 'pages/auth/forgot-password-2',
          },
          {
            id: 'authentication-reset-password',
            title: 'بازنشانی رمز',
            type: 'item',
            url: 'pages/auth/reset-password',
          },
          {
            id: 'authentication-reset-password-v2',
            title: 'بازنشانی رمز v2',
            type: 'item',
            url: 'pages/auth/reset-password-2',
          },
          {
            id: 'authentication-lock-screen',
            title: 'صفحه لاک - lockScreen',
            type: 'item',
            url: 'pages/auth/lock',
          },
          {
            id: 'authentication-mail-confirmation',
            title: 'تایید ایمیل',
            type: 'item',
            url: 'pages/auth/mail-confirm',
          },
        ],
      },
      {
        id: 'coming-soon',
        title: 'صفحه به زودی - comingSoon',
        type: 'item',
        icon: 'alarm',
        url: 'pages/coming-soon',
      },
      {
        id: 'errors',
        title: 'ارور ها - errors',
        type: 'collapse',
        icon: 'info',
        children: [
          {
            id: '404',
            title: '404',
            type: 'item',
            url: 'pages/errors/error-404',
          },
          {
            id: '500',
            title: '500',
            type: 'item',
            url: 'pages/errors/error-500',
          },
        ],
      },
      {
        id: 'invoice',
        title: 'صورت حساب',
        type: 'collapse',
        icon: 'receipt',
        children: [
          {
            id: 'modern',
            title: 'نمونه مدرن',
            type: 'item',
            url: 'pages/invoices/modern',
          },
          {
            id: 'compact',
            title: 'نمونه فشرده',
            type: 'item',
            url: 'pages/invoices/compact',
          },
        ],
      },
      {
        id: 'maintenance',
        title: 'صفحه در دست تعمیر',
        type: 'item',
        icon: 'build',
        url: 'pages/maintenance',
      },
      {
        id: 'pricing',
        title: 'قیمت گذاری',
        type: 'collapse',
        icon: 'attach_money',
        children: [
          {
            id: 'style-1',
            title: 'نمونه 1',
            type: 'item',
            url: 'pages/pricing/style-1',
          },
          {
            id: 'style-2',
            title: 'نمونه 2',
            type: 'item',
            url: 'pages/pricing/style-2',
          },
          {
            id: 'style-3',
            title: 'نمونه 3',
            type: 'item',
            url: 'pages/pricing/style-3',
          },
        ],
      },
      {
        id: 'profile',
        title: 'پروفایل',
        type: 'item',
        icon: 'person',
        url: 'pages/profile',
      },
      {
        id: 'search',
        title: 'جستجو',
        type: 'collapse',
        icon: 'search',
        children: [
          {
            id: 'classic-search',
            title: 'جستجوی کلاسیک',
            type: 'item',
            url: 'pages/search/classic',
          },
          {
            id: 'modern-search',
            title: 'جستجوی مدرن',
            type: 'item',
            url: 'pages/search/modern',
          },
        ],
      },
      {
        id: 'faq',
        title: 'سوالات متداول',
        type: 'item',
        icon: 'help_outline',
        url: 'pages/faq',
      },
      {
        id: 'knowledge-base',
        title: 'اطلاعات قالب',
        type: 'item',
        icon: 'import_contacts',
        url: 'pages/knowledge-base',
      },
    ],
  },
  {
    id: 'user-interface',
    title: 'رابط کاربری - UI',
    type: 'group',
    icon: 'web',
    children: [
      {
        id: 'icons',
        title: 'آیکن ها',
        type: 'item',
        icon: 'photo',
        url: 'ui/icons',
      },
      {
        id: 'ui-typography',
        title: 'تایپوگرافی',
        type: 'item',
        icon: 'text_fields',
        url: 'ui/typography',
      },
      {
        id: 'helper-classes',
        title: 'کلاس های مفید css',
        type: 'item',
        icon: 'help_outline',
        url: 'ui/helper-classes',
      },
      {
        id: 'page-layouts',
        title: 'طرح بندی صفحات',
        type: 'collapse',
        icon: 'view_quilt',
        children: [
          {
            id: 'carded',
            title: 'محتوای کارت شده',
            type: 'collapse',
            badge: {
              title: 12,
              bg: '#525E8A',
              fg: '#FFFFFF',
            },
            children: [
              {
                id: 'carded-full-width',
                title: 'Full Width',
                type: 'item',
                url: 'ui/page-layouts/carded/full-width',
              },
              {
                id: 'carded-full-width-tabbed',
                title: 'Full Width Tabbed',
                type: 'item',
                url: 'ui/page-layouts/carded/full-width-tabbed',
              },
              {
                id: 'carded-full-width-2',
                title: 'Full Width 2',
                type: 'item',
                url: 'ui/page-layouts/carded/full-width-2',
              },
              {
                id: 'carded-full-width-2-tabbed',
                title: 'Full Width 2 Tabbed',
                type: 'item',
                url: 'ui/page-layouts/carded/full-width-2-tabbed',
              },
              {
                id: 'carded-left-sidebar',
                title: 'Left Sidebar',
                type: 'item',
                url: 'ui/page-layouts/carded/left-sidebar',
              },
              {
                id: 'carded-left-sidebar-tabbed',
                title: 'Left Sidebar Tabbed',
                type: 'item',
                url: 'ui/page-layouts/carded/left-sidebar-tabbed',
              },
              {
                id: 'carded-left-sidebar-2',
                title: 'Left Sidebar 2',
                type: 'item',
                url: 'ui/page-layouts/carded/left-sidebar-2',
              },
              {
                id: 'carded-left-sidebar-2-tabbed',
                title: 'Left Sidebar 2 Tabbed',
                type: 'item',
                url: 'ui/page-layouts/carded/left-sidebar-2-tabbed',
              },
              {
                id: 'carded-right-sidebar',
                title: 'Right Sidebar',
                type: 'item',
                url: 'ui/page-layouts/carded/right-sidebar',
              },
              {
                id: 'carded-right-sidebar-tabbed',
                title: 'Right Sidebar Tabbed',
                type: 'item',
                url: 'ui/page-layouts/carded/right-sidebar-tabbed',
              },
              {
                id: 'carded-right-sidebar-2',
                title: 'Right Sidebar 2',
                type: 'item',
                url: 'ui/page-layouts/carded/right-sidebar-2',
              },
              {
                id: 'carded-right-sidebar-2-tabbed',
                title: 'Right Sidebar 2 Tabbed',
                type: 'item',
                url: 'ui/page-layouts/carded/right-sidebar-2-tabbed',
              },
            ],
          },
          {
            id: 'simple',
            title: 'محتوای ساده',
            type: 'collapse',
            badge: {
              title: 8,
              bg: '#525E8A',
              fg: '#FFFFFF',
            },
            children: [
              {
                id: 'simple-full-width',
                title: 'Full Width',
                type: 'item',
                url: 'ui/page-layouts/simple/full-width',
              },
              {
                id: 'simple-left-sidebar',
                title: 'Left Sidebar',
                type: 'item',
                url: 'ui/page-layouts/simple/left-sidebar',
              },
              {
                id: 'simple-left-sidebar-2',
                title: 'Left Sidebar 2',
                type: 'item',
                url: 'ui/page-layouts/simple/left-sidebar-2',
              },
              {
                id: 'simple-left-sidebar-3',
                title: 'Left Sidebar 3',
                type: 'item',
                url: 'ui/page-layouts/simple/left-sidebar-3',
              },
              {
                id: 'simple-right-sidebar',
                title: 'Right Sidebar',
                type: 'item',
                url: 'ui/page-layouts/simple/right-sidebar',
              },
              {
                id: 'simple-right-sidebar-2',
                title: 'Right Sidebar 2',
                type: 'item',
                url: 'ui/page-layouts/simple/right-sidebar-2',
              },
              {
                id: 'simple-right-sidebar-3',
                title: 'Right Sidebar 3',
                type: 'item',
                url: 'ui/page-layouts/simple/right-sidebar-3',
              },
              {
                id: 'simple-tabbed',
                title: 'Tabbed',
                type: 'item',
                url: 'ui/page-layouts/simple/tabbed',
              },
            ],
          },
          {
            id: 'blank',
            title: 'صفحه خالی',
            type: 'item',
            url: 'ui/page-layouts/blank',
          },
        ],
      },
    ],
  },
  DocumentationNavigation,
  {
    type: 'divider',
    id: 'divider-1',
  },
  {
    id: 'auth',
    title: 'احراز هویت',
    type: 'group',
    icon: 'verified_user',
    children: [
      {
        id: 'login',
        title: 'ورود',
        type: 'item',
        url: 'login',
        auth: authRoles.onlyGuest,
        icon: 'lock',
      },
      {
        id: 'register',
        title: 'ثبت نام',
        type: 'item',
        url: 'register',
        auth: authRoles.onlyGuest,
        icon: 'person_add',
      },
      {
        id: 'logout',
        title: 'خروج',
        type: 'item',
        auth: authRoles.user,
        url: 'logout',
        icon: 'exit_to_app',
      },
      {
        id: 'auth-admin-example',
        title: 'ادمین: صفحه Auth protected',
        type: 'item',
        url: 'auth/admin-role-example',
        icon: 'security',
      },
      {
        id: 'only-admin-navigation-item',
        title: 'گزینه منو فقط برای ادمین',
        type: 'item',
        auth: authRoles.admin,
        url: 'auth/admin-role-example',
        icon: 'verified_user',
      },
      {
        id: 'auth-staff-example',
        title: 'اعضا: صفحه Auth protected',
        type: 'item',
        url: 'auth/staff-role-example',
        icon: 'security',
      },
      {
        id: 'only-staff-navigation-item',
        title: 'گزینه منو فقط برای اعضا',
        type: 'item',
        auth: authRoles.staff,
        url: 'auth/staff-role-example',
        icon: 'verified_user',
      },
      {
        id: 'auth-guest-example',
        title: 'مهمان: صفحه Auth protected',
        type: 'item',
        url: 'auth/guest-role-example',
        icon: 'security',
      },
      {
        id: 'only-guest-navigation-item',
        title: 'گزینه منو برای کاربر مهمان',
        type: 'item',
        auth: authRoles.onlyGuest,
        url: 'auth/guest-role-example',
        icon: 'verified_user',
      },
    ],
  },
  {
    type: 'divider',
    id: 'divider-2',
  },
  {
    id: 'test-group-level-1',
    title: 'تست گروه مرحله اول',
    type: 'group',
    icon: 'clear_all',
    children: [
      {
        id: 'test-item',
        title: 'آیتم تستی',
        type: 'item',
        icon: 'list',
        url: '#',
      },
      {
        id: 'test-link',
        title: 'لینک تستی',
        type: 'link',
        icon: 'link',
        url: 'http://fusetheme.com',
        target: '_blank',
      },
      {
        id: 'test-collapse-level-1',
        title: 'تست منوی بازشو مرحله ۱',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'test-item-level-1',
            title: 'تست آیتم مرحله ۱',
            type: 'item',
            url: '#',
          },
          {
            id: 'test-link-level-1',
            title: 'تست لینک مرحله 1',
            type: 'link',
            url: 'http://fusetheme.com',
            target: '_blank',
          },
          {
            id: 'test-collapse-2',
            title: 'تست منوی بازشو مرحله 2',
            type: 'collapse',
            children: [
              {
                id: 'test-item-level-2',
                title: 'تست آیتم مرحله 2',
                type: 'item',
                url: '#',
              },
              {
                id: 'test-link-level-2',
                title: 'تست لینک مرحله 2',
                type: 'link',
                url: 'http://fusetheme.com',
                target: '_blank',
              },
              {
                id: 'test-collapse-level-3',
                title: 'تست منوی بازشو مرحله 3',
                type: 'collapse',
                children: [
                  {
                    id: 'test-item-level-3',
                    title: 'تست آیتم مرحله 3',
                    type: 'item',
                    url: '#',
                  },
                  {
                    id: 'test-link-level-3',
                    title: 'تست لینک مرحله 3',
                    type: 'link',
                    url: 'http://fusetheme.com',
                    target: '_blank',
                  },
                  {
                    id: 'test-collapse-level-4',
                    title: 'تست منوی بازشو مرحله 4',
                    type: 'collapse',
                    children: [
                      {
                        id: 'test-item-level-4',
                        title: 'تست آیتم مرحله 4',
                        type: 'item',
                        url: '#',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'test-group-level-2',
            title: 'تست گروه مرحله 2',
            type: 'group',
            icon: 'apps',
            children: [
              {
                id: 'test-collapse-level-2-2',
                title: 'تست منوی بازشو مرحله 2',
                type: 'collapse',
                children: [
                  {
                    id: 'test-item-level-2-2',
                    title: 'تست آیتم مرحله 2',
                    type: 'item',
                    url: '#',
                  },
                  {
                    id: 'test-link-level-2-2',
                    title: 'تست لینک مرحله 2',
                    type: 'link',
                    url: 'http://fusetheme.com',
                    target: '_blank',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
