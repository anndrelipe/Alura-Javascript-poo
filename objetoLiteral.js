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

user.exibirInfos() // exibe nome, email e ativo do user.

const exibir_sem_bind = user.exibirInfos
exibir_sem_bind() // retorna undefined para todos os atributos porque PERDE CONTEXTO

function exibir_com_bind () {
    console.log(this.nome, this.email, this.ativo);
}

const exibir = exibir_com_bind.bind(user);
exibir() // usa o bind para ATRELAR CONTEXTO