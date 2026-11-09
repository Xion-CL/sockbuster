// catalogo.js - Controlador de filtros y renderizado
class Catalogo {
    constructor(productos) {
        this.productos = productos;
        this.filtroActual = "Todos";
    }

    // RF01: filtrar por categoría
    filtrarPorCategoria(categoria) {
        this.filtroActual = categoria;
        if (categoria === "Todos") return this.productos;
        return this.productos.filter(p => p.categoria === categoria);
    }

    renderizarFiltros() {
        const categorias = ["Todos", "CienciaFiccion", "Terror80s", "SeriesDrama", "Animacion"];
        const cont = document.getElementById("filtros");
        if (!cont) return;
        cont.innerHTML = "";
        categorias.forEach(cat => {
            const btn = document.createElement("button");
            btn.textContent = cat;
            btn.className = cat === this.filtroActual ? "active" : "";
            btn.onclick = () => {
                this.filtroActual = cat;
                this.renderizarFiltros();
                this.renderizarProductos();
            };
            cont.appendChild(btn);
        });
    }

    renderizarProductos() {
        const cont = document.getElementById("productos-grid");
        if (!cont) return;
        cont.innerHTML = "";
        const lista = this.filtrarPorCategoria(this.filtroActual);
        lista.forEach(p => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${p.imagenURL}" alt="${p.nombre}" onerror="this.src='https://via.placeholder.com/300x200?text=Sockbuster'">
                <div class="card-body">
                    <h3>${p.nombre}</h3>
                    <p>${p.descripcion}</p>
                    <p><em>Inspirado en: ${p.obra}</em></p>
                    <p class="price">$${p.precio}</p>
                    <p>Stock: ${p.stock} | Tallas: ${p.tallas.join(", ")}</p>
                    <span class="badge">${p.categoria}</span><br><br>
                    <button class="btn" ${!p.disponible() ? 'disabled' : ''}
                        onclick="app.agregarAlCarrito(${p.id})">
                        ${p.disponible() ? 'Agregar al carrito' : 'Sin stock'}
                    </button>
                </div>`;
            cont.appendChild(card);
        });
    }
}