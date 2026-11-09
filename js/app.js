// app.js - Orquestador POO
class App {
    constructor() {
        this.carrito = new Carrito();
        this.catalogo = new Catalogo(CATALOGO_INICIAL);
    }

    init() {
        this.catalogo.renderizarFiltros();
        this.catalogo.renderizarProductos();
        this.renderCarrito();
    }

    agregarAlCarrito(idProducto) {
        const prod = CATALOGO_INICIAL.find(p => p.id === idProducto);
        if (prod) {
            this.carrito.agregarProducto(prod);
            this.renderCarrito();
            alert(`✅ "${prod.nombre}" agregado al carrito`);
        }
    }

    renderCarrito() {
        this.carrito.renderizar();
    }

    toggleCarrito() {
        const panel = document.getElementById("cart-panel");
        if (panel) {
            panel.classList.toggle("open");
        }
    }

    checkout() {
        if (this.carrito.items.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }
        const resumen = this.carrito.generarResumenPedido();
        alert(`🎉 ¡Pedido confirmado!\n\nID: ${resumen.idPedido}\nFecha: ${resumen.fecha}\nTotal: $${resumen.total}\n\n¡Gracias por tu compra en Sockbuster!`);
        this.renderCarrito();
        this.toggleCarrito();
    }
}

// Inicialización
const app = new App();
document.addEventListener("DOMContentLoaded", () => app.init());