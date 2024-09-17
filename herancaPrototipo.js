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

Object.setPrototypeOf(admin, user); // Admin recebe user como protótipo e pode usar metodos herdados dele.
admin.criarCurso();
admin.exibirInfos(); // METODO HERDADO