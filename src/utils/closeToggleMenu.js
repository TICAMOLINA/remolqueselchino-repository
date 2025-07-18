      // Funcion para cerrar menú una vez seleccionada una página:
    const closeToggleMenu = () => {
        const menuCheck = document.getElementById('menu')
        if (menuCheck) {
            menuCheck.checked = false
        }
    }

    export default closeToggleMenu