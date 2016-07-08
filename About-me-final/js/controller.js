'use strict';

app.controller('SkillController',
  ['$scope','getSkillLeft','getSkillRight',function($scope, getSkillLeft, getSkillRight){
    getSkillLeft.success(function(data) {
      $scope.skillLeft = data;
    });
    getSkillRight.success(function(data) {
      $scope.skillRight = data;
    });
  }
]);

app.controller('ExprienceController',
  ['$scope','getEducations','getCareers',function($scope, getEducations, getCareers){
    getEducations.success(function(data) {
      $scope.educations = data;
    });
    getCareers.success(function(data) {
      $scope.careers = data;
    });
  }
]);

app.controller('ChordController',
  ['$scope', '$sce', 'getListChord',function($scope, $sce, getListChord){
    getListChord.success(function(data) {
      $scope.listChord = data;
      angular.forEach(data, function (value, key) {
        $scope.listChord[key].lyrics = $sce.trustAsHtml(value.lyrics);
      });
      //alert(JSON.stringif                        y(data[0].lyrics));
      // var arr=data[0].lyrics.split(".");
      // alert(arr.length);
      // for (var i = 0; i<arr.length; i++) {
          // alert(arr[i]);
    });
}
]);
// app.controller('ChordDetailsController',
//   ['$scope', '$sce', 'getChordDetails',function($scope, $sce, getChordDetails){
//     getChordDetails.success(function(data) {
//       $scope.details = data;
//       $scope.abc='abc';
//     });
// }
// ]);
app.controller('ChordDetailsController',
  ['$scope', '$sce', 'getListChordDetails', '$routeParams',function($scope,  $sce, getListChordDetails, $routeParams){
    getListChordDetails.success(function(data) {
      $scope.details=data[$routeParams.id];
        $scope.details.lyrics = $sce.trustAsHtml(data[$routeParams.id].lyrics);
        $scope.details.embed = $sce.trustAsHtml(data[$routeParams.id].embed);
    });
}
]);