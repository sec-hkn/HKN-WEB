// app/events/page.tsx
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import EventClient from "@/app/events/EventClient";
import eventsData from "@/components/Event/eventData";

export const metadata: Metadata = {
  title: "Events",
  description: "List of all events conducted by SEC IEEE HKN",
};

export default function EventPage() {
  return (
    <>
      <Breadcrumb pageName="Events" description="" />
      <EventClient events={eventsData} />
    </>
  );
}
