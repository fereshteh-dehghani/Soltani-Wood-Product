import _ from '@lodash';
import { amber, blue, blueGrey, green } from '@mui/material/colors';
import mock from '../mock';

const demoSteps = [
	{
		id: '0',
		title: 'آشنایی و معرفی',
		content:
			'<h1>مرحله 1 - آشنایی و معرفی</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '1',
		title: 'نصب و راه اندازی',
		content:
			'<h1>مرحله 2 - نصب و راه اندازی</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '2',
		title: 'آشنایی با موارد پایه و syntax',
		content:
			'<h1>مرحله 3 - آشنایی با موارد پایه و syntax</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '3',
		title: 'انواع لیست و شرط ها',
		content:
			'<h1>مرحله 4 - انواع لیست و شرط ها</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '4',
		title: 'استایل در کامپوننت ها',
		content:
			'<h1>مرحله 5 - استایل در کامپوننت ها</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '5',
		title: 'بوتسترپ در ری اکت',
		content:
			'<h1>مرحله 6 - بوتسترپ در ری اکت</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '6',
		title: 'دیباگ کردن پروژه ی ری اکتی',
		content:
			'<h1>مرحله 7 - دیباگ کردن پروژه ی ری اکتی</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '7',
		title: 'lifecycle در پروژه',
		content:
			'<h1>مرحله 8 - lifecycle در پروژه</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '8',
		title: 'آشنایی با Context و redux',
		content:
			'<h1>مرحله 9 - آشنایی با Context و redux</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '9',
		title: 'درخواست http و Firebase',
		content:
			'<h1>مرحله 10 - درخواست http و Firebase</h1>' +
			'<br>' +
			'این یک مرحله نمونه از دوره است. شما می توانید هر چیزی را از کدهای نمونه گرفته تا ویدیوها در اینجا قرار دهید.' +
			'<br><br>' +
			'برای نصب CLI باید npm را نصب کرده باشید که معمولاً با NodeJS همراه است. برای نصب یا ارتقاء CLI دستور npm زیر را اجرا کنید:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'برای تأیید اینکه CLI به درستی نصب شده است، یک کنسول را باز کنید و اجرا کنید:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>نصب پکیج های وابسته</h2>' +
			'<br>' +
			"برای تعدیل تصاویر به چند بسته Node.js نیاز داریم:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'Google Cloud Vision Client Library برای Node.js: @google-cloud/vision برای اجرای تصویر از طریق Cloud Vision API برای شناسایی تصاویر نامناسب.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'Google Cloud Storage Client Library برای Node.js: @google-cloud/storage برای دانلود و آپلود تصاویر از Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'یک کتابخانه Node.js که به ما امکان می دهد فرآیندها را اجرا کنیم: child-process-promise برای اجرای ImageMagick زیرا ابزار خط فرمان ImageMagick از قبل روی همه نمونه های توابع نصب شده است.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'برای نصب این سه بسته در اپلیکیشن Cloud Functions، دستور زیر را اجرا کنید. مطمئن شوید که این کار را از پوشه توابع انجام می دهید.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'این سه بسته را به صورت محلی نصب می کند و آنها را به عنوان وابستگی های اعلام شده در فایل package.js شما اضافه می کند.'
	},
	{
		id: '10',
		title: 'مفاهیم پایانی !',
		content:
			'<h1>مرحله 11 - مفاهیم پایانی !</h1>' +
			'<br>' +
			"شما با استفاده از قدرت Web Components و Firebase قابل استفاده مجدد، یک برنامه وب مترقی آفلاین و کاملاً وفادار ساخته اید. چرا با یک برنامه بومی زحمت بکشید وقتی می دانید چگونه همه این کارها را انجام دهید؟!"
	}
];

