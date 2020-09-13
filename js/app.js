//						                 //
// - - - - - Notification Bell - - - - - //
// 							             //

const alertCircle = document.getElementById('alert-circle');
const notification = document.getElementById('notification');
const notificationContainer = document.getElementById('modalContainer');
const notificationContent = document.querySelectorAll('.modalContent');
const notificationBox = document.getElementById('modal');
const closeButton = document.getElementsByClassName('closeModal');

notification.addEventListener('click', () => {
	if (notificationBox.classList.contains('closed')) {
		notificationBox.classList.remove('closed');
	}
	else if (notificationBox.classList.contains('closed') !== 1) {
		notificationBox.classList.add('closed');
	}
});

for (let i = 0; i < closeButton.length; i++) {
	closeButton[i].addEventListener('click', (e) => {
		notificationContent[i].remove();
		if (notificationContainer.children.length < 1) {
			alertCircle.style.display = 'none';
		}
	});
}

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

// - - - - - - - - - - - - - - - - - - - - Charts - - - - - - - - - - - - - - - - - - - - //

//						       //
// - - - - - Traffic - - - - - //
// 							   //

//							      //
// - - - - - Line Chart - - - - - //
// 							      //

let trafficChart = document.getElementById('trafficChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'darkgray';
const chartDisplay = document.getElementsByClassName('traffic-nav-link');

let data = {};
let hourly = {
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
};
let daily = {
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
};
let weekly = {
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
};
let monthly = {
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
};
let trafficChartDisplay = new Chart(trafficChart, {
	type    : 'line',
	data    : hourly,
	options : {
		legend : false,
		title  : {
			display : true,
			text    : 'Hourly Traffic'
		},
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

chartDisplay[0].addEventListener('click', (e) => {
	let trafficChartDisplay = new Chart(trafficChart, {
		type    : 'line',
		data    : hourly,
		options : {
			legend : false,
			title  : {
				display : true,
				text    : 'Hourly Traffic'
			},
			scales : {
				yAxes : [
					{
						display   : true,
						gridLines : {
							color : 'lightgray'
						},
						ticks     : {
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
});

chartDisplay[1].addEventListener('click', (e) => {
	let trafficChartDisplay = new Chart(trafficChart, {
		type    : 'line',
		data    : daily,
		options : {
			legend : false,
			title  : {
				display : true,
				text    : 'Daily Traffic'
			},
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
});

chartDisplay[2].addEventListener('click', (e) => {
	let trafficChartDisplay = new Chart(trafficChart, {
		type    : 'line',
		data    : weekly,
		options : {
			legend : false,
			title  : {
				display : true,
				text    : 'Weekly Traffic'
			},
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
});

chartDisplay[3].addEventListener('click', (e) => {
	let trafficChartDisplay = new Chart(trafficChart, {
		type    : 'line',
		data    : monthly,
		options : {
			legend : false,
			title  : {
				display : true,
				text    : 'Monthly Traffic'
			},
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

let mobileChartDisplay = new Chart(mobileChart, {
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
	options : {
		legend : {
			position : 'right'
		}
	}
});

// - - - - - - - - - - - - - - - - - - - - End Charts - - - - - - - - - - - - - - - - - - - - //

// - - - - - - - - - - - - - - - - - - - - Messaging - - - - - - - - - - - - - - - - - - - - //

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
	if (user.value === '' && message.value === '') {
		console.log('working');
		alert('Please fill out both fields before sending');
	}
	else if (user.value === '') {
		alert('Please fill out user search before sending');
	}
	else if (message.value === '') {
		alert('Please fill out message field before sending');
	}
	else {
		alert(`Message sent to ${user.value}`);
	}
});

// - - - - - - - - - - - - - - - - - - - - Settings Storage - - - - - - - - - - - - - - - - - - - - //

const email = document.getElementById('emailToggle');
const profile = document.getElementById('profileToggle');
const timezone = document.getElementById('timezone');
const saveButton = document.getElementById('saveButton');
const resetButton = document.getElementById('resetButton');

function store () {
	localStorage.setItem('emailChecked', email.checked);
	localStorage.setItem('profileChecked', profile.checked);
	localStorage.setItem('timezone', timezone.value);
}

function reset () {
	window.localStorage.clear();
}

function load () {
	if (localStorage.emailChecked === 'true') {
		email.checked = true;
	}
	if (localStorage.profileChecked === 'true') {
		profile.checked = true;
	}
	if (localStorage.timezone) {
		timezone.value = localStorage.timezone;
	}
}

saveButton.addEventListener('click', () => {
	store();
	load();
	window.location.reload();
});

resetButton.addEventListener('click', () => {
	reset();
	load();
	window.location.reload();
});
