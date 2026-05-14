"use client";

import { useState } from "react";
import SingleMember from "./SingleMember";
import { Members } from "@/types/members";

interface Props {
  members: Members[];
}

const groupMembersByTerm = (members: Members[]) => {
  return members.reduce((acc: Record<string, Members[]>, member) => {
    const term = member.term;
    if (!acc[term]) acc[term] = [];
    acc[term].push(member);
    return acc;
  }, {});
};

const MembersClient: React.FC<Props> = ({ members }) => {
  const membersByTerm = groupMembersByTerm(members);
  const sortedTerms = Object.keys(membersByTerm).sort((a, b) => {
    // Extract years and sort in descending order
    const aYear = parseInt(a.split("-")[1]);
    const bYear = parseInt(b.split("-")[1]);
    return bYear - aYear;
  });

  const [selectedTerm, setSelectedTerm] = useState<string | "all">("all");

  // Get members to display
  const visibleMembers =
    selectedTerm === "all"
      ? members.sort((a, b) => {
          const aYear = parseInt(b.term.split("-")[1]);
          const bYear = parseInt(a.term.split("-")[1]);
          return aYear - bYear;
        })
      : membersByTerm[selectedTerm];

  return (
    <section className="pb-[120px] pt-[60px]">
      <div className="container mx-auto max-w-6xl">
        {/* Term Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedTerm("all")}
            className={`rounded-full border px-4 py-2 font-medium transition ${
              selectedTerm === "all"
                ? "bg-primary text-white"
                : "border-primary bg-white text-primary hover:bg-primary hover:text-white"
            }`}
          >
            All
          </button>

          {sortedTerms.map((term) => (
            <button
              key={term}
              onClick={() => setSelectedTerm(term)}
              className={`rounded-full border px-4 py-2 font-medium transition ${
                selectedTerm === term
                  ? "bg-primary text-white"
                  : "border-primary bg-white text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {term}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-16 pt-12 text-center sm:grid-cols-1 md:grid-cols-4 md:gap-y-20">
          {visibleMembers && visibleMembers.length > 0 ? (
            visibleMembers.map((member) => (
              <SingleMember key={member.id} member={member} />
            ))
          ) : (
            <p className="col-span-full text-gray-500">
              No members found for this term.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MembersClient;
