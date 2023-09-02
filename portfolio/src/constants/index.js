import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    postgres,
    nextjs,
    henry,
    dealup,
    foodpi,
    rickandmorty,
    gifexpertapp
} from "../assets/assets";

export const navLinks = [
    {
        id: "about",
        title: "Acerca De Mi",
    },
    {
        id: "work",
        title: "Trabajos",
    },
    {
        id: "contact",
        title: "Contacto",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Nextjs",
        icon: nextjs,
    },
    {
        name: "PostgreSQL",
        icon: postgres,
    },
];

const experiences = [
    {
        title: "Front-End Developer",
        company_name: "Henry",
        icon: henry,
        iconBg: "black",
        date: "March 2020 - April 2021",
        points: [
            "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Implementar un diseño receptivo y garantizar la compatibilidad entre navegadores.",
            "Participar en revisiones de código y proporcionar comentarios constructivos a otros desarrolladores",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Deal-Up!",
        description:
            "Web dedicada al impulso de ideas/proyectos en los cuales un usuario emprendedor puede publicar su proyecto y el usuario inversor, aportar al mismo.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: dealup,
        source_code_link: "https://github.com/ramifassetta/DealUp",
    },
    {
        name: "PI Food",
        description:
            "Aplicacion web en la cual puedes buscar varias recetas de comidas, filtrar y ver su detalle ya sean ingredientes, tipo de comida, etc.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: foodpi,
        source_code_link: "https://github.com/ramifassetta/Henry-Food-PI",
    },
    {
        name: "Rick and Morty",
        description:
            "Aplicacion Web de Rick and Morty en la cual puedes buscar los personajes de la serie, filtrarlos, guardarlos agregandolos como favoritos y demás.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: rickandmorty,
        source_code_link: "https://github.com/ramifassetta/Rick_And_Morty",
    },
    {
        name: "Gif Expert App",
        description:
            "Pequeña aplicacion Web en la cual puedes buscar una cantidad de 10 gifs de la categoria que desees.",
        tags: [
            {
                name: "vite",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: gifexpertapp,
        source_code_link: "https://github.com/ramifassetta/gif-expert-app",
    },
];

export { services, technologies, experiences, testimonials, projects };