import { IconType } from "react-icons";
import { useCountUp } from "react-countup";

import { useRef } from "react";

import { cn } from "@/utils";
import { Container } from "./Container";

type CtaAction = {
  icon?: IconType;
  title: string;
  description: string;
  classes?: {
    title?: string;
    description?: string;
    iconRoot?: string;
    icon?: string;
  };
};

type CtaStat = {
  title: string;
  counter: {
    prefix?: string;
    number: number;
    suffix?: string;
    duration?: number;
  };
  classes?: {
    title?: string;
    counterRoot?: string;
    counterPrefix?: string;
    counterCounter?: string;
    counterSuffix?: string;
  };
};

type CTASectionProps = {
  title: string;
  description: string;
  tag?: () => React.ReactNode;
  ctaHeroProps?: CtaHeroProps;
  ctaActions?: Array<CtaAction>;
  ctaStats?: Array<CtaStat>;
};

type CtaHeroProps =
  | {
      type: "image";
      imageProps: React.HTMLProps<HTMLImageElement>;
    }
  | {
      type: "video";
      videoProps: React.HTMLProps<HTMLVideoElement>;
    };

function CtaHero(props: CtaHeroProps) {
  if (props.type === "video") {
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption  */}
        <video
          {...props.videoProps}
          className={cn("w-full h-full rounded-lg", props.videoProps.className)}>
          <source type="video/mp4" src={props.videoProps.src} />
        </video>
      </>
    );
  } else {
    return (
      <img
        alt=""
        {...props.imageProps}
        loading="lazy"
        className={cn("w-full rounded-lg", props.imageProps.className)}
      />
    );
  }
}

export const defaultTag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-primary">
    <path
      fillRule="evenodd"
      d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
      clipRule="evenodd"
    />
  </svg>
);

export const CtaAction = ({ icon: Icon, title, description, classes = {} }: CtaAction) => {
  return (
    <div className={"mt-4 flex gap-4 md:items-center"}>
      <div className={cn("w-12 h-12 flex gap-4 rounded-full bg-muted", classes.iconRoot)}>
        {Icon ? <Icon className={cn("w-6 h-6 m-auto", classes.icon)} /> : undefined}
      </div>
      <div className="w-5/6 pb-2 border-b">
        <h3 className={cn("font-semibold text-lg", classes.title)}>{title}</h3>
        <p className={cn("text-muted-foreground font-semibold text-sm md:text-base", classes.description)}>
          {description}
        </p>
      </div>
    </div>
  );
};

type CtaStatProps = {
  classes?: {
    root?: string;
    title?: string;
    counterRoot?: string;
    counterPrefix?: string;
    counterCounter?: string;
    counterSuffix?: string;
  };
  stats: Array<CtaStat>;
};

function Stat({ title, counter, classes = {} }: CtaStat) {
  const countUpRef = useRef<HTMLParagraphElement | null>(null);
  useCountUp({ ref: countUpRef, start: 0, end: counter.number, duration: counter.duration });

  if (!counter?.number) return null;

  return (
    <div className="border-r border-b last:border-r-0 max-lg:even:border-r-0 flex flex-col items-center justify-center py-8 px-9">
      <h1 className={cn("inline-flex text-5xl font-semibold", classes.counterRoot)}>
        {counter.prefix ? <p className={cn(classes.counterPrefix)}>{counter.prefix}</p> : null}
        <p className={cn(classes.counterCounter)} ref={countUpRef}></p>
        {counter.suffix ? <p className={cn(classes.counterSuffix)}>{counter.suffix}</p> : null}
      </h1>
      <span
        className={cn("text-muted-foreground text-md font-semibold pt-4 uppercase", classes.title)}>
        {title}
      </span>
    </div>
  );
}

export const CtaStats = ({ classes = {}, stats }: CtaStatProps) => {
  return (
    <div className={cn("border-t grid grid-cols-2 lg:grid-cols-4", classes.root)}>
      {stats?.map((stat) => (
        <Stat key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export const CTASection = ({
  title,
  description,
  ctaHeroProps = { type: "image", imageProps: { src: "images/pie.svg" } },
  tag = defaultTag,
  ctaStats = [],
  ctaActions,
}: CTASectionProps) => {
  return (
    <div id="solution" className="py-10">
      <Container>
        {tag()}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="order-2">
            <CtaHero {...ctaHeroProps} />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="my-8 font-medium text-muted-foreground tracking-wide">{description}</p>
            <div className="border-y">
              {ctaActions?.map((ctaAction, idx) => (
                <CtaAction {...ctaAction} key={idx} />
              ))}
            </div>
          </div>
        </div>

        {ctaStats?.length ? <CtaStats stats={ctaStats} classes={{ root: "mt-14" }} /> : null}
      </Container>
    </div>
  );
};
