"use client";
import React, { useState } from "react";
import Card from "@/components/Card/index";
import Drawer from "@/components/Drawer/index";
import Header from "@/components/Header/index";
import List from "@/components/List/index";

export default function Home() {
  const [isNotification, setIsNotification] = useState(false);

  const handleDrawer = (providedState) => {
    setIsNotification(providedState ? providedState : !isNotification);
  };
  return (
    <main className="">
      <Header
        handleDrawer={() => {
          handleDrawer();
        }}
      />

      <div className="mt-16 md:mt-32">
        <div className=" pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300">
              Addresses info :
            </h2>
            <div className="mx-auto space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none mt-10">
              <div className="grid grid-cols-1 gap-x-8 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col md:flex-col lg:flex-row gap-12 lg:col-span-12 justify-between">
                  <div className="flex-grow flex-grow-2 lg:flex-grow-2">
                    <Card />
                  </div>
                  <div className="flex-grow flex-grow-1 lg:flex-grow-1 min-w-full lg:min-w-[20rem] lg:mt-0">
                    <h3 className="text-xl font-bold tracking-tight text-gray-300">
                      Subscribed hashes :
                    </h3>
                    <List />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        handleDrawer={(providedState: boolean) => {
          handleDrawer(providedState);
        }}
        isNotification={isNotification}
      />
    </main>
  );
}
