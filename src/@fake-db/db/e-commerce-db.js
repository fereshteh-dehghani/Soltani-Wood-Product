import _ from '@lodash';
import mock from '../mock';

const eCommerceDB = {
	products: [
		{
			id: '1',
			name: 'تابلو مدل برگ مجموعه سه عددی',
			handle: 'a-walk-amongst-friends-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '1',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 9.309,
			priceTaxIncl: 10.24,
			taxRate: 10,
			comparedPrice: 19.9,
			quantity: 3,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '2',
			name: 'تابلو مدل نقاشی ماه و کهکشان',
			handle: 'braies-lake-canvas-print',
			description:
				' کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '2',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 22.381,
			priceTaxIncl: 24.62,
			taxRate: 10,
			comparedPrice: 29.9,
			quantity: 92,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '3',
			name: 'تابلو بوم نقاشی مدل دخترانه',
			handle: 'fall-glow-canvas-print',
			description:
				' کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '3',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 44.809,
			priceTaxIncl: 49.29,
			taxRate: 10,
			comparedPrice: 59.9,
			quantity: 60,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '4',
			name: 'تابلو فرش دستباف مدل کوچه باغ بهاری',
			handle: 'first-snow-canvas-print',
			description:
				'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '4',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 62.827,
			priceTaxIncl: 69.11,
			taxRate: 10,
			comparedPrice: 79.9,
			quantity: 101,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: false
		},
		{
			id: '5',
			name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
			handle: 'lago-di-braies-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '5',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 9.309,
			priceTaxIncl: 10.24,
			taxRate: 10,
			comparedPrice: 19.9,
			quantity: 19,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '6',
			name: 'تابلو شنی مدل روم باستان',
			handle: 'lago-di-sorapis-canvas-print',
			description:
				'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '6',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 53.963,
			priceTaxIncl: 59.36,
			taxRate: 10,
			comparedPrice: 69.9,
			quantity: 101,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '7',
			name: 'تابلو شنی مدل انگیزشی طرح برگ',
			handle: 'never-stop-changing-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '7',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 58.372,
			priceTaxIncl: 64.21,
			taxRate: 10,
			comparedPrice: 69.9,
			quantity: 34,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '8',
			name: 'تابلو سه بعدی مدل شیر',
			handle: 'reaching-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '8',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 63.39,
			priceTaxIncl: 69.73,
			taxRate: 10,
			comparedPrice: 79.9,
			quantity: 4,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: false
		},
		{
			id: '9',
			name: 'تابلو مدل led مناسب اتاق گیم',
			handle: 'morain-lake-canvas-print',
			description:
				' تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '9',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 52.154,
			priceTaxIncl: 57.37,
			taxRate: 10,
			comparedPrice: 59.9,
			quantity: 58,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '10',
			name: 'تابلو طرح چشم و نظر',
			handle: 'yosemite-canvas-print',
			description:
				' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '9',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 62.18,
			priceTaxIncl: 68.4,
			taxRate: 10,
			comparedPrice: 69.9,
			quantity: 125,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '11',
			name: 'تابلو دکوراتیو مدل بال فرشته',
			handle: 'a-walk-amongst-friends-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '1',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 9.309,
			priceTaxIncl: 10.24,
			taxRate: 10,
			comparedPrice: 19.9,
			quantity: 3,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '12',
			name: 'تابلو شنی مدل انگیزشی طرح برگ',
			handle: 'never-stop-changing-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '7',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 58.372,
			priceTaxIncl: 64.21,
			taxRate: 10,
			comparedPrice: 69.9,
			quantity: 34,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '13',
			name: 'تابلو مدل led مناسب اتاق گیم',
			handle: 'morain-lake-canvas-print',
			description:
				' تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '9',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 52.154,
			priceTaxIncl: 57.37,
			taxRate: 10,
			comparedPrice: 59.9,
			quantity: 58,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '14',
			name: 'تابلو مدل نقاشی ماه و کهکشان',
			handle: 'braies-lake-canvas-print',
			description:
				' کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '2',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 22.381,
			priceTaxIncl: 24.62,
			taxRate: 10,
			comparedPrice: 29.9,
			quantity: 92,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '15',
			name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
			handle: 'lago-di-braies-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '5',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 9.309,
			priceTaxIncl: 10.24,
			taxRate: 10,
			comparedPrice: 19.9,
			quantity: 19,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '16',
			name: 'تابلو بوم نقاشی مدل دخترانه',
			handle: 'fall-glow-canvas-print',
			description:
				' کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '3',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 44.809,
			priceTaxIncl: 49.29,
			taxRate: 10,
			comparedPrice: 59.9,
			quantity: 60,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '17',
			name: 'تابلو شنی مدل روم باستان',
			handle: 'lago-di-sorapis-canvas-print',
			description:
				'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '6',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 53.963,
			priceTaxIncl: 59.36,
			taxRate: 10,
			comparedPrice: 69.9,
			quantity: 101,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		},
		{
			id: '18',
			name: 'تابلو سه بعدی مدل شیر',
			handle: 'reaching-canvas-print',
			description:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '8',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 63.39,
			priceTaxIncl: 69.73,
			taxRate: 10,
			comparedPrice: 79.9,
			quantity: 4,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: false
		},
		{
			id: '19',
			name: 'تابلو فرش دستباف مدل کوچه باغ بهاری',
			handle: 'first-snow-canvas-print',
			description:
				'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '4',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 62.827,
			priceTaxIncl: 69.11,
			taxRate: 10,
			comparedPrice: 79.9,
			quantity: 101,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: false
		},
		{
			id: '20',
			name: 'تابلو طرح چشم و نظر',
			handle: 'yosemite-canvas-print',
			description:
				' چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد',
			categories: ['تابلوی سه بعدی', 'طبیعی'],
			tags: ['دکوراتیو', 'طبیعی'],
			featuredImageId: '9',
			images: [
				{
					id: '0',
					url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
					type: 'image'
				},
				{
					id: '1',
					url: 'assets/images/ecommerce/braies-lake.jpg',
					type: 'image'
				},
				{
					id: '2',
					url: 'assets/images/ecommerce/fall-glow.jpg',
					type: 'image'
				},
				{
					id: '3',
					url: 'assets/images/ecommerce/first-snow.jpg',
					type: 'image'
				},
				{
					id: '4',
					url: 'assets/images/ecommerce/lago-di-braies.jpg',
					type: 'image'
				},
				{
					id: '5',
					url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
					type: 'image'
				},
				{
					id: '6',
					url: 'assets/images/ecommerce/never-stop-changing.jpg',
					type: 'image'
				},
				{
					id: '7',
					url: 'assets/images/ecommerce/reaching.jpg',
					type: 'image'
				},
				{
					id: '8',
					url: 'assets/images/ecommerce/morain-lake.jpg',
					type: 'image'
				},
				{
					id: '9',
					url: 'assets/images/ecommerce/yosemite.jpg',
					type: 'image'
				}
			],
			priceTaxExcl: 62.18,
			priceTaxIncl: 68.4,
			taxRate: 10,
			comparedPrice: 69.9,
			quantity: 125,
			sku: 'A445BV',
			width: '22cm',
			height: '24cm',
			depth: '15cm',
			weight: '3kg',
			extraShippingFee: 3.0,
			active: true
		}
	],
	orders: [
		{
			id: '1',
			reference: '70d4d7d0',
			subtotal: '39.97',
			tax: '77.44',
			discount: '-10.17',
			total: '73.31',
			date: '2015/04/25 02:07:59',
			customer: {
				id: 1,
				firstName: 'نگین',
				lastName: 'پیام',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 13,
					name: 'پیش سفارش (پرداخت نشده)',
					color: 'purple-300',
					date: '2016/04/03 10:06:18'
				},
				{
					id: 1,
					name: 'منتظر بررسی پرداخت',
					color: 'blue-500',
					date: '2015/03/17 18:28:37'
				}
			],
			payment: {
				transactionId: '2a894b9e',
				amount: '73.31',
				method: 'Credit Card',
				date: '2016/02/23 15:50:23'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'TNT',
					weight: '10.44',
					fee: '7.00',
					date: '2015/04/10 07:03:52'
				}
			]
		},
		{
			id: '2',
			reference: '2003479c',
			subtotal: '98.68',
			tax: '45.55',
			discount: '-10.25',
			total: '24.51',
			date: '2015/11/07 15:47:31',
			customer: {
				id: 1,
				firstName: 'محمدرضا',
				lastName: 'امینی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 2,
					name: 'پرداخت موفق',
					color: 'green-500',
					date: '2015/10/04 08:54:33'
				},
				{
					id: 1,
					name: 'منتظر بررسی پرداخت',
					color: 'blue-500',
					date: '2015/05/03 03:43:04'
				}
			],
			payment: {
				transactionId: '79c640c8',
				amount: '24.51',
				method: 'Check',
				date: '2015/04/22 04:49:49'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '2.92',
					fee: '4.00',
					date: '2015/07/11 14:57:12'
				}
			]
		},
		{
			id: '3',
			reference: '09f5443b',
			subtotal: '23.03',
			tax: '16.36',
			discount: '-19.46',
			total: '87.17',
			date: '2015/11/26 16:04:40',
			customer: {
				id: 1,
				firstName: 'سرنا',
				lastName: 'کبیری',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 8,
					name: 'خطای پرداخت',
					color: 'red-900',
					date: '2015/07/02 20:44:34'
				},
				{
					id: 3,
					name: 'آماده سازی سفارش',
					color: 'orange-500',
					date: '2015/03/23 04:59:45'
				}
			],
			payment: {
				transactionId: '5ff44b0c',
				amount: '87.17',
				method: 'PayPal',
				date: '2016/01/25 11:46:28'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '7.53',
					fee: '7.00',
					date: '2015/11/25 00:40:54'
				}
			]
		},
		{
			id: '4',
			reference: '960898d0',
			subtotal: '13.47',
			tax: '53.45',
			discount: '-15.55',
			total: '26.98',
			date: '2015/11/23 05:35:18',
			customer: {
				id: 1,
				firstName: 'ماهان',
				lastName: 'بافری',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 5,
					name: 'تحویل داده شده',
					color: 'green-800',
					date: '2015/10/26 16:12:47'
				},
				{
					id: 4,
					name: 'ارسال شده',
					color: 'purple-500',
					date: '2016/02/06 06:42:37'
				}
			],
			payment: {
				transactionId: '787d49b1',
				amount: '26.98',
				method: 'Check',
				date: '2015/03/07 05:50:57'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'FedEx',
					weight: '11.93',
					fee: '5.00',
					date: '2016/03/21 07:08:26'
				}
			]
		},
		{
			id: '5',
			reference: '2d7f68de',
			subtotal: '46.93',
			tax: '12.14',
			discount: '-19.16',
			total: '12.97',
			date: '2015/01/13 06:21:21',
			customer: {
				id: 1,
				firstName: 'سامان',
				lastName: 'امیری',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 8,
					name: 'خطای پرداخت',
					color: 'red-900',
					date: '2015/02/01 09:21:46'
				},
				{
					id: 6,
					name: 'Canceled',
					color: 'pink-500',
					date: '2015/11/16 04:48:32'
				}
			],
			payment: {
				transactionId: 'cd8c4727',
				amount: '12.97',
				method: 'Bank-wire',
				date: '2016/05/15 21:15:32'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '5.43',
					fee: '3.00',
					date: '2016/01/06 00:51:59'
				}
			]
		},
		{
			id: '6',
			reference: '9c991708',
			subtotal: '32.55',
			tax: '11.81',
			discount: '-12.33',
			total: '30.96',
			date: '2015/01/17 04:21:08',
			customer: {
				id: 1,
				firstName: 'سمانه',
				lastName: 'بیهقی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 3,
					name: 'آماده سازی سفارش',
					color: 'orange-500',
					date: '2015/11/30 01:04:32'
				},
				{
					id: 2,
					name: 'پرداخت موفق',
					color: 'green-500',
					date: '2015/11/12 21:27:18'
				}
			],
			payment: {
				transactionId: 'a41f4b7c',
				amount: '30.96',
				method: 'Check',
				date: '2015/04/27 03:59:22'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'FedEx',
					weight: '6.05',
					fee: '4.00',
					date: '2015/09/10 11:28:47'
				}
			]
		},
		{
			id: '7',
			reference: '7683b54d',
			subtotal: '14.08',
			tax: '74.96',
			discount: '-16.60',
			total: '63.36',
			date: '2015/06/14 14:49:47',
			customer: {
				id: 1,
				firstName: 'امیرحسین',
				lastName: 'محمدی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 11,
					name: 'Awaiting PayPal payment',
					color: 'blue-500',
					date: '2015/09/03 18:53:02'
				},
				{
					id: 13,
					name: 'پیش سفارش (پرداخت نشده)',
					color: 'purple-300',
					date: '2015/12/13 18:14:40'
				}
			],
			payment: {
				transactionId: 1974588,
				amount: '63.36',
				method: 'PayPal',
				date: '2015/11/28 22:24:58'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'FedEx',
					weight: '2.89',
					fee: '3.00',
					date: '2016/02/10 09:03:44'
				}
			]
		},
		{
			id: '8',
			reference: 'c1de0f75',
			subtotal: '13.77',
			tax: '55.78',
			discount: '-17.20',
			total: '45.74',
			date: '2015/01/18 01:31:47',
			customer: {
				id: 1,
				firstName: 'محمدعرفان',
				lastName: 'سلیمانی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 4,
					name: 'ارسال شده',
					color: 'purple-500',
					date: '2015/04/29 07:57:43'
				},
				{
					id: 3,
					name: 'آماده سازی سفارش',
					color: 'orange-500',
					date: '2015/04/23 11:14:38'
				}
			],
			payment: {
				transactionId: '1e704aaf',
				amount: '45.74',
				method: 'Credit Card',
				date: '2015/06/08 03:50:41'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '6.35',
					fee: '2.00',
					date: '2015/06/01 09:18:26'
				}
			]
		},
		{
			id: '9',
			reference: '35a4dbc6',
			subtotal: '56.49',
			tax: '11.44',
			discount: '-17.45',
			total: '15.31',
			date: '2016/02/14 14:22:58',
			customer: {
				id: 1,
				firstName: 'سحر',
				lastName: 'محمدی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 12,
					name: 'Remote پرداخت موفق',
					color: 'green-500',
					date: '2015/07/15 15:48:00'
				},
				{
					id: 14,
					name: 'Awaiting Cash-on-delivery payment',
					color: 'blue-500',
					date: '2015/11/08 18:30:15'
				}
			],
			payment: {
				transactionId: '762c4e1a',
				amount: '15.31',
				method: 'Bank-wire',
				date: '2015/06/19 14:52:53'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '7.93',
					fee: '8.00',
					date: '2015/08/25 15:18:55'
				}
			]
		},
		{
			id: '10',
			reference: 'a8bc5b17',
			subtotal: '29.34',
			tax: '87.50',
			discount: '-18.11',
			total: '20.97',
			date: '2015/10/23 03:02:55',
			customer: {
				id: 1,
				firstName: 'فاطمه',
				lastName: 'نجفی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 5,
					name: 'تحویل داده شده',
					color: 'green-800',
					date: '2016/05/02 09:53:55'
				},
				{
					id: 2,
					name: 'پرداخت موفق',
					color: 'green-500',
					date: '2015/07/11 05:33:31'
				}
			],
			payment: {
				transactionId: '3dce47a3',
				amount: '20.97',
				method: 'Credit Card',
				date: '2015/07/28 23:53:49'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'TNT',
					weight: '9.20',
					fee: '2.00',
					date: '2015/08/05 08:45:55'
				}
			]
		},
		{
			id: '11',
			reference: '54ab8191',
			subtotal: '50.35',
			tax: '71.75',
			discount: '-10.46',
			total: '72.30',
			date: '2015/07/28 13:22:49',
			customer: {
				id: 1,
				firstName: 'امید',
				lastName: 'دلیران',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 9,
					name: 'On pre-order (paid)',
					color: 'purple-300',
					date: '2016/02/26 14:15:38'
				},
				{
					id: 4,
					name: 'ارسال شده',
					color: 'purple-500',
					date: '2015/10/17 03:32:39'
				}
			],
			payment: {
				transactionId: 'f4154419',
				amount: '72.30',
				method: 'PayPal',
				date: '2016/03/07 15:10:12'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '2.81',
					fee: '7.00',
					date: '2016/05/01 11:15:22'
				}
			]
		},
		{
			id: '12',
			reference: '6919050',
			subtotal: '81.95',
			tax: '22.44',
			discount: '-10.89',
			total: '42.54',
			date: '2015/06/07 17:54:36',
			customer: {
				id: 1,
				firstName: 'امیر',
				lastName: 'شریفی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 10,
					name: 'در انتظار پرداخت بانکی',
					color: 'blue-500',
					date: '2015/09/01 20:50:07'
				},
				{
					id: 12,
					name: 'پرداخت موفق آنلاین',
					color: 'green-500',
					date: '2016/02/13 21:19:04'
				}
			],
			payment: {
				transactionId: 44464979,
				amount: '42.54',
				method: 'Credit Card',
				date: '2015/06/30 11:59:49'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'FedEx',
					weight: '5.52',
					fee: '2.00',
					date: '2015/03/15 07:08:37'
				}
			]
		},
		{
			id: '13',
			reference: '1d4e89f0',
			subtotal: '67.10',
			tax: '46.96',
			discount: '-11.64',
			total: '97.49',
			date: '2016/02/06 13:26:55',
			customer: {
				id: 1,
				firstName: 'هیوا',
				lastName: 'رضایی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 6,
					name: 'Canceled',
					color: 'pink-500',
					date: '2015/03/31 03:01:12'
				},
				{
					id: 8,
					name: 'خطای پرداخت',
					color: 'red-900',
					date: '2016/03/11 18:53:35'
				}
			],
			payment: {
				transactionId: '2aef4aa3',
				amount: '97.49',
				method: 'Check',
				date: '2015/05/13 13:28:52'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'TNT',
					weight: '5.37',
					fee: '6.00',
					date: '2015/04/22 01:48:15'
				}
			]
		},
		{
			id: '14',
			reference: 'd897564e',
			subtotal: '55.50',
			tax: '48.92',
			discount: '-18.45',
			total: '16.95',
			date: '2016/01/17 04:23:11',
			customer: {
				id: 1,
				firstName: 'آرزو',
				lastName: 'حسینی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 7,
					name: 'Refunded',
					color: 'red-500',
					date: '2015/12/29 15:34:46'
				},
				{
					id: 11,
					name: 'Awaiting PayPal payment',
					color: 'blue-500',
					date: '2015/07/14 19:10:43'
				}
			],
			payment: {
				transactionId: 'b7ea43c9',
				amount: '16.95',
				method: 'PayPal',
				date: '2015/07/11 07:18:06'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'TNT',
					weight: '6.49',
					fee: '6.00',
					date: '2015/01/05 13:42:13'
				}
			]
		},
		{
			id: '15',
			reference: '1a803de2',
			subtotal: '13.73',
			tax: '64.42',
			discount: '-19.64',
			total: '20.34',
			date: '2015/09/26 14:26:33',
			customer: {
				id: 1,
				firstName: 'حامد',
				lastName: 'یعقوبی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 1,
					name: 'منتظر بررسی پرداخت',
					color: 'blue-500',
					date: '2015/12/21 10:42:21'
				},
				{
					id: 6,
					name: 'Canceled',
					color: 'pink-500',
					date: '2016/02/11 05:58:55'
				}
			],
			payment: {
				transactionId: '0633458c',
				amount: '20.34',
				method: 'Check',
				date: '2015/07/17 20:54:14'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'TNT',
					weight: '3.30',
					fee: '2.00',
					date: '2015/11/04 14:08:16'
				}
			]
		},
		{
			id: '16',
			reference: '7d90eaa6',
			subtotal: '99.07',
			tax: '31.36',
			discount: '-18.23',
			total: '10.64',
			date: '2015/08/10 14:28:10',
			customer: {
				id: 1,
				firstName: 'پارسا',
				lastName: 'ارجمند',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 9,
					name: 'On pre-order (paid)',
					color: 'purple-300',
					date: '2015/06/20 08:37:46'
				},
				{
					id: 2,
					name: 'پرداخت موفق',
					color: 'green-500',
					date: '2015/01/01 01:42:21'
				}
			],
			payment: {
				transactionId: '45f7440a',
				amount: '10.64',
				method: 'PayPal',
				date: '2015/11/23 11:14:47'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '9.94',
					fee: '6.00',
					date: '2016/04/30 19:17:39'
				}
			]
		},
		{
			id: '17',
			reference: 'cf9b4bfc',
			subtotal: '96.93',
			tax: '74.32',
			discount: '-12.63',
			total: '27.06',
			date: '2015/11/10 16:54:11',
			customer: {
				id: 1,
				firstName: 'مرتضی',
				lastName: 'امینی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 5,
					name: 'تحویل داده شده',
					color: 'green-800',
					date: '2015/03/23 00:18:52'
				},
				{
					id: 3,
					name: 'آماده سازی سفارش',
					color: 'orange-500',
					date: '2015/03/22 04:48:12'
				}
			],
			payment: {
				transactionId: '966f4c8e',
				amount: '27.06',
				method: 'PayPal',
				date: '2015/07/10 17:22:44'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'FedEx',
					weight: '6.81',
					fee: '3.00',
					date: '2015/01/23 07:31:46'
				}
			]
		},
		{
			id: '18',
			reference: '07a938c4',
			subtotal: '67.73',
			tax: '33.33',
			discount: '-12.33',
			total: '91.50',
			date: '2015/08/26 16:24:38',
			customer: {
				id: 1,
				firstName: 'ساناز',
				lastName: 'آریافر',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 6,
					name: 'Canceled',
					color: 'pink-500',
					date: '2016/03/24 22:56:35'
				},
				{
					id: 4,
					name: 'ارسال شده',
					color: 'purple-500',
					date: '2016/04/09 13:33:26'
				}
			],
			payment: {
				transactionId: '411a4e97',
				amount: '91.50',
				method: 'PayPal',
				date: '2016/02/05 05:35:52'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '6.11',
					fee: '7.00',
					date: '2015/10/20 10:46:31'
				}
			]
		},
		{
			id: '19',
			reference: 'd460f4ff',
			subtotal: '15.83',
			tax: '41.90',
			discount: '-16.54',
			total: '47.99',
			date: '2015/01/04 21:13:53',
			customer: {
				id: 1,
				firstName: 'مهدی',
				lastName: 'احمدی',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 7,
					name: 'Refunded',
					color: 'red-500',
					date: '2015/08/10 17:14:57'
				},
				{
					id: 5,
					name: 'تحویل داده شده',
					color: 'green-800',
					date: '2016/03/30 01:38:14'
				}
			],
			payment: {
				transactionId: '761943c2',
				amount: '47.99',
				method: 'PayPal',
				date: '2015/10/11 20:10:46'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '5.51',
					fee: '5.00',
					date: '2015/08/28 21:24:36'
				}
			]
		},
		{
			id: '20',
			reference: 'ba6a946d',
			subtotal: '36.84',
			tax: '20.12',
			discount: '-14.57',
			total: '44.40',
			date: '2015/02/24 00:57:18',
			customer: {
				id: 1,
				firstName: 'فرشته',
				lastName: 'رحمتیان',
				avatar: 'assets/images/avatars/Abbott.jpg',
				company: 'Saois',
				jobTitle: 'Digital Archivist',
				email: 'abbott@kazemi.com',
				phone: '+1-202-555-0175',
				invoiceAddress: {
					address: '704 6th Ave, New York, NY 10010, USA',
					lat: 40.7424739,
					lng: -73.99283919999999
				},
				shippingAddress: {
					address: 'تهران تهران محله کاووسیه، خیابان گاندی جنوبی، خیابان بیست و یکم، پلاک ۲۸، طبقه نهم',
					lat: 41.2183223,
					lng: -95.8420876
				}
			},
			products: [
				{
					id: 1,
					name: 'تابلو دکوراتیو مدل بال فرشته',
					price: '10.24',
					quantity: 1,
					total: '10.24',
					image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
				},
				{
					id: 2,
					name: 'تابلو فرش دستباف مدل نقاشی مهربانی خدا',
					price: '24.62',
					quantity: 1,
					total: '24.62',
					image: 'assets/images/ecommerce/lago-di-braies.jpg'
				},
				{
					id: 3,
					name: 'تابلو شنی مدل انگیزشی طرح برگ',
					price: '49.29',
					quantity: 1,
					total: '49.29',
					image: 'assets/images/ecommerce/never-stop-changing.jpg'
				}
			],
			status: [
				{
					id: 10,
					name: 'در انتظار پرداخت بانکی',
					color: 'blue-500',
					date: '2015/05/19 11:09:56'
				},
				{
					id: 12,
					name: 'Remote پرداخت موفق',
					color: 'green-500',
					date: '2015/03/27 05:02:33'
				}
			],
			payment: {
				transactionId: '4af94368',
				amount: '44.40',
				method: 'PayPal',
				date: '2015/11/11 14:25:39'
			},
			shippingDetails: [
				{
					tracking: '',
					carrier: 'USPS',
					weight: '3.63',
					fee: '5.00',
					date: '2016/03/01 09:07:49'
				}
			]
		}
	]
};

