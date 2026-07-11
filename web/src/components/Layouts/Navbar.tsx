"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import { fallbackServices, type ServiceItem } from "@/lib/content-data";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

const activeServices = (services: ServiceItem[]) =>
  services.filter((service) => service.isActive !== false);

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);
  const [services, setServices] = useState<ServiceItem[]>(fallbackServices);
  const pathname = usePathname();
  const isInnerPage = pathname !== "/";
  const isHomePage = pathname === "/";

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  useEffect(() => {
    fetch(`${API}/services`)
      .then((response) => (response.ok ? response.json() : fallbackServices))
      .then((items: ServiceItem[]) => setServices(activeServices(items)))
      .catch(() => setServices(fallbackServices));
  }, []);

  const navigation = menus.map((item) =>
    item.label === "Услуги"
      ? {
          ...item,
          submenu: activeServices(services).map((service) => ({
            label: service.title,
            link: `/services/${service.slug}/`,
          })),
        }
      : item,
  );

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
  const navbarClassName = `navbar-area${isInnerPage ? " navbar-style-2" : ""}${
    isHomePage ? " navbar-home-solid" : ""
  }`;

  return (
    <>
      <div
        id="navbar"
        className={navbarClassName}
      >
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand artel-brand">
              ООО «Артель»
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                {navigation.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              <div className="others-options">
                <Link href="/contact-us/" className="btn btn-primary">
                  Обсудить проект
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
