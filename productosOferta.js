const productos = [
  { nombre: "Laptop", enOferta: true },
  { nombre: "Mouse", enOferta: false },
  { nombre: "Teclado", enOferta: true },
  { nombre: "Monitor", enOferta: false }
];

const filtrarEnOferta = (productos) => {
  return productos.filter(producto => producto.enOferta === true);
};

const productosEnOferta = filtrarEnOferta(productos);

console.log(productosEnOferta);