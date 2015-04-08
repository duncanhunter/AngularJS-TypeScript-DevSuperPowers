/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        ;
        var Beer = (function () {
            function Beer() {
            }
            return Beer;
        })();
        services.Beer = Beer;
        var BeerService = (function () {
            function BeerService($http) {
                this.$http = $http;
            }
            BeerService.prototype.getBeers = function () {
                return this.$http.get('/api/beersapi').then(function (response) {
                    return response.data;
                });
            };
            BeerService.prototype.addBeer = function (beer) {
                return this.$http.post('api/beersapi', beer).then(function (response) {
                    return response.data;
                });
            };
            BeerService.$inject = ['$http'];
            return BeerService;
        })();
        factory.$inject = ['$http'];
        function factory($http) {
            return new BeerService($http);
        }
        angular.module('app').factory('app.services.BeerService', factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=beers.service.js.map