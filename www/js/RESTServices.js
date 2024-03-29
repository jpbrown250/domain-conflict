angular.module('RESTConnection', [])
.constant('ENDPOINT_URL', 'https://strongloop-backend-jbrownssf.c9.io/api/')
.service('UserService', ['$http', 'ENDPOINT_URL',
	function($http, ENDPOINT_URL) {
		var service = this,
		path = 'SSFUsers/';
		function getUrl() {
			return ENDPOINT_URL + path;
		}
		service.create = function(user) {
			return $http.post(getUrl(), user);
		};
		service.login = function(user) {
			return $http.post(getUrl() + "login", user);
		};
		service.logout = function(token) {
			return $http({
				url: getUrl()+"logout",
				method: "POST",
				headers: {
					'Authorization': token
				}
			});
		};
	}
])

.service('ServerQuestionService', ['$http', 'ENDPOINT_URL',
	function ($http, ENDPOINT_URL) {
		var service = this,
		path = 'Questions/';
		function getUrl() {
			return ENDPOINT_URL + path;
		}
		service.all = function (token) {
			return $http.get(getUrl(), {
				params: { access_token: token }
			});
		};
	}
]);
