const user = {
    nome        : 'André',
    email       : 'exemplo@gmail.com',
    nascimento  : '04/02/2005',
    role        : 'estudante',
    ativo       : true,
    exibirInfos : function () {
        console.log(this.nome, this.email, this.ativo);
    }
}

const admin = {
    nome        : 'André ADMIN',
    email       : 'a@a.com',
    nascimento  : '04/02/2005',
    role        : 'admin',
    ativo       : true,
    criarCurso  : function () {
        console.log("Curso criado.");
    }
}

Object.setPrototypeOf(admin, user);

console.log(admin.__proto__); // user
console.log(admin.__proto__.__proto__); // object default prototype
console.log(admin.__proto__.__proto__.__proto__); // null

console.log('')

console.log(Object.prototype) // object default prototype


