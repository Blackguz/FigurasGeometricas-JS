//Area y perimetro de cuadrado
let resultado = document.getElementById('result');
const perimCuadrado = (side) => side*4;
const areaCuadrado = (side) => side*side;
const perimTriangulo = (lado1, lado2, lado3) => lado1+lado2+lado3;
const areaTriangulo = (base,altura ) => (base*altura)/2;

function calculatePerimSquare() {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El perimetro del cuadraro es: ${perimCuadrado(value)}cm`;
    resultado.innerText = result;

}

function calculateAreaSquare() {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El area del cuadraro es: ${areaCuadrado(value)}cm2`;
    resultado.innerText = result;
}

function calculatePerimTriangulo() {
    let lado1 = Number(document.getElementById("lado1Input").value);
    let lado2 = Number(document.getElementById("lado2Input").value);
    let lado3 = Number(document.getElementById("lado3Input").value);

    const result = `El perimetro del triangulo es: ${perimTriangulo(lado1, lado2, lado3)}`;
    resultado.innerText = result;
}

function calculateAreaTriangulo() {
    let base = Number(document.getElementById("baseInput").value);
    let altura = Number(document.getElementById("alturaInput").value);

    const result = `El area del triangulo es: ${areaTriangulo(base,altura)}`;
    resultado.innerText = result;
}