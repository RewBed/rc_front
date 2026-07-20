import React from "react";
import "../../public/styles/bootstrap.min.css";
import "../../public/styles/animate.min.css";
import "animate.css";
import "../../public/styles/fontawesome.min.css";
import "../../public/styles/pe-icon-7-stroke.css";
import "swiper/css";
import "swiper/css/bundle";
import "../../public/styles/style.css";
import "../../public/styles/responsive.css";
import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import CookieConsent from "@/components/Common/CookieConsent";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ООО «Артель» - разработка ПО и интеграции",
  description:
    "ООО «Артель»: разработка программного обеспечения под ключ, проекты для госсектора, интеграции Bitrix24, amoCRM, SIP-телефонии, маркетинг и дизайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={manrope.variable}>
        {children}
        <AosAnimation />
        <CookieConsent />
        <GoTop />
        <Script
          src="https://code.jivo.ru/widget/63VbwHXer3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
