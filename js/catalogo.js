// catalogo.js - Catálogo inicial y controlador

// Clase Catalogo - Controlador de filtros y renderizado
class Catalogo {
    constructor(productos) {
        this.productos = productos;
        this.filtroActual = "Todos";
    }

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
        
        if (lista.length === 0) {
            cont.innerHTML = "<p style='text-align: center; padding: 2rem; color: #666;'>No hay productos disponibles en esta categoría</p>";
            return;
        }
        
        lista.forEach(p => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${p.imagenURL}" alt="${p.nombre}" onerror="this.src='https://via.placeholder.com/400x300?text=Sockbuster'">
                <div class="card-body">
                    <h3>${p.nombre}</h3>
                    <p>${p.descripcion}</p>
                    <p><em>Inspirado en: ${p.obra}</em></p>
                    <p class="price">$${p.precio}</p>
                    <p>Stock: ${p.stock} | Tallas: ${p.tallas.join(", ")}</p>
                    <span class="badge">${p.categoria}</span><br><br>
                    <button class="btn" ${!p.disponible() ? 'disabled' : ''} onclick="app.agregarAlCarrito(${p.id})">
                        ${p.disponible() ? 'Agregar al carrito' : 'Sin stock'}
                    </button>
                </div>
            `;
            cont.appendChild(card);
        });
    }
}

// RF01: Catálogo por colecciones temáticas
const CATALOGO_INICIAL = [
    new Producto(1, "Calcetín Stranger Things", "Diseño inspirado en el Upside Down - Hellfire Club", 5990, 15, ["S", "M", "L"], 
        "https://i5.walmartimages.cl/asr/ff1f3f14-6922-430e-9347-03a50e8bb18c.0612af126845392fd8e4c05a8a7765a8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff", "Terror80s", "Stranger Things"),
    
    new Producto(2, "Calcetín Star Wars", "Logo rebelde con R2-D2 y C-3PO", 6490, 20, ["M", "L", "XL"], 
        "https://m.media-amazon.com/images/I/71CtVabhPlL._AC_UY1000_.jpg", "CienciaFiccion", "Star Wars"),  // alternativa (Ripley bloquea)
    
    new Producto(3, "Calcetín Breaking Bad", "Fórmula Heisenberg - Diseño amarillo", 6990, 10, ["S", "M", "L"], 
        "https://theprintsocks.cl/cdn/shop/files/BRAKINGBAD.jpg?v=1694627598&width=1445", "SeriesDrama", "Breaking Bad"),
    
    new Producto(4, "Calcetín Studio Ghibli", "Totoro bordado - Mi Vecino Totoro", 7490, 8, ["M", "L"], 
        "https://spacestore.cl/cdn/shop/files/26110485_1.jpg?v=1790057306&width=1200", "Animacion", "Mi Vecino Totoro"),
    
    new Producto(5, "Calcetín IT Pennywise", "Globo rojo terrorífico - Pennywise", 5990, 12, ["S", "M", "L", "XL"], 
        "https://theprintsocks.cl/cdn/shop/files/CalPennM00011.jpg?v=1694721676", "Terror80s", "IT"),
    
    new Producto(6, "Calcetín Matrix", "Código verde digital - Digital Rain", 6490, 18, ["M", "L"], 
        "https://socksmarket.es/wp-content/uploads/2024/10/Shoot0293-copia-2-1.jpg", "CienciaFiccion", "Matrix"),
    
    new Producto(7, "Calcetín Game of Thrones", "Stark direwolf - Casa Lannister", 7990, 6, ["S", "M", "L"], 
        "https://m.media-amazon.com/images/I/71CtVabhPlL._AC_UY1000_.jpg", "SeriesDrama", "Game of Thrones"),
    
    new Producto(8, "Calcetín Dragon Ball Z", "Goku Super Saiyan - Naranja", 6990, 25, ["S", "M", "L", "XL"], 
        "https://collabo-cafe.com/wp-content/uploads/dragonball-fashion-shimamura-socks-2026-eyecatch.jpg", "Animacion", "Dragon Ball Z")  // alternativa (Ripley bloquea)
];