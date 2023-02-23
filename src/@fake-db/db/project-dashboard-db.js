import mock from '../mock';

const projectDashboardAppDB = {
	widgets: [
		{
			id: 'widget1',
			ranges: {
				DY: 'دیروز',
				DT: 'امروز',
				DTM: 'فردا'
			},
			currentRange: 'DT',
			data: {
				name: 'همه تسک ها',
				count: {
					DY: 21,
					DT: 25,
					DTM: 19
				},
				extra: {
					name: 'تکمیل',
					count: {
						DY: 6,
						DT: 7,
						DTM: '-'
					}
				}
			},
			detail: 'در اینجا می توانید اطلاعات دقیقی در مورد این ویجت نشان دهید.'
		},
		{
			id: 'widget2',
			title: 'عقب افتاده',
			data: {
				name: 'تسک ها',
				count: 4,
				extra: {
					name: "تسک عقب افتاده دیروز",
					count: 2
				}
			},
			detail: 'در اینجا می توانید اطلاعات دقیقی در مورد این ویجت نشان دهید.'
		},
		{
			id: 'widget3',
			title: 'مشکلات',
			data: {
				name: 'باز',
				count: 32,
				extra: {
					name: 'تکمیل شده امروز',
					count: 0
				}
			},
			detail: 'در اینجا می توانید اطلاعات دقیقی در مورد این ویجت نشان دهید.'
		},
		{
			id: 'widget4',
			title: 'ویژگی ها',
			data: {
				name: 'پروپوزال ها',
				count: 42,
				extra: {
					name: 'اجرا شده',
					count: 8
				}
			},
			detail: 'در اینجا می توانید اطلاعات دقیقی در مورد این ویجت نشان دهید.'
		},
		{
			id: 'widget5',
			title: 'مشکلات گیت هاب',
			ranges: {
				TW: 'این هفته',
				LW: 'هفته گذشته',
				'2W': '۲ هفته قبل'
			},
			mainChart: {
				TW: {
					series: [
						{
							name: 'مشکلات',
							data: [42, 28, 43, 34, 20, 25, 22]
						},
						{
							name: 'مشکلات حل شده',
							data: [11, 10, 8, 11, 8, 10, 17]
						}
					]
				},
				'2W': {
					labels: ['خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
					series: [
						{
							name: 'مشکلات',
							data: [37, 32, 39, 27, 18, 24, 20]
						},
						{
							name: 'مشکلات حل شده'
						}
					]
				},
				LW: {
					labels: ['خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
					series: [
						{
							name: 'مشکلات',
							data: [37, 24, 51, 31, 29, 17, 31]
						},
						{
							name: 'مشکلات حل شده',
							data: [12, 8, 7, 13, 7, 6, 10]
						}
					]
				},
				options: {
					chart: {
						height: '100%',
						type: 'bar',
						stacked: true,
						toolbar: {
							show: false
						}
					},
					plotOptions: {
						bar: {
							columnWidth: '90%',
							horizontal: false
						}
					},
					xaxis: {
						categories: ['دوشنبه', '3شنبه', '4شنبه', '5شنبه', 'جمعه', 'شنبه', 'یکشنبه']
					},
					fill: {
						opacity: 1
					},
					tooltip: {
						followCursor: true,
						theme       : 'dark',
						fixed: {
							enabled: false,
							position: 'topRight',
							offsetX: 0,
							offsetY: 0,
						},
					},
					legend: {
						show: false
					},
					dataLabels: {
						enabled: false
					}
				}
			},
			supporting: {
				created: {
					name: 'ایجاد شده',
					count: {
						'2W': 48,
						LW: 46,
						TW: 54
					},
					chart: {
						'2W': {
							series: [
								{
									name: 'ایجاد شده',
									data: [5, 8, 5, 6, 7, 8, 7]
								}
							]
						},
						LW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 3, 7, 5, 5, 4, 7]
								}
							]
						},
						TW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [3, 2, 1, 4, 8, 8, 4]
								}
							]
						},
						options: {
							chart: {
								type: 'area',
								height: '100%',
								sparkline: {
									enabled: true
								}
							},
							stroke: { width: 2 },
							grid: {
								padding: {
									top: 10,
									right: 0,
									bottom: 10,
									left: 0
								}
							},
							fill: {
								type: 'solid',
								opacity: 0.7
							},
							tooltip: {
								followCursor: true,
								theme       : 'dark',
								fixed: {
									enabled: false,
									position: 'topRight',
									offsetX: 0,
									offsetY: 0,
								},
							},
							xaxis: {
								categories: [
									'2شنبه',
									'3شنبه',
									'4شنبه',
									'5شنبه',
									'جمعه',
									'شنبه',
									'1شنبه'
								]
							}
						}
					}
				},
				closed: {
					name: 'بسته شده',
					count: {
						'2W': 27,
						LW: 31,
						TW: 26
					},
					chart: {
						TW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 3, 7, 5, 5, 4, 7]
								}
							]
						},
						'2W': {
							series: [
								{
									name: 'ایجاد شده',
									data: [3, 2, 1, 4, 8, 8, 4]
								}
							]
						},
						LW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 5, 4, 5, 7, 4, 7]
								}
							]
						},
						options: {
							chart: {
								type: 'area',
								height: '100%',
								sparkline: {
									enabled: true
								}
							},
							stroke: { width: 2 },
							grid: {
								padding: {
									top: 10,
									right: 0,
									bottom: 10,
									left: 0
								}
							},
							fill: {
								type: 'solid',
								opacity: 0.7
							},
							tooltip: {
								followCursor: true,
								theme       : 'dark',
								fixed: {
									enabled: false,
									position: 'topRight',
									offsetX: 0,
									offsetY: 0,
								},
							},
							xaxis: {
								categories: [
									'2شنبه',
									'3شنبه',
									'4شنبه',
									'5شنبه',
									'جمعه',
									'شنبه',
									'1شنبه'
								]
							}
						}
					}
				},
				reOpened: {
					name: 'بازگشت خورده',
					count: {
						'2W': 4,
						LW: 5,
						TW: 2
					},
					chart: {
						'2W': {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 3, 7, 5, 5, 4, 7]
								}
							]
						},
						LW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [5, 7, 8, 8, 6, 4, 1]
								}
							]
						},
						TW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [3, 2, 1, 4, 8, 8, 4]
								}
							]
						},
						TW2: [
							{
								name: 'بازگشت خورده',
								series: [
									{
										name: '2شنبه',
										value: 3
									},
									{
										name: '3شنبه',
										value: 2
									},
									{
										name: '4شنبه',
										value: 1
									},
									{
										name: '5شنبه',
										value: 4
									},
									{
										name: 'جمعه',
										value: 8
									},
									{
										name: 'شنبه',
										value: 8
									},
									{
										name: '1شنبه',
										value: 4
									}
								]
							}
						],
						options: {
							chart: {
								type: 'area',
								height: '100%',
								sparkline: {
									enabled: true
								}
							},
							stroke: { width: 2 },
							grid: {
								padding: {
									top: 10,
									right: 0,
									bottom: 10,
									left: 0
								}
							},
							fill: {
								type: 'solid',
								opacity: 0.7
							},
							tooltip: {
								followCursor: true,
								theme       : 'dark',
								fixed: {
									enabled: false,
									position: 'topRight',
									offsetX: 0,
									offsetY: 0,
								},
							},
							xaxis: {
								categories: [
									'2شنبه',
									'3شنبه',
									'4شنبه',
									'5شنبه',
									'جمعه',
									'شنبه',
									'1شنبه'
								]
							}
						}
					}
				},
				wontFix: {
					name: "بدون راه حل",
					count: {
						'2W': 6,
						LW: 3,
						TW: 4
					},
					chart: {
						'2W': {
							series: [
								{
									name: 'ایجاد شده',
									data: [5, 7, 4, 6, 5, 3, 2]
								}
							]
						},
						LW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 3, 7, 5, 5, 4, 7]
								}
							]
						},
						TW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 5, 4, 5, 7, 4, 7]
								}
							]
						},
						options: {
							chart: {
								type: 'area',
								height: '100%',
								sparkline: {
									enabled: true
								}
							},
							stroke: { width: 2 },
							grid: {
								padding: {
									top: 10,
									right: 0,
									bottom: 10,
									left: 0
								}
							},
							fill: {
								type: 'solid',
								opacity: 0.7
							},
							tooltip: {
								followCursor: true,
								theme       : 'dark',
								fixed: {
									enabled: false,
									position: 'topRight',
									offsetX: 0,
									offsetY: 0,
								},
							},
							xaxis: {
								categories: [
									'2شنبه',
									'3شنبه',
									'4شنبه',
									'5شنبه',
									'جمعه',
									'شنبه',
									'1شنبه'
								]
							}
						}
					}
				},
				needsTest: {
					name: 'نیاز به تست',
					count: {
						'2W': 10,
						LW: 7,
						TW: 8
					},
					chart: {
						'2W': {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 5, 4, 5, 7, 4, 7]
								}
							]
						},
						LW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [5, 7, 8, 8, 6, 4, 1]
								}
							]
						},
						TW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 3, 7, 5, 5, 4, 7]
								}
							]
						},
						options: {
							chart: {
								type: 'area',
								height: '100%',
								sparkline: {
									enabled: true
								}
							},
							stroke: { width: 2 },
							grid: {
								padding: {
									top: 10,
									right: 0,
									bottom: 10,
									left: 0
								}
							},
							fill: {
								type: 'solid',
								opacity: 0.7
							},
							tooltip: {
								followCursor: true,
								theme       : 'dark',
								fixed: {
									enabled: false,
									position: 'topRight',
									offsetX: 0,
									offsetY: 0,
								},
							},
							xaxis: {
								categories: [
									'2شنبه',
									'3شنبه',
									'4شنبه',
									'5شنبه',
									'جمعه',
									'شنبه',
									'1شنبه'
								]
							}
						}
					}
				},
				fixed: {
					name: 'حل شده',
					count: {
						'2W': 21,
						LW: 17,
						TW: 14
					},
					chart: {
						'2W': {
							series: [
								{
									name: 'ایجاد شده',
									data: [5, 7, 8, 8, 6, 4, 1]
								}
							]
						},
						LW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [6, 5, 4, 5, 7, 4, 7]
								}
							]
						},
						TW: {
							series: [
								{
									name: 'ایجاد شده',
									data: [5, 7, 4, 6, 5, 3, 2]
								}
							]
						},
						options: {
							chart: {
								type: 'area',
								height: '100%',
								sparkline: {
									enabled: true
								}
							},
							stroke: { width: 2 },
							grid: {
								padding: {
									top: 10,
									right: 0,
									bottom: 10,
									left: 0
								}
							},
							fill: {
								type: 'solid',
								opacity: 0.7
							},
							tooltip: {
								followCursor: true,
								theme       : 'dark',
								fixed: {
									enabled: false,
									position: 'topRight',
									offsetX: 0,
									offsetY: 0,
								},
							},
							xaxis: {
								categories: [
									'2شنبه',
									'3شنبه',
									'4شنبه',
									'5شنبه',
									'جمعه',
									'شنبه',
									'1شنبه'
								]
							}
						}
					}
				}
			}
		},
		{
			id: 'widget6',
			title: 'توزیع تسک ها',
			ranges: {
				TW: 'این هفته',
				LW: 'هفته گذشته',
				'2W': '2 هفته قبل'
			},
			currentRange: 'TW',
			mainChart: {
				series: {
					TW: [15, 20, 38, 27],
					LW: [19, 16, 42, 23],
					'2W': [18, 17, 40, 25]
				},
				options: {
					series: [76, 67, 61],
					chart: {
						height: '100%',
						type: 'polarArea'
					},
					stroke: {
						width: 1,
						colors: undefined
					},
					fill: {
						type: 'solid',
						opacity: 0.7
					},
					legend: {
						position: 'bottom'
					},
					theme: {
						monochrome: {
							enabled: true,
							shadeTo: 'light',
							shadeIntensity: 0.65
						}
					},
					labels: ['Frontend', 'Backend', 'API', 'Issues']
				}
			},
			footerLeft: {
				title: 'تسک اضافه شده',
				count: {
					'2W': 487,
					LW: 526,
					TW: 594
				}
			},
			footerRight: {
				title: 'تسک کامل شده',
				count: {
					'2W': 193,
					LW: 260,
					TW: 287
				}
			}
		},
		{
			id: 'widget7',
			title: 'زمان بندی',
			currentRange: 'T',
			ranges: {
				T: 'امروز',
				TM: 'فردا'
			},
			schedule: {
				T: [
					{
						id: 1,
						title: 'جلسه گروهی',
						time: 'در 32 دقیقه'
					},
					{
						id: 2,
						title: 'زمان استراحت برای نوشیدن قهوه',
						time: '10:30 قبل از ظهر'
					},
					{
						id: 3,
						title: 'پابلیش نسخه بتا',
						time: '11:00 قبل از ظهر'
					},
					{
						id: 4,
						title: 'نهار',
						time: '12:10 بعد از ظهر'
					},
					{
						id: 5,
						title: 'جلسه اسپرینت',
						time: '17:30 بعد از ظهر'
					},
					{
						id: 6,
						title: "ارائه عمومی نرم افزار",
						time: '19:30 بعد از ظهر'
					},
					{
						id: 7,
						title: "ایجاد بوم کسب و کار",
						time: '21:30 بعد از ظهر'
					}
				],
				TM: [
					{
						id: 1,
						title: 'جلسه بازاریابی',
						time: '09:00 ثبل از ظهر'
					},
					{
						id: 2,
						title: 'لندینگ مارکتینگ',
						time: '11:00 ثبل از ظهر'
					},
					{
						id: 3,
						title: 'نهار',
						time: '12:10 بعد از ظهر'
					},
					{
						id: 4,
						title: 'اصلاح گرافیک صفحه دشبرد',
						time: '15:00 ثبل از ظهر'
					},
					{
						id: 5,
						title: 'لایو استیریم',
						time: '17:30 بعد از ظهر'
					},
					{
						id: 6,
						title: 'ریلیز نسخه اولیه',
						time: '19:30 بعد از ظهر'
					},
					{
						id: 7,
						title: "مهمانی مدیران",
						time: '22:30 بعد از ظهر'
					}
				]
			}
		},
		{
			id: 'widget8',
			title: 'توزیع بودجه',
			mainChart: {
				series: [12, 17, 28, 25, 15],
				options: {
					chart: {
						height: '100%',
						type: 'pie'
					},
					stroke: {
						width: 1,
						colors: undefined
					},
					fill: {
						opacity: 1
					},
					legend: {
						position: 'bottom'
					},
					theme: {
						monochrome: {
							enabled: true,
							shadeTo: 'light',
							shadeIntensity: 0.65
						}
					},
					labels: ['طراحی', 'گرافیک', 'کدنویسی', 'مارکتینگ', 'سایر']
				}
			}
		},
		{
			id: 'widget9',
			title: 'هزینه ها',
			ranges: {
				TW: 'این هفته',
				LW: 'هفته گذشته',
				'2W': '2 هفته قبل'
			},
			currentRange: 'TW',
			weeklySpent: {
				title: 'هزینه هفتگی',
				count: {
					'2W': '2,682.85',
					LW: '1,445.34',
					TW: '3,630.15'
				},
				chart: {
					'2W': {
						series: [
							{
								name: 'ایجاد شده',
								data: [2, 6, 5, 4, 5, 3, 6]
							}
						]
					},
					LW: {
						series: [
							{
								name: 'ایجاد شده',
								data: [4, 6, 2, 2, 1, 3, 4]
							}
						]
					},
					TW: {
						series: [
							{
								name: 'ایجاد شده',
								data: [2, 6, 5, 4, 5, 3, 6]
							}
						]
					},
					options: {
						chart: {
							type: 'area',
							height: '100%',
							sparkline: {
								enabled: true
							}
						},
						stroke: { width: 2 },
						grid: {
							padding: {
								top: 10,
								right: 0,
								bottom: 10,
								left: 0
							}
						},
						fill: {
							type: 'solid',
							opacity: 0.7
						},
						tooltip: {
							followCursor: true,
							theme       : 'dark',
							fixed: {
								enabled: false,
								position: 'topRight',
								offsetX: 0,
								offsetY: 0,
							},
						},
						xaxis: {
							categories: ['2شنبه', '3شنبه', '4شنبه', '5شنبه', 'جمعه', 'شنبه', '1شنبه']
						}
					}
				}
			},
			totalSpent: {
				title: 'تمام هزینه ها',
				count: {
					'2W': '29,682.85',
					LW: '31,128.19',
					TW: '34,758.34'
				},
				chart: {
					'2W': {
						series: [
							{
								name: 'ایجاد شده',
								data: [3, 2, 2, 4, 7, 7, 4]
							}
						]
					},
					LW: {
						series: [
							{
								name: 'ایجاد شده',
								data: [5, 7, 8, 8, 6, 4, 1]
							}
						]
					},
					TW: {
						series: [
							{
								name: 'ایجاد شده',
								data: [6, 4, 7, 5, 5, 4, 7]
							}
						]
					},
					options: {
						chart: {
							type: 'area',
							height: '100%',
							sparkline: {
								enabled: true
							}
						},
						stroke: { width: 2 },
						grid: {
							padding: {
								top: 10,
								right: 0,
								bottom: 10,
								left: 0
							}
						},
						fill: {
							type: 'solid',
							opacity: 0.7
						},
						tooltip: {
							followCursor: true,
							theme       : 'dark',
							fixed: {
								enabled: false,
								position: 'topRight',
								offsetX: 0,
								offsetY: 0,
							},
						},
						xaxis: {
							categories: ['2شنبه', '3شنبه', '4شنبه', '5شنبه', 'جمعه', 'شنبه', '1شنبه']
						}
					}
				}
			},
			remaining: {
				title: 'مانده',
				count: {
					'2W': '94.317,15',
					LW: '92.871,81',
					TW: '89.241,66'
				},
				chart: {
					'2W': {
						series: [
							{
								name: 'ایجاد شده',
								data: [1, 4, 5, 7, 8, 2, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						]
					},
					LW: {
						series: [
							{
								name: 'ایجاد شده',
								data: [3, 2, 1, 4, 8, 8, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						]
					},
					TW: {
						series: [
							{
								name: 'ایجاد شده',
								data: [2, 4, 8, 6, 2, 5, 1],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						]
					},
					options: {
						chart: {
							type: 'area',
							height: '100%',
							sparkline: {
								enabled: true
							}
						},
						stroke: { width: 2 },
						grid: {
							padding: {
								top: 10,
								right: 0,
								bottom: 10,
								left: 0
							}
						},
						fill: {
							type: 'solid',
							opacity: 0.7
						},
						tooltip: {
							followCursor: true,
							theme       : 'dark',
							fixed: {
								enabled: false,
								position: 'topRight',
								offsetX: 0,
								offsetY: 0,
							},
						},
						xaxis: {
							categories: ['2شنبه', '3شنبه', '4شنبه', '5شنبه', 'جمعه', 'شنبه', '1شنبه']
						}
					}
				}
			},
			totalBudget: {
				title: 'کل هزینه ها',
				count: '124.000,00'
			}
		},
		{
			id: 'widget10',
			title: 'جزئیات هزینه ها',
			table: {
				columns: [
					{
						id: 'budget_type',
						title: 'نوع هزینه'
					},
					{
						id: 'total_budget',
						title: 'جنع هزینه ها'
					},
					{
						id: 'spent_usd',
						title: 'خرج شده ($)'
					},
					{
						id: 'spent_perc',
						title: 'خرج شده (%)'
					},
					{
						id: 'remaining_usd',
						title: 'مانده ($)'
					},
					{
						id: 'remaining_perc',
						title: 'مانده (%)'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'budget_type',
								value: 'طرحی',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$14,880.00',
								classes: 'font-semibold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$14,000.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%94.08',
								classes: 'text-green',
								icon: 'trending_up'
							},
							{
								id: 'remaining_usd',
								value: '$880.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%5.92',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'budget_type',
								value: 'گرافیک',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$21,080.00',
								classes: 'font-semibold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$17,240.34',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%81.78',
								classes: 'text-green',
								icon: 'trending_up'
							},
							{
								id: 'remaining_usd',
								value: '$3,839.66',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%18.22',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'budget_type',
								value: 'کدنویسی',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-semibold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$3,518.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%10.13',
								classes: 'text-red',
								icon: 'trending_down'
							},
							{
								id: 'remaining_usd',
								value: '$31,202.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%89.87',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'budget_type',
								value: 'مارکتینگ',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-semibold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%0.00',
								classes: 'text-blue',
								icon: 'trending_flat'
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%100.00',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'budget_type',
								value: 'سایر',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$18,600.00',
								classes: 'font-semibold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%0.00',
								classes: 'text-blue',
								icon: 'trending_flat'
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%100.00',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		{
			id: 'widget11',
			title: 'اعضای تیم',
			table: {
				columns: [
					{
						id: 'avatar',
						title: ''
					},
					{
						id: 'name',
						title: 'نام'
					},
					{
						id: 'position',
						title: 'موقعیت'
					},
					{
						id: 'office',
						title: 'دفتر'
					},
					{
						id: 'email',
						title: 'پست الکترونیک'
					},
					{
						id: 'phone',
						title: 'تلفن همراه'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/james.jpg'
							},
							{
								id: 'name',
								value: 'مهراد نجفی'
							},
							{
								id: 'position',
								value: 'مدیر گرافیک'
							},
							{
								id: 'office',
								value: 'دفتر مرکزی'
							},
							{
								id: 'email',
								value: 'jgilbert48@mail.com'
							},
							{
								id: 'phone',
								value: '09123337777'
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/katherine.jpg'
							},
							{
								id: 'name',
								value: 'فرناز مهرجویی'
							},
							{
								id: 'position',
								value: 'کارشناس بازاریابی'
							},
							{
								id: 'office',
								value: 'نوین پارس'
							},
							{
								id: 'email',
								value: 'kanderson49@mail.com.br'
							},
							{
								id: 'phone',
								value: '09128887777'
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/garry.jpg'
							},
							{
								id: 'name',
								value: 'محمدرضا سالاری'
							},
							{
								id: 'position',
								value: 'گفتار درمانگر'
							},
							{
								id: 'office',
								value: 'دفتر مرکزی'
							},
							{
								id: 'email',
								value: 'ggonzalez4r@mail.cc'
							},
							{
								id: 'phone',
								value: '09125535236'
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/andrew.jpg'
							},
							{
								id: 'name',
								value: 'محمد نعمت پور'
							},
							{
								id: 'position',
								value: 'مدیر استخدام'
							},
							{
								id: 'office',
								value: 'دفتر اصفهان'
							},
							{
								id: 'email',
								value: 'mturner4a@mail.com'
							},
							{
								id: 'phone',
								value: '0913887722'
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/jane.jpg'
							},
							{
								id: 'name',
								value: 'شادی تابعی'
							},
							{
								id: 'position',
								value: 'مدیر فروش'
							},
							{
								id: 'office',
								value: 'دفتر رشت'
							},
							{
								id: 'email',
								value: 'kmartinez4b@mail.com'
							},
							{
								id: 'phone',
								value: '09120009943'
							}
						]
					},
					{
						id: 6,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/alice.jpg'
							},
							{
								id: 'name',
								value: 'سپیده رئیسی'
							},
							{
								id: 'position',
								value: 'اسکرام مستر'
							},
							{
								id: 'office',
								value: 'دفتر کانادا'
							},
							{
								id: 'email',
								value: 'agonzales4c@mail.edu'
							},
							{
								id: 'phone',
								value: '09126690003'
							}
						]
					},
					{
						id: 7,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/vincent.jpg'
							},
							{
								id: 'name',
								value: 'علی زمانی'
							},
							{
								id: 'position',
								value: 'منابع انسانی'
							},
							{
								id: 'office',
								value: 'دفتر مرکزی'
							},
							{
								id: 'email',
								value: 'hking4d@mail.gov'
							},
							{
								id: 'phone',
								value: '09120033374'
							}
						]
					},
					{
						id: 8,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/joyce.jpg'
							},
							{
								id: 'name',
								value: 'آتنا احمدآبادی'
							},
							{
								id: 'position',
								value: 'مهندس برق'
							},
							{
								id: 'office',
								value: 'دفتر مرکزی'
							},
							{
								id: 'email',
								value: 'edixon4e@mail.gov'
							},
							{
								id: 'phone',
								value: '09121530009'
							}
						]
					},
					{
						id: 9,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/danielle.jpg'
							},
							{
								id: 'name',
								value: 'فائزه رنجبر'
							},
							{
								id: 'position',
								value: 'مدیر تولید'
							},
							{
								id: 'office',
								value: 'دفتر مرکزی'
							},
							{
								id: 'email',
								value: 'dmorris4f@mail.com'
							},
							{
								id: 'phone',
								value: '09128883300'
							}
						]
					},
					{
						id: 10,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/carl.jpg'
							},
							{
								id: 'name',
								value: 'علیرضا معتمد'
							},
							{
								id: 'position',
								value: 'کنترل کیفی'
							},
							{
								id: 'office',
								value: 'دفتر سعادت آباد'
							},
							{
								id: 'email',
								value: 'mgonzales4g@mail.com'
							},
							{
								id: 'phone',
								value: '091288800001'
							}
						]
					},
					{
						id: 11,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/profile.jpg'
							},
							{
								id: 'name',
								value: 'منیره خداداد'
							},
							{
								id: 'position',
								value: 'تحلیلگر نرم افزار'
							},
							{
								id: 'office',
								value: 'دفتر مرکزی'
							},
							{
								id: 'email',
								value: 'crogers4h@mail.com'
							},
							{
								id: 'phone',
								value: '09129900812'
							}
						]
					},
					{
						id: 12,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/garry.jpg'
							},
							{
								id: 'name',
								value: 'مجید عبراللهی'
							},
							{
								id: 'position',
								value: 'پاسخگویی'
							},
							{
								id: 'office',
								value: 'دفتر رشت'
							},
							{
								id: 'email',
								value: 'rgrant4i@mail.pl'
							},
							{
								id: 'phone',
								value: '09123313026'
							}
						]
					},
					{
						id: 13,
						cells: [
							{
								id: 'avatar',
								value: 'assets/images/avatars/james.jpg'
							},
							{
								id: 'name',
								value: 'کیوان موسوی'
							},
							{
								id: 'position',
								value: 'مدیر تدارکات'
							},
							{
								id: 'office',
								value: 'دفتر سعادت آباد'
							},
							{
								id: 'email',
								value: 'pgutierrez4j@mail.net'
							},
							{
								id: 'phone',
								value: '09125509080'
							}
						]
					},
				]
			}
		},
		{
			id: 'weatherWidget',
			locations: {
				NewYork: {
					name: 'ایران، تهران',
					icon: 'rainy2',
					temp: {
						C: '22',
						F: '72'
					},
					windSpeed: {
						KMH: 12,
						MPH: 7.5
					},
					windDirection: 'NW',
					rainProbability: '98%',
					next5Days: [
						{
							name: '1شنبه',
							icon: 'rainy',
							temp: {
								C: '21',
								F: '70'
							}
						},
						{
							name: '2شنبه',
							icon: 'cloudy',
							temp: {
								C: '19',
								F: '66'
							}
						},
						{
							name: '3شنبه',
							icon: 'windy3',
							temp: {
								C: '24',
								F: '75'
							}
						},
						{
							name: '4شنبه',
							icon: 'rainy',
							temp: {
								C: '21',
								F: '70'
							}
						},
						{
							name: '5شنبه',
							icon: 'rainy2',
							temp: {
								C: '24',
								F: '75'
							}
						}
					]
				}
			},
			currentLocation: 'NewYork',
			tempUnit: 'C',
			speedUnit: 'KMH'
		}
	],
	projects: [
		{
			id: 1,
			name: 'پروژه سازمان Backend App'
		},
		{
			id: 2,
			name: 'پروژه معماری Frontend App'
		},
		{
			id: 3,
			name: 'پروژه نوبت دهی انلاین'
		},
		{
			id: 4,
			name: 'پروژه پینترست'
		}
	]
};

mock.onGet('/api/project-dashboard-app/widgets').reply(config => {
	return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply(config => {
	return [200, projectDashboardAppDB.projects];
});
