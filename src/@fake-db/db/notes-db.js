import FuseUtils from '@fuse/utils';
import mock from '../mock';

const notesDB = {
	notes: [
		{
			id: '5739d1fb4d27bc5341fd33s1',
			title: '',
			description: 'دنبال یه شرکت جدید برای معرفی محصول',
			archive: false,
			image: '',
			time: '2018-02-25T04:01:06.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fb4d27bc5341fd33b3',
			title: 'ارسال عکس طرحهای کار به نرگس',
			description: '',
			archive: false,
			image: 'assets/images/notes/beach.jpeg',
			time: '2018-05-10T04:01:06.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6806acf030f9341e932', '5725a6806acf030f9341e925']
		},
		{
			id: '5739d1fbaac9710256574208',
			title: '',
			description: 'بررسی ایده ی ایجاد پورتفولیوی جدید',
			archive: false,
			image: '',
			time: '2018-04-12T15:14:56.587Z',
			reminder: '2018-03-03T18:08:32.587Z',
			checklist: [],
			labels: ['5725a680606588342058356d']
		},
		{
			id: '5739d1fb843f747d5dc0e42a',
			title: '',
			description: 'پشتیبانی از طرح قالب توی اپلیکیشن چت',
			archive: false,
			image: '',
			time: '2018-03-21T23:23:53.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fbf4e68a871a3c9ab8',
			title: 'ایده های هدیه',
			description: "تولد فاطمه نزدیکه!",
			archive: false,
			image: '',
			time: '2018-04-21T02:33:11.587Z',
			reminder: null,
			checklist: [
				{
					id: '1',
					checked: false,
					text: 'روسری'
				},
				{
					id: '2',
					checked: false,
					text: 'کلاه دوچرخه جدید'
				},
				{
					id: '3',
					checked: true,
					text: 'گردنبند'
				},
				{
					id: '4',
					checked: false,
					text: 'دسته گل'
				}
			],
			labels: ['5725a6802d10e277a0f35739']
		},
		{
			id: '5739d1fbf2726fe3e5e5014a',
			title: 'لیست خرید',
			description: '',
			archive: false,
			image: '',
			time: '2018-04-10T22:18:14.587Z',
			reminder: '2018-01-13T11:09:00.587Z',
			checklist: [
				{
					id: '1',
					checked: true,
					text: 'استند لب تاب'
				},
				{
					id: '2',
					checked: true,
					text: 'مانیتور'
				},
				{
					id: '3',
					checked: false,
					text: 'هدفون'
				},
				{
					id: '4',
					checked: true,
					text: 'خودنویس'
				},
				{
					id: '5',
					checked: true,
					text: 'هاب لب تاب'
				}
			],
			labels: ['5725a68031fdbb1db2c1af47']
		},
		{
			id: '5739d1fb47d9bac96ec0d54d',
			title: 'جلسه انلاین با شرکت',
			description: '',
			archive: false,
			image: '',
			time: '2018-01-21T22:46:48.587Z',
			reminder: '2018-05-14T06:47:19.587Z',
			checklist: [
				{
					id: '1',
					checked: true,
					text: 'بررسی وب سرویس ها'
				},
				{
					id: '2',
					checked: true,
					text: 'بررسی طرح و وایرفریم'
				},
				{
					id: '3',
					checked: true,
					text: 'تحلیل سایت قدیمی و بررسی ایده های جدید'
				},
				{
					id: '4',
					checked: false,
					text: 'مقایسه امکانات با دیتابیس جدید'
				},
				{
					id: '5',
					checked: false,
					text: 'ایجاد مایند مپ'
				}
			],
			labels: ['5725a6809fdd915739187ed5', '5725a68031fdbb1db2c1af47']
		},
		{
			id: '5739d1fbb786bea648179ece',
			title: '',
			description: 'دورهمی همکارانه ی این هفته',
			archive: false,
			image: '',
			time: '2018-03-11T06:55:30.587Z',
			reminder: '2018-04-01T07:35:05.587Z',
			checklist: [],
			labels: ['5725a6802d10e277a0f35739']
		},
		{
			id: '5739d1fbfed6d59d8427f6e3',
			title: 'مرخصی برای سفر',
			description: '',
			archive: false,
			image: 'assets/images/notes/road-trip.jpeg',
			time: '2018-05-01T00:15:14.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6806acf030f9341e932']
		},
		{
			id: '5739d1fbc4ebca7d947b4763',
			title: '',
			description: "یادم نره قرصمو سروقت بخورم",
			archive: true,
			image: '',
			time: '2018-01-05T15:08:41.587Z',
			reminder: '2018-04-01T21:35:24.587Z',
			checklist: [],
			labels: ['5725a6806acf030f9341e925']
		},
		{
			id: '5739d1fb2efbc0e3e8c30c4d',
			title: 'آدرس دفتر',
			description: 'ثبت آدرس جدید دفتر توی سایت به جای ادرس قبلی',
			archive: false,
			image: '',
			time: '2018-04-19T08:27:28.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fb46da846f60d70b2c',
			title: 'لیست کارهای امروزم',
			description: '',
			archive: false,
			image: '',
			time: '2018-02-08T15:13:56.587Z',
			reminder: '2018-04-25T09:40:39.587Z',
			checklist: [
				{
					id: '1',
					checked: false,
					text: 'اتو کردن مانتو کتی برای جلسه'
				},
				{
					id: '2',
					checked: true,
					text: 'عوض کردن غذای پرنده ها'
				}
			],
			labels: ['5725a6806acf030f9341e925']
		},
		{
			id: '5739d1fbcf298e41a75f3941',
			title: '',
			description: 'اضافه کردن ایکن های جدید',
			archive: true,
			image: '',
			time: '2018-05-01T04:21:35.587Z',
			reminder: '2018-04-12T16:17:28.587Z',
			checklist: [],
			labels: ['5725a680606588342058356d']
		},
		{
			id: '5739d1fbeac05b8bcc2959cd',
			title: 'Team meeting',
			description: 'بارش فکری برای ایده های سایت',
			archive: true,
			image: '',
			time: '2018-05-13T20:11:27.587Z',
			reminder: '2018-01-19T09:17:15.587Z',
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fb2fe509295e0847b5',
			title: '',
			description: 'نهار خونه عاطفه اینا',
			archive: false,
			image: '',
			time: '2018-01-17T00:40:05.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6802d10e277a0f35739']
		}
	],
	labels: [
		{
			id: '5725a6802d10e277a0f35739',
			name: 'خانوادگی',
			handle: 'family'
		},
		{
			id: '5725a6809fdd915739187ed5',
			name: 'کار و شغل',
			handle: 'work'
		},
		{
			id: '5725a68031fdbb1db2c1af47',
			name: 'لیست کارهام',
			handle: 'todos'
		},
		{
			id: '5725a680606588342058356d',
			name: 'الویت بالاتر',
			handle: 'prior'
		},
		{
			id: '5725a6806acf030f9341e925',
			name: 'شخصی',
			handle: 'personal'
		},
		{
			id: '5725a6806acf030f9341e932',
			name: 'دوستان',
			handle: 'friends'
		}
	]
};

mock.onGet('/api/notes-app/notes').reply(config => {
	return [200, notesDB.notes];
});

mock.onGet('/api/notes-app/labels').reply(config => {
	return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/create-note').reply(request => {
	const data = JSON.parse(request.data);
	const newNote = {
		...data.note,
		id: FuseUtils.generateGUID()
	};
	notesDB.notes = [newNote, ...notesDB.notes];
	return [200, newNote];
});

mock.onPost('/api/notes-app/update-note').reply(request => {
	const { note } = JSON.parse(request.data);

	notesDB.notes = notesDB.notes.map(_note => {
		if (note.id === _note.id) {
			return note;
		}
		return _note;
	});

	return [200, note];
});

mock.onPost('/api/notes-app/update-labels').reply(request => {
	const data = JSON.parse(request.data);

	notesDB.labels = data.labels;

	return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/remove-note').reply(request => {
	const data = JSON.parse(request.data);

	notesDB.notes = notesDB.notes.filter(note => data.noteId !== note.id);

	return [200, data.noteId];
});
