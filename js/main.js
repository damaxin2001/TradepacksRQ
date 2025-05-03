const locais = [
  "Riverend", "Margrove", "Orca Bay", "Seabreeze", "Tarmire",
  "Darzuac", "Gilead", "Glaceforde", "Ravencrest", "Defiance", "Dras Ashar"
];

const distancias = {
  "Riverend|Riverend": 0,
  "Riverend|Margrove": 1008,
  "Riverend|Orca Bay": 1336,
  "Riverend|Seabreeze": 2228,
  "Riverend|Tarmire": 1299,
  "Riverend|Darzuac": 956,
  "Riverend|Gilead": 2316,
  "Riverend|Glaceforde": 1928,
  "Riverend|Ravencrest": 650,
  "Riverend|Defiance": 493,
  "Riverend|Dras Ashar": 1954,

  "Margrove|Riverend": 1008,
  "Margrove|Margrove": 0,
  "Margrove|Orca Bay": 1205,
  "Margrove|Seabreeze": 1789,
  "Margrove|Tarmire": 1437,
  "Margrove|Darzuac": 1618,
  "Margrove|Gilead": 2185,
  "Margrove|Glaceforde": 920,
  "Margrove|Ravencrest": 603,
  "Margrove|Defiance": 1501,
  "Margrove|Dras Ashar": 2616,

  "Orca Bay|Riverend": 1336,
  "Orca Bay|Margrove": 1205,
  "Orca Bay|Orca Bay": 0,
  "Orca Bay|Seabreeze": 980,
  "Orca Bay|Tarmire": 1520,
  "Orca Bay|Darzuac": 1701,
  "Orca Bay|Gilead": 1068,
  "Orca Bay|Glaceforde": 1829,
  "Orca Bay|Ravencrest": 686,
  "Orca Bay|Defiance": 1829,
  "Orca Bay|Dras Ashar": 2699,

  "Seabreeze|Riverend": 2228,
  "Seabreeze|Margrove": 1789,
  "Seabreeze|Orca Bay": 980,
  "Seabreeze|Seabreeze": 0,
  "Seabreeze|Tarmire": 2412,
  "Seabreeze|Darzuac": 2593,
  "Seabreeze|Gilead": 1300,
  "Seabreeze|Glaceforde": 1511,
  "Seabreeze|Ravencrest": 1578,
  "Seabreeze|Defiance": 2721,
  "Seabreeze|Dras Ashar": 3591,

  "Tarmire|Riverend": 1299,
  "Tarmire|Margrove": 1437,
  "Tarmire|Orca Bay": 1520,
  "Tarmire|Seabreeze": 2412,
  "Tarmire|Tarmire": 0,
  "Tarmire|Darzuac": 991,
  "Tarmire|Gilead": 2500,
  "Tarmire|Glaceforde": 2201,
  "Tarmire|Ravencrest": 834,
  "Tarmire|Defiance": 1630,
  "Tarmire|Dras Ashar": 1989,

  "Darzuac|Riverend": 956,
  "Darzuac|Margrove": 1618,
  "Darzuac|Orca Bay": 1701,
  "Darzuac|Seabreeze": 2593,
  "Darzuac|Tarmire": 991,
  "Darzuac|Darzuac": 0,
  "Darzuac|Gilead": 2681,
  "Darzuac|Glaceforde": 2382,
  "Darzuac|Ravencrest": 1015,
  "Darzuac|Defiance": 1287,
  "Darzuac|Dras Ashar": 1233,

  "Gilead|Riverend": 2316,
  "Gilead|Margrove": 2185,
  "Gilead|Orca Bay": 1068,
  "Gilead|Seabreeze": 1300,
  "Gilead|Tarmire": 2500,
  "Gilead|Darzuac": 2681,
  "Gilead|Gilead": 0,
  "Gilead|Glaceforde": 2151,
  "Gilead|Ravencrest": 1666,
  "Gilead|Defiance": 2809,
  "Gilead|Dras Ashar": 3679,

  "Glaceforde|Riverend": 1928,
  "Glaceforde|Margrove": 920,
  "Glaceforde|Orca Bay": 1831,
  "Glaceforde|Seabreeze": 1511,
  "Glaceforde|Tarmire": 2201,
  "Glaceforde|Darzuac": 2382,
  "Glaceforde|Gilead": 2151,
  "Glaceforde|Glaceforde": 0,
  "Glaceforde|Ravencrest": 1367,
  "Glaceforde|Defiance": 2421,
  "Glaceforde|Dras Ashar": 3380,

  "Ravencrest|Riverend": 650,
  "Ravencrest|Margrove": 603,
  "Ravencrest|Orca Bay": 686,
  "Ravencrest|Seabreeze": 1578,
  "Ravencrest|Tarmire": 834,
  "Ravencrest|Darzuac": 1015,
  "Ravencrest|Gilead": 1666,
  "Ravencrest|Glaceforde": 1367,
  "Ravencrest|Ravencrest": 0,
  "Ravencrest|Defiance": 1143,
  "Ravencrest|Dras Ashar": 2013,

  "Defiance|Riverend": 493,
  "Defiance|Margrove": 1501,
  "Defiance|Orca Bay": 1829,
  "Defiance|Seabreeze": 2721,
  "Defiance|Tarmire": 1630,
  "Defiance|Darzuac": 1287,
  "Defiance|Gilead": 2809,
  "Defiance|Glaceforde": 2421,
  "Defiance|Ravencrest": 1143,
  "Defiance|Defiance": 0,
  "Defiance|Dras Ashar": 2285,

  "Dras Ashar|Riverend": 1954,
  "Dras Ashar|Margrove": 2616,
  "Dras Ashar|Orca Bay": 2699,
  "Dras Ashar|Seabreeze": 3591,
  "Dras Ashar|Tarmire": 1989,
  "Dras Ashar|Darzuac": 1233,
  "Dras Ashar|Gilead": 3679,
  "Dras Ashar|Glaceforde": 3380,
  "Dras Ashar|Ravencrest": 2013,
  "Dras Ashar|Defiance": 2285,
  "Dras Ashar|Dras Ashar": 0,
};