mock.onGet('/api/e-commerce-app/products').reply(() => {
	return [200, eCommerceDB.products];
});

mock.onPost('/api/e-commerce-app/remove-products').reply(request => {
	const { productIds } = JSON.parse(request.data);
	eCommerceDB.products = eCommerceDB.products.filter(product => !productIds.includes(product.id));
	return [200, productIds];
});

mock.onPost('/api/e-commerce-app/remove-product').reply(request => {
	const { id } = JSON.parse(request.data);
	eCommerceDB.products = eCommerceDB.products.filter(product => id !== product.id);
	return [200, id];
});

mock.onGet('/api/e-commerce-app/product').reply(request => {
	const { productId } = request.params;
	const response = _.find(eCommerceDB.products, { id: productId });
	return [200, response];
});

mock.onPost('/api/e-commerce-app/product/save').reply(request => {
	const data = JSON.parse(request.data);
	let product = null;

	eCommerceDB.products = eCommerceDB.products.map(_product => {
		if (_product.id === data.id) {
			product = data;
			return product;
		}
		return _product;
	});

	if (!product) {
		product = data;
		eCommerceDB.products = [...eCommerceDB.products, product];
	}

	return [200, product];
});

mock.onGet('/api/e-commerce-app/orders').reply(() => {
	return [200, eCommerceDB.orders];
});

mock.onPost('/api/e-commerce-app/remove-orders').reply(request => {
	const { orderIds } = JSON.parse(request.data);
	eCommerceDB.orders = eCommerceDB.orders.filter(order => !orderIds.includes(order.id));
	return [200, orderIds];
});

mock.onGet('/api/e-commerce-app/order').reply(request => {
	const { orderId } = request.params;
	const response = _.find(eCommerceDB.orders, { id: orderId });
	return [200, response];
});
