function calcularAreaTriangulo() {
  const base = parseFloat(prompt("informar a base do triangulo:"));
  const altura = prompt("Informe a altura do triangulo:");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("digite a base do retângulo:"));
  const altura = parseFloat(prompt("digite  a altura do Retângulo:"));
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = parseFloat(
    prompt("Digite o valor de um dos lados do quadrado:")
  );
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("digite a base maior do Trapezio:"));
  const baseMenor = parseFloat(prompt("digite a base menor do Trapezio:"));
  const altura = parseFloat(prompt("digite  a altura do Trapezio:"));
  return ((baseMaior + baseMenor) * altura) / 2; //
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do cículo:"));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "CALCULADORA GEOMÉTRICA\n" +
      "\nEscolha uma das opções que deseja calcular:\n\n" +
      "1) Calcular Área do Triângulo.\n" +
      "2) Calcular Área do Retângulo.\n" +
      "3) Calcular Área do Quadrado. \n" +
      "4) Calcular Área do Trapézio.\n" +
      "5) Calcular Área do Círculo.\n" +
      "6) Sair:"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida!");
    }
    if (resultado) {
      alert("O resultado é = " + resultado);
    }
  } while (opcao !== "6");
}

// Funções para as operações
executar();
