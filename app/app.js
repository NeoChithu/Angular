var myResume = angular.module('resumeApp', ['ngRoute']);


myResume.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

myResume.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })

        .when('/about', {
            templateUrl: 'about.html'
            // controller: 'aboutController'
        })

        .otherwise({ redirectTo: '/' });

}]);

myResume.controller('aboutController', ['$scope', function ($scope) {
    // Bind "message" to display to html pages
    $scope.message = 'This is Food page.';

}]);

myResume.controller('contactController', ['$scope', function ($scope) {

    $scope.contactForm = function () {
        console.log($scope.contact.name)

        var name = $scope.contact.name;
        // Reseting Empty values to the Form
        $scope.contact.name = $scope.contact.email = $scope.contact.reason = '';

        // For Resetting the Form after Submission
        $scope.contactME.$setPristine();
        $scope.contactME.$setUntouched();
        $scope.contactME.$submitted = false;
        alert("Thank you" + name);
    };

}]);


myResume.controller('mainController', ['$scope', '$http', function ($scope, $http) {

    $scope.message = 'Hello i am working';
    $scope.names = ["Emil", "Tobias", "Linus"];
    $scope.displayData = true;
    // old method < 1.6
    // $http.get('app/content/data/data.json').success(function(data) {
    //     console.log(data);
    //   });
    // New Method > 1.6
    $http.get('app/content/data/test_data.json').
        then(function onSuccess(response) {
            $scope.myArrayData = response['data']
        }).
        catch(function onError(response) {
            console.log(response);
        });


    // $scope.myArrayData = [
    //     {
    //         name: 'Chitambaram',
    //         lName: 'Ponraj',
    //         description: 'Graduate student majoring in electrical engineering. Professional field: Image Processing and Computer Science. Out-going person and be expert in leadership. ',
    //         skills: ['HTML', 'CSS', 'PHP'],
    //         socialLink: [
    //             {
    //                 facebook: true,
    //                 link: 'https://www.facebook.com/chitambaram.ponraj'
    //             },
    //             {
    //                 twitter: true,
    //                 link: 'https://twitter.com/chitambaram2'
    //             },
    //             {
    //                 linkedIn: true,
    //                 link: 'https://linkedin.com/in/chitambaram-p-021ab594'
    //             }
    //         ],
    //         education: [
    //             {
    //                 course: 'Bachelor of Electrical Engineering',
    //                 year: '2012 - 2016'

    //             },
    //             {
    //                 course: 'Master of Electrical Engineering',
    //                 year: '2016 - Now'
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Test account',
    //         lName: 'Test Last',
    //         description: 'I am a computer engineering student from Cairo, Egypt, I love Programming, Developing, and Problem Solving. I am passionate about startups and entrepreneurship so I dream to start my own company from scratch, I love adventures & taking risks so every second I search for a new thing to do which will help me open up for new opportunities as well as teach me new ideas about life. I am searching for an internship which will help me increase my technical knowledge as well as develop my soft skills. To help me become a high-quality graduate in the market, give me experience looking for jobs, and help me become a future entrepreneur.',
    //         skills: ['HTML', 'CSS', 'PHP', 'MySQL'],
    //         socialLink: [
    //             {
    //                 facebook: true,
    //                 link: ''
    //             },
    //             {
    //                 twitter: true,
    //                 link: ''
    //             }
    //         ],
    //         education: [
    //             {
    //                 course: 'Bachelor of Electrical Engineering',
    //                 year: '2012 - 2016'

    //             },
    //             {
    //                 course: 'Master of Electrical Engineering',
    //                 year: '2016 - Now'
    //             }
    //         ]
    //     }
    // ];
    // Convert to json
    // console.log(angular.toJson($scope.myArrayData));

}]);