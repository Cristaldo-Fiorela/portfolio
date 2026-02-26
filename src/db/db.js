import kharonImg from '/src/assets/image/kharon_mockup.gif'
import cafeImg from '/src/assets/image/cafe_mockup.gif'
import crudImg from '/src/assets/image/crud_mockup.gif'


const projects = [
  {
    "image": kharonImg,
    "name": "Kharon Mobile Banco App",
    "tech": ["java", "android", "mvc", "figma"],
    "github": "https://github.com/Cristaldo-Fiorela/kharon_mobile",
    "description": "App bancaria simulada para Android. Desarrollada desde boceto en papel hasta implementación con arquitectura MVC, pasando por diseño en Figma y modelado de entidades.",
    "id": 1
  },
  {
    "image": cafeImg,
    "name": "Panel Café",
    "tech": ["node.js", "express", "mysql", "javascript", "html", "css"],
    "github": "https://github.com/Cristaldo-Fiorela/panel_cafe_GPI_2A",
    "description": "Sistema de gestión para cafetería con CRUD completo y control de roles de usuario. Permite administrar productos, pedidos y accesos desde un panel de administración.",
    "id": 2
  },
  {
    "image": crudImg,
    "name": "Panel de Administración InnovaTech",
    "tech": ["node.js", "express", "mysql", "javascript", "html", "css"],
    "github": "https://github.com/Cristaldo-Fiorela/GPI_2A_CRD",
    "description": "Módulo de administración de una app web colaborativa. Incluye CRUD de integrantes, gestión de mensajes de contacto y acceso restringido por roles. Desarrollado en equipo con arquitectura REST API.",
    "id": 3
  }
]

export default projects;