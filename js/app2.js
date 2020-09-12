.notifications-container {
	z-index: 2;
	margin: 0;

	.notification-messages {
		padding: 0;
		margin: 0;
		list-style-type: none;

		#messages {
			text-align: right;
			#notification {
				display: inline-block;
			}

			#notificationList {
				display: none;
				width: 100%;
				list-style-type: none;
				padding: 0;
			}

			&:hover {
				#notificationList {
					background-color: dodgerblue;
					@include grid-layout(auto, 200px);
					margin: 0;

					li {
						width: 100%;
						p {
							display: block;
						}
					}
				}
			}
		}
	}
}