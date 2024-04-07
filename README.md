# Teste técnico Opportuna Tecnologia - Backend

Back end para o teste técnico da empresa Opportuna Tecnologia.

## Índice

- <a href="#-requisitos">Requisitos do serviço</a>
- <a href="#-instalar">Instalando e rodando o projeto</a>
- <a href="#-funcionalidades">Funcionalidades</a>
- <a href="#-bibliotecas">Bibliotecas utilizadas</a>

## <h2 id="-requisitos">Requisitos do serviço</h2>

- O banco de dados utilizado foi **PostgreSQL**.
- Tenha o **PostgreSQL** instalado em sua máquina.
- Tenha um banco de dados PostgreSQL criado para utilizar nas variáveis de ambiente do projeto.

## <h2 id=#-instalar>Instalando e rodando o projeto<h2>

```bash
# Instale as dependências:
$ yarn install

# Crie e configure o .env:
# Tenha um banco de dados PostgreSQL criado para configurar as variáveis de ambiente corretamente.
$ Crie um arquivo .env na raiz do projeto e configure com base no arquivo .env.example.

# Execute as migrações:
$ npx prisma migrate dev

# Execute a aplicação:
$ yarn start:dev
```

## <h2 id="-funcionalidades">Funcionalidades</h2>

### Gerais

- Cadastro/Criação de lembretes;
- Leitura de lembretes;
- Deleção de lembretes;
- Atualização de lembretes;
- Deleção de todos os lembretes registrados na tabela.

## <h2 id="-bibliotecas">Bibliotecas utilizadas</h2>

- [x] Nest
- [x] Prisma
- [x] dotenv
- [x] cors
