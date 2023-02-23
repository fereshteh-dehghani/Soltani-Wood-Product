import mock from '../mock';

const invoicesDB = {
	invoices: [
		{
			id: '5725a6802d',
			from: {
				title: 'شرکت Fuse Inc.',
				address: 'ایران تهران',
				phone: '+66 123 455 87',
				email: 'hello@fuseinc.com',
				website: 'www.fuseinc.com'
			},
			client: {
				title: 'فاطمه کاظمی زاده',
				address: 'ایران تهران، شهرک غرب',
				phone: '+55 552 455 87',
				email: 'fkazemi5236@mail.com'
			},
			number: 'P9-0004',
			date: '۱ اردیبهشت ۱۴۰۱',
			dueDate: '۲۰ اردیبهشت ۱۴۰۱',
			services: [
				{
					id: '1',
					title: 'پروتوتایپ و طراحی',
					detail:
						'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
					unit: 'ساعتی',
					unitPrice: '12.00',
					quantity: '240',
					total: '2880'
				},
				{
					id: '2',
					title: 'کدمویسی',
					detail:
						' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ',
					unit: 'ساعتی',
					unitPrice: '10.50',
					quantity: '350',
					total: '3675'
				},
				{
					id: '3',
					title: 'تست نویسی نرم افزار',
					detail:
						'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
					unit: 'ساعتی',
					unitPrice: '4.00',
					quantity: '50',
					total: '200'
				},
				{
					id: '4',
					title: 'داکیومنت نویسی و توسعه',
					detail:
						'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
					unit: 'ساعتی',
					unitPrice: '6.50',
					quantity: '260',
					total: '1690'
				}
			],
			subtotal: '8445',
			tax: '675.60',
			discount: '120.60',
			total: '9000'
		}
	]
};

mock.onGet('/api/invoices/get-invoice').reply(config => {
	const { id } = config.params;
	const response = invoicesDB.invoices.find(invoice => invoice.id === id);
	return [200, response];
});
