import Section from "@/components/common/Section";
import TeamCard from "./TeamCard";

const OurTeamMembers = () => {
  return (
    <Section
      sectionName="Our Team Members"
      title="Meet The Root Education Team"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </Section>
  );
};

export default OurTeamMembers;