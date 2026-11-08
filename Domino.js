class Domino {
    constructor() { this.jogadores = [[], []]; this.mesa = []; this.turno = 0; this.status = 'em_andamento'; }
    adicionarPeca(jogador, peca) { if (![0, 1].includes(jogador) || !Array.isArray(peca) || peca.length !== 2 || peca.some(v => v < 0 || v > 6)) throw new Error('Peça ou jogador inválido.'); this.jogadores[jogador].push([...peca]); }
    podeJogar(peca) { if (!this.mesa.length) return true; return peca.includes(this.mesa[0][0]) || peca.includes(this.mesa[this.mesa.length - 1][1]); }
    jogar(jogador, indice, invertida = false) { if (jogador !== this.turno) throw new Error('Não é o turno deste jogador.'); const p = this.jogadores[jogador][indice]; if (!p) throw new Error('Peça não encontrada.'); if (!this.podeJogar(p)) throw new Error('Peça não pode ser jogada.'); this.jogadores[jogador].splice(indice, 1); if (!this.mesa.length) this.mesa.push(p); else if (p[1] === this.mesa[0][0]) this.mesa.unshift(p); else if (p[0] === this.mesa[0][0]) this.mesa.unshift([p[1], p[0]]); else if (p[0] === this.mesa[this.mesa.length - 1][1]) this.mesa.push(p); else this.mesa.push([p[1], p[0]]); this.turno = 1 - this.turno; if (!this.jogadores[jogador].length) this.status = 'vencedor'; return this.mesa; }
}
module.exports = { Domino };
