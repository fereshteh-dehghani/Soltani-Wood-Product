import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mock from '../mock';

const chatDb = {
	contacts: [
		{
			id: '5725a680b3249760ea21de52',
			name: 'بهار بینایی',
			avatar: 'assets/images/avatars/alice.jpg',
			status: 'online',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...',
			unread: '2'
		},
		{
			id: '5725a680606588342058356d',
			name: 'الیاس امینی',
			avatar: 'assets/images/avatars/Arnold.jpg',
			status: 'do-not-disturb',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...',
			unread: '3'
		},
		{
			id: '5725a68009e20d0a9e9acf2a',
			name: 'نوشین جعفری',
			avatar: 'assets/images/avatars/Barrera.jpg',
			status: 'do-not-disturb',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...',
			unread: '1'
		},
		{
			id: '5725a6809fdd915739187ed5',
			name: 'سحر حسین پور',
			avatar: 'assets/images/avatars/Blair.jpg',
			status: 'offline',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a68007920cf75051da64',
			name: 'پدرام امجدی',
			avatar: 'assets/images/avatars/Boyle.jpg',
			status: 'offline',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a68031fdbb1db2c1af47',
			name: 'فرهاد فیروزی',
			avatar: 'assets/images/avatars/Christy.jpg',
			status: 'offline',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680bc670af746c435e2',
			name: 'احمد بابازاده',
			avatar: 'assets/images/avatars/Copeland.jpg',
			status: 'online',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680e7eb988a58ddf303',
			name: 'فرانک رفیعی',
			avatar: 'assets/images/avatars/Estes.jpg',
			status: 'away',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680dcb077889f758961',
			name: 'علی اشرافی',
			avatar: 'assets/images/avatars/Harper.jpg',
			status: 'offline',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a6806acf030f9341e925',
			name: 'لیلا علیزاده',
			avatar: 'assets/images/avatars/Helen.jpg',
			status: 'away',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680ae1ae9a3c960d487',
			name: 'سینا حقیقت',
			avatar: 'assets/images/avatars/Henderson.jpg',
			status: 'offline',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680b8d240c011dd224b',
			name: 'عاطفه رسالت',
			avatar: 'assets/images/avatars/Josefina.jpg',
			status: 'online',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a68034cb3968e1f79eac',
			name: 'مریم مهری زاده',
			avatar: 'assets/images/avatars/Katina.jpg',
			status: 'away',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a6801146cce777df2a08',
			name: 'نفیسه رهنما',
			avatar: 'assets/images/avatars/Lily.jpg',
			status: 'do-not-disturb',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a6808a178bfd034d6ecf',
			name: 'صبا',
			avatar: 'assets/images/avatars/Mai.jpg',
			status: 'away',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680653c265f5c79b5a9',
			name: 'نسرین',
			avatar: 'assets/images/avatars/Nancy.jpg',
			status: 'do-not-disturb',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680bbcec3cc32a8488a',
			name: 'سولماز',
			avatar: 'assets/images/avatars/Nora.jpg',
			status: 'do-not-disturb',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a6803d87f1b77e17b62b',
			name: 'افشین',
			avatar: 'assets/images/avatars/Odessa.jpg',
			status: 'away',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680e87cb319bd9bd673',
			name: 'گلناز',
			avatar: 'assets/images/avatars/Reyna.jpg',
			status: 'offline',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a6802d10e277a0f35775',
			name: 'آرزو',
			avatar: 'assets/images/avatars/Shauna.jpg',
			status: 'online',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680aef1e5cf26dd3d1f',
			name: 'مسعود نظامی',
			avatar: 'assets/images/avatars/Shepard.jpg',
			status: 'online',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a680cd7efa56a45aea5d',
			name: 'سپهر',
			avatar: 'assets/images/avatars/Tillman.jpg',
			status: 'do-not-disturb',
			mood: ''
		},
		{
			id: '5725a680fb65c91a82cb35e2',
			name: 'پیمان',
			avatar: 'assets/images/avatars/Trevino.jpg',
			status: 'away',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a68018c663044be49cbf',
			name: 'وحید',
			avatar: 'assets/images/avatars/Tyson.jpg',
			status: 'do-not-disturb',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		},
		{
			id: '5725a6809413bf8a0a5272b1',
			name: 'محمدرضا',
			avatar: 'assets/images/avatars/Velazquez.jpg',
			status: 'online',
			mood: 'سلام من دارم از این مسنجر استفاده میکنم...'
		}
	],
	chats: [
		{
			id: '1725a680b3249760ea21de52',
			dialog: [
				{
					who: '5725a680b3249760ea21de52',
					message: 'سریع به اتاق جلسه 1B بیایید، ما یک مشکل سرور بزرگ داریم',
					time: '2021-03-22T08:54:28.299Z'
				},
				{
					who: '5725a6802d10e277a0f35724',
					message: 'ده دقیقه نمیتونی صبرکنی صبونم تموم شه؟ صبرکن حالا میام گشنمه',
					time: '2021-03-22T08:55:28.299Z'
				},
				{
					who: '5725a6802d10e277a0f35724',
					message: 'ده دقیقه نمیتونی صبرکنی صبونم تموم شه؟ صبرکن حالا میام گشنمه',
					time: '2021-03-22T08:56:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'ما در حال از دست دادن پول هستیم! سریع!',
					time: '2021-03-22T09:00:28.299Z'
				},
				{
					who: '5725a6802d10e277a0f35724',
					message:
						'خودتم میدونی که این پول مال من نیست. صبرکن خب صبونه بخورم زود میام',
					time: '2021-03-22T09:02:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'میدونستی بدترین آدمی هستی که میشناسم؟!',
					time: '2021-03-22T09:05:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'ما در حال از دست دادن پول هستیم! سریع!',
					time: '2021-03-22T09:14:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'میدونستی بدترین آدمی هستی که میشناسم؟!',
					time: '2021-03-22T09:16:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'ما در حال از دست دادن پول هستیم! سریع!',
					time: '2021-03-22T09:17:28.299Z'
				},
				{
					who: '5725a6802d10e277a0f35724',
					message:
						'خودتم میدونی که این پول مال من نیست. صبرکن خب صبونه بخورم زود میام',
					time: '2021-03-22T09:20:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'میدونستی بدترین آدمی هستی که میشناسم؟!',
					time: '2021-03-22T09:22:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'ما در حال از دست دادن پول هستیم! سریع!',
					time: '2021-03-22T09:25:28.299Z'
				},
				{
					who: '5725a6802d10e277a0f35724',
					message:
						'خودتم میدونی که این پول مال من نیست. صبرکن خب صبونه بخورم زود میام',
					time: '2021-03-22T09:27:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'میدونستی بدترین آدمی هستی که میشناسم؟!',
					time: '2021-03-22T09:33:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'میدونستی بدترین آدمی هستی که میشناسم؟!',
					time: '2021-03-22T09:34:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'ما در حال از دست دادن پول هستیم! سریع!',
					time: '2021-03-22T09:35:28.299Z'
				},
				{
					who: '5725a6802d10e277a0f35724',
					message:
						'این پول مال من نیست، می دانید. صبحانه ام را می خورم و بعد به اتاق جلسه میام.',
					time: '2021-03-22T09:45:28.299Z'
				},
				{
					who: '5725a680b3249760ea21de52',
					message: 'تو بد ترینی!',
					time: '2021-03-22T10:00:28.299Z'
				}
			]
		},
		{
			id: '2725a680b8d240c011dd2243',
			dialog: [
				{
					who: '5725a680606588342058356d',
					message: 'سریع به اتاق جلسه 1B بیایید، ما یک مشکل سرور بزرگ داریم',
					time: '2021-04-22T01:00:00.299Z'
				},
				{
					who: '5725a6802d10e277a0f35724',
					message: 'من الان دارم صبحانه میخورم، نمیتونی 10 دقیقه صبر کنی؟',
					time: '2021-04-22T01:05:00.299Z'
				},
				{
					who: '5725a680606588342058356d',
					message: 'ما در حال از دست دادن پول هستیم! بجم!',
					time: '2021-04-22T01:10:00.299Z'
				}
			]
		},
		{
			id: '3725a6809413bf8a0a5272b4',
			dialog: [
				{
					who: '5725a68009e20d0a9e9acf2a',
					message: 'سریع به اتاق جلسه 1B بیایید، ما یک مشکل سرور بزرگ داریم',
					time: '2021-04-22T02:10:00.299Z'
				}
			]
		}
	],
	user: [
		{
			id: '5725a6802d10e277a0f35724',
			name: 'فاطمه کاظمی زاده',
			avatar: 'assets/images/avatars/profile.jpg',
			status: 'online',
			mood: "در دسترس هستم",
			chatList: [
				{
					chatId: '1725a680b3249760ea21de52',
					contactId: '5725a680b3249760ea21de52',
					lastMessageTime: '2021-06-12T02:10:18.931Z'
				},
				{
					chatId: '2725a680b8d240c011dd2243',
					contactId: '5725a680606588342058356d',
					lastMessageTime: '2021-02-18T10:30:18.931Z'
				},
				{
					chatId: '3725a6809413bf8a0a5272b4',
					contactId: '5725a68009e20d0a9e9acf2a',
					lastMessageTime: '2021-03-18T12:30:18.931Z'
				}
			]
		}
	]
};

