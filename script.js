const produtos = [
 {nome:"Exemplo — Organizador",categoria:"cozinha",icone:"🍴",descricao:"Espaço reservado para um produto da categoria Cozinha.",preco:"Sob consulta"},
 {nome:"Exemplo — Suporte",categoria:"banheiro",icone:"🧼",descricao:"Espaço reservado para um produto da categoria Banheiro.",preco:"Sob consulta"},
 {nome:"Exemplo — Decoração",categoria:"sala",icone:"🛋️",descricao:"Espaço reservado para um produto da categoria Sala.",preco:"Sob consulta"},
 {nome:"Exemplo — Organizador",categoria:"quarto",icone:"🛏️",descricao:"Espaço reservado para um produto da categoria Quarto.",preco:"Sob consulta"},
 {nome:"Brinquedos 3D",categoria:"brinquedos",icone:"🧩",descricao:"Brinquedos e peças criativas produzidas em impressão 3D.",preco:"Sob consulta"},
 {nome:"Chaveiros Personalizados",categoria:"chaveiros",icone:"🔑",descricao:"Chaveiros com nomes, logos, temas e modelos personalizados.",preco:"Sob consulta"},
 {nome:"Miniaturas Personalizadas",categoria:"miniaturas",icone:"🧍",descricao:"Bonequinhos e miniaturas personalizados, inclusive inspirados na aparência da pessoa a partir de referências.",preco:"Sob consulta"},
 {nome:"Natal em 3D",categoria:"natal",icone:"🎄",descricao:"Enfeites, lembranças, nomes, decoração e presentes personalizados para o Natal.",preco:"Sob consulta"},
 {nome:"Halloween em 3D",categoria:"halloween",icone:"🎃",descricao:"Decorações, lembrancinhas e peças temáticas personalizadas para o Halloween.",preco:"Sob consulta"},
 {nome:"Aniversários Personalizados",categoria:"aniversarios",icone:"🎂",descricao:"Topos, lembrancinhas, nomes, chaveiros e peças personalizadas para aniversários.",preco:"Sob consulta"},
 {nome:"Utilitários 3D",categoria:"utilitarios",icone:"🧰",descricao:"Peças úteis e soluções práticas para o dia a dia.",preco:"Sob consulta"}
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