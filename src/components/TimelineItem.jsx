import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TimelineItem({ item, index, isVisible }) {
  return (
    <div
      className={`relative flex items-start reveal ${isVisible ? "visible" : ""} stagger-${index + 1}`}
    >
      {/* Timeline Icon */}
      <div
        className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/10 flex-shrink-0 group-hover:scale-105 transition-transform`}
      >
        <FontAwesomeIcon icon={item.icon} className="text-lg sm:text-xl" />
      </div>

      {/* Timeline Content */}
      <div className="ml-4 sm:ml-8 flex-1">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5 sm:p-6 hover:border-zinc-200 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/[0.03] dark:hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-zinc-500 dark:text-zinc-400">
                {item.subtitle}
              </p>
            </div>
            <span className="text-xs font-semibold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/30 px-3 py-1.5 rounded-lg self-start whitespace-nowrap">
              {item.year}
            </span>
          </div>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
