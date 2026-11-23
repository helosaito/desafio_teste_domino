const test = require('node:test');
const assert = require('node:assert/strict');
const { Domino } = require('./Domino');

test('inicia a partida com dois jogadores e turno do jogador zero', () => {
    const jogo = new Domino();
    assert.equal(jogo.jogadores.length, 2);
    assert.equal(jogo.turno, 0);
    assert.equal(jogo.status, 'em_andamento');
    assert.equal(jogo.vencedor, null);
});

test('permite colocar a primeira peça na mesa vazia', () => {
    const jogo = new Domino();
    jogo.adicionarPeca(0, [6, 6]);
    assert.deepEqual(jogo.jogar(0, 0), [[6, 6]]);
});

test('conecta uma peça e inverte a orientação quando necessário', () => {
    const jogo = new Domino();
    jogo.adicionarPeca(0, [6, 5]);
    jogo.adicionarPeca(0, [2, 2]);
    jogo.adicionarPeca(1, [3, 5]);
    jogo.jogar(0, 0);
    assert.deepEqual(jogo.jogar(1, 0), [[6, 5], [5, 3]]);
});

test('rejeita uma peça que não conecta às extremidades', () => {
    const jogo = new Domino();
    jogo.adicionarPeca(0, [6, 6]);
    jogo.adicionarPeca(0, [1, 1]);
    jogo.adicionarPeca(1, [2, 3]);
    jogo.jogar(0, 0);
    assert.throws(() => jogo.jogar(1, 0), /não pode ser conectada/);
});

test('alterna o turno depois de uma jogada válida', () => {
    const jogo = new Domino();
    jogo.adicionarPeca(0, [6, 6]);
    jogo.adicionarPeca(1, [6, 5]);
    jogo.jogar(0, 0);
    assert.equal(jogo.turno, 1);
});

test('rejeita jogada fora do turno e índice inválido', () => {
    const jogo = new Domino();
    jogo.adicionarPeca(0, [6, 6]);
    assert.throws(() => jogo.jogar(1, 0), /turno/);
    assert.throws(() => jogo.jogar(0, 0.5), /Índice de peça inválido/);
});

test('declara o jogador vencedor quando ele fica sem peças', () => {
    const jogo = new Domino();
    jogo.adicionarPeca(0, [6, 6]);
    jogo.jogar(0, 0);
    assert.equal(jogo.status, 'vencedor');
    assert.equal(jogo.vencedor, 0);
    assert.throws(() => jogo.jogar(1, 0), /não está em andamento/);
});

test('rejeita peça com valores não inteiros ou fora do intervalo', () => {
    const jogo = new Domino();
    assert.throws(() => jogo.adicionarPeca(0, [1.5, 2]), /Peça inválida/);
    assert.throws(() => jogo.adicionarPeca(1, [Number.NaN, 2]), /Peça inválida/);
    assert.throws(() => jogo.adicionarPeca(1, [7, 2]), /Peça inválida/);
});
