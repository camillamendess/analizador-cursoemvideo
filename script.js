let num = document.getElementById('num')
let sel = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

function inLista(n) {
    if (n == valores[valores.indexOf(n)]) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    let n = Number(num.value)
    if (n < 1 || n > 100) {
        window.alert('Número invalido. Deve ser entre 1 e 100!')
    } else {
        if (inLista(n)) {
            window.alert('Esse número já foi adicionado, selecione outro!')
        } else {
            valores.push(n)
            let nu = document.createElement('option')
            nu.text = `${n} foi adicionado.`
            nu.value = `sel${n}`
            sel.appendChild(nu)
            res.innerHTML = ` `
            num.value = ` `
            num.focus()
        }
    }
}

function finalizar() {

    if (valores.length == 0) {
        window.alert('Digite números antes de finalizar')
    } else {
        let quantidade = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media

        for (let i in valores) {
            if (valores[i] > maior) {
                maior = valores[i];
            }
            if (valores[i] < menor) {
                menor = valores[i];
            }
            soma += valores[i]
        }
        media = soma / valores.length
        res.innerHTML = `<p>Ao todo, temos ${quantidade} números cadastrados.<p>
        <p>O maior valor informado foi ${maior}.<p>
        <p>O menor valor informado foi ${menor}.<p>
        <p>Somando todos os valores, temos ${soma}.<p>
        <p>A média dos valores digitados é ${media}.<p>`
    }

}