# Formulário de Compras - Cotepe Engenharia Elétrica

## Como testar localmente

### Stack

- VueJS
- NODE + MSSQL (SQL Server)

#### Configurar Frontend

```console
cd frontend
yarn
yarn serve
```

#### Configurar Backend

Serão necessarios 4 tabelas em SQL Server

São elas:

`dbo.backupForm`

![dbo.backupForm](assets/Screenshot_1.png)

`dbo.funcionarios`

![dbo.funcionarios](assets/Screenshot_5.png)

`dbo.parceiros`

![dbo.parceiros](assets/Screenshot_4.png)

`dbo.vendas`

![dbo.vendas](assets/Screenshot_3.png)

```console
cd backend
yarn
yarn dev
```
