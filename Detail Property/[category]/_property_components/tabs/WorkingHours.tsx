import { formatTo12Hour } from "@/contexts/Callbacks";
import { WorkingHoursProps } from "@/types/types";
import React from "react";
import { LuCircleCheck, LuClock } from "react-icons/lu";

const WorkingHoursTab = ({
  workingHours,
}: {
  workingHours: WorkingHoursProps[];
}) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-xs overflow-hidden">
        <div className="bg-purple-600 text-white p-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <LuClock className="w-5 h-5" />
            Working Hours
          </h3>
        </div>

        <div className="divide-y divide-purple-200">
          {days.map((day) => {
            const schedule = workingHours.find((d) => d.day === day);

            return (
              <div
                key={day}
                className="p-4 flex items-center justify-between hover:bg-purple-50"
              >
                {/* Left side: Day + status icon */}
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 min-w-[110px] text-left">
                    {day}
                  </span>
                  {schedule ? (
                    <LuCircleCheck className="w-5 h-5 text-green-600" />
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                      <div className="relative w-5 h-5 rounded-full  flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side: Hours or Closed */}
                <div className="text-right">
                  {schedule ? (
                    <div className="text-gray-700">
                      <span className="font-medium">
                        {formatTo12Hour(schedule.openTime)}
                      </span>
                      <span className="mx-2">-</span>
                      <span className="font-medium">
                        {formatTo12Hour(schedule.closeTime)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-red-600 font-medium">Closed</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursTab;
