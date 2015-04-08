/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var beers;
    (function (beers) {
        'use strict';
        var BeersController = (function () {
            function BeersController($http, beerService) {
                this.$http = $http;
                this.beerService = beerService;
                this.showBeer = false;
                this.getBeers();
            }
            BeersController.prototype.showBeerForm = function (show) {
                this.showBeer = show;
            };
            BeersController.prototype.addBeer = function (newBeer) {
                var _this = this;
                return this.beerService.addBeer(newBeer).then(function (data) {
                    _this.showBeer = false;
                    _this.newBeer = {};
                    _this.beers.push(data);
                });
            };
            BeersController.prototype.getBeers = function () {
                var _this = this;
                return this.beerService.getBeers().then(function (data) {
                    return _this.beers = data;
                });
            };
            BeersController.$inject = ['$http', 'app.services.BeerService'];
            return BeersController;
        })();
        angular.module('app').controller('app.beers.BeersController', BeersController);
    })(beers = app.beers || (app.beers = {}));
})(app || (app = {}));
//# sourceMappingURL=beer.controller.js.map