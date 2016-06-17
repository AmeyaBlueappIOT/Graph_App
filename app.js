var app = angular.module('plunker', ['nvd3'])

.controller('MainCtrl', function($scope) {
    $scope.options = {
        chart: {
            type: 'lineChart',
            height: 180,
            margin : {
                top: 20,
                right: 20,
                bottom: 40,
                left: 55
            },
            x: function(d){ return d.x; },
            y: function(d){ return d.y; },
            useInteractiveGuideline: true,
            duration: 0,    
            yAxis: {
                tickFormat: function(d){
                   return d3.format('.01f')(d);
                }
            },
                        xAxis: {
                axisLabel:'Time',
                tickFormat: function(d){
                  var d = new Date();
     var currDate = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
                    return currDate;
                }
}
        }
    };
    
    $scope.options1 = angular.copy($scope.options);
    $scope.options1.chart.duration = 0;
    $scope.options1.chart.yDomain = [2,16];
    
    $scope.data = [{ values: [], key: 'Random Walk' }];
        
    $scope.run = true;
    
    var x = 20;
     
    setInterval(function(){
	    if (!$scope.run) return;
	    $scope.data[0].values.push({ x: x,	y: 5});
      if ($scope.data[0].values.length > 20) $scope.data[0].values.shift();
	    x++;
	    
      $scope.$apply(); // update both chart
    }, 500);        
});
