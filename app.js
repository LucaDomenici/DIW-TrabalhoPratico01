const filmes = [
    {
        "id": 1,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/5/57/Ainda_Estou_Aqui_2024_poster.jpg",
        "imagem2": "https://imagens.ebc.com.br/nUVBJCd-c6ZWzwanGSPmB4qKL8w=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/01/23/aindaestouaqui2_copiar.jpg?itok=l9cMvtwY",
        "imagem3": "https://www.cafehistoria.com.br/wp-content/uploads/2024/11/12132029048158.jpg",
        "trailer": "https://www.youtube.com/embed/_NzqP0jmk3o?si=NlMaUKp3vwkNaK6q",
        "filme": "Ainda Estou Aqui",
        "dataDeLancamento": "7 de novembro de 2024 (Brasil)",
        "direcao": "Walter Sales",
        "producao": "Maria Carlota Fernandes Bruno, Rodrigo Teixeira, Martine de Clermont-Tonnerre",
        "duracao": "2h 15m",
        "sinopse": "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece. Eunice - cuja busca pela verdade sobre o destino de seu marido se estenderia por décadas - é obrigada a se reinventar e traçar um novo futuro para si e seus filhos."
    },

    {
        "id": 2,
        "imagem": "https://m.media-amazon.com/images/S/pv-target-images/d40e2853996d20ff038e1a9bb5cad0c2bd75360b123a8daae467cd34c60c4e36.jpg",
        "imagem2": "https://i0.wp.com/pocilga.com.br/wp-content/uploads/2024/09/substancia-destaque.jpg?fit=900%2C520&ssl=1",
        "imagem3": "https://ageleia.com.br/wp-content/uploads/2024/11/Elisasue-A-Substancia-Filme-2024-A-Geleia-1024x536.jpg",
        "trailer": "https://www.youtube.com/embed/AAIUQJrpc2M?si=V6pGd6ciO2RXUlQZ",
        "filme": "A Substância",
        "dataDeLancamento": "20 de setembro de 2024 (Reino Unido)",
        "direcao": "Coralie Fargeat",
        "producao": "Working Title Films; A Good Story",
        "duracao": "2h 20m",
        "sinopse": "Elisabeth Sparkle, renomada por um programa de aeróbica, enfrenta um golpe devastador quando seu chefe ademite. Em meio ao seu desespero, um laboratório lhe oferece uma substância que promete transformá-la emuma versão aprimorada."
    },

    {
        "id": 3,
        "imagem": "https://m.media-amazon.com/images/I/91N1lG+LBIS._AC_UF894,1000_QL80_.jpg",
        "imagem2": "https://lumiere-a.akamaihd.net/v1/images/1_avtr-226_ec8e6081.jpeg?region=0,0,3840,2160",
        "imagem3": "https://unintese.com.br/wp-content/uploads/2023/06/magic-avatar-forest-in-hd-y1r1wrc9tjhdscry-1024x576.jpg",
        "trailer": "https://www.youtube.com/embed/5PSNL1qE6VY?si=uPcTy7LnnYKZO0Wq",
        "filme": "Avatar",
        "dataDeLancamento": "18 de dezembro de 2009 (Brasil)",
        "direcao": "James Cameron",
        "producao": "Jon Landau",
        "duracao": "2h 42m",
        "sinopse": "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Na'vi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora."
    },

    {
        "id": 4, 
        "imagem": "https://m.media-amazon.com/images/I/71s3cEqEZTL._AC_UF894,1000_QL80_.jpg",
        "imagem2": "https://s2-techtudo.glbimg.com/HzsRlPmSHadingtjayr04b4G-Wo=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/y/R/1kKCcuRJyqIbEVAkdRzw/avatar-o-caminho-da-agua-2.jpg",
        "imagem3": "https://s2-valor.glbimg.com/3eTx_sgqoOLzfp3unM_tQIMTeUE=/0x0:4000x2110/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/B/1/cqhHWySgCa0s6NvWLOBw/avatar.jpg",
        "trailer": "https://www.youtube.com/embed/-cmwzbZ072U?si=IQLAeq0GkjUFl_un",
        "filme": "Avatar 2",
        "dataDeLancamento": "15 de dezembro de 2022 (Brasil)",
        "direcao": "James Cameron",
        "producao": "20th Century Studios, Lightstorm Entertainment, TSG Entertainment",
        "duracao": "3h 12m",
        "sinopse": "Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos."
    },

    {
        "id": 5,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg",
        "imagem2": "https://cineset.com.br/wp-content/uploads/2021/11/Critica-Homem-Aranha-2002-3.jpg",
        "imagem3": "https://www.papodecinema.com.br/wp-content/uploads/2012/07/20181126-4-e1543320264296.jpg",
        "trailer": "https://www.youtube.com/embed/t06RUxPbp_c?si=6HmZSyZjQc9iiVzn",
        "filme": "Homem Aranha",
        "dataDeLancamento": "17 de maio de 2002 (Brasil)",
        "direcao": "Sam Raimi",
        "producao": "Marvel Entertainment, Columbia Pictures, Laura Ziskin Productions",
        "duracao": "2h 1m",
        "sinopse": "Depois de ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o assassinando de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico Duende Verde."
    },

    {
        "id": 6,
        "imagem": "https://m.media-amazon.com/images/I/A1P7N8O3OwL._AC_UF1000,1000_QL80_.jpg",
        "imagem2": "https://sm.ign.com/ign_br/news/j/jurassic-w/jurassic-world-3-will-be-more-like-the-original-jurassic-par_8cf2.jpg",
        "imagem3": "https://tm.ibxk.com.br/2023/10/20/20153131252299.jpg?ims=1200xorig",
        "trailer": "https://www.youtube.com/embed/ccuMLmZRd5g?si=IFln-wa3fwNOykbk",
        "filme": "Jurassic World",
        "dataDeLancamento": "11 de junho de 2015 (Brasil)",
        "direcao": "Colin Trevorrow",
        "producao": "Universal Studios, Amblin Entertainment, Legendary Pictures, The Kennedy/Marshall",
        "duracao": "2h 4m",
        "sinopse": "O Parque dos Dinossauros está aberto para visitação, e o público tem a chance de ver de perto as mais diversas espécies. No entanto, um desses animais, resultado de experiência genética, desenvolve alta inteligência e se torna uma ameaça para todos."
    },

    { 
        "id": 7,
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUQlOhH3hYqwVdEIEHw4NLfvR2FPjvYOjmw&s",
        "imagem2": "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZzDupwylH-h0zoEyASxaxb-eXBvlskslcNE-zYTrF4-vtehLHmkb13FL95R8M9mjji5whxBux6iS-fKTRiHju_wAuMgRi7Dwybo.jpg?r=608",
        "imagem3": "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/03/230306130026-keanu-reeves-the-matrix-restricted.jpg?w=420&h=240&crop=1&quality=85",
        "trailer": "https://www.youtube.com/embed/vKQi3bBA1y8?si=Dl5TIyakan1qCo8Y",
        "filme": "Matrix", 
        "dataDeLancamento": "21 de maio de 1999 (Brasil)", 
        "direcao": "Lana Wachowski, Lilly Wachowski", 
        "producao": "Village Roadshow Pictures, Warner Bros. Entertainment, Silver Pictures, WarnerBros",
        "duracao": "2h 16m",
        "sinopse": "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempreconectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começaa desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima deum sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia."
    },

    { 
        "id": 8,
        "imagem": "https://m.media-amazon.com/images/S/pv-target-images/1fe06f6e61a6493972cabd4da5522dd2a07e0396ca8a6ea4705a05ffd8f4b03d.jpg",
        "imagem2": "https://media.semprefamilia.com.br/semprefamilia/2015/12/starwarsvii-729ef8d2.jpg",
        "imagem3": "https://sm.ign.com/t/ign_br/articlepage/d/details-ru/details-rumored-for-new-star-wars-the-force-awaken_dw5e.1280.jpg",
        "trailer": "https://www.youtube.com/embed/sGbxmsDFVnE?si=GTXSZiFwAOfBiYnB",
        "filme": "Star Wars 7", 
        "dataDeLancamento": "17 de dezembro de 2015 (Brasil)", 
        "direcao": "J. J. Abrams", 
        "producao": "J. J. Abrams, Bryan Burk, Kathleen Kennedy",
        "duracao": "2h 16m",
        "sinopse": "A queda de Darth Vader e do Império levou ao surgimento de uma nova força sombria: a Primeira Ordem. Eles procuram o jedi Luke Skywalker, desaparecido. A resistência tenta desesperadamente encontrá-lo antes para salvar a galáxia."
    },

    { 
        "id": 9,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/240px-Titanic_poster.jpg",
        "imagem2": "https://www.oliberal.com/image/contentid/policy:1.553057:1656081198/titanic-capa-movie-widelg.jpg?f=2x1&$p$f=7cb3653&w=1500&$w=f075b93",
        "imagem3": "https://veja.abril.com.br/wp-content/uploads/2023/02/titanic.jpg?crop=1&resize=1212,909",
        "trailer": "https://www.youtube.com/embed/IH6_CA_ocqY?si=BjS5drr7mUGbXyD_",
        "filme": "Titanic", 
        "dataDeLancamento": "16 de janeiro de 1998 (Brasil)", 
        "direcao": "James Cameron", 
        "producao": "Paramount Pictures; 20th Century Fox; Lightstorm Entertainment",
        "duracao": "3h 14m",
        "sinopse": "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor."
    },

    { 
        "id": 10,
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
        "imagem2": "https://assets.b9.com.br/wp-content/uploads/2019/06/EBC2000_v829.1233-1280x720.jpg",
        "imagem3": "https://rollingstone.com.br/media/uploads/vingadores_ultimato_1.jpg",
        "trailer": "https://www.youtube.com/embed/PgrmbRID0eY?si=xwhSes-6xsB0al0B",
        "filme": "Vingadores Ultimato", 
        "dataDeLancamento": "25 de abril de 2019 (Brasil)", 
        "direcao": "Anthony Russo, Joe Russo", 
        "producao": "Anthony Russo, Stephen McFeely, Christopher Markus",
        "duracao": "3h 1m",
        "sinopse": "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco."
    }
]

function direcionar (id) {

}