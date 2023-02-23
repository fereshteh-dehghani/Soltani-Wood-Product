import Typography from '@mui/material/Typography';
import FuseHighlight from '@fuse/core/FuseHighlight';

function ApiCallsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        فراخوانی وب سرویس - API Calls
      </Typography>

      <Typography className="mb-24" component="p">
        ما برای فراخوانی وب سرویس ها از
        {' '}
        <a href="https://github.com/axios" target="_blank" rel="noreferrer noopener">
          Axios
        </a>{' '}
        استفاده می کنیم.
      </Typography>

      <Typography className="mb-8" variant="h6">
        Global Axios defaults
      </Typography>

      <Typography className="mb-16" component="p">
        اینجا یه سری از پیشفرض های این پکیج وجود داره که میتونین توی پروژه تغییرشون بدید.
        به عنوان مثال می توانید URL پایه را برای اتصال api تعریف کنید. برای جزئیات بیشتر در:

        <a
          href="https://github.com/axios/axios#config-defaults"
          target="_blank"
          rel="noreferrer noopener"
        >
          Global axios defaults
        </a>
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					axios.defaults.baseURL = 'https://api.example.com';
					axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
					axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				`}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        @fake-db
      </Typography>
      <Typography className="mb-16" component="p">
        ما از
        {' '}
        <a
          href="https://github.com/ctimmerm/axios-mock-adapter"
          target="_blank"
          rel="noreferrer noopener"
        >
          axios-mock-adapter
        </a>{' '}
        برای نشان دادن درخواست‌های http استفاده می‌کنیم، تمام داده‌های نمونه پشتیبان در src/@fake-db قرار دارند.
      </Typography>

      <Typography className="mb-16" component="p">
        You can adjust <code>delayResponse</code> value to test slow networks in the file:{' '}
        <code>src/@fake-db/mock.js</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					const MockAdapter = require('axios-mock-adapter');
					const axios = require('axios');
					
					const mock = new MockAdapter(axios, { delayResponse: 500 });
					
					export default mock;
				`}
      </FuseHighlight>
    </>
  );
}

export default ApiCallsDoc;
