const btn = document.querySelector("boton")
btn.addEventListener("click", () => {
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto al carrito agregado correctamente',
    showConfirmButton: false,
    timer: 1500
  })
}
) 

    

