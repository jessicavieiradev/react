<h2>next js (anotações)</h2>
<ul>
  <li>
    Roteamento de páginas: Na estrutura é possível usar a pagina App dentro de src para lidar com roteamentos e metadados de páginas da aplicação. para isso basta criar uma pasta dento de app com o nome da rota e dentro dessa pasta criar um aruivo chamado page.js ou page.tsx dependendo da tecnologia que está sendo usada
  </li>
  <li>
    Páginas não encontradas: Para criar ua página de erro personalizada para uma rota que não existe é necessário criar um arquivo dentro da pasta App com o nome 'not-found.js' ou 'not-found.tsx'. com isso será renderizado o que você criar dentro desse arquivo, podendo inclisive adicionar um link do próprio Next para o usuário retornar para a página principal
  </li>
  <li>
    Reutilizar componentes: Dentro da pasta App existe um arquivo de layout que gerencia a estrutura geral do site, podendo inclusive ter componentes reutilizáveis em diversas rotas sem a necessidade de repetição de código. Para isso é só levar em consideração o children da pagina e antes ou depois dele por o conteúdo que deseja reutilizar
  </li>
  <li>Sobre metadatas: 
      As metadatas são como "etiquetas" do seu site, onde possui as propriedades dele, usadas para melhorar o SEO do site pelos motores de pesquisa. No Nextjs elas podem ser definidas globalmente colocando-as no arquivo de layout dentro da pasta App, ou criando dentro da pasta de uma rota para ser usada apenas naquela página especificada. Algumas metadatas:
      <ul>
      <li>
         title -> nome da página exibido na a aba do site</li>
         <li>description -> descrição do site ou página mostrado de prévia no site ao ser indexado</li>
        <li>onGraph -> usado para personalizar como gostaria de ser exibida a prévia do seu site ao compartilhá-lo como link, podendo por o título, descrição e imagem</li>
        <li>robots -> O atributo robots é utilizado pelos motores de busca para controlar como eles devem interagir com uma página. Ele define se a página deve ser indexada, ou seja, se ela pode aparecer nos resultados de pesquisa, e se os links dentro dessa página devem ser seguidos. Esses links podem levar a outras páginas, e você tem a opção de escolher se eles devem ou não ser considerados relevantes para o SEO. Uma prática recomendada é não seguir links pagos (como anúncios ou links patrocinados), pois os motores de busca, como o Google, não apoiam a transferência de autoridade por meio desses links. Assim, usar a diretiva nofollow nesses casos ajuda a evitar comprometer o SEO do seu site.</li>
</li>
</ul>
</li>
<li>SSR vs CSR: no nextjs é possivel ter componentes e páginas pré geradas no server side, onde é gerado um html da estrutura e renderizado assim que entra no site, podendo ter contato direto com api's. como por padrão é server side, para utilizar a renderização no lado do cliente é preciso por na primeira linha do arquivo o codigo 'use client'. Quando se tem informações fixas ou que sejam essenciais aparecerem bem atualizadas no site prezando também o SEO do site, o client side é o recomendado. Já se a página tiver foco no dinamismo e interação de usuário com informações que mudam bastante, seria interessante utilizar o client side, já que não é possível ter acesso ao DOM no server side, e com isso não poder utilizar, por exemplo, os hooks do react. É possível utilizar os dois em conjunto levando em consideração o objetivo de cada componente.</li>
<li>
Quando há código assíncrono pode ser que haja um tempo até que a requisição seja concluída. Com isso o site pode levar um tempo maior de arregamento, podendo trazer uma visão negativa para o usuário. Há duas formas comuns de lidar com isso: 
<ul>
<li>Dentro da pasta da rota desejada tem como criar um arquivo chamado loanding com uma fução de mesmo nome(letra maiúscula ja que seria um componente). Com isso tudo o que for colocado nessa função será renderizado enquanto a requisição está sendo feita</li>
<li>Há tembém a forma de usar o componente Suspense do react. Ele permite renderizar componentes de forma assíncrona, ou seja, o componente que estiver dentro do Suspense vai esperar a requisição concluir para ser renderizado, sendo possível passar uma propriedade chamada Fallbsck para mostrar algum componente enquanto o componente assíncrono da página não carrega . É útil para renderizar uma página estática onde apenas uma parte dela precisa ter o carregamento de informções</li>
</ul>
</li>
</ul>
