
"use client";

import { Card } from "flowbite-react";
import {AiFillBank} from "react-icons/ai"
import { Badge } from "flowbite-react";


export function InfoCard({title, body}) {
  return (
    <Card
      className="md:max-w-md max-w-sm h-72 border-0 shadow-lg"
    >
       <div className="flex">
        <AiFillBank className="w-1/4 bg-gradient-to-r from-teal-400 to-blue-400 hover:from-pink-500 hover:to-orange-500 rounded-lg text-white"  size="md" />
       </div>
        
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {title}
      </h5>
      <p className="font-normal text-gray-400 dark:text-gray-400">
        {body}
      </p>
    </Card>
  );
}
