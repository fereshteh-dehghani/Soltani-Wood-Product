import FuseUtils from '@fuse/utils';
import mock from '../mock';
import formatISO from 'date-fns/formatISO';

function setDate(year, month, date, hours, minutes, seconds) {
	return formatISO(new Date(year, month, date, hours || '', minutes || '', seconds|| ''));
}

const calendarDB = {
	events: [
		{
			id: 0,
			title: 'اسم یک رویداد طولانی برای این مورد',
			allDay: true,
			start: setDate(2021, 3, 1),
			end: setDate(2021, 3, 2)
		},
		{
			id: 1,
			title: 'عنوان رویداد طولانی',
			allDay: false,
			start: setDate(2021, 3, 7),
			end: setDate(2021, 3, 10)
		},
		{
			id: 2,
			title: 'شروع مسابقات سوارکاری',
			allDay: false,
			start: setDate(2022, 2, 13, 0, 0, 0),
			end: setDate(2022, 2, 20, 0, 0, 0)
		},
		{
			id: 3,
			title: 'پایان مسابقات سوارکاری',
			allDay: false,
			start: setDate(2022, 10, 6, 0, 0, 0),
			end: setDate(2022, 10, 13, 0, 0, 0)
		},
		{
			id: 4,
			title: 'ملاقات با اقای رشیدپور',
			allDay: false,
			start: setDate(2021, 3, 9, 0, 0, 0),
			end: setDate(2021, 3, 10, 0, 0, 0)
		},
		{
			id: 5,
			title: 'کنفرانس زبان',
			allDay: false,
			start: setDate(2021, 3, 11),
			end: setDate(2021, 3, 13),
			extendedProps:{
				desc: 'یک توضیح طولانی برای این محصول که اینجا قرار می گیرد'
			}
		},
		{
			id: 6,
			title: 'قرار ملاقات',
			allDay: false,
			start: setDate(2021, 3, 12, 10, 30, 0, 0),
			end: setDate(2021, 3, 12, 12, 30, 0, 0),
			extendedProps: {
				desc: 'قرار تحلیل پروژه پنل کاربری'
			}
		},
		{
			id: 7,
			title: 'نهار',
			allDay: false,
			start: setDate(2021, 3, 12, 12, 0, 0, 0),
			end: setDate(2021, 3, 12, 13, 0, 0, 0),
			extendedProps: {
				desc: 'نهار رژیمی از رستوران خیابون کناری'
			}
		},
		{
			id: 8,
			title: 'Meeting',
			allDay: false,
			start: setDate(2021, 3, 12, 14, 0, 0, 0),
			end: setDate(2021, 3, 12, 15, 0, 0, 0)
		},
		{
			id: 9,
			title: 'Happy Hour',
			allDay: false,
			start: setDate(2021, 3, 12, 17, 0, 0, 0),
			end: setDate(2021, 3, 12, 17, 30, 0, 0),
			extendedProps: {
				desc: 'Most important meal of the day'
			}
		},
		{
			id: 10,
			title: 'شام',
			allDay: false,
			start: setDate(2021, 3, 12, 20, 0, 0, 0),
			end: setDate(2021, 3, 12, 21, 0, 0, 0)
		},
		{
			id: 11,
			title: 'مهمونی تولد',
			allDay: false,
			start: setDate(2021, 3, 13, 7, 0, 0),
			end: setDate(2021, 3, 13, 10, 30, 0)
		},
		{
			id: 12,
			title: 'تماس با مدیر سایت پونیشا',
			allDay: false,
			start: setDate(2021, 3, 17, 19, 30, 0),
			end: setDate(2021, 3, 18, 2, 0, 0)
		},
		{
			id: 13,
			title: 'رویداد مربوط به چند روز',
			allDay: false,
			start: setDate(2021, 3, 20, 19, 30, 0),
			end: setDate(2021, 3, 22, 2, 0, 0)
		}
	]
};

mock.onGet('/api/calendar-app/events').reply(config => {
	return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/add-event').reply(request => {
	const data = JSON.parse(request.data);
	const newEvent = {
		...data.newEvent,
		id: FuseUtils.generateGUID()
	};
	calendarDB.events = [...calendarDB.events, newEvent];
	return [200, newEvent];
});

mock.onPost('/api/calendar-app/update-event').reply(request => {
	const data = JSON.parse(request.data);

	calendarDB.events = calendarDB.events.map(event => {
		if (data.event.id === event.id) {
			return data.event;
		}
		return event;
	});

	return [200, data.event];
});

mock.onPost('/api/calendar-app/remove-event').reply(request => {
	const data = JSON.parse(request.data);
	const event = calendarDB.events.find(_event => data.eventId === _event.id);
	calendarDB.events = calendarDB.events.filter(_event => _event.id !== event.id);

	return [200, event];
});
