angular.module('objectFilters', []).filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      if(item.tags.indexOf('TCH')){
           filtered.push(item);
      }
    });
    // filtered.sort(function (a, b) {
    //   return (a[field] > b[field] ? 1 : -1);
    // });
    // if(reverse) filtered.reverse();
    return filtered;
  };
})