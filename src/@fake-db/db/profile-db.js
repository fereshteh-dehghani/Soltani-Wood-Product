import mock from '../mock';

const profileDB = {
	timeline: {
		activities: [
			{
				id: '1',
				user: {
					name: 'بهار بینایی',
					avatar: 'assets/images/avatars/alice.jpg'
				},
				message: 'شما را دنبال می کند',
				time: '13 دقیقه قبل'
			},
			{
				id: '2',
				user: {
					name: 'علی برومند',
					avatar: 'assets/images/avatars/andrew.jpg'
				},
				message: 'یک پیام خصوصی ارسال کرد',
				time: '1 خرداد 1401'
			},
			{
				id: '3',
				user: {
					name: 'امین حکیمی',
					avatar: 'assets/images/avatars/garry.jpg'
				},
				message: 'یک پیام در گروه ارسال کرد',
				time: '11 خرداد 1401'
			},
			{
				id: '4',
				user: {
					name: 'مجید قاسمی',
					avatar: 'assets/images/avatars/carl.jpg'
				},
				message: 'میخواد باهات بازی کنه !!',
				time: '17 خرداد 1401'
			},
			{
				id: '5',
				user: {
					name: 'مریم عامری',
					avatar: 'assets/images/avatars/jane.jpg'
				},
				message: 'شما را دنبال می کند',
				time: '20 خرداد 1401'
			},
			{
				id: '6',
				user: {
					name: 'سعید موسوی',
					avatar: 'assets/images/avatars/james.jpg'
				},
				message: 'یک پیام خصوصی ارسال کرد',
				time: '10 تیر 1401'
			},
			{
				id: '7',
				user: {
					name: 'نازنین ایران منش',
					avatar: 'assets/images/avatars/joyce.jpg'
				},
				message: 'یک تصویر برای شما ارسال کرد',
				time: '15 مرداد 1401'
			},
			{
				id: '8',
				user: {
					name: 'امیرعباس خادمی',
					avatar: 'assets/images/avatars/vincent.jpg'
				},
				message: 'یک تصویر برای شما ارسال کرد',
				time: '10 مرداد 1401'
			}
		],
		posts: [
			{
				id: '1',
				user: {
					name: 'امین حکیمی',
					avatar: 'assets/images/avatars/garry.jpg'
				},
				message: 'جایی که دیشب در موردش صحبت می کردیم یادت هست؟ پیداش کردم!',
				time: '32 دقیقه قبل',
				type: 'post',
				like: 5,
				share: 21,
				media: {
					type: 'image',
					preview: 'assets/images/profile/morain-lake.jpg'
				},
				comments: [
					{
						id: '1',
						user: {
							name: 'بهار بینایی',
							avatar: 'assets/images/avatars/alice.jpg'
						},
						time: 'June 10, 2015',
						message:
							'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
					}
				]
			},
			{
				id: '2',
				user: {
					name: 'علی برومند',
					avatar: 'assets/images/avatars/andrew.jpg'
				},
				message: 'اگه نظر منو بخوای میگم یه بارم شده باید امتحانش کنی!',
				time: 'June 12, 2015',
				type: 'article',
				like: 98,
				share: 6,
				article: {
					title: 'هیچوقت از تغییر کردن دست نکش!',
					subtitle: 'John Westrock',
					excerpt:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
					media: {
						type: 'image',
						preview: 'assets/images/profile/never-stop-changing.jpg'
					}
				},
				comments: [
					{
						id: '1',
						user: {
							name: 'بهار بینایی',
							avatar: 'assets/images/avatars/alice.jpg'
						},
						time: 'June 10, 2015',
						message:
							'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
					}
				]
			},
			{
				id: '3',
				user: {
					name: 'مجید قاسمی',
					avatar: 'assets/images/avatars/carl.jpg'
				},
				message:
					'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد...',
				time: 'June 10, 2015',
				type: 'something',
				like: 4,
				share: 1
			}
		]
	},
	photosVideos: [
		{
			id: '1',
			name: 'ادریبهشت 1401',
			info: '5 عکس',
			media: [
				{
					type: 'photo',
					title: 'یه روز خوب با دوستای قدیمی',
					preview: 'assets/images/profile/a-walk-amongst-friends-small.jpg'
				},
				{
					type: 'photo',
					title: 'دریاچه و صفا',
					preview: 'assets/images/profile/braies-lake-small.jpg'
				},
				{
					type: 'photo',
					title: 'یه روز پاییزی و من',
					preview: 'assets/images/profile/fall-glow-small.jpg'
				},
				{
					type: 'photo',
					title: 'اولین برف شهر',
					preview: 'assets/images/profile/first-snow-small.jpg'
				},
				{
					type: 'photo',
					title: 'به به',
					preview: 'assets/images/profile/lago-di-braies-small.jpg'
				}
			]
		},
		{
			id: '2',
			name: 'خرداد 1401',
			info: '7 عکس, 3 ویدئو',
			media: [
				{
					type: 'photo',
					title: 'دریاچه چیتگر',
					preview: 'assets/images/profile/lago-di-sorapis-small.jpg'
				},
				{
					type: 'photo',
					title: 'دریاچه ارومیه',
					preview: 'assets/images/profile/morain-lake-small.jpg'
				},
				{
					type: 'photo',
					title: 'هیچوقت از تغییرکردن دست نکش',
					preview: 'assets/images/profile/never-stop-changing-small.jpg'
				},
				{
					type: 'photo',
					title: 'رسیدن به هدف',
					preview: 'assets/images/profile/reaching-small.jpg'
				},
				{
					type: 'photo',
					title: 'عنوان برای عکس',
					preview: 'assets/images/profile/yosemite-small.jpg'
				},
				{
					type: 'photo',
					title: 'یه روز خوب با دوستای قدیمی',
					preview: 'assets/images/profile/a-walk-amongst-friends-small.jpg'
				},
				{
					type: 'photo',
					title: 'دریاچه و صفا',
					preview: 'assets/images/profile/braies-lake-small.jpg'
				},
				{
					type: 'photo',
					title: 'یه روز پاییزی و من',
					preview: 'assets/images/profile/fall-glow-small.jpg'
				},
				{
					type: 'photo',
					title: 'اولین برف شهر',
					preview: 'assets/images/profile/first-snow-small.jpg'
				},
				{
					type: 'photo',
					title: 'به به',
					preview: 'assets/images/profile/lago-di-braies-small.jpg'
				}
			]
		},
		{
			id: '3',
			name: 'مرداد 1401',
			info: '7 عکس',
			media: [
				{
					type: 'photo',
					title: 'دریاچه چیتگر',
					preview: 'assets/images/profile/lago-di-sorapis-small.jpg'
				},
				{
					type: 'photo',
					title: 'دریاچه ارومیه',
					preview: 'assets/images/profile/morain-lake-small.jpg'
				},
				{
					type: 'photo',
					title: 'هیچوقت از تغییرکردن دست نکش',
					preview: 'assets/images/profile/never-stop-changing-small.jpg'
				},
				{
					type: 'photo',
					title: 'رسیدن به هدف',
					preview: 'assets/images/profile/reaching-small.jpg'
				},
				{
					type: 'photo',
					title: 'عنوان برای عکس',
					preview: 'assets/images/profile/yosemite-small.jpg'
				},
				{
					type: 'photo',
					title: 'یه روز خوب با دوستای قدیمی',
					preview: 'assets/images/profile/a-walk-amongst-friends-small.jpg'
				},
				{
					type: 'photo',
					title: 'دریاچه و صفا',
					preview: 'assets/images/profile/braies-lake-small.jpg'
				}
			]
		}
	],
	about: {
		general: {
			gender: 'خانم',
			birthday: '۲۷ مرداد ۱۳۷۶',
			locations: ['ایران، تهران',],
			about:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
		},
		work: {
			occupation: 'Developer',
			skills: 'C#, PHP, Javascript, Angular, JS, HTML, CSS',
			jobs: [
				{
					company: 'Self-Employed',
					date: '2010 - Now'
				},
				{
					company: 'Google',
					date: '2008 - 2010'
				}
			]
		},
		contact: {
			address:
				'تهران، خیابان شریعتی، بالاتر از میرداماد',
			tel: ['+98 912 553 5236', '+98 912 553 5236'],
			websites: ['fatemeh-kazemi.com'],
			emails: ['fkazemi5236@gmail.com', 'mail@creapond.com']
		},
		groups: [
			{
				id: '1',
				name: 'Android',
				category: 'Technology',
				members: '1.856.546'
			},
			{
				id: '2',
				name: 'Google',
				category: 'Web',
				members: '1.226.121'
			},
			{
				id: '3',
				name: 'Fallout',
				category: 'Games',
				members: '526.142'
			}
		],
		friends: [
			{
				id: '1',
				name: 'امین حکیمی',
				avatar: 'assets/images/avatars/garry.jpg'
			},
			{
				id: '2',
				name: 'مجید قاسمی',
				avatar: 'assets/images/avatars/carl.jpg'
			},
			{
				id: '3',
				name: 'مریم عامری',
				avatar: 'assets/images/avatars/jane.jpg'
			},
			{
				id: '4',
				name: 'Garry Arnold',
				avatar: 'assets/images/avatars/garry.jpg'
			},
			{
				id: '5',
				name: 'امیرعباس خادمی',
				avatar: 'assets/images/avatars/vincent.jpg'
			},
			{
				id: '6',
				name: 'بهار بینایی',
				avatar: 'assets/images/avatars/alice.jpg'
			},
			{
				id: '7',
				name: 'علی برومند',
				avatar: 'assets/images/avatars/andrew.jpg'
			}
		]
	}
};

mock.onGet('/api/profile/timeline').reply(config => {
	return [200, profileDB.timeline];
});

mock.onGet('/api/profile/photos-videos').reply(config => {
	return [200, profileDB.photosVideos];
});

mock.onGet('/api/profile/about').reply(config => {
	return [200, profileDB.about];
});
