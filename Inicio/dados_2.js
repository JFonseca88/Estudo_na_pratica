let preco = 19.90;
let desconto = 0.4; //40% de desconto

/* calculando dentro do console.log
o preço com o desconto*/
console.log(19.9 * 0.6); 
// console.log(preco * 1 - desconto); nesse caso a multiplicacao tem prioridade sobre a subtração, não dará certo por conta da prioridade.
console.log(preco * (1 - desconto)); //operação entre parenteses tem prioridade

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// Variavel em texto
let nome ="caderno"; // string (texto)-> sequencia de simbolos
let categoria = "papelaria";
console.log("produto:" + nome 
+ ", categoria: "+ categoria
+ ", preço: " +preco
+ ", desconto: " + desconto);

