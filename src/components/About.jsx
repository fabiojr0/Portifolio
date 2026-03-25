import React from "react";
import { timelineData } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import TimelineItem from "./TimelineItem";
import SectionHeader from "./ui/SectionHeader";

function About() {
  const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <div className="py-20 sm:py-28" id="About">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Trajetória"
          title="Sobre mim"
          description="Minha jornada no desenvolvimento de software"
        />

        <div ref={timelineRef} className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-300 via-rose-300 to-rose-300 dark:from-red-600 dark:via-rose-600 dark:to-rose-600" />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-10">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={index}
                  isVisible={timelineVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
