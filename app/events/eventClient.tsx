"use client";

import { useState } from "react";
import SingleEvent from "@/components/Event/SingleEvent";

interface Event {
  id: number;
  title: string;
  year: number;
  [key: string]: any;
}

interface Props {
  events: Event[];
}

const groupEventsByYear = (events: Event[]) => {
  return events.reduce((acc: Record<number, Event[]>, event) => {
    const year = event.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(event);
    return acc;
  }, {});
};

const EventClient: React.FC<Props> = ({ events }) => {
  const eventsByYear = groupEventsByYear(events);
  const sortedYears = Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => b - a); // Descending order

  const [selectedYear, setSelectedYear] = useState<number | "all">("all"); // "all" shows all years

  // Get events to display
  const visibleEvents =
    selectedYear === "all"
      ? events.sort((a, b) => b.year - a.year) // optional: newest first
      : eventsByYear[selectedYear];

  return (
    <section className="pb-[120px] pt-[60px]">
      <div className="container mx-auto max-w-6xl">

        {/* Year Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setSelectedYear("all")}
            className={`px-4 py-2 rounded-full border font-medium transition ${
              selectedYear === "all"
                ? "bg-primary text-white"
                : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
            }`}
          >
            All
          </button>

          {sortedYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full border font-medium transition ${
                selectedYear === year
                  ? "bg-primary text-white"
                  : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Optional: Header */}
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          {selectedYear === "all" ? "All Events" : `${selectedYear} Events`}
        </h2>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleEvents.map((event) => (
            <a
              href={`/events/${event.id}`}
              key={event.id}
              className="transform transition duration-300 hover:scale-105"
            >
              <SingleEvent event={event} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventClient;
