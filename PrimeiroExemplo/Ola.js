console.log("Ola");
const fs = require("fs"); //FS Acessa os arquivos internos da máquina
const os = require("os"); //OS Acessa os arquivos máquina em que o sistema está rodando
let user = os.userInfo();
fs.appendFileSync("texto.txt", "Dados do Usuário \n\n");
fs.appendFileSync("texto.txt", `User Name: ${user.username} \n`);
fs.appendFileSync("texto.txt", `Home Folder: ${user.homedir} \n\n`)

console.log(user)