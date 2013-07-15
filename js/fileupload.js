var normalize = require('normalized-upload');
var module = window.angular.module('fileupload', []);

module.directive('fileupload', function ($document) {

  return {

    restrict: 'E',
    template: '<div></div>',
    scope: { url: '=', files: '=' },
    link: function ($scope, el, attrs) {

      var drags = 0;

      el.css('display', 'none');

      window.addEventListener('dragenter', function (e) {
        drags += 1;
        el.css('display', 'block');

        e.stopPropagation();
        e.preventDefault();
        return false;
      });

      window.addEventListener('dragleave', function (e) {
        drags -= 1;
        if (drags === 0) {
          el.css('display', 'none');
        }

        e.stopPropagation();
        e.preventDefault();
        return false;
      });

      window.addEventListener('dragover', function (e) {
        if (e.target !== el[0]) {
          e.dataTransfer.effectAllowed = 'none';
          e.dataTransfer.dropEffect = 'none';
        }

        e.stopPropagation();
        e.preventDefault();

        return false;
      });

      el.bind('drop', function (e) {
        drags = 0;

        $scope.files.length = 0;
        normalize(e, function (e) {
          $scope.$apply(function () {
            $scope.files.push.apply($scope.files, e.items);
          });
        });

        el.css('display', 'none');
        e.stopPropagation();
        e.preventDefault();
        return false;
      });

      el.bind('dragenter', function (e) {
        el.css('background', '#F7F7F7');
      });

      el.bind('dragleave', function (e) {
        el.css('background', 'white');
      });

    }

  };

});
