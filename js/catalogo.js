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
    new Producto(1, "Calcetín Stranger Things", "Diseño inspirado en el Upside Down - Hellfire Club", 5990, 15, ["S", "M", "L"], "https://m.media-amazon.com/images/I/71QyNqKzURL._AC_SL1500_.jpg", "Terror80s", "Stranger Things"),
    new Producto(2, "Calcetín Star Wars", "Logo rebelde con R2-D2 y C-3PO", 6490, 20, ["M", "L", "XL"], "https://m.media-amazon.com/images/I/81vK8xJxURL._AC_UL1500_.jpg", "CienciaFiccion", "Star Wars"),
    new Producto(3, "Calcetín Breaking Bad", "Fórmula Heisenberg - Diseño amarillo", 6990, 10, ["S", "M", "L"], "https://m.media-amazon.com/images/I/71wZ8xKzURL._AC_SL1500_.jpg", "SeriesDrama", "Breaking Bad"),
    new Producto(4, "Calcetín Studio Ghibli", "Totoro bordado - Mi Vecino Totoro", 7490, 8, ["M", "L"], "https://m.media-amazon.com/images/I/81pL9xKzURL._AC_SL1500_.jpg", "Animacion", "Mi Vecino Totoro"),
    new Producto(5, "Calcetín IT Pennywise", "Globo rojo terrorífico - Pennywise", 5990, 12, ["S", "M", "L", "XL"], "https://m.media-amazon.com/images/I/71aB9xKzURL._AC_SL1500_.jpg", "Terror80s", "IT"),
    new Producto(6, "Calcetín Matrix", "Código verde digital - Digital Rain", 6490, 18, ["M", "L"], "https://m.media-amazon.com/images/I/71cD8xKzURL._AC_SL1500_.jpg", "CienciaFiccion", "Matrix"),
    new Producto(7, "Calcetín Game of Thrones", "Stark direwolf - Casa Lannister", 7990, 6, ["S", "M", "L"], "https://m.media-amazon.com/images/I/71eF9xKzURL._AC_SL1500_.jpg", "SeriesDrama", "Game of Thrones"),
    new Producto(8, "Calcetín Dragon Ball Z", "Goku Super Saiyan - Naranja", 6990, 25, ["S", "M", "L", "XL"], "https://m.media-amazon.com/images/I/71gH0xKzURL._AC_SL1500_.jpg", "Animacion", "Dragon Ball Z")
];