// carrito.js - Gestión del carrito de compras
class ItemCarrito {
    constructor(producto, cantidad = 1) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    
    get subtotal() {
        return this.producto.precio * this.cantidad;
    }
}

class Carrito {
    constructor() {
        this.items = [];
        this.idCarrito = Date.now();
    }

    agregarProducto(producto, cantidad = 1) {
        const existente = this.items.find(i => i.producto.id === producto.id);
        if (existente) {
            existente.cantidad += cantidad;
        } else {
            this.items.push(new ItemCarrito(producto, cantidad));
        }
    }

    modificarCantidad(idProducto, nuevaCantidad) {
        const item = this.items.find(i => i.producto.id === idProducto);
        if (item) {
            if (nuevaCantidad <= 0) {
                this.eliminarProducto(idProducto);
            } else {
                item.cantidad = nuevaCantidad;
            }
        }
    }

    eliminarProducto(idProducto) {
        this.items = this.items.filter(i => i.producto.id !== idProducto);
    }

    calcularTotal() {
        return this.items.reduce((acc, i) => acc + i.subtotal, 0);
    }

    generarResumenPedido() {
        const idPedido = "PED-" + Date.now();
        const resumen = {
            idPedido: idPedido,
            fecha: new Date().toLocaleString(),
            items: this.items.map(i => ({
                nombre: i.producto.nombre,
                cantidad: i.cantidad,
                subtotal: i.subtotal
            })),
            total: this.calcularTotal()
        };
        this.items = [];
        return resumen;
    }

    renderizar() {
        const cont = document.getElementById("cart-items");
        if (!cont) return;
        
        cont.innerHTML = "";
        
        if (this.items.length === 0) {
            cont.innerHTML = "<p style='padding: 1rem; text-align: center;'>Tu carrito está vacío 🧦</p>";
            document.getElementById("cart-total").textContent = "Total: $0";
            return;
        }

        this.items.forEach(item => {
            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <div>
                    <strong>${item.producto.nombre}</strong><br>
                    <small>$${item.producto.precio} x ${item.cantidad}</small>
                </div>
                <div>
                    <button onclick="app.carrito.modificarCantidad(${item.producto.id}, ${item.cantidad - 1}); app.renderCarrito()" style="padding: 2px 8px; margin: 2px;">-</button>
                    <button onclick="app.carrito.modificarCantidad(${item.producto.id}, ${item.cantidad + 1}); app.renderCarrito()" style="padding: 2px 8px; margin: 2px;">+</button>
                    <button onclick="app.carrito.eliminarProducto(${item.producto.id}); app.renderCarrito()" style="padding: 2px 8px; margin: 2px;">🗑</button>
                </div>
            `;
            cont.appendChild(div);
        });
        
        document.getElementById("cart-total").textContent = `Total: $${this.calcularTotal()}`;
    }
}