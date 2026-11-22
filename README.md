# desafio_teste_domino

Projeto de testes automatizados de **Dominó**.

## 1. Colaborador(es)

- Colaborador 1: Heloísa Sayuri Silva Saito

- Colaborador 2: Maria Eduarda de Castro Lachimia

## 2. Especificação do desafio

O desafio consiste em criar casos de teste em JavaScript para partida para 2 jogadores.

## 3. Estrutura do projeto

```
.
├── package.json
├── README.md
├── src/
│   └── Domino.js
└── tests/
    └── Domino.test.js
```

- `src/Domino.js`: implementação da classe testada.

- `tests/Domino.test.js`: casos de teste automatizados.

## 4. Funcionamento dos casos de teste

Os testes usam Jest e seguem três etapas: preparar o jogo, executar uma ação e verificar o resultado esperado com `expect`.

Casos testados: criação, primeira peça, conexão, peça inválida, alternância de turnos e vitória.

## 5. Instalação e execução

```bash
npm install
npm test
```

Para cobertura:

```bash
npm run test:coverage
```

