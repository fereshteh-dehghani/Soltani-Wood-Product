import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseUtils from '@fuse/utils';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { authRoles } from 'app/auth';
import { useDispatch } from 'react-redux';
import {
  appendNavigationItem,
  prependNavigationItem,
  removeNavigationItem,
  updateNavigationItem,
  setNavigation,
  resetNavigation,
} from 'app/store/fuse/navigationSlice';

function FuseNavigationDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseNavigation
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseNavigation</code> یک جزء فیوز سفارشی ساخته شده است که به شما امکان می دهد یک ناوبری جمع شونده چند سطحی ایجاد کنید.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
      [جهت یابی]
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseNavigation</code> از یک آرایه برای پر کردن کل ناوبری استفاده می کند. از چهار آیتم ناوبری مختلف پشتیبانی می کند. گروه، جمع کردن، مورد. و تقسیم کننده. این موارد را می توان برای ایجاد طرح های ناوبری منحصر به فرد و پیچیده با هم ترکیب کرد.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [چیدمان]
      </Typography>

      <Typography className="mb-16" component="p">
      گزینه های طرح بندی "عمودی" یا "افقی".
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [فعال]
      </Typography>

      <Typography className="mb-16" component="p">
      می توانید <b>active</b> را روی "مربع" تنظیم کنید تا از سبک مورد فعال مربعی به جای گرد/دایره برای<b>طرح بندی عمودی</b>استفاده کنید. 
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [متراکم]
      </Typography>

      <Typography className="mb-16" component="p">
      می توانید از <b>{`dense={true}`}</b>برای تنظیم تنوع متراکم پیمایش استفاده کنید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      استفاده
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                    <FuseNavigation navigation={navigation} layout="vertical" active="square" dense={true}/>
                                `}
      </FuseHighlight>

      <Typography className="mt-48 mb-8" variant="h4">
      انواع آیتم های ناوبری      </Typography>

      <Typography className="mt-32 p-8 rounded-4 bg-yellow-100 border-1 border-yellow-700 text-black mb-8">
      دادن یک شناسه منحصر به فرد به همه موارد ناوبری شما الزامی است.      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
      گروه
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
                                     {
                                        'id'       : 'applications',
                                        'title'    : 'Applications',
                                        'type'     : 'group',
                                        'icon'     : 'apps',
                                        'url'      : '/apps/calendar' //optional
                                        'children' : [
                                             {
                                                'id'       : 'calendar',
                                                'title'    : 'Calendar',
                                                'type'     : 'item',
                                                'icon'     : 'today',
                                                'url'      : '/apps/calendar'
                                            }
                                        ]
                                     }
                                `}
      </FuseHighlight>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Collapse
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
                                     {
                                        'id'       : 'dashboards',
                                        'title'    : 'Dashboards',
                                        'type'     : 'collapse',
                                        'icon'     : 'dashboard',
                                        'url'      : '/apps/dashboards/project' //optional
                                        'children' : [
                                            {
                                                'id'   : 'project',
                                                'title': 'Project',
                                                'type' : 'item',
                                                'url'  : '/apps/dashboards/project'
                                            }
                                        ]
                                      }
                                `}
      </FuseHighlight>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Item-مورد
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `}
      </FuseHighlight>
      <Typography className="text-20 mt-24 mb-8 font-medium" component="h2">
        end: bool
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      وقتی درست است، کلاس/سبک فعال فقط در صورتی اعمال می‌شود که مکان دقیقاً مطابقت داشته باشد.      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project',
                                    'end': true
                                }
                                `}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Link-ارتباط دادن
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
                                {
                                    'id'    : 'test-link',
                                    'title' : 'Test Link',
                                    'type'  : 'link',
                                    'icon'  : 'link',
                                    'url'   : 'http://fusetheme.com',
                                    'target': '_blank'
                                },
                               `}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Divider-تقسیم کننده
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                {
                                    'type': 'divider
                                },
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `}
      </FuseHighlight>

      <Typography className="mt-48 mb-8" variant="h4">
        Actions-اقدامات
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        setNavigation
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
         <code>setNavigation(navigation{'<Array>'})</code> اقدام برای تنظیم/تغییر کل ناوبری.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، کل ناوبری تغییر می کند.        </Typography>

        <Button
          onClick={() => {
            dispatch(
              setNavigation([
                {
                  id: 'auth',
                  title: 'Auth',
                  type: 'group',
                  icon: 'apps',
                  children: [
                    {
                      id: 'login',
                      title: 'Login',
                      type: 'item',
                      url: 'login',
                      auth: authRoles.onlyGuest,
                      icon: 'lock',
                    },
                    {
                      id: 'register',
                      title: 'Register',
                      type: 'item',
                      url: 'register',
                      auth: authRoles.onlyGuest,
                      icon: 'person_add',
                    },
                  ],
                },
              ])
            );
          }}
          variant="contained"
          color="primary"
        >
          تنظیم ناوبری
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(setNavigation([
                                            {
                                                'id'      : 'auth',
                                                'title'   : 'Auth',
                                                'type'    : 'group',
                                                'icon'    : 'apps',
                                                'children': [
                                                    {
                                                        'id'   : 'login',
                                                        'title': 'Login',
                                                        'type' : 'item',
                                                        'url'  : '/login',
                                                        auth   : authRoles.onlyGuest,
                                                        'icon' : 'lock'
                                                    },
                                                    {
                                                        'id'   : 'register',
                                                        'title': 'Register',
                                                        'type' : 'item',
                                                        'url'  : '/register',
                                                        auth   : authRoles.onlyGuest,
                                                        'icon' : 'person_add'
                                                    },
                                                ]
                                            }
                                        ]));
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Set Navigation
                                </Button>
                                `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        resetNavigation
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
         <code>resetNavigation()</code> اقدام برای بازنشانی پیمایش به حالت اولیه.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، پیمایش به تنظیمات پیش‌فرض برمی‌گردد.        </Typography>

        <Button
          onClick={() => {
            dispatch(resetNavigation());
          }}
          variant="contained"
          color="primary"
        >
