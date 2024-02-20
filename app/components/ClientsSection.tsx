import { cn } from "@/utils";
import { Container } from "./Container";

type Client = {
  id: string;
  logo: React.HTMLProps<HTMLImageElement> | (() => React.ReactNode);
};

type ClientsSectionProps = {
  title?: string;
  clients?: Array<Client>;
};

const defaultClientsList: Array<Client> = [
  { id: "microsoft", logo: { alt: "microsoft", src: "images/clients/microsoft.svg" } },
  { id: "airbnb", logo: { alt: "airbnb", src: "images/clients/airbnb.svg" } },
  { id: "google", logo: { alt: "google", src: "images/clients/google.svg" } },
  { id: "netflix", logo: { alt: "netflix", src: "images/clients/netflix.svg" } },
  { id: "ge", logo: { alt: "ge", src: "images/clients/ge.svg" } },
  { id: "google-cloud", logo: { alt: "google-cloud", src: "images/clients/google-cloud.svg" } },
];

export const ClientsSection = ({ title, clients = defaultClientsList }: ClientsSectionProps) => {
  return (
<section id="about" className="scroll-mt-[-250px]">
      <Container classes={{ root: "py-12" }}>
        <div className="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground">
            {title ?? "TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES"}
          </span>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="p-4 transition duration-200">
                {typeof client.logo === "function" ? (
                  client.logo()
                ) : (
                  <img
                    loading="lazy"
                    {...client.logo}
                    alt={client.logo.alt}
                    className={cn("h-12 w-auto mx-auto", client.logo.className)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
