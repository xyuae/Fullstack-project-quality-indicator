
```
// makeCounter函数返回的是一个信的函数
function makeCounter() {
	var i = 0;
	return function() {
		console.log( ++i );
	};
}

var counter - makeCounter();
counter();
counter();

var counter2 = makeCounter();
counter2();
counter2();
```

## Implement sort using JavaScript
```
var arr = [5, 100, 6, 3, -12];

var result = arr.sort((a,b) => {
	return a-b;
});
console. log(result);
```

```
function addEvent(element, type, handler){
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + type, handler);
	} else {
		element["on" + type] = handler;
	}
}
```
JavaScript object add a trim method
```
String.prototype.trim = function() {
	return this.replace(/^\s+$/g, "");
}
```

JavaScript parseQueryString
```
function parseQueryString(url) {
	var result = []
	var arr = url.split("?")[1].split("&");
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		var arr1 = arr[i].split("=");
		result[arr1[0]] = arr1[1];
	}
	return result;
}
```
