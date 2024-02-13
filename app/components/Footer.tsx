import { Link } from "@remix-run/react";

import { Logo } from "./Logo";
import { Container } from "./Container";
import { siteConfig } from "@/config";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="relative pt-10 pb-8 bg-foreground text-background dark:bg-background dark:text-foreground border-t mt-10">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="w-full lg:w-1/2 space-y-2 pt-8">
            <Link to="/">
              <Logo classes={{ text: "text-background dark:text-foreground" }} />
            </Link>
            <div className="font-bold flex items-center">
              <span>
                &copy; Copyright {new Date().getFullYear()} |{" "}
                <div className="inline hover:underline hover:text-primary">{siteConfig.title}</div>.
              </span>
              <span className="ms-1">All rights reserved</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-between pb-10">
            <div>
              <strong className="font-bold text-muted-foreground mb-4 block">Main Pages</strong>
              {/* main pages links */}
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* commnity links */}
            <div>
              <strong className="font-bold text-muted-foreground mb-4 block">Community</strong>

              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    RSS Feed
                  </a>
                </li>
              </ul>
            </div>

            {/* company links */}
            <div>
              <strong className="font-bold text-muted-foreground mb-4 block">Company</strong>

              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-lg font-bold hover:text-primary transition-colors duration-150 ease-in">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
