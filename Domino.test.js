const { Domino } = require('../src/Domino');
describe('Dominó para dois jogadores', () => {
    test('inicia partida com dois jogadores', () => { const d = new Domino(); expect(d.jogadores).toHaveLength(2); expect(d.turno).toBe(0); });
    test('jogador coloca primeira peça', () => { const d = new Domino(); d.adicionarPeca(0, [6, 6]); d.jogar(0, 0); expect(d.mesa).toEqual([[6, 6]]); });
    test('aceita peça conectada à mesa', () => { const d = new Domino(); d.adicionarPeca(0, [6, 5]); d.adicionarPeca(1, [5, 3]); d.jogar(0, 0); d.jogar(1, 0); expect(d.mesa).toEqual([[6, 5], [5, 3]]); });
    test('rejeita peça que não conecta', () => { const d = new Domino(); d.adicionarPeca(0, [6, 6]); d.adicionarPeca(1, [2, 3]); d.jogar(0, 0); expect(() => d.jogar(1, 0)).toThrow('não pode'); });
    test('alterna o turno', () => { const d = new Domino(); d.adicionarPeca(0, [6, 6]); d.adicionarPeca(1, [6, 5]); d.jogar(0, 0); expect(d.turno).toBe(1); });
    test('declara vencedor quando jogador fica sem peças', () => { const d = new Domino(); d.adicionarPeca(0, [6, 6]); d.adicionarPeca(1, [6, 5]); d.jogar(0, 0); expect(d.status).toBe('vencedor'); });
});
