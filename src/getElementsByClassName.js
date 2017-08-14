// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  let elements = [];
  let recurseClassName = function (node) {
    if (node.classList !== undefined && node.classList.contains(className)) {
      elements.push(node);
    }
    for (let key = 0; key < node.childNodes.length; key++) {
      recurseClassName(node.childNodes[key]);
    }
  };
  recurseClassName(document.body);
  return elements;
  // your code here
};