mock.onGet('/api/chat/contacts').reply(config => {
	return [200, chatDb.contacts];
});

mock.onGet('/api/chat/get-chat').reply(request => {
	const { contactId, userId } = request.params;
	const user = chatDb.user.find(_user => _user.id === userId);

	const userChat = user.chatList.find(_chat => _chat.contactId === contactId);
	const chatId = userChat ? userChat.chatId : createNewChat(contactId, userId);

	return [
		200,
		{
			chat: chatDb.chats.find(_chat => _chat.id === chatId),
			userChatList: user.chatList
		}
	];
});

mock.onGet('/api/chat/user').reply(config => {
	return [200, chatDb.user[0]];
});

mock.onPost('/api/chat/user/data').reply(request => {
	const data = JSON.parse(request.data);
	chatDb.user[0] = _.merge({}, chatDb.user[0], data);
	return [200, chatDb.user[0]];
});

function createNewChat(contactId, userId) {
	const user = chatDb.user.find(_user => _user.id === userId);
	const chatId = FuseUtils.generateGUID();
	user.chatList = [
		{
			chatId,
			contactId,
			lastMessageTime: ''
		},
		...chatDb.user[0].chatList
	];
	chatDb.chats = [
		...chatDb.chats,
		{
			id: chatId,
			dialog: []
		}
	];
	return chatId;
}

mock.onPost('/api/chat/send-message').reply(request => {
	const data = JSON.parse(request.data);
	const { chatId, messageText, contactId } = data;
	const message = {
		who: chatDb.user[0].id,
		message: messageText,
		time: new Date()
	};

	const chat = chatDb.chats.find(_chat => _chat.id === chatId);
	chat.dialog = [...chat.dialog, message];
	chatDb.user[0].chatList.find(_contact => _contact.contactId === contactId).lastMessageTime = message.time;

	return [
		200,
		{
			message,
			userChatList: chatDb.user[0].chatList
		}
	];
});
