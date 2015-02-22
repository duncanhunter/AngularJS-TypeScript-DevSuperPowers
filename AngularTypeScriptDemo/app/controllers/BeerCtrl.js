(function() {

    angular.module('app').controller('BeerCtrl', BeerCtrl);

    BeerCtrl.$inject = ['$scope', '$http'];
    function BeerCtrl($scope, $http) {

        $scope.Beers = [];
        $scope.states = {
            showBeerForm: false
        };

        $scope.new = {
            Beer: {}
        }

        $scope.showBeerForm = function(display) {
            $scope.states = {
                showBeerForm: display
            };
        }

        $http.get('Beers/IndexVM').success(function(data) {
            $scope.Beers = data;
        });

        $scope.addBeer = function(beer) {
            $http.post('Beers/Create', $scope.new.Beer).success(function(data) {
                $scope.Beers.push(data);
                $scope.showBeerForm(false);
                $scope.new.Beer = {};
            });
        }

    };

})();