// Garantir que todas as chaves sejam simétricas
const distanciasNormalizadas = {};

for (const chave in distancias) {
  const [a, b] = chave.split("|");
  const chaveNormal = [a, b].sort().join("|");
  distanciasNormalizadas[chaveNormal] = distancias[chave];
}

Object.assign(distancias, distanciasNormalizadas);

let tradepacks = {};

document.addEventListener("DOMContentLoaded", async () => {
  // Carrega os tradepacks do ficheiro JSON
  try {
    const response = await fetch("js/tradepacks.json");
    tradepacks = await response.json();

    inicializarUI();
  } catch (error) {
    console.error("Erro ao carregar tradepacks.json:", error);
  }
});

function inicializarUI() {
  const partidaSel = document.getElementById("partida");
  const tradepackSel = document.getElementById("tradepack");
  const receitaContainer = document.getElementById("receitaContainer");
  const demandaTabela = document.getElementById("demandaTabela");
  const custoTotalDiv = document.getElementById("custoTotal");

  // Preencher dropdowns
  locais.forEach(local => {
    partidaSel.add(new Option(local, local));
  });

  for (const nome in tradepacks) {
    tradepackSel.add(new Option(nome, nome));
  }

  function obterChaveNormalizada(a, b) {
    return [a, b].sort().join("|");
  }

  function calcularCustoTotal() {
    const tradepack = tradepackSel.value;
    const ingredientes = Object.keys(tradepacks[tradepack].receita);
    let total = 0;
    ingredientes.forEach(item => {
      const preco = parseFloat(localStorage.getItem(`preco_${item}`)) || 0;
      total += preco * tradepacks[tradepack].receita[item];
    });
    return total;
  }

  function atualizarReceitaUI() {
    const tradepack = tradepackSel.value;
    const ingredientes = tradepacks[tradepack].receita;
    let html = "<h3>Ingredientes:</h3>";
    for (const item in ingredientes) {
      const precoKey = `preco_${item}`;
      const preco = localStorage.getItem(precoKey) || "";
      html += `
        <label>${item} (${ingredientes[item]} unidades):</label>
        <input type="number" min="0" value="${preco}" 
          onchange="localStorage.setItem('${precoKey}', this.value); atualizarTudo();">
      `;
    }
    receitaContainer.innerHTML = html;

    document.querySelectorAll('#receitaContainer input[type="number"]').forEach(input => {
      input.addEventListener('change', atualizarTudo); // Atualiza tudo sempre que um valor for alterado
    });
  }
  
  function atualizarMelhoresLucros() {
    const listaLucros = [];
    // Precisa aguardar o DOM ter os selects (serão adicionados após o primeiro render)
    const filtroPartida = document.getElementById("filtroPartida")?.value || "";
    const filtroDestino = document.getElementById("filtroDestino")?.value || "";

    // Antes de gerar o novo HTML, capture os valores atuais dos filtros (se existirem no DOM)
    const filtroPartidaValor = document.getElementById("filtroPartida")?.value || "";
    const filtroDestinoValor = document.getElementById("filtroDestino")?.value || "";


  
    for (const partida of locais) {
      if (filtroPartida && partida !== filtroPartida) continue;
      for (const nome in tradepacks) {
        const ingredientes = tradepacks[nome].receita;
        let custo = 0;
        let valido = true;
  
        for (const item in ingredientes) {
          const preco = parseFloat(localStorage.getItem(`preco_${item}`));
          if (isNaN(preco) || preco <= 0) {
            valido = false;
            break;
          }
          custo += preco * ingredientes[item];
        }
  
        if (!valido || custo === 0) continue;
  
        for (const destino of locais) {
          if (partida === destino) continue;
          if (filtroDestino && destino !== filtroDestino) continue;
  
          const key = `demanda_${nome}_${destino}`;
          const percentagem = parseFloat(localStorage.getItem(key) ?? "100");
          const chaveDistancia = obterChaveNormalizada(partida, destino);
          const tiles = distancias[chaveDistancia];
  
          if (tiles) {
            const valor = (20000 + (20 * tiles)) * (percentagem / 100);
            const lucro = valor - custo;
            listaLucros.push({
              nome,
              partida,
              destino,
              lucro
            });
          }
        }
      }
    }
  
    listaLucros.sort((a, b) => b.lucro - a.lucro);
  
    let html = `
      <h3>Top Lucros por Tradepack e Local</h3>
      <label for="filtroPartida">Filtrar Partida:</label>
      <select id="filtroPartida">
        <option value="">Todos</option>
        ${locais.map(local => `<option value="${local}" ${filtroPartidaValor === local ? "selected" : ""}>${local}</option>`).join("")}
      </select>

    
      <label for="filtroDestino">Filtrar Destino:</label>
      <select id="filtroDestino">
        <option value="">Todos</option>
        ${locais.map(local => `<option value="${local}" ${filtroDestinoValor === local ? "selected" : ""}>${local}</option>`).join("")}
      </select>
      <table>
        <tr><th>Tradepack</th><th>Partida</th><th>Destino</th><th>Lucro</th></tr>
    `;
  

  
    listaLucros.slice(0, 25).forEach(entry => {
      html += `
        <tr>
          <td>${entry.nome}</td>
          <td>${entry.partida}</td>
          <td>${entry.destino}</td>
          <td style="color: ${entry.lucro < 0 ? 'red' : 'green'}">${entry.lucro.toFixed(0)} silver</td>
        </tr>
      `;
    });
  
    html += "</table>";
    document.getElementById("melhoresLucros").innerHTML = html;

    document.getElementById("filtroPartida").addEventListener("change", atualizarMelhoresLucros);
    document.getElementById("filtroDestino").addEventListener("change", atualizarMelhoresLucros); 

  }
  
  function atualizarDemandaTabela() {
  const tradepack = tradepackSel.value;
  const partida = partidaSel.value;
  const custo = calcularCustoTotal();
  custoTotalDiv.textContent = `Custo Total: ${custo} silver`;

  let html = `
    <table>
      <tr>
        <th>Local</th>
        <th>Demanda (%)</th>
        <th>Lucro</th>
      </tr>
  `;

  locais.forEach(local => {
    const key = `demanda_${tradepack}_${local}`;
    const percentagem = parseFloat(localStorage.getItem(key) ?? "100");
    const chaveDistancia = obterChaveNormalizada(partida, local);
    const tiles = distancias[chaveDistancia];

    let valorStr = "-", lucroStr = "-";
    let lucroValor = 0;

    if (tiles) {
      const valor = (20000 + (20 * tiles)) * (percentagem / 100);
      lucroValor = valor - custo;
      valorStr = `${valor} silver`;
      lucroStr = `${lucroValor.toFixed(0)} silver`;
    }

    html += `
      <tr>
        <td>${local}</td>
        <td>
          <input type="number" min="0" value="${percentagem}" 
            onchange="localStorage.setItem('${key}', this.value); atualizarTudo();">
        </td>
        <td style="color: ${lucroValor < 0 ? 'red' : 'green'}">${lucroStr}</td>
      </tr>
    `;
  });

  html += "</table>";
  demandaTabela.innerHTML = html;

  document.querySelectorAll('#demandaTabela input[type="number"]').forEach(input => {
    input.addEventListener('change', atualizarTudo); // Atualiza tudo sempre que um valor for alterado
  });
}

  function atualizarTudo() {
    atualizarReceitaUI();
    atualizarDemandaTabela();
    atualizarMelhoresLucros();
  }
  
  
  // Eventos principais
  tradepackSel.addEventListener("change", atualizarTudo);
  partidaSel.addEventListener("change", atualizarTudo);

  // Início
  atualizarTudo();
}
