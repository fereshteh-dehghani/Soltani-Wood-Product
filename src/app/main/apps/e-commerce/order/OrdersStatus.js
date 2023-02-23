import _ from '@lodash';
import clsx from 'clsx';

export const orderStatuses = [
  {
    id: 1,
    name: 'منتظر بررسی پرداخت',
    color: 'bg-blue text-white',
  },
  {
    id: 2,
    name: 'پرداخت موفق',
    color: 'bg-green text-white',
  },
  {
    id: 3,
    name: 'آماده سازی سفارش',
    color: 'bg-orange text-black',
  },
  {
    id: 4,
    name: 'ارسال شده',
    color: 'bg-purple text-white',
  },
  {
    id: 5,
    name: 'تحویل داده شده',
    color: 'bg-green-700 text-white',
  },
  {
    id: 6,
    name: 'Canceled',
    color: 'bg-pink text-white',
  },
  {
    id: 7,
    name: 'Refunded',
    color: 'bg-red text-white',
  },
  {
    id: 8,
    name: 'خطای پرداخت',
    color: 'bg-red-700 text-white',
  },
  {
    id: 9,
    name: 'On pre-order (paid)',
    color: 'bg-purple-300 text-white',
  },
  {
    id: 10,
    name: 'در انتظار پرداخت بانکی',
    color: 'bg-blue text-white',
  },
  {
    id: 11,
    name: 'Awaiting PayPal payment',
    color: 'bg-blue-700 text-white',
  },
  {
    id: 12,
    name: 'Remote پرداخت موفق',
    color: 'bg-green-800 text-white',
  },
  {
    id: 13,
    name: 'پیش سفارش (پرداخت نشده)',
    color: 'bg-purple-700 text-white',
  },
  {
    id: 14,
    name: 'Awaiting Cash-on-delivery payment',
    color: 'bg-blue-800 text-white',
  },
];

function OrdersStatus(props) {
  return (
    <div
      className={clsx(
        'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
        _.find(orderStatuses, { name: props.name }).color
      )}
    >
      {props.name}
    </div>
  );
}

export default OrdersStatus;
