
import tennis from "../images/project/tennis.png"
import snowpro from "../images/project/snowpro.png"
import bazar from "../images/project/bazar_shop.png"

import airline from "../images/project/airline.png"
export const ProjectData = [
  {
    id: 1,
    title: `SnowPro Core Certification`,
    about:
      `Certificación en el uso de Snowflake, con enfoque en el dominio de su arquitectura, gestión de datos, seguridad, optimización de consultas y administración de recursos \n en la nube.`,

    tags: ["Snowflake concepts", "Cloud", "Database", "DDL & DML"],
    demo: "https://achieve.snowflake.com/05bd70cc-979b-49eb-bfca-3389165f0c1f#acc.s4fOgUpV",
    github: "",
    image: `${snowpro}`,

  },
  {
    id: 2,
    title: 'Airline Check-in Simulation',
    about:
      `Implementación de una API REST para la simulación de check-in de pasajeros de una aerolínea, desarrollada con Spring Boot y base de datos MySQL.`,
    tags: ['Spring boot', 'MySQL', "Data Modeling", "Postman"],
    demo: "",
    github: "https://github.com/lhuaca2010/airline-api",
    image:
      `${airline}`,
  },
  {
    id: 3,
    title: `Tennis App`,
    about:
      `Juego de tennis desarrollado con Spring Boot y React, implementando servicios REST y base de datos PostgreSQL, aplicando patrones de \n diseño para la gestión de partidos.`,

    tags: ["React", "Spring boot", "PostgreSQL", "JUnit", "JPA"],
    demo: "https://tennis-app.herokuapp.com/",
    github: "https://github.com/lhuaca2010/Tennis",
    image: `${tennis}`,

  },
  {
    id: 4,
    title: "Bazar Shop",
    about:
      `Aplicación desarrollada en React enfocada en la visualización de datos \n de ventas, pensada como base para integraciones con herramientas de \n BI. 
    `,
    tags: ["React", "Data Visualization"],
    demo: "https://bazar-shop.up.railway.app/",
    github: "https://github.com/lhuaca2010/bazar-shop-app",
    image:
      `${bazar}`,

  }


];
