'use strict';
angular.module('confusionApp')
    .controller('MenuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
        $scope.dishes = menuFactory.getDishes();

        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;
        $scope.select = function (setTab) {
            $scope.tab = setTab;
            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } else if (setTab === 3) {
                $scope.filtText = "mains";
            } else if (setTab === 4) {
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }

        };
        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };
        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };

    }])
    .controller('DishDetailController', ['$scope', 'menuFactory', '$stateParams', function ($scope, menuFactory, $stateParams) {
        //        console.log(parseInt($stateParams.id,10));
        console.log($stateParams.id);
        var dish = menuFactory.getDish(parseInt($stateParams.id, 10));
        console.log(dish);
        $scope.dish = dish;
        $scope.comment = {
            rating: 5,
            comment: "",
            author: "",
            date: new Date()
        };

 }])
    .controller('FeedbackCommentController', ['$scope', function ($scope) {
        $scope.comment = {
            rating: 5,
            comment: "",
            author: "",
            date: new Date()
        };


        $scope.submitComment = function () {
            $scope.dish.comments.push($scope.comment);


            $scope.comment = {
                rating: 5,


                date: new Date()
            };
            $scope.feedback.$setPristine();

        };
}])

.controller('ContactController', ['$scope', function ($scope) {
        $scope.feedback = {
            mychannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: ""
        };
        var channels = [{
            value: "tel",
            label: "Tel."
        }, {
            value: "Email",
            label: "Email"
        }];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
}])
    .controller('FeedbackController', ['$scope', function ($scope) {
        $scope.sendFeedback = function () {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel === "") && !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            } else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {
                    mychannel: "",
                    firstName: "",
                    lastName: "",
                    agree: false,
                    email: ""
                };
                $scope.feedback.mychannel = "";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
        }])
    .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', 'promotionService', function ($scope, menuFactory, corporateFactory, promotionService) {
        //            console.log(`${corporateFactory.getLeader(1)}`);
        //            console.log(corporateFactory.getLeaders());
        $scope.dish = menuFactory.getDish(Math.floor(Math.random() * (4)));
       
        $scope.promotion = promotionService.getPromotions();
        $scope.executiveChef = corporateFactory.getLeader(Math.floor(Math.random() * (4)));
       

   

}])
    .controller('AboutController', ['$scope', 'menuFactory', 'corporateFactory', function ($scope, menuFactory, corporateFactory) {
         $scope.corporateChefs = corporateFactory.getLeaders();
        console.log( $scope.corporateChefs);
       
    }]);
