const produtos = [
 {nome:"Exemplo — Organizador",categoria:"cozinha",icone:"🍴",descricao:"Espaço reservado para um produto da categoria Cozinha.",preco:"R$ 00,00"},
 {nome:"Exemplo — Suporte",categoria:"banheiro",icone:"🧼",descricao:"Espaço reservado para um produto da categoria Banheiro.",preco:"R$ 00,00"},
 {nome:"Exemplo — Decoração",categoria:"sala",icone:"🛋️",descricao:"Espaço reservado para um produto da categoria Sala.",preco:"R$ 00,00"},
 {nome:"Exemplo — Organizador",categoria:"quarto",icone:"🛏️",descricao:"Espaço reservado para um produto da categoria Quarto.",preco:"R$ 00,00"},
 {nome:"Exemplo — Brinquedo 3D",categoria:"brinquedos",icone:"🧩",descricao:"Espaço reservado para brinquedos e peças criativas.",preco:"R$ 00,00"},
 {nome:"Exemplo — Utilitário",categoria:"utilitarios",icone:"🧰",descricao:"Espaço reservado para peças úteis do dia a dia.",preco:"R$ 00,00"}
];

const grid=document.querySelector("#productGrid");
function render(filtro="todos"){
 const lista=filtro==="todos"?produtos:produtos.filter(p=>p.categoria===filtro);
 grid.innerHTML=lista.map(p=>`<article class="card">
  <div class="foto">${p.icone}</div>
  <div class="card-body"><small>${p.categoria}</small><h3>${p.nome}</h3><p>${p.descricao}</p>
  <div class="preco">${p.preco}</div>
  <a class="btn principal" target="_blank" rel="noopener" href="https://wa.me/5548991601403?text=${encodeURIComponent("Olá ede_3d! Tenho interesse em: "+p.nome)}">Tenho interesse</a></div>
 </article>`).join("");
}
render();
document.querySelectorAll("[data-filter]").forEach(el=>el.addEventListener("click",()=>{render(el.dataset.filter);}));
document.querySelector("#mostrarTodos").addEventListener("click",()=>render());
document.querySelector(".menu-btn").addEventListener("click",()=>document.querySelector("#menu").classList.toggle("aberto"));