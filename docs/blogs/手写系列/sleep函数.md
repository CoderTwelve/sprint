---
title: sleep函数
date: 2021-07-19
categories: 
 - 手写系列
---

## Promise版本
```javascript
function sleep(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time);
	})
}

// 使用
sleep(1000).then(() => {
	console.log(1);
})

```
## Generator版本
```javascript
function* sleepGenerator(time) {
	yield new Promise(function(resolve, reject) {
		setTimeout(resolve, time);
	})
}

// 使用
sleepGenerator(1000).next().value.then(() => {
	console.log(1);
})
```
## async/wait版本
```javascript
function sleep(time) {
	return new Promise(resolve => {
		setTimeout(resolve, time);
	})
}

async function output(time) {
	let out = await sleep(time);
	console.log(1);
	return out;
}

output(1000);

```
## setTimeout版本
```javascript
// es5
function sleep(callback, time) {
	if (typeof(callback) === 'function') {
		setTimeout(callback, time);
	}
}
function output() {
	console.log(1);
}
sleep(output, 1000);
```