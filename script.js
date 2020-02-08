function ativandoTabs(){
    const listaAnimais = document.querySelectorAll('.js .js-tabmenu li'); //Estes itens em questão sao as imagens da lista de fotos. 
    const listaDescricao = document.querySelectorAll('.js .js-tabdescricao section'); //Estes itens em questão são as sections das descrições dos animais que serão exibidas.
    function adicionaClasse(index){
        listaDescricao.forEach(item =>{
            item.classList.remove('ativo');
        });
        listaDescricao[index].classList.add('ativo'); //Apos remover as classes, ativa a mesma apenas naquela sections que veio com o index passado pelo parametro.
    };
    listaAnimais.forEach((item, index) => {
        item.addEventListener('click', () => { //Adicionando o evento aos itens da lista.
            adicionaClasse(index); //Tambem chama a função criada acima que remove e add a classe 'ativo' passando no argumento o index da imagem clicada e assim vinculando a imagem a sua determinada Section de descrição.
        });
    });
    listaDescricao[0].classList.add('ativo');
}
ativandoTabs();

function ativandoAccordion(){
    const listaAccordion = document.querySelectorAll('.js .js-accordion dt'); //Seleciona os elementos da lista em que deseja aplicar o Accordion.
    listaAccordion[0].classList.add('ativa-accordion');
    listaAccordion[0].nextElementSibling.classList.add('ativa-accordion');
    function adicionaAccordion(){
        this.classList.toggle('ativa-accordion'); //Adiciona/remove a classe do elemento. O THIS representa o elemento em si.
        this.nextElementSibling.classList.toggle('ativa-accordion'); //Adiciona/remove a classe no proximo elemento que esteja no mesmo nivel do THIS.
    }

    listaAccordion.forEach(item => {
        item.addEventListener('click', adicionaAccordion);
    });
}
ativandoAccordion();

function AtivandoScrollSuavizado(){
    const linksInternos = document.querySelectorAll('.js .menu a[href^="#"]');
    function rolandoSuave(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        console.log(section);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach(item => {
        item.addEventListener('click', rolandoSuave);
    });
}
AtivandoScrollSuavizado();

function animacaoScroll(){
    const secoes = document.querySelectorAll('.js .js-scroll');
    const metadeTela = window.innerHeight * 0.5;

    function mostraConteudo(){
        secoes.forEach(item => {
            const alturaSecao = item.getBoundingClientRect().top - metadeTela;
            if(alturaSecao < 0){
                item.classList.add('ativo');
            } else {
                item.classList.remove('ativo');
            }
        });
    }
    window.addEventListener('scroll', mostraConteudo);
    mostraConteudo();   
}
animacaoScroll(); //Maneira para ativar a função assim que a pagina carregar.