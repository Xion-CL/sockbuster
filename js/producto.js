// producto.js - Modelo de dominio
class Producto {
    constructor(id, nombre, descripcion, precio, stock, tallas, imagenURL, categoria, obra) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.tallas = tallas;
        this.imagenURL = imagenURL;
        this.categoria = categoria;
        this.obra = obra;
    }

    disponible() {
        return this.stock > 0;
    }

    aplicarDescuento(porcentaje) {
        this.precio = this.precio * (1 - porcentaje / 100);
    }

    toString() {
        return `${this.nombre} - $${this.precio} (${this.categoria})`;
    }
}