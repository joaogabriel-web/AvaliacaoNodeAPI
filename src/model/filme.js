const filmes = new Array(
    {Titulo: "Hobbies", Classificacao: 16, Descricao: "Filme de aventura", Ano: 2008 },
    {Titulo: "Valozes e Furiosos 10", Classificacao: 18, Descricao: "Filme de Açao e corridas ilegais", Ano: 2025 },
    {Titulo: "Carros", Classificacao: 10, Descricao: "Historia em animaçao de um corredor", Ano: 2006 }
)

class filme {

    Buscar() {
        return filmes
    }

    BuscarUm(id) {
        if (id < 0 || id >= filmes.length) {
            throw new Error("ID inválido");
        }
        return filmes[id]
    }

    Criar(titulo, classificacao, descricao, ano) {
        filmes.push({ Titulo: titulo, Classificacao: classificacao, Descricao: descricao, Ano: ano })
    }

    Alterar(id, titulo, classificacao, descricao, ano) {
        filmes[id].Titulo = titulo
        filmes[id].Classificacao = classificacao
        filmes[id].Descricao = descricao
        filmes[id].Ano = ano
    }

    Deletar(id) {
        filmes.splice(id, 1)
    }

    Categoria(classificacao) {
        return filmes.filter(filme => filme.Classificacao === classificacao)
    }

    Lancamento(id) {
        const filme = filmes[id]
        const anoAtual = new Date().getFullYear()
        return filme.Ano === anoAtual
    }
}

export default new filme()