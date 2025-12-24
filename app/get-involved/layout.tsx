"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const tabs = [
  {
    href: "/get-involved/volunteer",
    label: "Volunteer with Us",
    value: "volunteer",
  },
  { href: "/get-involved/partner", label: "Partner with Us", value: "partner" },
  {
    href: "/get-involved/donate",
    label: "Donate to our Cause",
    value: "donate",
  },
];

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const current = pathname.split("/").pop();

  const [tab, setTab] = useState("volunteer");

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 overflow-x-hidden">
      <div className="bg-[#630439] md:bg-[url('/images/aboutUs-background.png')] bg-no-repeat bg-contain bg-center p-4 md:px-10 lg:px-20 grid grid-cols-3 md:gap-10 mb-6 md:mb-10 rounded-2xl place-items-center place-content-center">
        <div className="col-span-3 md:col-span-2 text-white">
          <h2 className="text-lg md:text-4xl lg:text-6xl font-extrabold mt-4">
            Get Involved
          </h2>
          <p className="text-base md:text-xl lg:text-3xl mt-4">
            Founded with a vision to empower women and protect children's
            rights, Hope for Peace Women Initiative has been a beacon of hope in
            Nigeria for over two years.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <Image
            src={"/images/globe.png"}
            width={150}
            height={150}
            alt={"Programs Image"}
            className="w-44 h-44 sm:w-36 sm:h-36 md:h-64 md:w-56 lg:w-96 lg:h-96 object-fit"
          />
        </div>
      </div>

      <Tabs value={current}>
        <TabsList className="hidden md:flex mb-6 w-fit">
          {tabs.map((tab) => (
            <Link key={tab.value} href={tab.href}>
              <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
            </Link>
          ))}
        </TabsList>

        <div className="relative flex flex-col items-start gap-8 mb-10 md:hidden">
          {[
            {
              value: "volunteer",
              label: "Volunteer with Us",
              path: "/get-involved/volunteer",
            },
            {
              value: "partner",
              label: "Partner with Us",
              path: "/get-involved/partner",
            },
            {
              value: "donate",
              label: "Donate to our Cause",
              path: "/get-involved/donate",
            },
          ].map((item, index, arr) => {
            const isSelected = tab === item.value;
            const lineColor = isSelected ? "bg-primary" : "bg-primary/50";
            const dotColor = isSelected ? "text-primary" : "text-primary/50";

            return (
              <div key={item.value} className="relative">
                {/* Line below radio */}
                {index < arr.length - 1 && (
                  <div
                    className={`absolute left-[0.57rem] top-5 h-[2.5rem] w-px ${lineColor}`}
                  />
                )}

                {/* Radio and label */}
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="tab"
                    value={item.value}
                    checked={isSelected}
                    onChange={() => {
                      setTab(item.value);
                      router.push(item.path);
                    }}
                    className={`accent-primary h-5 border border-primary w-5 ${dotColor}`}
                  />
                  <span
                    className={`${
                      isSelected ? "text-primary" : "text-primary/50"
                    } text-sm font-medium`}
                  >
                    {item.label}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
      </Tabs>

      <div className="mt-6">{children}</div>
    </div>
  );
}
