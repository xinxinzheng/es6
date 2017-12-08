// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     })
// }
// timeout(100).then((value) => {
//     console.log(value);
// })

// function loadImageAsync(url) {
//     return new Promise((resolve, reject) => {
//         var image = new Image();
//         image.onload = function() {
//             resolve(image);
//         };
//         image.onerror = function() {
//             console.log('hhhhhhhhh');
//             reject(new Error('could not load img at ' + url))
//         }
//         img.src = url;
//     });
// }
// loadImageAsync('http://www.baidu.com/img/bd_logo1.png').then(function() {
//     console.log(1234);
// }).catch(function(err) {
//     // console.log(123456, err);
// })

var promise = new Promise(function(resolve, reject) {
    resolve('ok');
    throw new Error('test');
});
promise
    .then(function(value) { console.log(value) })
    .catch(function(error) { console.log(error) });