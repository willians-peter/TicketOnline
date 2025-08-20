# TicketOnline
Exercício Trello Semana 11

[M01S11] Exercício 1: Ticket Online - Criação de Projeto
Descrição
🎯 Objetivo: Iniciar o projeto da loja de tickets de cinema.
Requisitos:
Criar um projeto React chamado TicketOnline.
Estruturar o projeto utilizando a metodologia Atomic Design
src/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  pages/
Configurar o React Router com as seguintes rotas:
/ → Início (tela inicial);
/filmes → Filmes (lista de filmes);
/filmes/:id → Detalhes do Filme (detalhes de um filme);
/contato → Contato (formulário de contato).

[M01S11] Exercício 2: Ticket Online - Navbar e Temas
Descrição
🎯 Objetivo: Criar a navegação principal e implementar tema claro/escuro.
Requisitos:
Criar um Navbar com os links: Início, Filmes e Contato.
Adicionar um controle de tema claro/escuro:
Deve ser acionado por um ícone (não texto).
Implementado via Context API.
Aplicar o tema globalmente (alterar cores do fundo, textos, etc.).
💡 Dica: Utilizar Material UI e Material Icons.

[M01S11] Exercício 3: Ticket Online - Componente Filme
Descrição
🎯 Objetivo: Criar os componentes de exibição de filmes.
Requisitos:
Componente Filme
Exibir: nome, cartaz, gênero, faixa etária, botão "Ver mais informações".
Componente Grid de Filmes
Exibir vários filmes em formato de grid.
Componente Detalhes do Filme
Exibir todos os dados do filme + sinopse.
Ter botão "Voltar" para retornar à lista de filmes.
💡 Dica: Utilize React Router para navegar entre lista e detalhes. Colocar imagens na pasta /public.
Mock de filmes:
[
  {
    "id": "1",
    "nome": "O Senhor dos Anéis: A Sociedade do Anel",
    "genero": "Aventura/Fantasia",
    "idade_indicada": 12,
    "sinopse": "Um jovem hobbit, Frodo, herda um anel poderoso e embarca em uma jornada épica para destruí-lo antes que caia nas mãos do Senhor do Escuro, Sauron."`,
    "cartaz": "/cartaz_oSenhorDosAneis_aSociedadeDoAnel.jpg"
  },
  {
    "id": "2",
    "nome": "Interestelar",
    "genero": "Ficção Científica",
    "idade_indicada": 10,
    "sinopse": "Em um futuro onde a Terra se torna inabitável, um grupo de astronautas parte em uma missão interestelar para encontrar um novo lar para a humanidade.",
    "cartaz": "/cartaz_interestelar.jpg"
  },
  {
    "id": "3",
    "nome": "O Rei Leão",
    "genero": "Animação/Drama",
    "idade_indicada": 0,
    "sinopse": "Após a morte de seu pai, o jovem leão Simba deve enfrentar seus medos e assumir seu lugar como o verdadeiro rei da savana.",
    "cartaz": "/cartaz_oReiLeao.jpg"
  },
  {
    "id": "4",
    "nome": "A Origem",
    "genero": "Ação/Ficção Científica",
    "idade_indicada": 14,
    "sinopse": "Um ladrão especializado em extrair segredos do inconsciente recebe a missão impossível de implantar uma ideia na mente de um herdeiro poderoso.",
    "cartaz": "/cartaz_aOrigem.jpg"
  },
  {
    "id": "5",
    "nome": "Parasita",
    "genero": "Drama/Thriller",
    "idade_indicada": 16,
    "sinopse": "Uma família pobre se infiltra na vida de uma família rica, mas um segredo perigoso ameaça destruir o frágil equilíbrio entre elas.",
    "cartaz": "/cartaz_parasita.jpg"
  },
  {
    "id": "6",
    "nome": "Homem-Aranha: Sem Volta Para Casa",
    "genero": "Ação/Aventura",
    "idade_indicada": 12,
    "sinopse": "Após sua identidade ser revelada, Peter Parker pede ajuda ao Doutor Estranho, mas um feitiço errado libera vilões de outros universos.",
    "cartaz": "/cartaz_homemAranha_semVoltaParaCasa.jpg"
  }
]

[M01S11] Exercício 4: Ticket Online - Componente Contato
Descrição
🎯 Objetivo: Criar formulário de contato com React Hook Form.
Requisitos:
Campos obrigatórios: E-mail, Assunto, Mensagem.
Campo opcional: Urgência (checkbox ou toggle).
Usar React Hook Form para controlar os inputs.
Na submissão, exibir os dados no console.log ou com alert().

[M01S11] Exercício 5: Ticket Online -  Templates e Pages
Descrição
🎯 Objetivo: Estruturar a aplicação final com templates e páginas.
Requisitos:
Criar os templates e páginas abaixo:
App.jsx
Incluir Header (Navbar) e Footer em todas as páginas.
Início
TemplateInicioPage + InicioPage
Exibir apenas uma imagem da fachada de um cinema.
Filmes
TemplateFilmesPage + FilmesPage
Exibir uma lista com pelo menos 6 filmes mockados.
Permitir ver os detalhes de cada filme → direcionar para /filmes/:id.
Detalhes do Filme
TemplateDetFilmePage + DetFilmePage
Exibir informações completas e sinopse do filme selecionado.
Contato
TemplateContatoPage + ContatoPage
Exibir o formulário de contato criado no exercício anterior.


[M01S11] Exercício 6: Ticket Online -  Build e Deploy
Descrição
🎯 Objetivo: Publicar a aplicação online.
Requisitos:
Gerar build da aplicação:
npm run build
Fazer o deploy no Vercel.
Disponibilizar o link da aplicação em produção.
