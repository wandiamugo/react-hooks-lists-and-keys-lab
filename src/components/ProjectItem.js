import React from "react";

function ProjectItem({ name, about, technologies }) {
  const ProjectItems = technologies.map ((technology) => (
    <span key = {technology}>{technology}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {ProjectItems}
      </div>
    </div>
  );
}

export default ProjectItem;
