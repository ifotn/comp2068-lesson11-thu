/**
 * Created by RFreeman on 11/24/2016.
 */
// create the angular app and controller
angular.module('GameApp', [])
    .controller('GameController', function($scope) {

        // initialize an empty games array
        $scope.games = [];

        // add a new game
        $scope.addGame = function() {
          $scope.games.push($scope.title);

            // debug
            console.log('New Game: ' + $scope.title);
            console.log($scope.games.length);

            // clear the textbox
            $scope.title = '';
        };

        // remove selected game
        $scope.removeGame = function() {
            if (confirm('Are you sure???')) {
                $scope.games.splice(this.$index,1);
            }
        };
    });