const academyDB = {
	categories: [
		{
			id: 0,
			value: 'web',
			label: 'طراحی سایت',
			color: blue[500]
		},
		{
			id: 1,
			value: 'firebase',
			label: 'آموزش Firebase',
			color: amber[500]
		},
		{
			id: 2,
			value: 'cloud',
			label: 'آموزش Cloud',
			color: blueGrey[500]
		},
		{
			id: 3,
			value: 'android',
			label: 'آموزش Android',
			color: green[500]
		}
	],
	courses: [
		{
			id: '15459251a6d6b397565',
			title: 'Angular مقدماتی',
			slug: 'basics-of-angular',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'web',
			length: 30,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '154588a0864d2881124',
			title: 'TypeScript مقدماتی',
			slug: 'basics-of-typeScript',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'web',
			length: 60,
			totalSteps: 11,
			activeStep: 3,
			updated: 'Nov 01, 2017',
			steps: demoSteps
		},
		{
			id: '15453ba60d3baa5daaf',
			title: 'Android راه اندازی',
			slug: 'android-n-quick-settings',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'android',
			length: 120,
			totalSteps: 11,
			activeStep: 11,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '15453a06c08fb021776',
			title: 'نگداری از بیگ دیتا',
			slug: 'keep-sensitive-data-safe-and-private',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'android',
			length: 45,
			totalSteps: 11,
			activeStep: 2,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '15427f4c1b7f3953234',
			title: 'ساخت سرویس gRPC با جاوا',
			slug: 'building-a-grpc-service-with-java',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'cloud',
			length: 30,
			totalSteps: 11,
			activeStep: 11,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1542d75d929a603125',
			title: 'ساخت اپ PWA',
			slug: 'build-a-pwa-using-workbox',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'web',
			length: 120,
			totalSteps: 11,
			activeStep: 8,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1543ee3a5b43e0f9f45',
			title: 'آموزش سئو',
			slug: 'build-an-app-for-the-google-assistant-with-firebase-and-dialogflow',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'firebase',
			length: 30,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1543cc4515df3146112',
			title: 'توابع ابری برای Firebase',
			slug: 'cloud-functions-for-firebase',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'firebase',
			length: 45,
			totalSteps: 11,
			activeStep: 7,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '154398a4770d7aaf9a2',
			title: "آموزش tailwindCss",
			slug: 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'cloud',
			length: 90,
			totalSteps: 11,
			activeStep: 5,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '15438351f87dcd68567',
			title: 'آموزش زبان Dart',
			your: 'building-beautiful-uis-with-flutter',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'web',
			length: 90,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1544e43dcdae6ebf876',
			title: 'آموزش المنتور در wordpress',
			slug: 'cloud-firestore',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'firebase',
			length: 90,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1541ca7af66da284177',
			title: 'آموزش پیشرفته وردپرس ( بدون کدنویسی‌ )',
			slug: 'customize-network-topology-with-subnetworks',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'web',
			length: 45,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '154297167e781781745',
			title: 'آموزش پیشرفته پایتون',
			slug: 'looking-at-campaign-finance-with-bigquery',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'cloud',
			length: 60,
			totalSteps: 11,
			activeStep: 3,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '154537435d5b32bf11a',
			title: 'Firebase در Android',
			slug: 'firebase-android',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'android',
			length: 45,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '154204e45a59b168453',
			title: 'آشنایی با امکانات جدید لاراول 9',
			slug: 'simulating-a-thread-network-using-openthread',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'web',
			length: 45,
			totalSteps: 11,
			activeStep: 1,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1541dd1e05dfc439216',
			title: 'آموزش تزریق وابستگی با Hilt در اندروید',
			slug: 'your-first-progressive-web-app',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'web',
			length: 30,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1532dfc67e704e48515',
			title: 'آموزش کامل Vue3',
			slug: 'launch-cloud-datalab',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'cloud',
			length: 60,
			totalSteps: 11,
			activeStep: 0,
			updated: '27 مرداد 1401',
			steps: demoSteps
		},
		{
			id: '1542e43dfaae6ebf226',
			title: 'آموزش احراز هویت در لاراول',
			slug: 'personalize-your-ios-app-with-firebase-user-management',
			description: 'این یک متن جایگزین برای نمونه ی توضیح این درس می باشد',
			category: 'firebase',
			length: 90,
			totalSteps: 11,
			activeStep: 11,
			updated: '27 مرداد 1401',
			steps: demoSteps
		}
	]
};

mock.onGet('/api/academy-app/categories').reply(() => {
	return [200, academyDB.categories];
});

mock.onGet('/api/academy-app/courses').reply(() => {
	return [200, academyDB.courses.map(_course => _.omit(_course, ['steps']))];
});

mock.onGet('/api/academy-app/course').reply(request => {
	const { courseId } = request.params;
	const response = _.find(academyDB.courses, { id: courseId });
	return [200, response];
});

mock.onPost('/api/academy-app/course/save').reply(request => {
	const data = JSON.parse(request.data);
	let course = null;

	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			course = data;
			return course;
		}
		return _course;
	});

	if (!course) {
		course = data;
		academyDB.courses = [...academyDB.courses, course];
	}

	return [200, course];
});

mock.onPost('/api/academy-app/course/update').reply(request => {
	const data = JSON.parse(request.data);
	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			return _.merge(_course, data);
		}
		return _course;
	});

	return [200, data];
});
