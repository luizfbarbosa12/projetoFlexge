# Challenge Flexge - Pleno

#### Backend

## Para iniciar localmente:

Primeiro execute o seguinte comando: 

`npm install` 

Para instalar as dependências do backend. Para executar o programa, utilize: 

`npm run start`

O backend está sendo executado em http://localhost:3001. 

Os endpoints para contratos são iguais, mudando apenas o método. Utilizando a URL `http://localhost:3001/contracts` é possivel:

`GET`: Buscar todos os contratos registrados no banco.
`POST`: Criar um novo contrato passando um body como parâmetro body. Dentro de /Models existe um modelo de contrato que tem o seguinte formato: 

```
country: String,
    state: String,
    city: String,
    documentNumber: Number,
    socialReason: String,
    address: String,
    district: String,
    number: Number,
    zipCode: Number,
    email: String,
    phone: String,
    contractStarts: Date,
    contractEnds: Date,
    dueDay: Number,
    company: String
```

`PATCH`: Aqui é possível editar um contrato através do id. A URL é: `http://localhost:3001/contracts/:id`
`DELETE`: Aqui é possível deletar um contrato através do id. A URL é `http://localhost:3001/contracts/:id`

Todas as rotas são protegidas, sendo necessário passar um token no headers.

## Para criar um usuário e fazer login: 

`POST`: Para registrar um novo usuário `http://localhost:3001/auth/register` passando nome, email e senha no body.
`POST`: Para fazer login `http://localhost:3001/auth/login` passando email e senha no body.

As rotas de registro de usuário e login são abertas. Da requisição de login é retornado um token JWT.

### Frontend: 

Para iniciar o Frontend execute o seguinte comando para instalar as dependências

```
npm install
```

E no diretório do projeto: 

```
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) para visualizar en el browser.

## Comentarios

Backend:
Executar este projeto foi uma fonte de aprendizado absurda! Consegui pela primeira vez implementar um CRUD completo e fazer rotas de autenticação de usuário com registro e login. Não tenho conhecimento aprofundado de boas práticas em backend, então um dos meus maiores desafios foi a organização das informações. Tentei ao máximo no tempo disponível pesquisar maneiras de deixar o código limpo e organizado. Acredito que consegui construir todas as rotas necessárias para a aplicação existir sem problemas.

Se tivesse mais tempo, trabalharia na paginação na API, não consegui chegar até aqui.

Frontend: 
Pontos que consegui alcançar no frontend: 

- Criar página de login funcional
- Utilizar react context para armazenar as informações do usuário
- Criar rotas com react-router
- Fazer somente a página de login ser pública através do hook customizado useProtectedPage
- Fazer controle de formulários usando o hook customizado useForm( ). Cuja construção consiste no uso de um useState()
- Componentização da aplicação

Acredito que o maior desafio foi encontrar um caso de uso para o redux e redux-saga, apenas hoje consegui compreender onde poderia ser útil, mas não tenho mais tempo para aplicar, infelizmente. 
Então se eu tivesse mais tempo aplicaria as seguintes funcionalidades: 

- Implementar gerenciamento de estado complexo com redux para fazer o controle do formulário de criação de contratos
- Implementar o redux-saga para fazer a criação de um novo contrato na API utilizando a rota já criada.
- Implementar filtros da página de visualização de contratos

Obrigado! 



##### By [Luiz Barbosa](https://github.com/luizfbarbosa12)
