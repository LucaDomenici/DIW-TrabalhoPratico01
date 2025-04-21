const filmes = [
    {
        "id": 1,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/5/57/Ainda_Estou_Aqui_2024_poster.jpg",
        "filme": "Ainda Estou Aqui",
        "dataDeLancamento": "7 de novembro de 2024 (Brasil)",
        "direcao": "Walter Sales",
        "producao": "Maria Carlota Fernandes Bruno, Rodrigo Teixeira, Martine de Clermont-Tonnerre",
        "sinopse": "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece. Eunice - cuja busca pela verdade sobre o destino de seu marido se estenderia por décadas - é obrigada a se reinventar e traçar um novo futuro para si e seus filhos."
    },

    {
        "id": 2,
        "imagem": "https://m.media-amazon.com/images/S/pv-target-images/d40e2853996d20ff038e1a9bb5cad0c2bd75360b123a8daae467cd34c60c4e36.jpg",
        "filme": "A Substância",
        "dataDeLancamento": "20 de setembro de 2024 (Reino Unido)",
        "direcao": "Coralie Fargeat",
        "producao": "Working Title Films; A Good Story",
        "sinopse": "Elisabeth Sparkle, renomada por um programa de aeróbica, enfrenta um golpe devastador quando seu chefe ademite. Em meio ao seu desespero, um laboratório lhe oferece uma substância que promete transformá-la emuma versão aprimorada."
    },

    {
        "id": 3,
        "imagem": "https://m.media-amazon.com/images/I/91N1lG+LBIS._AC_UF894,1000_QL80_.jpg",
        "filme": "Avatar",
        "dataDeLancamento": "18 de dezembro de 2009 (Brasil)",
        "direcao": "James Cameron",
        "producao": "Jon Landau",
        "sinopse": "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Na'vi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora."
    },

    {
        "id": 4, 
        "imagem": "https://m.media-amazon.com/images/I/71s3cEqEZTL._AC_UF894,1000_QL80_.jpg",
        "filme": "Avatar 2",
        "dataDeLancamento": "15 de dezembro de 2022 (Brasil)",
        "direcao": "James Cameron",
        "producao": "20th Century Studios, Lightstorm Entertainment, TSG Entertainment",
        "sinopse": "Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos."
    },

    {
        "id": 5,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg",
        "filme": "Homem Aranha",
        "dataDeLancamento": "17 de maio de 2002 (Brasil)",
        "direcao": "Sam Raimi",
        "producao": "Marvel Entertainment, Columbia Pictures, Laura Ziskin Productions",
        "sinopse": "Depois de ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o assassinando de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico Duende Verde."
    },

    {
        "id": 6,
        "imagem": "https://m.media-amazon.com/images/I/A1P7N8O3OwL._AC_UF1000,1000_QL80_.jpg",
        "filme": "Jurassic World",
        "dataDeLancamento": "11 de junho de 2015 (Brasil)",
        "direcao": "Colin Trevorrow",
        "producao": "aUniversal Studios, Amblin Entertainment, Legendary Pictures, The Kennedy/Marshall",
        "sinopse": "O Parque dos Dinossauros está aberto para visitação, e o público tem a chance de ver de perto as mais diversas espécies. No entanto, um desses animais, resultado de experiência genética, desenvolve alta inteligência e se torna uma ameaça para todos."
    },

    { 
        "id": 7,
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUQlOhH3hYqwVdEIEHw4NLfvR2FPjvYOjmw&s",
        "filme": "Matrix", 
        "dataDeLancamento": "21 de maio de 1999 (Brasil)", 
        "direcao": "Lana Wachowski, Lilly Wachowski", 
        "producao": "Village Roadshow Pictures, Warner Bros. Entertainment, Silver Pictures, WarnerBros",
        "sinopse": "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempreconectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começaa desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima deum sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia."
    },

    { 
        "id": 8,
        "imagem": "https://m.media-amazon.com/images/S/pv-target-images/1fe06f6e61a6493972cabd4da5522dd2a07e0396ca8a6ea4705a05ffd8f4b03d.jpg",
        "filme": "Star Wars 7", 
        "dataDeLancamento": "17 de dezembro de 2015 (Brasil)", 
        "direcao": "J. J. Abrams", 
        "producao": "J. J. Abrams, Bryan Burk, Kathleen Kennedy",
        "sinopse": "A queda de Darth Vader e do Império levou ao surgimento de uma nova força sombria: a Primeira Ordem. Eles procuram o jedi Luke Skywalker, desaparecido. A resistência tenta desesperadamente encontrá-lo antes para salvar a galáxia."
    },

    { 
        "id": 9,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/240px-Titanic_poster.jpg",
        "filme": "Titanic", 
        "dataDeLancamento": "16 de janeiro de 1998 (Brasil)", 
        "direcao": "James Cameron", 
        "producao": "Paramount Pictures; 20th Century Fox; Lightstorm Entertainment",
        "sinopse": "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor."
    },

    { 
        "id": 10,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
        "filme": "Vingadores Ultimato", 
        "dataDeLancamento": "25 de abril de 2019 (Brasil)", 
        "direcao": "Anthony Russo, Joe Russo", 
        "producao": "Anthony Russo, Stephen McFeely, Christopher Markus",
        "sinopse": "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco."
    }
]

function direcionar (id) {

}