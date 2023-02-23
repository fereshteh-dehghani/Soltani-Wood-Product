import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GoogleMap from 'google-map-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import OrdersStatus from '../OrdersStatus';

function Marker(props) {
  return (
    <Tooltip title={props.text} placement="top">
      <Icon className="text-red">place</Icon>
    </Tooltip>
  );
}

function OrderDetailsTab() {
  const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
  const [map, setMap] = useState('shipping');

  return (
    <div>
      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">account_circle</Icon>
          <Typography className="h2 mx-12 font-medium" color="textSecondary">
            مشتری
          </Typography>
        </div>

        <div className="mb-24">
          <div className="table-responsive mb-48">
            <table className="simple">
              <thead>
                <tr>
                  <th>
                    <Typography className="font-semibold">نام</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">ایمیل</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">شماره تلفن</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">شرکت</Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <Avatar src={order.customer.avatar} />
                      <Typography className="truncate mx-8">
                        {`${order.customer.firstName} ${order.customer.lastName}`}
                      </Typography>
                    </div>
                  </td>
                  <td>
                    <Typography className="truncate">{order.customer.email}</Typography>
                  </td>
                  <td>
                    <Typography className="truncate">{order.customer.phone}</Typography>
                  </td>
                  <td>
                    <span className="truncate">{order.customer.company}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Accordion
            className="border-0 shadow-0 overflow-hidden"
            expanded={map === 'shipping'}
            onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: 'border border-solid rounded-16 mb-16' }}
            >
              <Typography className="font-semibold">آدرس پستی</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col md:flex-row -mx-8">
              <Typography className="w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16">
                {order.customer.shippingAddress.address}
              </Typography>
              <div className="w-full h-320 rounded-16 overflow-hidden mx-8">
                <GoogleMap
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_KEY,
                  }}
                  defaultZoom={15}
                  defaultCenter={[
                    order.customer.shippingAddress.lat,
                    order.customer.shippingAddress.lng,
                  ]}
                >
                  <Marker
                    text={order.customer.shippingAddress.address}
                    lat={order.customer.shippingAddress.lat}
                    lng={order.customer.shippingAddress.lng}
                  />
                </GoogleMap>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="shadow-0 border-0 overflow-hidden"
            expanded={map === 'invoice'}
            onChange={() => setMap(map !== 'invoice' ? 'invoice' : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: 'border border-solid rounded-16 mb-16' }}
            >
              <Typography className="font-semibold">آدرس فاکتور</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col md:flex-row -mx-8">
              <Typography className="w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16">
                {order.customer.invoiceAddress.address}
              </Typography>
              <div className="w-full h-320 rounded-16 overflow-hidden mx-8">
                <GoogleMap
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_KEY,
                  }}
                  defaultZoom={15}
                  defaultCenter={[
                    order.customer.invoiceAddress.lat,
                    order.customer.invoiceAddress.lng,
                  ]}
                >
                  <Marker
                    text={order.customer.invoiceAddress.address}
                    lat={order.customer.invoiceAddress.lat}
                    lng={order.customer.invoiceAddress.lng}
                  />
                </GoogleMap>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">access_time</Icon>
          <Typography className="h2 mx-12 font-medium" color="textSecondary">
          وضعیت سفارش
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">وضعیت</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">بروزرسانی در</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {order.status.map((status) => (
                <tr key={status.id}>
                  <td>
                    <OrdersStatus name={status.name} />
                  </td>
                  <td>{status.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">attach_money</Icon>
          <Typography className="h2 mx-12 font-medium" color="textSecondary">
            پرداخت
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">شناسه پرداخت</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">شیوه پرداخت</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">مقدار</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">تاریخ</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="truncate">{order.payment.transactionId}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.method}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.amount}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.date}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">local_shipping</Icon>
          <Typography className="h2 mx-12 font-medium" color="textSecondary">
            باربری
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">کد رهگیری</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">حامل</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">وزن</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">هزینه</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">تاریخ</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {order.shippingDetails.map((shipping) => (
                <tr key={shipping.date}>
                  <td>
                    <span className="truncate">{shipping.tracking}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.carrier}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.weight}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.fee}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsTab;
