import FuseCountdown from '@fuse/core/FuseCountdown';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function FuseCountdownDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        کامپوننت شمارنده FuseCountdown
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseCountdown</code>
        یک کامپوننت سفارشیه که به شما این اجازه رو میده تا یک شمارنده داشته باشید
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        روش استفاده
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
          <FuseCountdown endDate="2023-10-29" className="my-48"/>
        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پیش نمایش
      </Typography>

      <FuseCountdown endDate="2023-10-29" className="my-48" />

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پیش نمایش
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/pages/coming-soon">صقحه ی در دست ساخت - comming soon</Link>
        </li>
      </ul>
    </>
  );
}

export default FuseCountdownDoc;
