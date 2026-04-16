import kharonImg from '/src/assets/image/kharon_mockup.gif'
import cafeImg from '/src/assets/image/cafe_mockup.gif'
import crudImg from '/src/assets/image/crud_mockup.gif'

const me = {
  "id": 1,
  "name": "Fiorela Cristaldo",
  "job": "Desarrolladora Fullstack",
  "available": true,
  "ubication": "Misiones, Argentina",
  "mail": "cristaldofiorela@gmail.com",
  "about": {
    "ingles": "",
    "espaniol": "Me apasiona pensar los sistemas antes de escribir una línea: modelar la base de datos, diseñar la arquitectura, entender el problema de raíz. Desarrolladora Fullstack con +2 años de experiencia, stack moderno (React, Next.js, Node.js, Java) y una curiosidad que no se apaga. Autodidacta por naturaleza, pragmática en la ejecución. Inglés C1"
  },
  "skills": [
    {
      "front": [
        { "id": 1, "name": "HTML", "icon": "skill-icons:html" },
        { "id": 2, "name": "CSS", "icon": "skill-icons:css" },
        { "id": 3, "name": "JavaScript", "icon": "skill-icons:javascript" },
        { "id": 4, "name": "TypeScript", "icon": "skill-icons:typescript" },
        { "id": 5, "name": "React.js", "icon": "logos:react" },
        { "id": 6, "name": "Tailwind", "icon": "devicon:tailwindcss" },
        { "id": 7, "name": "MUI", "icon": "logos:material-ui" }
      ],
      "back": [
        { "id": 1, "name": "SQL", "icon": "logos:mysql" },
        { "id": 2, "name": "NoSQL", "icon": "vscode-icons:file-type-sql" },
        { "id": 3, "name": "Java", "icon": "devicon:java" },
        { "id": 4, "name": "Node.js", "icon": "devicon:nodejs" },
        { "id": 5, "name": "MongoDB", "icon": "vscode-icons:file-type-mongo" }
      ],
      "tools": [
        { "id": 1, "name": "Git", "icon": "devicon:git" },
        { "id": 2, "name": "GitHub", "icon": "fluent-mdl2:git-hub-logo" },
        { "id": 3, "name": "Patrones de diseño", "icon": "eos-icons:patterns" },
        { "id": 4, "name": "Arquitectura", "icon": "carbon:ibm-global-storage-architecture" }
      ]
    }
  ]
}

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

const certifications = [
  {
    id: 1,
    icon: "material-symbols:language",
    date: "dic 2015",
    title: "Examination for the Certificate of Competency in English",
    certificationProvider: "University of Michigan",
    link: "https://drive.google.com/file/d/1s_b-DhGGkDslZpQIIIBFC341iE8OcVzT/view"
  },
  {
    id: 2,
    icon: "material-symbols:language",
    date: "abr 2023",
    title: "EF SET English Certificate 66/100 (C1 Advanced)",
    certificationProvider: "EF SET",
    link: "https://cert.efset.org/N7W5pV"
  },
];

export {
  projects,
  certifications,
  me
};