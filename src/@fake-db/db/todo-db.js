import mock from '../mock';

const todoDB = {
	todos: [
		{
			id: '561551bd7fe2ff461101c192',
			title: 'ایجاد منوی حساب کاربری در سایت',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 8, 3),
			dueDate: new Date(2018, 8, 5),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
			labels: [1]
		},
		{
			id: '561551bd4ac1e7eb77a3a750',
			title: 'گزارش افراد ثبت نامی در دیتابیس',
			notes: '',
			startDate: new Date(2018, 4, 3),
			dueDate: new Date(2018, 4, 5),
			completed: false,
			starred: false,
			important: true,
			deleted: false,
			labels: [1, 4]
		},
		{
			id: '561551bd917bfec2ddef2d49',
			title: 'ارائه میزان عملکرد اپلیکیشن',
			notes: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 5, 3),
			dueDate: new Date(2018, 5, 5),
			completed: false,
			starred: true,
			important: true,
			deleted: false,
			labels: [3]
		},
		{
			id: '561551bdeeb2fd6877e18c29',
			title: 'تست و بررسی نسخه ی بتای اپلیکیشن',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 9, 3),
			dueDate: new Date(2018, 9, 5),
			completed: true,
			starred: true,
			important: false,
			deleted: false,
			labels: [2]
		},
		{
			id: '561551bdf38eae0134ae43d4',
			title: 'ایجاد مانیفست نسخه ی ios',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 6, 3),
			dueDate: new Date(2018, 6, 4),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
			labels: [5, 4]
		},
		{
			id: '561551bd32f1588c814a0ccd',
			title: 'وب سرویس احرازهویت کاربر',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 5, 3),
			dueDate: new Date(2018, 6, 5),
			completed: false,
			starred: true,
			important: false,
			deleted: false,
			labels: [2, 3]
		},
		{
			id: '561551bd0bb4b08ca77038ef',
			title: 'عدم کارکرد صفحه مپ',
			notes: 'صفحه مپ دچار مشکل شده و لطفا  فورا از پکیج جایگزین استفاده شود',
			startDate: new Date(2018, 2, 3),
			dueDate: new Date(2018, 3, 5),
			completed: true,
			starred: false,
			important: false,
			deleted: false,
			labels: [2, 4]
		},
		{
			id: '561551bdf84eec913835ebe5',
			title: 'ایجاد صفحه ی ویرایش اطلاعات کاربری',
			notes: '',
			startDate: new Date(2018, 4, 3),
			dueDate: new Date(2018, 6, 2),
			completed: true,
			starred: false,
			important: true,
			deleted: false,
			labels: [1, 3]
		},
		{
			id: '561551bd2047cc709af0f670',
			title: 'ریفکتور صفحه اصلی',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 1, 3),
			dueDate: new Date(2018, 2, 5),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
			labels: [5]
		},
		{
			id: '561551bd73d1a627e97005ce',
			title: 'ریفکتور بکند',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 10, 11),
			dueDate: new Date(2018, 10, 12),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
			labels: [2]
		},
		{
			id: '561551bd8f7d793ded0a2353',
			title: 'استاندارد سازی پوشه ها و نام گذاری ها',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 12, 13),
			dueDate: new Date(2018, 12, 15),
			completed: false,
			starred: false,
			important: true,
			deleted: false,
			labels: [3]
		},
		{
			id: '561551bdaa586f72d0be02cc',
			title: 'بارگذاری کدهای سورس ادمین در گیت',
			notes: '',
			startDate: new Date(2018, 2, 3),
			dueDate: new Date(2018, 12, 4),
			completed: false,
			starred: true,
			important: true,
			deleted: false,
			labels: [4]
		},
		{
			id: '561551bd9f1c2de5b27f537b',
			title: 'جداسازی فایل های لاگ',
			notes: '',
			startDate: new Date(2018, 3, 3),
			dueDate: new Date(2018, 4, 5),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
			labels: [4]
		},
		{
			id: '561551bd26e21bb5e85b35cb',
			title: 'افزدن بخش یادداشت های کاربری',
			notes: '',
			startDate: new Date(2018, 4, 3),
			dueDate: new Date(2018, 5, 5),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
			labels: [4]
		},
		{
			id: '561551bd719860cf0ad2011a',
			title: 'ایجاد ریپازیتوری های جدید برای پنل کاربری',
			notes: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 6, 3),
			dueDate: new Date(2018, 7, 5),
			completed: false,
			starred: true,
			important: false,
			deleted: false,
			labels: [2, 4]
		},
		{
			id: '561551bd49d800c243264a91',
			title: 'امکان ثبت و تایید کامنت توسط مدیریت',
			notes: '',
			startDate: new Date(2018, 8, 3),
			dueDate: new Date(2018, 9, 5),
			completed: true,
			starred: false,
			important: false,
			deleted: false,
			labels: [1]
		},
		{
			id: '561551bd061990eaf40fb64f',
			title: 'تیکت ها و بررسی مشکلات کاربران',
			notes: 'کاربران سایت گاهی امکان ارسال تیکت ندارند و تیکت های قبلی بررسی نشده است',
			startDate: new Date(2018, 1, 3),
			dueDate: new Date(2018, 2, 5),
			completed: false,
			starred: false,
			important: true,
			deleted: false,
			labels: [1]
		},
		{
			id: '561551be81d05fa94711e7f3',
			title: 'درج زبان روسی در دیکشنری اپلیکیشن',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 3, 3),
			dueDate: new Date(2018, 4, 5),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
			labels: [2]
		},
		{
			id: '561551be05c093a80e0c8d05',
			title: 'مدیریت سرستون ها و فیلتر گرید های پنل',
			notes: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 5, 3),
			dueDate: new Date(2018, 6, 5),
			completed: true,
			starred: true,
			important: true,
			deleted: false,
			labels: [5]
		},
		{
			id: '561551be3bb43a5bd431c2fc',
			title: 'گزارش تعداد فروش روزانه',
			notes:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
			startDate: new Date(2018, 7, 3),
			dueDate: new Date(2018, 8, 5),
			completed: true,
			starred: false,
			important: true,
			deleted: true,
			labels: [3]
		}
	],
	folders: [
		{
			id: 0,
			handle: 'all',
			title: 'همه',
			icon: 'view_headline'
		}
	],
	filters: [
		{
			id: 0,
			handle: 'starred',
			title: 'ستاره دار',
			icon: 'star'
		},
		{
			id: 1,
			handle: 'important',
			title: 'الویت بالا',
			icon: 'error'
		},
		{
			id: 2,
			handle: 'dueDate',
			title: 'زمان دار',
			icon: 'schedule'
		},
		{
			id: 3,
			handle: 'today',
			title: 'امروز',
			icon: 'today'
		},
		{
			id: 4,
			handle: 'completed',
			title: 'تکمیل',
			icon: 'check'
		},
		{
			id: 5,
			handle: 'deleted',
			title: 'آرشیو',
			icon: 'delete'
		}
	],
	labels: [
		{
			id: 1,
			handle: 'frontend',
			title: 'Frontend',
			color: '#388E3C'
		},
		{
			id: 2,
			handle: 'backend',
			title: 'Backend',
			color: '#F44336'
		},
		{
			id: 3,
			handle: 'api',
			title: 'API',
			color: '#FF9800'
		},
		{
			id: 4,
			handle: 'issue',
			title: 'Issue',
			color: '#0091EA'
		},
		{
			id: 5,
			handle: 'mobile',
			title: 'Mobile',
			color: '#9C27B0'
		}
	]
};

