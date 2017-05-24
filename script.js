var app = angular.module('kiddo', []);
app.controller('adult', function($scope) {

  var classes = ['color', 'font', 'bold']
  var single = ['cat', 'dog', 'poop', 'butts', 'car']
  var phrase = ['Did you fart?', 'I want ice cream.', 'No, i want mommy!', 'Im gonna tell.']

  $scope.words = [];
    $scope.addWord = function() {
      var i = Math.floor(Math.random()*single.length);
      $scope.words.push({text: single[i]})
        console.log($scope.words)
    };

      $scope.addStyle = function() {
        var i = Math.floor(Math.random()*single.length);
        var x = Math.floor(Math.random()*classes.length)
        $scope.words.push({text: single[i], cls: classes[x]})
          console.log($scope.words)
      };

      $scope.addPhrase = function() {
        var i = Math.floor(Math.random()*phrase.length);
        $scope.words.push({text: phrase[i]})
          console.log($scope.words)
      };

      $scope.addStyle2 = function() {
        var i = Math.floor(Math.random()*phrase.length);
        var x = Math.floor(Math.random()*classes.length)
        $scope.words.push({text: phrase[i], cls: classes[x]})
          console.log($scope.words)
      };

});
