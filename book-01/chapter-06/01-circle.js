const PI = Math.PI

exports.area = (r) => r * r;

exports.circumference = (r) => 2* PI * r;

// module.exports是真正的特殊对象，是真正的对外暴露出口，
// 而 exports只是一个变量，是被默认的module.exports绑定的。