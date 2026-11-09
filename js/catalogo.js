// catalogo.js - Datos del catálogo y lógica de renderizado

// Catálogo inicial con imágenes reales
const CATALOGO_INICIAL = [
    new Producto(1, "Calcetín Stranger Things", "Diseño inspirado en el Upside Down - Hellfire Club", 5990, 15, ["S", "M", "L"], "https://images.unsplash.com/photo-1560769629-9fa4f4a6b38d?w=400&h=300&fit=crop", "Terror80s", "Stranger Things"),
    new Producto(2, "Calcetín Star Wars", "Logo rebelde con R2-D2 y C-3PO", 6490, 20, ["M", "L", "XL"], "https://images.unsplash.com/photo-1611672511754-61d641049a71?w=400&h=300&fit=crop", "CienciaFiccion", "Star Wars"),
    new Producto(3, "Calcetín Breaking Bad", "Fórmula Heisenberg - Diseño amarillo", 6990, 10, ["S", "M", "L"], "https://images.unsplash.com/photo-1535025639604-9a804c092faa?w=400&h=300&fit=crop", "SeriesDrama", "Breaking Bad"),
    new Producto(4, "Calcetín Studio Ghibli", "Totoro bordado - Mi Vecino Totoro", 7490, 8, ["M", "L"], "https://images.unsplash.com/photo-1581853000499-279fd7d8f8d4?w=400&h=300&fit=crop", "Animacion", "Mi Vecino Totoro"),
    new Producto(5, "Calcetín IT Pennywise", "Globo rojo terrorífico - Pennywise", 5990, 12, ["S", "M", "L", "XL"], "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=300&fit=crop", "Terror80s", "IT"),
    new Producto(6, "Calcetín Matrix", "Código verde digital - Digital Rain", 6490, 18, ["M", "L"], "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", "CienciaFiccion", "Matrix"),
    new Producto(7, "Calcetín Game of Thrones", "Stark direwolf - Casa Lannister", 7990, 6, ["S", "M", "L"], "https://images.unsplash.com/photo-1534447677731-be2aa4d2a64b?w=400&h=300&fit=crop", "SeriesDrama", "Game of Thrones"),
    new Producto(8, "Calcetín Dragon Ball Z", "Goku Super Saiyan - Naranja", 6990, 25, ["S", "M", "L", "XL"], "https://images.unsplash.com/photo-1568213816046-0ee1dc454645?w=400&h=300&fit=crop", "Animacion", "Dragon Ball Z")
];

// Clase Catalogo - Controlador de filtros y renderizado
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