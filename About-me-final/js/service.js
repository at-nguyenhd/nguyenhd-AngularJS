app.factory('getSkillLeft', ['$http', function($http) {
  return $http.get('data/skillLeft.json')
  .success(function(data) {
    return data;
  })
  .error(function(data) {
    return data;
  });
}]);
app.factory('getSkillRight', ['$http', function($http) {
  return $http.get('data/skillRight.json')
  .success(function(data) {
    return data;
  })
  .error(function(data) {
    return data;
  });
}]);
app.factory('getCareers', ['$http', function($http) {
  return $http.get('data/careers.json')
  .success(function(data) {
    return data;
  })
  .error(function(data) {
    return data;
  });
}]);
app.factory('getEducations', ['$http', function($http) {
  return $http.get('data/educations.json')
  .success(function(data) {
    return data;
  })
  .error(function(data) {
    return data;
  });
}]);
app.factory('getListChord', ['$http', function($http) {
  return $http.get('data/chord.json')
  .success(function(data) {
    return data;
  })
  .error(function(data) {
    return data;
  });
}]);
// app.factory('getChordDetails', ['$http', '$requestParam', function($http, $requestParam) {
//   return $http.get('data/details/:requestParam.json')
//   .success(function(data) {
//     return data;
//   })
//   .error(function(data) {
//     return data;
//   });
// }]);
app.factory('getListChordDetails', ['$http', function($http) {
  return $http.get('data/chord.json')
  .success(function(data) {
    return data;
  })
  .error(function(data) {
    return data;
  });
}]);







































