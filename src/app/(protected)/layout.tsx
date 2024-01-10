"use client";
import Header from "@/components/Common/Layout/Header";
import Sidebar from "@/components/Common/Layout/Sidebar";
import Loader from "@/components/Common/Sections/Loader";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const routeTitles: {
    [key: string]: string;
  } = {
    "/dashboard": "Dashboard",
  };
  const loading = false;
  return (
    <>
      <head>
        <title>{routeTitles[pathname] || "Dashboard"}</title>
        <meta name="description" content="CRM" />
      </head>
      <body>
        <main className="flex h-screen overflow-hidden ">
          <Sidebar />

          <section className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden m-0">
            <Header />
            {loading ? (
              <Loader />
            ) : (
              <div className="mx-auto max-w-[1010px] py-5 w-full">
                {children}
              </div>
            )}
          </section>
        </main>
      </body>
    </>
  );
}