mock.onGet('/api/todo-app/todos').reply(config => {
	const { params } = config;
	let response = [];
	if (params.labelHandle) {
		const labelId = todoDB.labels.find(label => label.handle === params.labelHandle).id;

		response = todoDB.todos.filter(todo => todo.labels.includes(labelId) && !todo.deleted);
	} else if (params.filterHandle) {
		if (params.filterHandle === 'deleted') {
			response = todoDB.todos.filter(todo => todo.deleted);
		} else {
			response = todoDB.todos.filter(todo => todo[params.filterHandle] && !todo.deleted);
		}
	} // folderHandle
	else {
		let { folderHandle } = params;
		if (!folderHandle) {
			folderHandle = 'all';
		}

		if (folderHandle === 'all') {
			response = todoDB.todos.filter(todo => !todo.deleted);
		} else {
			const folderId = todoDB.folders.find(folder => folder.handle === folderHandle).id;
			response = todoDB.todos.filter(todo => todo.folder === folderId && !todo.deleted);
		}
	}

	return [200, response];
});

mock.onPost('/api/todo-app/update-todo').reply(request => {
	const todo = JSON.parse(request.data);

	todoDB.todos = todoDB.todos.map(_todo => {
		if (_todo.id === todo.id) {
			return todo;
		}
		return _todo;
	});

	return [200, todo];
});

mock.onPost('/api/todo-app/new-todo').reply(request => {
	const todo = JSON.parse(request.data);

	todoDB.todos = [todo, ...todoDB.todos];

	return [200, todo];
});

mock.onPost('/api/todo-app/remove-todo').reply(request => {
	const todoId = request.data;
	todoDB.todos = todoDB.todos.map(_todo => {
		if (_todo.id === todoId) {
			_todo.deleted = true;
		}
		return _todo;
	});
	return [200, todoId];
});

mock.onGet('/api/todo-app/filters').reply(200, todoDB.filters);
mock.onGet('/api/todo-app/labels').reply(200, todoDB.labels);
mock.onGet('/api/todo-app/folders').reply(200, todoDB.folders);

mock.onPost('/api/todo-app/set-folder').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedTodoIds, folderId } = data;
	todoDB.todos = todoDB.todos.map(_todo => {
		if (selectedTodoIds.includes(_todo.id)) {
			return {
				..._todo,
				folder: folderId
			};
		}
		return _todo;
	});

	return [200];
});

mock.onPost('/api/todo-app/toggle-label').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedTodoIds, labelId } = data;
	todoDB.todos = todoDB.todos.map(_todo => {
		if (selectedTodoIds.includes(_todo.id)) {
			return {
				..._todo,
				labels: _todo.labels.includes(labelId)
					? _todo.labels.filter(_id => _id !== labelId)
					: [..._todo.labels, labelId]
			};
		}
		return _todo;
	});

	return [200];
});
mock.onPost('/api/todo-app/delete-todos').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedTodoIds } = data;
	todoDB.todos = todoDB.todos.filter(_todo => (selectedTodoIds.includes(_todo.id) ? false : _todo));
	return [200];
});
