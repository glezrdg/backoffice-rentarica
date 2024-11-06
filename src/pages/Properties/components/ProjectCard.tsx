import { API_URL } from "../../../utility/constants";
import React from "react";
import { Link } from "react-router-dom";
import { Property } from "../models/property.model";
import { usePropertyState } from "../context";

export interface IProjectCardProps {
  project: Property;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const { setProperty } = usePropertyState();
  return (
    <Link
      to={`/admin/propiedades/${project._id}`}
      onClick={() => setProperty(project)}
      className="grid relative rounded-lg bg-slate-100 w-full overflow-hidden super-shadow"
    >
      <div className="absolute right-5 top-2 bg-slate-800 p-2 px-3 rounded-md text-xs text-[#fcbd0f] uppercase font-semibold">
        {project?.category}
      </div>
      {/* IMAGE */}
      <div className="mb-4">
        <img
          className="h-[200px] w-full object-cover"
          src={API_URL + "uploads/" + project?.images[0]}
        />
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-2">
        <h2 className="font-bold text-base mb-2 text-slate-800">
          {project?.title}
        </h2>
        <div className="text-slate-600">
          <i className="pi pi-map-marker mr-2" />
          <span>{project?.province}</span>
        </div>
        <div
          className={`grid grid-cols-4 w-full my-3 bg-white rounded-lg p-2 shadow-md text-slate-700`}
        >
          <div className="text-center">
            <p>Bed</p>
            <p className={`text-slate-800`}>{project.rooms}</p>
          </div>
          <div className="text-center">
            <p>Bath</p>
            <p className={`text-slate-800`}>{project.bathrooms}</p>
          </div>
          <div className="text-center">
            <p>Floors</p>
            <p className={`text-slate-800`}>{project.floors}</p>
          </div>
          <div className="text-center">
            <p>Size</p>
            <p className={`text-slate-800`}>{project.size}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-base uppercase">
            Desde USD${project.price}
          </p>
          <p className="bg-yellow-400 px-2 h-9 leading-9 rounded-sm text-black">
            202327
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
