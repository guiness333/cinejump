# Cinema Webjump ReactJS
## 1. Introdução
Site em React com listagem de filmes da api [The Movie DB](https://developers.themoviedb.org) *[1]*.

## 2. Objetivo 
Construir um site em React com um design de acordo com o template desenvolvido no [Figma](https://www.figma.com/)*[2]* como mostra a *Figura 1*, conexão com a API [The Movie DB](https://developers.themoviedb.org)*[1]*, opção para adicionar filme aos favoritos e salvar no localStorage. Utilizando como ferramentas o [TypeScript](https://www.typescriptlang.org/docs/)*[3]*,  [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)*[4]*
*, [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)*[5]* e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)*[6]*

![template](https://i.imgur.com/LjdecIJ.png)  
*Figura 1 - Template Figma*

## 3. Desenvolvimento
### 3.1 HTML e CSS
O [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)*[5]* e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)*[6]*.
O HTML é utilizado para preparar a estrutura do site em si, já o CSS é utilizado para estilizar essa estrutura. 
### 3.2 Typescript
*O TypeScript mantém uma relação incomum com o JavaScript. O TypeScript oferece todos os recursos do JavaScript e uma camada adicional sobre eles: o sistema de tipos do TypeScript.  [7](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)*
### 3.3 ReactJS
O ReactJS é um [framework](https://tableless.github.io/iniciantes/manual/js/o-que-framework.html) javascript que abstrai a complexidade da criação de interfaces dinâmicas para a web.

## 4. Funcionamento
Figura 2 mostra o resultado do desenvolvimento do site, com toda suas funcionalidades.

![Figura 2](https://i.imgur.com/xKNbTwP.png)
*Figura 2 - Resultado*

A *Figura 3* demonstra a funcionalidade de adição aos favoritos.

![Figura 3](https://i.imgur.com/nbBinyT.gif)  
*Figura 3 - Funcionamento da opção de adicionar aos favoritos.*
## 5. Instalando e Executando
### 5.1 Introdução
- Clone esse repositório:  
  `git clone git@github.com:guiness333/webjump-cinema.git`
### 5.2 Cinema (Frontend)
- Acesse o diretório:  
  `cd webjump-cinema`
- Instale as dependencias:  
  `yarn install` ou `yarn`
- Executar:  
  `yarn dev`
- Acesse (Browser):  
  `localhost:8080`


## 6. Dificuldades encontradas
A principal dificuldade encontrada foi trabalhar com o eventListeners em objetos dinamicos, no caso o catálogo de filmes nos favoritos. Encontrei um pouco de dificuldade no carregamento do HTML, porém com a documentação [mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/Events/DOMContentLoaded) consegui entender melhor o funcionamento dos estados do html
`document.readyState` e `DOMContentLoaded`

## 7. Conclusão
JavaScript é uma linguagem poderosa que permite a criação de sites complexos e dinamicos de forma simples mesmo sem a necessidade de um [frameworks](https://tableless.github.io/iniciantes/manual/js/o-que-framework.html)*[4]*

## 8. Referências Bibliográficas

1. The Movie DB - Disponível em https://developers.themoviedb.org - Acesso em 08/07/2020;
2. Figma - Disponível em https://www.figma.com/ - Acesso em 08/07/2020;
3. JavaScript - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript - Acesso em 08/07/2020;
4. Frameworks - Disponível em https://tableless.github.io/iniciantes/manual/js/o-que-framework.html - Acesso em 08/07/2020;
5. HTML - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/HTML - Acesso em 08/07/2020;
6. CSS - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/CSS - Acesso em 08/07/2020;
