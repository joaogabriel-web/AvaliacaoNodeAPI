import Service from '../service/filme.js';

class Controller {

    Buscar(req, res) {
        try {
            const filmes = Service.Buscar();

            res.send({ filmes });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = Service.BuscarUm(id)

            res.send({ nome });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Criar(req, res) {
        try {
            const titulo = req.body.Titulo
            const classificacao = req.body.Classificacao
            const descricao = req.body.Descricao
            const ano = req.body.Ano
            Service.Criar(titulo, classificacao, descricao, ano);

            res.send({ message: "Criado com sucesso" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id =  req.params.id
            const titulo = req.body.Titulo
            const classificacao = req.body.Classificacao
            const descricao = req.body.Descricao
            const ano = req.body.Ano
            Service.Alterar(id, titulo, classificacao, descricao, ano);

            res.send({ message: "Alterado com sucesso!" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Deletar(req, res) {
        try {
            const id =  req.params.id;
            Service.Deletar(id);

            res.send({ message: "Deletado com sucesso!" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Categoria(req, res) {
        try {
            const classificacao = req.params.classificacao
            const filmes = Service.Categoria(classificacao)

            res.send({ filmes })
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Lancamento(req, res) {
        try {
            const id = req.params.id
            const lancamento = Service.Lancamento(id)
            res.send({ lancamento })
        } catch (error) {
            res.send({ error: error.message });
        }
    }
}

export default new Controller()