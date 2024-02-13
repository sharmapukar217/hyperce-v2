import { IconType } from "react-icons";
import * as Accordion from "@radix-ui/react-accordion";

import { Container } from "./Container";

type FAQ = {
  id: string;
  icon: IconType;
  answer: string;
  question: string;
};

type FaqSectionProps = {
  faqs: Array<FAQ>;
};
export const FAQSection = ({ faqs = [] }: FaqSectionProps) => {
  return (
    <section id="faqs" className="py-10 scroll-mt-[90px]">
      <Container>
        <div>
          <h1 className="text-primary font-bold text-xl uppercase">FAQs!</h1>
          <h2 className="text-4xl font-semibold">Some of the mostly asked questions...</h2>
        </div>

        <div className="pt-10">
          <Accordion.Root className="grid grid-cols-1 gap-5 lg:grid-cols-2" type="multiple">
            {faqs?.map(({ id, answer, question, icon: Icon }) => (
              <div key={id}>
                <Accordion.Item
                  value={id}
                  className="w-full text-justify bg-muted rounded-xl p-0.5 data-[state=open]:bg-gradient-to-br from-primary to-secondary">
                  <div className="px-3 py-2 rounded-xl bg-background">
                    <Accordion.Trigger className="inline-flex items-start w-full [&[data-state=open]_.peer]:rotate-[-360deg] [&[data-state=open]_.dash]:hidden">
                      <div className="me-3 mt-1">
                        <Icon />
                      </div>
                      <Accordion.Header className="text-left pr-2 font-semibold text-md md:text-xl">
                        {question}
                      </Accordion.Header>

                      <div className="inline-flex items-center justify-center flex-shrink-0 ml-auto bg-muted peer w-6 h-6 rounded-full p-1 [&data-[state=open]]:rotate-[90deg] transition-all ease-in">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <line className="dash" x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </Accordion.Trigger>
                    <Accordion.Content className=" ps-11 pe-9 pt-2 text-muted-foreground font-medium text-md md:text-lg data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      {answer}
                    </Accordion.Content>
                  </div>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </section>
  );
};
