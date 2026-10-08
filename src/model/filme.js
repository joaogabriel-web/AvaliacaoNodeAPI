const filmes = new Array(
    {Titulo: "Hobbies", Classificaçao: 16, Descriçao: "Filme de aventura", Ano: 2008 },
    {Titulo: "Valozes e Furiosos 10", Classificaçao: 18, Descriçao: "Filme de Açao e corridas ilegais", Ano: 2025 },
    {Titulo: "Carros", Classificaçao: 10, Descriçao: "Historia em animaçao de um corredor", Ano: 2006 }
)

class filme {

    Buscar() {
        return filmes
    }

    BuscarUm(id) {
        return filmes[id]
    }

    Criar(titulo, classificacao, descricao, ano) {
        filmes.push({ Titulo: titulo, Classificaçao: classificacao, Descriçao: descricao, Ano: ano })
    }

    Alterar(id, titulo, classificacao, descricao, ano) {
        filmes[id].Titulo = titulo
        filmes[id].Classificaçao = classificacao
        filmes[id].Descriçao = descricao
        filmes[id].Ano = ano
    }

    Deletar(id) {
        filmes.splice(id, 1)
    }

    Categoria(classificacao) {
        return filmes[classificacao]
    }
}

export default new filme()