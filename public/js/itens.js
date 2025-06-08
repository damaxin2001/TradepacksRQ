document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("js/tradepacks.json");
    const tradepacks = await response.json();

    const todosItens = new Set();

    for (const nome in tradepacks) {
      const receita = tradepacks[nome].receita;
      for (const item in receita) {
        todosItens.add(item);
      }
    }

    const container = document.getElementById("itensContainer");
    let html = "<table><tr><th>Item</th><th>Preço Guardado</th></tr>";

    [...todosItens].sort().forEach(item => {
      const precoKey = `preco_${item}`;
      const preco = localStorage.getItem(precoKey) || "";

      html += `
        <tr>
          <td><span class="copyable" title="Clique para copiar">${item}</span></td>
          <td>
            <input type="number" min="0" value="${preco}" 
              onchange="localStorage.setItem('${precoKey}', this.value)">
          </td>
        </tr>
      `;
    });

    html += "</table>";
    container.innerHTML = html;

    setupCopyListeners();
  } catch (err) {
    console.error("Erro ao carregar os tradepacks:", err);
  }
});

function setupCopyListeners() {
  document.querySelectorAll(".copyable").forEach(el => {
    el.style.cursor = "pointer";
    el.onclick = async () => {
      try {
        await navigator.clipboard.writeText(el.textContent);
        const original = el.textContent;
        el.textContent = "Copiado!";
        setTimeout(() => {
          el.textContent = original;
        }, 1000);
      } catch (err) {
        alert("Erro ao copiar: " + err);
      }
    };
  });
}
