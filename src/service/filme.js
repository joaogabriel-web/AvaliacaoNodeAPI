import filme from '../model/filme.js';

class Service {

    Buscar() {
        return filme.Buscar();
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        return filme.BuscarUm(id);
    }

    Criar(titulo, classificacao, descricao, ano) {
        if (!titulo || !classificacao || !descricao || !ano) {
            throw new Error("Todos os campos são obrigatórios");
        }
        filme.Criar(titulo, classificacao, descricao, ano);
    }

    Alterar(id, titulo, classificacao, descricao, ano) {
        if (!id || isNaN(id) || !titulo || !classificacao || !descricao || !ano) {
            throw new Error("Todos os campos são obrigatórios");
        }
        filme.Alterar(id, titulo, classificacao, descricao, ano);
    }

    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        filme.Deletar(id);
    }
    
}

export default new Service()