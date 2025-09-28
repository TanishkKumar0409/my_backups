import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

export default function ExperiencCard({ experience }: { experience: any }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-100 p-5 h-full">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg p-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <FaBriefcase className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-lg font-semibold line-clamp-1">
                {experience.title}
              </h3>
              <div className="flex items-center text-sm space-x-1 text-white/90">
                <FaBuilding className="text-white/80" />
                <span className="line-clamp-1">{experience.company}</span>
              </div>
            </div>
          </div>
          <span className="text-xs bg-white/30 px-2 py-1 rounded-full">
            {experience.type}
          </span>
        </div>
        <div className="flex items-center text-sm space-x-3 text-white/80">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaCalendarAlt />
            <span>{experience.period}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <p className="text-gray-600 text-sm line-clamp-2">
          {experience.description}
        </p>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
            <div className="w-1 h-4 bg-indigo-500 rounded-full mr-2"></div>
            Key Achievements
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {experience.achievements.map((achievement: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start space-x-3 shadow-xs p-2 bg-indigo-50 rounded-lg border-l-4 border-indigo-500"
              >
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-xs font-medium leading-relaxed text-nowrap">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
            <div className="w-1 h-4 bg-indigo-500 rounded-full mr-2"></div>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 bg-indigo-50 font-bold text-indigo-600 text-xs rounded-md shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
