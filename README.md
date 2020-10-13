# Cinema Webjump ReactJS
## 1. Introdução
Site em React com listagem de filmes da api [The Movie DB](https://developers.themoviedb.org) *[1]*.

## 2. Objetivo 
Construir um site em React com um design de acordo com o template desenvolvido no [Figma](https://www.figma.com/)*[2]* como mostra a *Figura 1*, conexão com a API [The Movie DB](https://developers.themoviedb.org)*[1]*, opção para adicionar filme aos favoritos e salvar no localStorage. Utilizando como ferramentas o [TypeScript](https://www.typescriptlang.org/docs/)*[3]*,  [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)*[4]*
*, [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)*[5]* e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)*[6]*

![template-1/2](https://i.imgur.com/LjdecIJ.png)  
*Figura 1 - Template Figma*  
![tamplate-2/2](https://i.imgur.com/pKUwK2p.png)  
*Figura 2 - Template Figma*  
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

![Figura 3-1/2](https://i.imgur.com/JT3cgyw.png)  
*Figura 3 - Resultado*
![Figura 4-2/2](https://i.imgur.com/XDiEJUa.png)  
*Figura 4 - Resultado*  

A *Figura 5* demonstra a funcionalidade de adição aos favoritos.
![Figura 5-](https://i.imgur.com/Iq0AAU5.gif)    
*Figura 5 - Funcionamento da opção de adicionar aos favoritos.*
## 5. Instalando e Executando
### 5.1 Introdução
- Clone esse repositório:  
  `git clone git@github.com:guiness333/cinejump.git`
### 5.2 Cinema (Frontend)
- Acesse o diretório:  
  `cd cinejump`
- Instale as dependencias:  
  `yarn install` ou `yarn`
- Executar:  
  `yarn start`
- Acesse (Browser):  
  `localhost:8080`


## 6. Dificuldades encontradas
A principal dificuldade encontrada foi a organização dos componentes, sendo parte importante da construção e manutenção do projeto. Há também a utilização da API de trailers, que gerou certo trabalho, já que depende de uma informação(id do filme) que vem de outra api, e a página carrega ambos ao mesmo tempo, causando alguns resultados imprevistos, porém utilizando `await` e `async` corretamente foi possivel desenvolver o resultado esperado.
Além disso a utilização do useEffect não chegou a ser uma dificuldade, mas é uma parte complexa que vale a pena tomar cuidado ao desenvolver em React. 


## 7. Conclusão
React torna a criação do site muito mais direta, focando na construção em si e não tanto na parte de renderização, já que o react cuida de boa parte disso. Além disso o typescript adiciona uma camada proteção ao código, ao especificar os tipos que um camponente vai receber, evitando a exibição de dados incorretos.

## 8. Referências Bibliográficas

1. The Movie DB - Disponível em https://developers.themoviedb.org - Acesso em 08/07/2020;
2. Figma - Disponível em https://www.figma.com/ - Acesso em 08/07/2020;
3. TypeScript - Disponível em https://www.typescriptlang.org/docs/ - Acesso em 29/09/2020;
4. Frameworks - Disponível em https://tableless.github.io/iniciantes/manual/js/o-que-framework.html - Acesso em 08/07/2020;
5. HTML - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/HTML - Acesso em 08/07/2020;
6. CSS - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/CSS - Acesso em 08/07/2020;
