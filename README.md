# Dominó — Desafio de Testes

## Desafio

O desafio é elaborar testes automatizados para uma versão simplificada de Dominó para dois jogadores. A implementação de todas as funcionalidades não é obrigatória na atividade; este repositório inclui uma implementação de referência.

Os jogadores são identificados por `0` e `1`, e a partida começa com o jogador `0`. Cada peça é um par de inteiros de `0` a `6`. A primeira peça pode ser colocada em uma mesa vazia. Nas jogadas seguintes, uma das extremidades da peça precisa coincidir com uma extremidade aberta da mesa. A implementação pode inverter a orientação para fazer a conexão. Uma jogada válida remove a peça da mão, alterna o turno e declara vencedor o jogador que ficar sem peças. Esta versão não implementa compra, passagem de turno, empate ou distribuição de peças.

## Colaboradores

- Heloísa Sayuri Silva Saito | RA: 24062631-2
- Maria Eduarda de Castro Lachimia | RA: 24055202-2

## Arquivos

- `Domino.js`: implementação da classe `Domino`.

- `Domino.test.js`: testes automatizados com `node:test` e `node:assert/strict`.

## Casos de teste

| Caso | O que verifica |
| --- | --- |
| Inicia a partida com dois jogadores e turno do jogador zero | A partida tem duas mãos, turno inicial 0, status `em_andamento` e nenhum vencedor. |
| Permite colocar a primeira peça na mesa vazia | Uma primeira peça válida passa para a mesa. |
| Conecta uma peça e inverte a orientação quando necessário | A peça que encaixa pela ponta correta é colocada com a orientação correspondente. |
| Rejeita uma peça que não conecta às extremidades | A tentativa de jogar uma peça incompatível lança erro. |
| Alterna o turno depois de uma jogada válida | Após uma jogada do jogador 0, o turno passa ao jogador 1. |
| Rejeita jogada fora do turno e índice inválido | É recusada a jogada pelo jogador errado e também um índice fracionário de peça. |
| Declara o jogador vencedor quando ele fica sem peças | Ficar sem peças registra status `vencedor`, identifica o jogador e bloqueia outra jogada. |
| Rejeita peça com valores não inteiros ou fora do intervalo | São rejeitados valores fracionários, `NaN` e valores acima de 6. |

## Como executar

Requer Node.js 18 ou superior. Não há dependências externas. Na pasta deste projeto, execute:

```bash
node --test
```
