import React, { useState } from "react";
import {
  addDays,
  format,
  endOfMonth,
  startOfMonth,
  addMonths,
  getDaysInMonth,
} from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with current date
  const [selectedDate, setSelectedDate] = useState(null);

  // Get the current week (starting from the first day of the week)
  const getDaysOfWeek = (date) => {
    const startOfWeek = date.getDate() - date.getDay(); // Start with Sunday
    return Array.from({ length: 7 }).map((_, i) => {
      const day = new Date(
        date.getFullYear(),
        date.getMonth(),
        startOfWeek + i
      );
      return {
        day: format(day, "E"), // Short day name
        date: day.getDate(), // Day of the month
        fullDate: day, // Full date object
      };
    });
  };

  const daysOfWeek = getDaysOfWeek(currentDate);

  // Handler to change the current week
  const changeWeek = (direction) => {
    const newDate = addDays(currentDate, direction * 7); // Move by 7 days (1 week)

    // Handle month boundaries
    const daysInMonth = getDaysInMonth(newDate); // Get the number of days in the month
    const currentDay = newDate.getDate();

    // If the day exceeds the days of the current month, change to next month
    if (currentDay > daysInMonth) {
      setCurrentDate(addMonths(startOfMonth(newDate), 1));
    } else if (currentDay < 1) {
      setCurrentDate(addMonths(endOfMonth(newDate), -1));
    } else {
      setCurrentDate(newDate);
    }
  };

  // Handle when a date is selected
  const handleDateClick = (fullDate) => {
    setSelectedDate(fullDate);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md  ">
      {/* Calendar header */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => changeWeek(-1)} // Go to previous week
        >
          {"<"}
        </button>
        <h3 className="text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h3>
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => changeWeek(1)} // Go to next week
        >
          {">"}
        </button>
      </div>

      {/* Week days and dates */}
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-sm text-gray-500">{day.day}</span>
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedDate?.getTime() === day.fullDate.getTime()
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleDateClick(day.fullDate)}
            >
              {day.date}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
