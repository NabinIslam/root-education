import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import SectionName from "@/components/ui/SectionName";
import FaqAccordion from "./FaqAccordion";
import { study_abroad_consultation } from "@/faq_data";

const FAQ = () => {
  const faqs = study_abroad_consultation;

  return (
    <section className="pb-[100px] pt-[50px]">
      <FadeInDownWithSlowBounce className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SectionName name="FAQ" position="start" />
            <h2 className="my-5 text-start text-4xl font-semibold lg:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mb-7 mt-5 text-sm font-medium">
              A Frequently Asked Questions (FAQ) section provides concise
              answers to common queries, helping users quickly find essential
              information about a product or service.
            </p>
          </div>
          <div></div>
        </div>
      </FadeInDownWithSlowBounce>
      <div className="container grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-2">
        <div className="space-y-5">
          {faqs
            .filter((item) => item.position === "left")
            .map((faq) => (
              <FaqAccordion
                title={faq.question}
                answer={faq.answer}
                key={faq.question}
              />
            ))}
        </div>
        <div className="space-y-5">
          {faqs
            .filter((item) => item.position === "right")
            .map((faq) => (
              <FaqAccordion
                title={faq.question}
                answer={faq.answer}
                key={faq.question}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
