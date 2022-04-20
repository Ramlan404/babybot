module.exports = class TicTacToe {
    constructor(playerX = 'x', playerO = 'o') {
        this.playerX = playerX
        this.playerO = playerO
        this.turn = this.playerX
        this.ttt = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']
    }

    KeisiSemua() {
        let status = true
        for (let i of this.ttt) {
            if (i !== '❎' && i !== '⭕') {
                status = false
            }
        }
        return status
    }

    cekIsi(nomor) {
        if (isNaN(nomor)) throw new Error('Not a Number')
        let status = false
        nomor = nomor - 1
        if (nomor > 9 || nomor < 0) throw new Error('Min 1, Max 9')
        if (this.ttt[nomor] == '❎' || this.ttt[nomor] == '⭕') status = true
        return status
    }

    isi(player, number) {
        if (isNaN(number)) throw new Error('Not a Number')
        number = number - 1
        if (number > 9 || number < 0) throw new Error('Min 1, Max 9')
        if (this.cekIsi(number + 1)) throw new Error('Sudah di isi')
        const who = player == this.playerX ? '❎' : '⭕'
        this.ttt[number] = who
        this.turn = this.turn == this.playerX ? this.playerO : this.playerX
    }

    isWin() {
        let status = false
        if (this.ttt[0] === '❎' && this.ttt[1] === '❎' && this.ttt[2] === '❎' || this.ttt[0] === '⭕' && this.ttt[1] === '⭕' && this.ttt[2] === '⭕') {
            status = true
        } else if (this.ttt[3] === '❎' && this.ttt[4] === '❎' && this.ttt[5] === '❎' || this.ttt[3] === '⭕' && this.ttt[4] === '⭕' && this.ttt[5] === '⭕') {
            status = true
        } else if (this.ttt[6] === '❎' && this.ttt[7] === '❎' && this.ttt[8] === '❎' || this.ttt[6] === '⭕' && this.ttt[7] === '⭕' && this.ttt[8] === '⭕') {
            status = true
        } else if (this.ttt[0] === '❎' && this.ttt[3] === '❎' && this.ttt[6] === '❎' || this.ttt[0] === '⭕' && this.ttt[3] === '⭕' && this.ttt[6] === '⭕') {
            status = true
        } else if (this.ttt[1] === '❎' && this.ttt[4] === '❎' && this.ttt[7] === '❎' || this.ttt[1] === '⭕' && this.ttt[4] === '⭕' && this.ttt[7] === '⭕') {
            status = true
        } else if (this.ttt[2] === '❎' && this.ttt[5] === '❎' && this.ttt[8] === '❎' || this.ttt[2] === '⭕' && this.ttt[5] === '⭕' && this.ttt[8] === '⭕') {
            status = true
        } else if (this.ttt[0] === '❎' && this.ttt[4] === '❎' && this.ttt[8] === '❎' || this.ttt[0] === '⭕' && this.ttt[4] === '⭕' && this.ttt[8] === '⭕') {
            status = true
        } else if (this.ttt[2] === '❎' && this.ttt[4] === '❎' && this.ttt[6] === '❎' || this.ttt[2] === '⭕' && this.ttt[4] === '⭕' && this.ttt[6] === '⭕') {
            status = true
        }
        return status
    }
}