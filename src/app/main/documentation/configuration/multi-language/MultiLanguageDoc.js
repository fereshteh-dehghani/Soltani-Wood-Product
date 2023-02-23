import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function MultiLanguageDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        چندزبانگی
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React از
        <a href="https://react.i18next.com/" target="_blank" rel="noopener noreferrer">
          <code>react-i18next</code>
        </a>{' '}
        برای پشتیبانی از چندین زبان استفاده می کند.

      </Typography>

      <Typography
        className="mb-16 p-16 border-1 bg-yellow-50 rounded-16 text-gray-800"
        component="p"
      >
        از آنجایی که همه به تنظیمات چند زبانه برای برنامه‌های خود نیاز ندارند، تصمیم گرفتیم که ترجمه‌ها را در همه جا قرار ندهیم. اگر می‌خواهید ترجمه‌ها را در عمل ببینید، از برنامه Mail دیدن کنید و سپس زبان را از نوار ابزار تغییر دهید. برنامه ایمیل تنها برنامه ای است که ترجمه هایی برای اهداف نمایشی دارد. برای مشاهده میزان استفاده می توانید به کد منبع آن نگاه کنید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        استفاده:
      </Typography>

      <Typography className="mb-16" component="p">
        برای استفاده از ترجمه ها، فایل ترجمه خود را در پوشه ای که می خواهید از ترجمه ها استفاده کنید ایجاد کنید. به عنوان مثال، برای برنامه Mail، فایل
        <code>i18n/en.js</code>
        را در پوشه <code>apps/mail</code> ایجاد کنید.

      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!app/main/apps/mail/i18n/en.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        And register the language file with <code>i18next.addResourceBundle()</code> at
        <code>src/app/main/apps/mail/MailAppConfig.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!app/main/apps/mail/MailAppConfig.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        و سپس با یک هوک 
        <code>useTranslation</code>
        در کامپوننت استفاده کنید
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                        import {useTranslation} from 'react-i18next';

                        const {t} = useTranslation('mailApp');
                    
                        return (
                            <div className="p-24">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-full"
                                    onClick={handleOpenDialog}
                                >
                                    {t('COMPOSE')}
                                </Button>
                        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
       تغییر زبان
      </Typography>

      <Typography className="mb-16" component="p">
        برای تغییر زبان باید از اکشن
        <code>changeLanguage</code> 
        در ریداکس استفاده کنید
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                           import { changeLanguage } from 'app/store/i18nSlice';

                            .
                            .

                            dispatch(changeLanguage(lng.id));
                        `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        نمونه در این فایل موجود است
        <br/>
        <code>src/app/fuse-layouts/shared-components/LanguageSwitcher.js</code>
      </Typography>
    </>
  );
}

export default MultiLanguageDoc;
