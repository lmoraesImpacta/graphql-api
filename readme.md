Para rodar o projeto, dê o comando 'npm run start' no terminal. 
O comando deve ser dado no mesmo diretorio desse arquivo.
Para rodar querys GraphQL abra o caminho http://localhost:3000/graphql no navegador
Caso a query não esteja montada no quadro esquerdo do navegador, copie e cole a seguinte estrutura:

{
  recipe(id: ""){
    id,
    title
  }
}