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
        this.categoria = categoria;   // RF01
        this.obra = obra;             // Película/Serie asociada
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

// RF01: Catálogo por colecciones temáticas
const CATALOGO_INICIAL = [
    new Producto(1, "Calcetín Strangers Things", "Diseño inspirado en el Upside Down", 5990, 15, ["S","M","L"], "https://i.imgur.com/placeholder1.png", "Terror80s", "Stranger Things"),
    new Producto(2, "Calcetín Star Wars", "Logo rebelde en negro", 6490, 20, ["M","L","XL"], "https://i.imgur.com/placeholder2.png", "CienciaFiccion", "Star Wars"),
    new Producto(3, "Calcetín Breaking Bad", "Fórmula Heisenberg", 6990, 10, ["S","M","L"], "https://i.imgur.com/placeholder3.png", "SeriesDrama", "Breaking Bad"),
    new Producto(4, "Calcetín Studio Ghibli", "Totoro bordado", 7490, 8, ["M","L"], "https://i.imgur.com/placeholder4.png", "Animacion", "Mi Vecino Totoro"),
    new Producto(5, "Calcetín IT Pennywise", "Globo rojo terrorífico", 5990, 12, ["S","M","L","XL"], "https://i.imgur.com/placeholder5.png", "Terror80s", "IT"),
    new Producto(6, "Calcetín Matrix", "Código verde digital", 6490, 18, ["M","L"], "https://i.imgur.com/placeholder6.png", "CienciaFiccion", "Matrix"),
    new Producto(7, "Calcetín Game of Thrones", "Stark direwolf", 7990, 6, ["S","M","L"], "https://i.imgur.com/placeholder7.png", "SeriesDrama", "Game of Thrones"),
    new Producto(8, "Calcetín Dragon Ball Z", "Goku Super Saiyan", 6990, 25, ["S","M","L","XL"], "https://i.imgur.com/placeholder8.png", "Animacion", "Dragon Ball Z")
];