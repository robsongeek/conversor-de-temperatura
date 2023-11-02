const visor = document.getElementById("visor");
const resultadoCelsius = document.getElementById("resultadoCelsius");
const resultadoFahrenheit = document.getElementById("resultadoFahrenheit");
const resultadoKelvin = document.getElementById("resultadoKelvin");

function adicionaTrocaCor() {
  if (resultadoCelsius.value !== "") {
    resultadoCelsius.classList.add("cor-fundo");
    resultadoFahrenheit.classList.add("cor-fundo");
    resultadoKelvin.classList.add("cor-fundo");
  }
}

function removerTrocaCor() {
  if (resultadoCelsius.value !== "") {
    resultadoCelsius.classList.remove("cor-fundo");
    resultadoFahrenheit.classList.remove("cor-fundo");
    resultadoKelvin.classList.remove("cor-fundo");
  }
}
// Para habilitar os botões
document
  .querySelector("#habilitarTeclas")
  .addEventListener("click", function () {
    document.querySelectorAll(".tecla").forEach(function (button) {
      button.disabled = false;
    });
  });

// Para desabilitar os botões
document
  .querySelector("#desabilitarTeclas")
  .addEventListener("click", function () {
    document.querySelectorAll(".tecla").forEach(function (button) {
      button.disabled = true;
    });
  });

function clickTeclado(tecla) {
  if (tecla === "." && visor.value.includes(".")) {
    return;
  }

  // Permite entrada do sinal negativo somente no início do campo
  if (tecla === "-" && visor.value.includes("-")) {
    return;
  }

  visor.value += tecla;
}

function limpa() {
  removerTrocaCor();
  visor.value = "";
  resultadoCelsius.value = "";
  resultadoFahrenheit.value = "";
  resultadoKelvin.value = "";
}

function calcular() {
  const select = document.getElementById("escolhaUsuario");
  const option = select.options[select.selectedIndex].value;

  if (visor.value != "") {
    if (option === "C") {
      calculoTemperaturaCelsius();
    } else if (option === "F") {
      calculoTemperaturaFahrenheit();
    } else if (option === "K") {
      calculoTemperaturakelvin();
    } else {
      alert("Escolha uma opção de temperatura.");
    }
  } else {
    alert("Por favor, preencha o campo de temperatura.");
  }
  // Reseta o combobox (select)
  select.selectedIndex = 0;
  adicionaTrocaCor();
}

function backspace() {
  visor.value = visor.value.slice(0, -1);
}

function calculoTemperaturaCelsius() {
  resultadoCelsius.value = Number(visor.value).toFixed(2);
  resultadoFahrenheit.value = ((Number(visor.value) * 9) / 5 + 32).toFixed(2);
  resultadoKelvin.value = (Number(visor.value) + 273.15).toFixed(2);
}

function calculoTemperaturaFahrenheit() {
  resultadoCelsius.value = (((Number(visor.value) - 32) * 5) / 9).toFixed(2);
  resultadoFahrenheit.value = Number(visor.value).toFixed(2);
  resultadoKelvin.value = (
    ((Number(visor.value) - 32) * 5) / 9 +
    273.15
  ).toFixed(2);
}

function calculoTemperaturakelvin() {
  resultadoCelsius.value = (Number(visor.value) - 273.15).toFixed(2);
  resultadoFahrenheit.value = (
    ((Number(visor.value) - 273.15) * 9) / 5 +
    32
  ).toFixed(2);
  resultadoKelvin.value = Number(visor.value).toFixed(2);
}
