import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, description, image, tags, href }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-midnight to-navy border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 text-xs bg-white/10 text-white rounded-md"
              >
                {tag.name}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-white/10 text-white rounded-md">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        {/* View Project Button */}
        {href && (
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-sm text-aqua hover:text-mint transition-colors duration-200"
          >
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
