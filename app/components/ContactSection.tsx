import { useState } from "react";
import { Link } from "@remix-run/react";
import { HiPhoneArrowDownLeft, HiAtSymbol, HiGlobeAsiaAustralia } from "react-icons/hi2";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  MarkerProps,
} from "react-simple-maps";

import { Button } from "./Button";
import { Container } from "./Container";

const markers: Array<MarkerProps> = [
  {
    name: "Nepal",
    coordinates: [85.324, 27.7172],
  },
  {
    name: "U.K",
    coordinates: [0.1278, 51.5074],
  },
  {
    name: "U.S.A",
    coordinates: [98.5855, 39.8333],
  },
];

type Info = {
  address: string;
  phoneNumber: string;
  emailAddress: string;
};

function BranchInfo(props: Info) {
  return (
    <>
      <div>
        <h1 className="font-semibold text-3xl">Office Address</h1>
        <p className="text-muted-foreground font-medium tracking-wide text-lg">{props.address}</p>
      </div>

      <div className="bg-muted text-muted-foreground border rounded-xl w-full px-4 py-3 mt-5">
        <h3 className="font-medium text-lg">Phone</h3>
        <Link to="#" className="group inline-flex items-end w-full pb-2 hover:text-primary">
          <strong className="text-foreground group-hover:text-primary tracking-wider text-lg">
            {props.phoneNumber}
          </strong>
          <HiPhoneArrowDownLeft className="ml-auto h-6 w-6 mb-1" />
        </Link>
      </div>

      <Link
        to="#"
        className="group block bg-muted text-muted-foreground border rounded-xl w-full px-4 py-3 mt-5 hover:text-primary">
        <h3 className="font-medium text-lg">Email</h3>
        <div className=" inline-flex items-end w-full pb-2">
          <strong className="text-foreground group-hover:text-primary tracking-wider text-lg">
            {props.emailAddress}
          </strong>
          <HiAtSymbol className="ml-auto h-6 w-6 mb-1" />
        </div>
      </Link>
    </>
  );
}

export const ContactSection = ({ showGlobe }: { showGlobe?: boolean }) => {
  const [details, setDetails] = useState<Info>({
    address: "123 Train St, San Franscisco, CA 9107",
    phoneNumber: "(123) 456 - 7890",
    emailAddress: "hi@gmail.com",
  });

  const handleMarkerClick = (location: string | undefined) => {
    if (!location) return;
    setDetails((detail) => ({ ...detail, address: location }));
  };

  return (
    <>
      <section id="contact-us" className="py-10 scroll-mt-[90px]">
        <Container>
          <div>
            <h1 className="text-primary font-bold text-xl uppercase">Contact Us!</h1>
            <h2 className="text-4xl font-semibold">Let&apos;s get in touch!</h2>
          </div>

          <div className="flex flex-col lg:flex-row py-10 gap-4 ">
            <form className="bg-background rounded-lg border lg:w-7/12 px-4 md:px-8 py-8 space-y-5">
              <div>
                <label htmlFor="fullName" className="text-sm font-semibold text-muted-foreground">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g: John Doe"
                  className="block w-3/4 bg-muted border outline-none focus:ring-2 focus:ring-primary rounded-xl px-3 h-12 text-sm font-semibold mt-3 focus:border-primary shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-muted-foreground">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g: johndoe@mail.com"
                  className="block w-full bg-muted border outline-none focus:ring-2 focus:ring-primary rounded-xl px-3 h-12 text-sm font-semibold mt-3 focus:border-primary shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-semibold text-muted-foreground">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g: To inquire for service X."
                  className="block w-full bg-muted border outline-none focus:ring-2 focus:ring-primary rounded-xl px-3 h-12 text-sm font-semibold mt-3 focus:border-primary shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  id="message"
                  name="message"
                  placeholder="e.g: A descriptive message for your enquiry."
                  className="block w-full bg-muted border outline-none focus:ring-2 focus:ring-primary rounded-xl px-3 py-3 text-sm font-semibold mt-3 focus:border-primary shadow-sm"
                />
              </div>

              <div>
                <Button size="lg">Submit</Button>
              </div>
            </form>

            <div className="w-full lg:px-10 lg:w-5/12">
              <BranchInfo
                emailAddress="hi@gmail.com"
                phoneNumber="(123) 456 - 7890"
                address="123 Train St, San Franscisco, CA 9107"
              />

              {showGlobe ? (
                <div className="bg-muted text-muted-foreground border rounded-xl w-full px-4 py-3 mt-5">
                  <a
                    href="#globe"
                    className="group inline-flex items-end w-full  hover:text-primary">
                    <strong className="text-foreground group-hover:text-primary tracking-wider text-lg">
                      See us on globe...
                    </strong>
                    <HiGlobeAsiaAustralia className="ml-auto h-6 w-6 mb-1" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {showGlobe ? (
        <section id="globe" className="pb-10 scroll-mt-[100px]">
          <Container>
            <div>
              <h1 className="text-primary font-bold text-xl uppercase">See us on globe!</h1>
              <h2 className="text-4xl font-semibold">View our other branches...</h2>
            </div>

            <div className="flex flex-col lg:flex-row pt-8 lg:pt-16 gap-10">
              <div className="flex-1 lg:order-2 bg-background border rounded-xl shadow-sm">
                <ComposableMap className="w-full h-full p-0 fill-foreground rounded-lg">
                  <ZoomableGroup zoom={1.15}>
                    <Geographies geography="/features.json">
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            style={{
                              default: {
                                outline: "none !important",
                              },
                              hover: {
                                outline: "none",
                                fill: "hsl(var(--color-muted-foreground))",
                              },
                            }}
                          />
                        ))
                      }
                    </Geographies>
                    {markers.map(({ name, coordinates }) => (
                      <Marker
                        key={name}
                        coordinates={coordinates}
                        onClick={() => handleMarkerClick(name)}
                        className="cursor-pointer pointer-events-auto">
                        <path
                          fillRule="evenodd"
                          className="fill-secondary"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd">
                          <title>{name?.toUpperCase()}</title>
                        </path>
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              </div>
              <div className="lg:order-1 w-full lg:w-4/12">
                <BranchInfo {...details} />
              </div>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
};
