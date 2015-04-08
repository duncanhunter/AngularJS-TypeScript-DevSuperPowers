/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module app.beers {
    'use strict';

    import Beer = app.services.Beer;

    interface IBeerScope {
        getBeers(): ng.IPromise<Beer[]>;
        showBeerForm(show: Boolean): void;
        beers: Beer[];
        showBeer: Boolean;
        addBeer(newBeer: Beer): ng.IPromise<Beer>;
        newBeer: Beer;
    }

    class BeersController implements IBeerScope {
        beers: Beer[];
        showBeer: Boolean;
        newBeer: Beer;

        static $inject = ['$http', 'app.services.BeerService'];
        constructor(private $http: ng.IHttpService, public beerService: services.IBeersService) {
            this.showBeer = false;
            this.getBeers();
        }

        showBeerForm(show: Boolean): void {
            this.showBeer = show;
        }

        addBeer(newBeer: Beer): ng.IPromise<Beer> {
            return this.beerService.addBeer(newBeer)
                .then((data: ng.IHttpPromiseCallbackArg<Beer>): any => {
                this.showBeer = false;
                this.newBeer = <any>{};
                this.beers.push(<Beer>data);
            });
        }

        getBeers(): ng.IPromise<Beer[]> {
            return this.beerService.getBeers()
                .then((data: ng.IHttpPromiseCallbackArg<Beer[]>): any => {
                return this.beers = <Beer[]>data;
            });
        }
    }

    angular
        .module('app')
        .controller('app.beers.BeersController', BeersController);

}