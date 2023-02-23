import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

function Widget9(props) {
  return (
    <Card className="w-full rounded-20 shadow">
      <div className="px-8 py-20 flex flex-row items-start justify-between">
        <Typography className="h3 font-medium px-12">شرکت های برتر</Typography>

        <div className="-mt-12">
          <IconButton aria-label="بیشتر" size="large">
            <Icon>more_vert</Icon>
          </IconButton>
        </div>
      </div>

      <table className="simple clickable">
        <thead>
          <tr>
            <th aria-label="title" />
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                کلیک ها
              </Typography>
            </th>
            <th className="text-right">
              <Typography color="textSecondary" className="font-semibold">
                تبدیل
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.rows.map((row) => (
            <tr key={row.title}>
              <td className="font-semibold">{row.title}</td>
              <td className="text-right">{row.clicks}</td>
              <td className="text-right">{row.conversion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Divider className="card-divider w-full" />

      <div className="p-20 flex flex-row items-center">
        <Button variant="outlined">مشاهده شرکت ها</Button>
      </div>
    </Card>
  );
}

export default memo(Widget9);
