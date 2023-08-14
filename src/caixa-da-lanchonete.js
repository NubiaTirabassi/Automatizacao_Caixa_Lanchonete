class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {


        if (itens.length <= 0) {
            return "Não há itens no carrinho de compra!";
        }

        var soma = 0.0;
        var verificaCafe = false
        var verificaChantily = false
        var verificaSanduiche = false
        var verificaQueijo = false
        var verificaQuantidade = false
        var verificaItem = false


        itens.forEach((item, index) => {

            var array = item.split(',');

            if (array[0] == 'cafe') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 3.0);
                verificaCafe = true;
            } else if (array[0] == 'chantily') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 1.5);
                verificaChantily = true
            } else if (array[0] == 'suco') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 6.2);
            } else if (array[0] == 'sanduiche') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 6.5);
                verificaSanduiche = true
            }
            else if (array[0] == 'queijo') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 2.0);
                verificaQueijo = true
            }
            else if (array[0] == 'salgado') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 7.25);
            }
            else if (array[0] == 'combo1') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 9.5);
            }
            else if (array[0] == 'combo2') {
                verificaQuantidade = this.verificaQuantidade(array, verificaQuantidade);
                soma = this.somaItens(soma, array, 7.5);
            } else {
                verificaItem = true;
            }

        });

        if (verificaQuantidade) {
            return "Quantidade inválida!";
        }

        if (verificaItem) {
            return "Item inválido!";
        }

        if (verificaChantily) {
            if (!verificaCafe) {
                return "Item extra não pode ser pedido sem o principal"
            }
        }

        if (verificaQueijo) {
            if (!verificaSanduiche) {
                return "Item extra não pode ser pedido sem o principal"
            }
        }


        //   Método de pagamento - Descontos e Taxas

        if (metodoDePagamento === 'dinheiro') {
            soma *= 0.95; // Pagamento em dinheiro tem 5% de desconto
        } else if (metodoDePagamento === 'credito') {
            soma *= 1.03; // Pagamento a crédito tem acréscimo de 3% no valor total
        } else if (metodoDePagamento !== 'debito') {
            return 'Forma de pagamento inválida!'; // Se a forma de pagamento não existir irá exibir "Forma de pagamento inválida!".
        }


        return ("R$ " + soma.toFixed(2)).replace('.', ',');

    }


    somaItens(soma, array, valor) {
        return soma + parseFloat(array[1].trim()) * valor;
    }

    verificaQuantidade(array, verificaQuantidade) {
        if (parseFloat(array[1].trim()) <= 0) {
            verificaQuantidade = true;
        }
        return verificaQuantidade;
    }
}

export { CaixaDaLanchonete };
