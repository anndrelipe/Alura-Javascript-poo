// Instanciando por funções construtoras e usando Call:

function User (nome, email) { // Função construtora
   this.nome = nome,
   this.email = email

   this.exibirInfos = function () {
       return `${this.nome} || ${this.email}`
   }
} 

function Admin (role = '') {
    User.call(this, "André", "andre.peixoto@algo.com"); // Chama a função construtora User na construção de Admin, com os valores André e andre.peixoto...
    this.role = !!role ? role : "Estudante";
}

Admin.prototype = Object.create(User.prototype); // Atrela protipos, para metodos futuros de User poderem ser chamados por instanciasd de Admin.

// const andre = new Admin();
// console.log(andre);
// console.log(andre.exibirInfos())

// -------------------------------------------------------------

// Recorrendo a init

const user  = {
    exibirInfo: function (user) {
        return `${user.nome} || ${user.email}`
    }
}

const andre = Object.create(user); // Cria instancia de user.

console.log(andre.nome); // undefined porque não foi inicializado nenhuma construção.
console.log(andre.email);

const novo_user  = {
    init: function (nome, email) {
        this.nome = nome,
        this.email = email
    },
    exibirInfo: function (user) {
        return `${user.nome} || ${user.email}`
    }
}


const novo_andre = Object.create(novo_user); // Cria instancia de user.
novo_andre.init("André", "andre@sogasdf.com")

console.log(novo_andre.nome); // undefined porque não foi inicializado nenhuma construção.
console.log(novo_andre.email);