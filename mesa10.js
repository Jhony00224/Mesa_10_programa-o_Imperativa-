let array = ["0", "1", "2", "3"];
function imprimirInverso() {
    console.log(array[3])
    console.log(array[2])
    console.log(array[1])
    console.log(array[0])
}
imprimirInverso();


function inverter(){
    console.log(array = ["0", "1", "2", '3'])
}
 inverter()


//somar
function somar([a, b, c]){
    let soma = [a+b+c]
    console.log(soma);
}
somar([1,2,3]);

//simulação
function join([a, b, c]){
    let join = [''+ a + b + c + '']
    console.log(join)
}
join(["o", "l", "á"])
join(["sau", "da", "ção"])

//Coleção de Filmes

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

console.log(filmes[1]);

//2

function maiuscula([a]){
    console.log(filmes[a].toUpperCase())
}
maiuscula([1]);
maiuscula([3]);

//3

let filmes1 = ["Toy Story", "Venon", "Super-homem", "Harry Potter_Pedra Filosofal", "Homem-aranha"];

function doisarray(){
    let somaArrays = [filmes + ' ,' + filmes1];
    console.log(somaArrays)
}
doisarray()

//4
filmes1.pop()
let somaArrays = [filmes + filmes1];
let apagado = "Homem-aranha";

console.log(somaArrays);

//5

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacao(){
    let media1 = [asiaScores[0]+asiaScores[1]+asiaScores[2]+asiaScores[3]+asiaScores[4]+asiaScores[5]+asiaScores[6]+asiaScores[7]+asiaScores[8]]/9;
    let media2 = [euroScores[0]+euroScores[1]+euroScores[2]+euroScores[3]+euroScores[4]+euroScores[5]+euroScores[6]+euroScores[7]+euroScores[8]]/9;
    if (media1 == media2){
        console.log("médias são iguais")
    }else{
        console.log("médias são diferentes")
    }
}
comparacao() 


