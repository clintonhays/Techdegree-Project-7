// - - - - - - - - - - - - - - - - - - - - Charts - - - - - - - - - - - - - - - - - - - - //

//							      //
// - - - - - Line Chart - - - - - //
// 							      //

let trafficChart = document.getElementById('trafficChart').getContext('2d');

Chart.defaults.global.defaultFontColor = 'darkgray';

const chartDisplay = document.getElementById('traffic-nav-link');

chartDisplay.addEventListener('click', (e) => {
	const target = e.target;

	let hourlyTrafficChart = new Chart(trafficChart, {
		type    : 'line',
		data    : {
			labels   : [
				'01-04',
				'05-08',
				'09-12',
				'13-16',
				'17-20',
				'21-24'
			],
			datasets : [
				{
					data            : [
						50,
						100,
						200,
						600,
						900,
						175
					],
					backgroundColor : 'rgba(33, 182, 168, 0.2)',
					borderColor     : 'rgb(33, 182, 168)'
				}
			]
		},
		options : {
			legend : false,
			scales : {
				yAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						},
						ticks     : {
							suggestedMin  : 0,
							suggestedMax  : 1000,
							maxTicksLimit : 6
						}
					}
				],
				xAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						}
					}
				]
			}
		}
	});

	let dailyTrafficChart = new Chart(trafficChart, {
		type    : 'line',
		data    : {
			labels   : [
				'Mon',
				'Tue',
				'Wed',
				'Thu',
				'Fri',
				'Sat'
			],
			datasets : [
				{
					data            : [
						1200,
						1050,
						1250,
						1800,
						1600,
						1200,
						1000
					],
					backgroundColor : 'rgba(33, 182, 168, 0.2)',
					borderColor     : 'rgb(33, 182, 168)'
				}
			]
		},
		options : {
			legend : false,
			scales : {
				yAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						},
						ticks     : {
							suggestedMin  : 0,
							suggestedMax  : 200,
							maxTicksLimit : 6
						}
					}
				],
				xAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						}
					}
				]
			}
		}
	});

	let weeklyTrafficChart = new Chart(trafficChart, {
		type    : 'line',
		data    : {
			labels   : [
				'09/01-09/07',
				'09/08-09/014',
				'09/15-09/021',
				'09/22-09/28'
			],
			datasets : [
				{
					data            : [
						7000,
						6700,
						8200,
						9000
					],
					backgroundColor : 'rgba(33, 182, 168, 0.2)',
					borderColor     : 'rgb(33, 182, 168)'
				}
			]
		},
		options : {
			legend : false,
			scales : {
				yAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						},
						ticks     : {
							suggestedMin  : 0,
							suggestedMax  : 10000,
							maxTicksLimit : 6
						}
					}
				],
				xAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						}
					}
				]
			}
		}
	});

	let monthlyTrafficChart = new Chart(trafficChart, {
		type    : 'line',
		data    : {
			labels   : [
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			],
			datasets : [
				{
					data            : [
						31000,
						30000,
						28000,
						32000,
						54000,
						48000
					],
					backgroundColor : 'rgba(33, 182, 168, 0.2)',
					borderColor     : 'rgb(33, 182, 168)'
				}
			]
		},
		options : {
			legend : false,
			scales : {
				yAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						},
						ticks     : {
							suggestedMin  : 0,
							suggestedMax  : 10000,
							maxTicksLimit : 8
						}
					}
				],
				xAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						}
					}
				]
			}
		}
	});

	if (target.classList.contains('hourly')) {
		return hourlyTrafficChart;
	}
	else if (target.classList.contains('daily')) {
		return dailyTrafficChart;
	}
	else if (target.classList.contains('weekly')) {
		return weeklyTrafficChart;
	}
	else {
		return monthlyTrafficChart;
	}
});

//							     //
// - - - - - Bar Chart - - - - - //
// 							     //

let dailyUserTrafficChart = document.getElementById('dailyUserChart').getContext('2d');

let dailyUsers = new Chart(dailyUserTrafficChart, {
	type    : 'bar',
	data    : {
		labels   : [
			'Mon',
			'Tue',
			'Wed',
			'Thu',
			'Fri',
			'Sat'
		],
		datasets : [
			{
				data                 : [
					1200,
					1050,
					1250,
					1800,
					1600,
					1200,
					1000
				],
				backgroundColor      : [
					'#18A558',
					'#A3EBB1',
					'#21B6A8',
					'#116530',
					'#1C9B8E',
					'#53DFD1'
				],
				hoverBorderWidth     : 2,
				hoverBorderColor     : [
					'#007225',
					'#3D854B',
					'#008375',
					'#008375',
					'#008375',
					'#20AC9E'
				],
				hoverBackgroundColor : [
					'#4BD88B',
					'#D6FFE4',
					'#54E9DB',
					'#449863',
					'#4FCEC1',
					'#B9FFFF'
				]
			}
		]
	},
	options : {
		legend : false,
		scales : {
			yAxes : [
				{
					display   : true,
					gridLines : {
						color : 'lightgray'
					},
					ticks     : {
						suggestedMin  : 0,
						suggestedMax  : 200,
						maxTicksLimit : 6
					}
				}
			],
			xAxes : [
				{
					display   : true,
					gridLines : {
						color : 'lightgray'
					}
				}
			]
		}
	}
});

//							          //
// - - - - - Doughnut Chart - - - - - //
// 							          //

let mobileChart = document.getElementById('mobileChart').getContext('2d');

let massPopChart3 = new Chart(mobileChart, {
	type    : 'doughnut',
	data    : {
		labels   : [
			'Facebook',
			'Pintrest',
			'Twitter',
			'Youtube',
			'Instagram',
			'reddit'
		],
		datasets : [
			{
				label                : 'Social Media Traffic',
				data                 : [
					67.0,
					19,
					9.5,
					2,
					1,
					1
				],
				backgroundColor      : [
					'#18A558',
					'#A3EBB1',
					'#21B6A8',
					'#116530',
					'#1C9B8E',
					'#53DFD1'
				],
				hoverBorderWidth     : 2,
				hoverBorderColor     : [
					'#007225',
					'#3D854B',
					'#008375',
					'#008375',
					'#008375',
					'#20AC9E'
				],
				hoverBackgroundColor : [
					'#4BD88B',
					'#D6FFE4',
					'#54E9DB',
					'#449863',
					'#4FCEC1',
					'#B9FFFF'
				]
			}
		]
	},
	options : {}
});

// - - - - - - - - - - - - - - - - - - - - End Charts - - - - - - - - - - - - - - - - - - - - //

//						                 //
// - - - - - Notification Bell - - - - - //
// 							             //

const notificationBell = document.getElementById('notification');
const notificationList = document.getElementById('notificationList');

notificationBell.style.fill = 'red';

notificationList.innerHTML = `
<li><p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
<p class="alert-banner-close">x</p></li>
`;

//						            //
// - - - - - Alert Banner - - - - - //
// 							        //

const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>

`;

alertBanner.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('alert-banner-close')) {
		alertBanner.style.display = 'none';
	}
});

//						       //
// - - - - - Traffic - - - - - //
// 							   //
