
"use client";
import mike from "../../assets/images/K78A8718.jpg"


import { Card } from "flowbite-react";

export function PromoCard() {
  return (
    <Card
      className="max-w-72"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={mike}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </Card>
  );
}
