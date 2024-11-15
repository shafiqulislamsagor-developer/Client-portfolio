"use client";

import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export default function CustomProgress({
  value,
  title,
}: {
  value: number;
  title: string;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="w-full max-w-lg mx-auto">
      <Progress value={progress} className="w-full bg-primary-1" />
      <div className="flex mt-2 items-center justify-between">
        <h1 className="font-medium">{title}</h1>
        <p className="font-semibold">{value}%</p>
      </div>
    </div>
  );
}