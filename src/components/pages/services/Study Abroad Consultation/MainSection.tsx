import SiteButton from "@/components/ui/SiteButton";
import Image from "next/image";

const MainSection = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
        <div className="basis-full space-y-5 xl:basis-1/2">
          <h2 className="text-center text-3xl font-bold lg:text-left">
            Study Abroad Consultation by Root Educations
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Root Education offers tailored study abroad consultation services,
            guiding students through every step of their international education
            journey. From university selection to visa assistance, our expert
            counselors provide personalized support to help students achieve
            their academic and career goals in top global institutions. Your
            success is our priority.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <SiteButton>Book Your Consultation</SiteButton>
          </div>
        </div>
        <div className="relative min-h-[350px] w-full basis-full xl:basis-1/2">
          <Image
            className="object-contain object-center xl:object-right"
            src="/images/pages/services/Study Abroad Consultation/study_abroad_consultation.svg"
            alt="Study Abroad Consultation"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;