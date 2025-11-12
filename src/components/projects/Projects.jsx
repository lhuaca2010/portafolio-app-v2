import React, { useState, useRef } from 'react';
import ProjectCard from './project-card';
import { ProjectData } from '../../data/projects';
import Separator from '../../containers/common/separator/Separator';
import Slider from '../Slider/Slider';
import './projects.css';

function Projects() {
  const data = ProjectData;
  return (
    <>
      <div className="projects">
        <Separator />
        <label className="section-title">Proyectos & Certificado</label>
        <p>
          Todos los días me dediqué a construir algo a partir de lo que aprendí, a continuación hay{' '}
          <br /> una lista de sitios web que hice últimamente, aplicando las buenas prácticas de
          desarrollo de software.
        </p>

        <div>
          {data.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>

        <button onClick={() => window.open('https://github.com/lhuaca2010', '_blank')}>
          Ver más
        </button>
      </div>
      <Slider />
    </>
  );
}

export default Projects;
