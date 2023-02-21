# JavaScript
 Estudando sobre JavaScript

npm install -g eslint -> install, se tiver algum erro de sintax no código, vai destacar

'null' → não recebe nada

typeoff → para saber o tipo da variável (number, object, string, function...)

parseInt ou ParseFloat para converter à número inteiro ou real

para colocar o valor escrito em valor Real pt-BR, pode ser utilizado o código:
    n1.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })

---------- Operadores ----------


    [x] Aritméticos
        → (soma) => 5 + 2 = 7 
        → (subtação) => 5 - 2 = 3 
        → (multiplicação) => 5 * 2 = 10 
        → (divisão) => 5 / 2 = 2.5 
        → (resto da divisão inteira) => 5 % 2 = 1 
        → (potência) => 5 ** 2 = 25

        [x] Precedencias
            1º "()"
            2º "**"
            3º "*" "/" "%"
            4º "+" "-"
        
    [x] Atribuição
        → var a, b, c, ...
        → var soma = 5 + 3 => 8
        → var resto = soma % 5 => 3
        → var potencia = 5 * resto ** 2 => 45
        → var divisao = 10 - soma / 2 => 6
        → var multip = 6 * 2 / divisao => 2
            como é p mesmo nível de precedência, é considerado a ordem da esquerda para direita
        → var total = resto % multip + 4 / multip => 3

        [x] Auto-atribuições
            → var n = 3
                n = n + 4
                n = n - 5
                n = n * 4
                n = n / 2
                n = n ** 2
                n = n % 5
                [x] Simplificando
                    n += 4
                    n -= 5
                    n *= 4
                    n /= 2
                    n **= 2
                    n %= 5
        [x] Incremento
            [x] Pós Incremento (onde precisar chamar a var novamente  para aparecer o novo número)
            → var x = 5
                x ++ => mesma coisa de x += 1
                x -- => mesma coisa de x -= 1
            [x] Pré Incremento (já mostra o novo número)
                ++ x => mesma coisa de x += 1
                -- x => mesma coisa de x -= 1

        [x] Relacionais
          > → maior que   [ 5 > 2 = true ]
          < → menor que   [ 7 < 4 = false ]
          >= → maior ou igual [ 8 >= 8 = true ]
          <= → menor ou igual [ 9 <= 7 = false ]
          == → igual      [ 5 == 5 = true ]
          != → diferente  [ 4 != 4 = false ]
              [x] Identidade      // operador de igualdade restrita
                  '===' → idêntico
                  '!==' → não idêntico
                  5 == 5 → true
                  5 == '5' → true
                  5 === '5' → false
              [x] Ordem de precedência
                  Leitura sempre da esquerda para direita

        [x] Lógicos
          ! → negação (not)
          && → conjunção (and)
          || → disjunção (or)

              [x] Ordem de prececência
                  1º not  "!"
                  2º and  "&&"
                  3º or   "||"

                  [x] Negação "!" "not"
                      ! true → false
                      ! false → true
                  [x] Conjunção "&&"  "and"
                      true  && true  → true
                      true  && false → false
                      false && true  → false
                      false && false → false
                  [ ] Disjunção "||"  "or"
                      true  || true  → true
                      true  || false → true
                      false || true  → true
                      false || false → false

          Exemplo:
              var a = 5
              var b = 8
                  a > b && b % 2 == 0
                      [ a > b ] → false
                      [ b % 2 == 0 ] → true
                      false && true → false
                  a <= b || b / 2 == 2
                      [ a <= b ] → true
                      [ b / 2 == 2 ] → false
                      true || false → true

        [x] Ternário
          "? :"
          teste ? true : false
              Exemplo
                  media >= 7.0 ? "Aprovado!" : "Reprovado!"


      [x] Ordem de Precedência Geral
          1º Operadores Aritiméticos
          2º Operadores Relacionais
          3º Operadores Lógicos
---------- DOM ----------
  Document Object Model

Install in VSCode
    - Live Server

Árvore DOM
    window
        > location
        > document (father)
            > html (children)
                > head (parent)
                    > meta
                    > title
                > body (parent)
                    > h1
                        > strong
                    > p
                        > strong
                    > div
        > history

    Pode selecionar por
        - Marca
            - getElementByTagName()
        - ID
        - Nome
        - Classe
        - Seletor (css)

---------- CONDIÇÕES ----------

Sequências
    var n = 3 ↓
    n += 2 ↓
    window.alert(n) end

Condições - IF

```
if(condicao) {
    condicao 1 (true)
} else {
    condicao 2 (false)
}
```
 
    * Tipos de condição
        - Condição Simples
            `if(condicao) { true }`
        - Condição Composta
           ```
            if(condicao) {
                bloco 1 (true)
            } else {
                bloco 2 (false)
            }
           ```
        - Condição Aninhada
            ```
            if(condicao) {
                bloco 1 (true)
            } else {
                if (condicao 2) {
                    bloco 2 (true)
                } else {
                    bloco 3 (false)
                }
            }
           ```
        - Condição Múltipla
           ```
            switch (expressao) {
                case valor 1:
                    return
                    break
                case valor 2:
                    return
                    break
                case valor 3:
                    return
                    break
                default:
                    return
                    break
            }
           ```
Avançando os estudos!

    - Variáveis Compostas
        * Variável simples - só armazena um valor por vez
        * Variável composta - capaz de armazenar vários valores numa mesma estrutura
            ex: const/let/var a = [1, 2, 3, 4, 5] → array vetor
            'Um array é uma variável que contém vários elementos, cada elemento é composto por seu valor e chave de identificação' Gustavo Guanabara
        

    - Funções


    - Próximos Passos

---------- REPETIÇÃO ----------
    - Estrutura de repetição com teste lógico no início
        * While
            ~~~javascript
                while (condicao) {
                    bloco1 (true)
                }
            ~~~
            ex:
            ~~~javascript
            function comerPizza() {
                while (temPizza()) {
                    comerPizza()
                }
            }
            ~~~

    - Estrutura de repetição com teste lógico no final
        * do {
            bloco
        } while(condicao)
        ex:
        ~~~javascript
            do{
                bloco
            } while(condicao)
            ~~~

    - Estrutura de repetição com variável de controle
        * for
            ~~~javascript
                for (inicio; teste; incremento) {
                    bloco
                }
            ~~~

Avançando os estudos!
    - Variáveis Compostas
        * Variável simples - só armazena um valor por vez
        * Variável composta - capaz de armazenar vários valores numa mesma estrutura
            ex: const/let/var a = [1, 2, 3, 4, 5] → array vetor
            'Um array é uma variável que contém vários elementos, cada elemento é composto por seu valor e chave de identificação' Gustavo Guanabara
        
    - Funções
    - Próximos Passos