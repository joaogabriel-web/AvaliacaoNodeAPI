import filme from '../model/filme.js';

class Service {

    Buscar() {
        return filme.Buscar();
    }

    BuscarUm(id) {
        if (!id || id < 0 || id >= filme.Buscar().length) {
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

    Categoria(classificacao) {
        if (!classificacao || isNaN(classificacao)) {
            throw new Error("Classificação inválida");
        }
        return filme.Categoria(classificacao);
    }

    Lancamento(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        return filme.Lancamento(id);
    }
}

export default new Service()