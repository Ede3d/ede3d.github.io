const SUPABASE_URL = "https://xdceqwwpvmjqowjunqvt.supabase.co";
const SUPABASE_KEY = "sb_publishable_aw2xm8AIgS_5WyXCZAkXyg_OBiy2yCS";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const grid = document.querySelector("#productGrid");

let produtos = [];

// Busca os produtos cadastrados no Supabase
async function carregarProdutos() {
  grid.innerHTML = "<p>Carregando produtos...</p>";

  const { data, error } = await supabaseClient
    .from("produtos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    grid.innerHTML =
      "<p>Não foi possível carregar os produtos.</p>";
    return;
  }

  produtos = data || [];

  render();
}

// Mostra os produtos
function render(filtro = "todos") {

  const lista =
    filtro === "todos"
      ? produtos
      : produtos.filter(p => p.categoria === filtro);

  if (lista.length === 0) {
    grid.innerHTML =
      "<p>Nenhum produto encontrado nesta categoria.</p>";
    return;
  }

  grid.innerHTML = lista.map(p => {

    const preco = p.preco == null || p.preco === ""
  ? "Sob consulta"
  : Number(p.preco).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    
    const imagem = `
  ${p.foto ? `<img src="${p.foto}" alt="${p.nome}" style="width:100%;height:100%;object-fit:cover;">` : ""}
  ${p.video ? `<video src="${p.video}" controls playsinline style="width:100%;max-height:250px;"></video>` : ""}
  ${!p.foto && !p.video ? "📦" : ""}
`;

    const disponibilidade = p.disponivel
      ? ""
      : `<p><strong>Indisponível</strong></p>`;

    return `
      <article class="card">

        <div class="foto">
          ${imagem}
        </div>

        <div class="card-body">

          <small>${p.categoria || ""}</small>

          <h3>${p.nome || ""}</h3>

          <p>${p.descricao || ""}</p>

          <div class="preco">
            ${preco}
          </div>

          ${disponibilidade}

          ${
            p.disponivel
              ? `
                <a
                  class="btn principal"
                  target="_blank"
                  rel="noopener"
                  href="https://wa.me/5548991601403?text=${encodeURIComponent(
                    "Olá ede_3d! Tenho interesse em: " + p.nome
                  )}"
                >
                  Tenho interesse
                </a>
              `
              : ""
          }

        </div>

      </article>
    `;
  }).join("");
}


// Filtros das categorias
document.querySelectorAll("[data-filter]").forEach(el => {

  el.addEventListener("click", () => {
    render(el.dataset.filter);
  });

});


// Botão mostrar todos
const mostrarTodos = document.querySelector("#mostrarTodos");

if (mostrarTodos) {
  mostrarTodos.addEventListener("click", () => render());
}


// Menu do celular
const menuBtn = document.querySelector(".menu-btn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.querySelector("#menu")?.classList.toggle("aberto");
  });
}


// Carrega os produtos ao abrir o site
carregarProdutos();
