import React, { FC } from "react";
import styles from "./nav.module.css";
import { Menu, Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/image/dworm/logo-text-only.svg";
import { ReactComponent as Humburger } from "../../../assets/icons/mobile-nav.svg";
import Button from "../nnbutton";

const NavBar: FC = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} max-width`}>
        <NavLink to="/" id="top">
          <Logo />
        </NavLink>

        <div className={styles.mobile_nav}>
          <Popover className="">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                text-white group px-3 p  y-2 rounded-md inline-flex items-center   outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <Humburger className={styles.mobile_nav_icon} />
                </Popover.Button>

                <Popover.Panel className="absolute z-10 w-screen px-4 mt-3 left-0 right-0 ">
                  <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-4 bg-[#38137f] p-4">
                      <div className={styles.mobile__bottom}>
                        <NavButtons />
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>

        <div className={`${styles.nav_container} freude-22`}>
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
        </div>

        <div className={styles.nav_container}>
          <Button
            buttonAs="a"
            className={`${styles.button}`}
            target="_blank"
            href="https://app.d-worm.com"
          >
            Launch App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;

const NavButtons: FC = () => {
  return (
    <>
      <Button
        buttonAs="a"
        href="https://app.d-worm.com"
        className={`${styles.button}`}
        target="_blank"
      >
        Launch App
      </Button>
    </>
  );
};
