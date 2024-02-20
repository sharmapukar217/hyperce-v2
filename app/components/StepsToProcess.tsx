import { IconType } from "react-icons";
import { Container } from "./Container";
import { HiArrowTrendingUp, HiAtSymbol, HiInboxStack, HiMap } from "react-icons/hi2";
import { LuTestTube2 } from "react-icons/lu";

type Step = {
  icon: IconType;
  title: string;
  description: string;
};

type ClientsSectionProps = {
  title?: string;
  steps?: Array<Step>;
};

const defaulSteps: Array<Step> = [
  {
    title: "Mapping",
    description: "Customer journey mapping & Improving email deliverability",
    icon: HiMap,
  },
  {
    title: "List Growth",
    description: "Creaitng and testing high converitng popups",
    icon: HiArrowTrendingUp,
  },
  {
    title: "Email Flows",
    description: "Writing, Desigining and setting up core email flows",
    icon: HiInboxStack,
  },
  {
    title: "Email Campaigns",
    description: "Craftingand Sending 2-3 email campaigns per week",
    icon: HiAtSymbol,
  },
  {
    title: "Testing & Reporting",
    description: "Constant A/B testing and repoting on results.",
    icon: LuTestTube2,
  },
];

export const StepsToProcess = ({ title, steps = defaulSteps }: ClientsSectionProps) => {
  return (
    <section id="about" className="scroll-mt-[-250px]">
      <Container classes={{ root: "py-12" }}>
        <div className="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
          <span className="text-lg font-semibold tracking-wider text-muted-foreground">
            {title ?? `${steps.length} step process to grow`}
          </span>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={idx} className="p-4 transition duration-200">
                <div className="w-12 h-12 rounded-md bg-muted inline-flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="text-center my-5">
                  <h1 className="font-semibold text-3xl capitalize">{step.title}</h1>
                  <p className="text-sm font-semibold text-muted-foreground mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
