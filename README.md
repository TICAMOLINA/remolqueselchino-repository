
# 🚗 Proyecto Web de Servicio de Grúa

Este proyecto es una página web desarrollada en **React**, pensada para brindar información y contacto rápido con un servicio de grúa. La estructura está diseñada para ser responsive y fácilmente adaptable a otras ramas del rubro.

---

## 🧩 Características principales

- Navegación por secciones: Inicio, Nosotros, Contacto.
- Header con menú toggle animado que se transforma en cruz.
- Efecto de transición difuminado entre páginas usando **Framer Motion**.
- Estilos responsivos aplicados con **breakpoints en 576px y 992px** para adaptar el diseño según el tamaño del dispositivo.
- Footer completo con redes y medios de contacto.
- Botón flotante de WhatsApp para contacto directo.

---

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- SCSS
- HTML5 / CSS3
- Vite

---

## 🚀 Instalación y uso

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-del-proyecto.git
   ```
2. Instalá las dependencias:
   ```bash
   npm install
   ```
3. Iniciá el entorno de desarrollo:
   ```bash
   npm run dev
   ```

---

## ✨ Cómo agregar una nueva página con animación

1. Crear el componente en `/pages/NuevaPagina.jsx`.
2. Envolver el contenido con `motion.div` y definir las variantes `initial`, `animate` y `exit` (por ejemplo, fade in/out).
3. Agregar la ruta correspondiente en `routes/Routes.jsx`.
4. ¡Listo! Las transiciones se aplican automáticamente gracias a `AnimatePresence`.

---

## 📱 Diseño responsivo

- **<576px (Mobile):** Layout vertical, menú colapsable, diseño compacto.
- **>576px (Tablet):** Elementos más espaciados, ajustes visuales.
- **>992px (Desktop):** Layout ampliado, más columnas, contenido mejor distribuido.

---

## 📌 Pendientes o ideas futuras

- Integración con backend para formulario de contacto.
- Sección de testimonios o preguntas frecuentes.
- Animaciones más avanzadas con scroll (parallax, fade-up).
- Modo oscuro (dark mode).

---

## 🧑‍💻 Autor

Desarrollado por **Mauricio "Tica" Molina**  
📧 tica.molina57@gmail.com

---

![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SCSS Badge](https://img.shields.io/badge/SCSS-hotpink?style=for-the-badge&logo=sass&logoColor=white)
![Framer Motion Badge](https://img.shields.io/badge/Framer--Motion-000?style=for-the-badge&logo=framer&logoColor=white)
