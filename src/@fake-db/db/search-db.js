import mock from '../mock';

const searchDB = [
	{
		id: '1',
		title: 'آموزش مقابله با حملات XMLRPC در وردپرس',
		url: 'ourwebaddress.com/articles/procrastinate',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	},
	{
		id: '2',
		title: 'آموزش قالب هاب؛ تنظیمات کامل قالب چند منظوره hub',
		url: 'ourwebaddress.com/articles/cross-media',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	},
	{
		id: '3',
		title: 'آموزش مراحل طراحی افزونه وردپرس',
		url: 'ourwebaddress.com/articles/synergize',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	},
	{
		id: '4',
		title: 'بهترین شغل های اینترنتی برای دانشجویان + 7 پیشنهاد پولساز',
		url: 'ourwebaddress.com/articles/parallel-paltforms',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	},
	{
		id: '5',
		title: 'پارامتر INP چیست و چطور بهینه می شود؟',
		url: 'ourwebaddress.com/articles/growth-strategies',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	},
	{
		id: '6',
		title: 'راه های کسب درآمد برای نوجوانان',
		url: 'ourwebaddress.com/articles/methodologies',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	},
	{
		id: '7',
		title: 'آموزش ساخت سایت رایگان در گوگل',
		url: 'ourwebaddress.com/articles/e-trailers',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	},
	{
		id: '8',
		title: 'بازاریابی محتوایی چیست و چگونه باعث افزایش درآمد میشود؟',
		url: 'ourwebaddress.com/articles/web-readiness',
		excerpt:
			'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
	}
];

mock.onGet('/api/search').reply(config => {
	return [200, searchDB];
});
