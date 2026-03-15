import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TimelineItem({ item, index, isVisible }) {
  return (
    <div
      className={`relative flex items-start reveal ${isVisible ? "visible" : ""} stagger-${index + 1}`}
    >
      {/* Timeline Icon */}
      <div
        className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}
      >
        <FontAwesomeIcon icon={item.icon} className="text-lg sm:text-xl" />
      </div>

      {/* Timeline Content */}
      <div className="ml-4 sm:ml-8 flex-1">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:border-transparent hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-gray-500">
                {item.subtitle}
              </p>
            </div>
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg self-start whitespace-nowrap">
              {item.year}
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
