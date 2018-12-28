const argv = require('yargs').argv

console.log("informe o parametro tabuada do tipo numero");

console.log("[Tabuada de " + argv.tabuada + "]");
for (var i = 0; i <= 10; i++) {
    console.log(i + " x " + argv.tabuada + " = " + i * argv.tabuada );
}