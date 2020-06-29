// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var current = node || document.body;
  // your code here
  var result = [];
  if (current.classList && current.classList.contains(className)) {
    result.push(current);
  }
  if (current.childNodes) {
    for (var i = 0; i < current.childNodes.length; i++) {
      result = result.concat(getElementsByClassName(className, current.childNodes[i]))
    }
  }

return result;
};
