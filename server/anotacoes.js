// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualiar uma informação existente no back-end
// DELETE: Remove uma informação no back-end

// POST: http:localhost:3333/users = criar um uuário
// GET: http://localhost:3333/users = listar usuários
// GET: https://localhost:3333/users/5 = Buscar dados do usuário com ID 5


// Request Param: Parâmetros que vem na própria rota que identificam um recurso.
// Query Param: Pâmetros que vem na própria rota geralmente opcionais para filtos, etc. 
// Request Body: Parâmetros para criação/atualização de informações


const users = [
    'wendell', //0
    'Robson', // 1
    'cleiton' // 2
]

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {

    const data = request.body;
    const user = {
        nome: data.nome,
        email: data.email
    }

    return response.json(user)
})