بازنشانی ناوبری        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(resetNavigation());
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Reset Navigation
                                </Button>
                                `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        updateNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        
        <code>
          updateNavigationItem(id, <i>object</i>)
        </code>
        اقدام برای به روز رسانی یک مورد ناوبری.      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، عنوان "داشبوردها" تغییر می کند و یک نشان اضافه می شود.        </Typography>

        <Button
          onClick={() => {
            dispatch(
              updateNavigationItem('dashboards', {
                title: 'All Dashboards',
                badge: {
                  title: 2,
                  bg: 'rgb(3, 155, 228)',
                  fg: '#FFFFFF',
                },
              })
            );
          }}
          variant="contained"
          color="primary"
        >
به روز رسانی مورد ناوبری        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(updateNavigationItem('dashboards',
                                            {
                                                'title': 'All Dashboards',
                                                'badge': {
                                                    'title': 2,
                                                    'bg'   : 'rgb(3, 155, 228)',
                                                    'fg'   : '#FFFFFF'
                                                }
                                            }
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                Update Navigation Item
                                </Button>
                            `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        removeNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
         <code>removeNavigationItem(id)</code> اقدام برای حذف یک مورد ناوبری.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، مورد پیمایش «تقویم» حذف می‌شود.        </Typography>

        <Button
          onClick={() => {
            dispatch(removeNavigationItem('calendar'));
          }}
          variant="contained"
          color="primary"
        >
حذف مورد ناوبری        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                  <Button
                                        onClick={()=> {
                                            dispatch(removeNavigationItem('calendar'))
                                        }}
                                        variant="contained"
                                        color="primary"
                                  >
                                  Remove Navigation Item
                                  </Button>
                            `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        prependNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        
        <code>
          prependNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)
        </code>
        اقدامی برای اضافه کردن یک آیتم پیمایش به آرایه پیمایش.      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم پیمایش "fusetheme.com" در بالای آرایه پیمایش اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              prependNavigationItem({
                id: `test-link-${FuseUtils.generateGUID()}`,
                title: 'fusetheme.com',
                type: 'link',
                icon: 'link',
                url: 'http://fusetheme.com',
                target: '_blank',
              })
            );
          }}
          variant="contained"
          color="primary"
        >
مورد ناوبری را آماده کنید        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم پیمایش "fusetheme.com" به بالای کودکان "داشبوردها" اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              prependNavigationItem(
                {
                  id: `test-link-${FuseUtils.generateGUID()}`,
                  title: 'fusetheme.com',
                  type: 'link',
                  icon: 'link',
                  url: 'http://fusetheme.com',
                  target: '_blank',
                },
                'dashboards'
              )
            );
          }}
          variant="contained"
          color="primary"
        >
          Prepend Navigation Item
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        appendNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
        
        <code>
          appendNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)
        </code>
        اقدام برای الحاق یک مورد ناوبری به آرایه پیمایش.      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم ناوبری "fusetheme.com" در پایین آرایه اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              appendNavigationItem({
                id: `test-link-${FuseUtils.generateGUID()}`,
                title: 'fusetheme.com',
                type: 'link',
                icon: 'link',
                url: 'http://fusetheme.com',
                target: '_blank',
              })
            );
          }}
          variant="contained"
          color="primary"
        >
افزودن مورد ناوبری        </Button>
        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Append Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم پیمایش "fusetheme.com" به پایین "داشبوردها" کودکان اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              appendNavigationItem(
                {
                  id: `test-link-${FuseUtils.generateGUID()}`,
                  title: 'fusetheme.com',
                  type: 'link',
                  icon: 'link',
                  url: 'http://fusetheme.com',
                  target: '_blank',
                },
                'dashboards'
              )
            );
          }}
          variant="contained"
          color="primary"
        >
افزودن مورد ناوبری        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Append Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>
    </>
  );
}

export default FuseNavigationDoc;
