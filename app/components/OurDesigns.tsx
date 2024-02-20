import { useState } from "react";
import { Container } from "./Container";
import { cn } from "@/utils";

const cards = [1, 2, 3, 4];

type OurDesignsProps = {
  designs: Array<{ src: string; alt: string }>;
};

const defaultDesigns = [
  { src: "", alt: "image 1" },
  { src: "", alt: "image 2" },
  { src: "", alt: "image 3" },
  { src: "", alt: "image 4" },
  { src: "", alt: "image 5" },
];

export const OurDesigns = ({ designs = defaultDesigns }: OurDesignsProps) => {
  const [active, setActive] = useState(0);

  return (
    <section className="pt-32 md:pt-20" id="reviews">
      <Container>
        <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            Our Apealing Designs
          </h2>
          <p className="mt-4 text-center font-semibold text-muted-foreground">
            We provide some of the best email templates to help your business grow.
          </p>
        </div>

        <div className="relative flex md:w-1/2 mx-auto mt-20 h-[32rem] overflow-y-clip">
          {/* top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
          {designs.map((design, idx) => (
            <a
              href="#_"
              key={idx}
              onClick={() => setActive(idx)}
              className={cn(
                "bg-background border-2 absolute w-full h-full rounded-lg shadow-md transition-all duration-150 ease-in !hover:hidden [&:nth-of-type(n+5)]:hidden"
              )}
              style={{
                zIndex: active === idx ? 20 : 10 - idx,
                transform: active === idx ? "rotate(0deg)" : `rotate(${-4.5 * (idx + 1)}deg)`,
              }}>
              <img src={design.src} alt={design.alt} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
