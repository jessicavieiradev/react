<h2>next js (anotações)</h2>
<ul>
  <li>
    Na estrutura é possível usar a pagina App dentro de src para lidar com roteamentos e metadados de páginas da aplicação. para isso basta criar uma pasta dento de app com o nome da rota e dentro dessa pasta criar um aruivo chamado page.js ou page.tsx dependendo da tecnologia que está sendo usada
  </li>
  <li>
    Para criar ua página de erro personalizada para uma rota que não existe é necessário criar um arquivo dentro da pasta App com o nome 'not-found.js' ou 'not-found.tsx'. com isso será renderizado o que você criar dentro desse arquivo, podendo inclisive adicionar um link do próprio Next para o usuário retornar para a página principal
  </li>
  <li>
    Dentro da pasta App existe um arquivo de layout que gerencia a estrutura geral do site, podendo inclusive ter componentes reutilizáveis em diversas rotas sem a necessidade de repetição de código. Para isso é só levar em consideração o children da pagina e antes ou depois dele por o conteúdo que deseja reutilizar
  </li>
</ul>
