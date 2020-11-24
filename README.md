# ✅️ Cadastro de usuário

**Requisitos Funcionais**

- O usuário deve poder criar um novo cadastro na aplicação utilizando um email e senha

**Requisitos Não Funcionais**

- Banco de dados para cadastrar o usuário deve ser postgres
- Gerênciador de BD deve ser typeorm
- Injeção de dependências do typeorm deve ser feita pelo tsyringe

**Regras de Negócio**

- O email deve ser único

# ✅️ Fazer logon

**Requisitos Funcionais**

- O usuário deve poder fazer login com um email e senha

**Requisitos Não Funcionais**

- O hash da senha deve ser feito pelo bcryptjs
- O token de autorização deve ser um jwt

**Regras de Negócio**

- O email do usuário deve estar previamente cadastrado na aplicação
- A senha deve ser armazenada em um hash

# Criar configuração de timer

**Requisitos Funcionais**

- O usuário deve poder criar novas configurações de tempo para sua conta

**Requisitos Não Funcionais**

**Regras de Negócio**

- O usuário deve estar autenticado

- A nova configuração deve existir apenas para o usuário que a criou
