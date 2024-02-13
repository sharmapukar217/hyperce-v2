import { Button } from "./Button";
import { Container } from "./Container";

type HeroSectionProps = {
  title: string;
  summary: string;
  HeroImage?: () => React.ReactNode;
  ActionButtons?: () => React.ReactNode;
};

function DefaultActionButtons() {
  return (
    <>
      <Button size="lg" asChild>
        <a href="/register">Get Started</a>
      </Button>

      <Button size="lg" variant="secondary-outline" asChild>
        <a href="#solution">Contact Us</a>
      </Button>
    </>
  );
}

function DefaultHeroImage() {
  return (
    <img
      className="h-full object-cover object-left"
      src="https://astrolus-premium.netlify.app/images/hero.webp"
      alt="app screenshot"
      width="1628"
      height="1233"
    />
  );
}

export const HeroSection = ({
  title,
  summary,
  HeroImage = DefaultHeroImage,
  ActionButtons = DefaultActionButtons,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden dark:bg-darker lg:overflow-auto" id="home">
      {/* background effects */}
      <div className="absolute inset-x-0 top-32 ">
        <div
          aria-hidden="true"
          className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl">
          <div className="h-60 bg-gradient-to-br from-primary to-secondary/50 blur-3xl "></div>
          <div className="h-72 rounded-full bg-gradient-to-r from-secondary/50 to-primary blur-3xl dark:from-transparent"></div>
        </div>
      </div>
      {/* end of bg effects */}
      <Container>
        <div className="relative ml-auto pt-40 xl:pt-36 pb-10">
          <div className="gap-12 md:flex md:items-center">
            <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
              <h1 className="text-5xl font-black  md:text-6xl xl:text-7xl">{title}</h1>
              <div className="">
                <p className="mt-8 text-xl font-semibold tracking-wide text-muted-foreground">
                  {summary}
                </p>
                <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                  <ActionButtons />
                </div>
              </div>
            </div>
            <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
              <div className="-ml-6 md:-mr-72 lg:mr-0">
                <HeroImage />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
