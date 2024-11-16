import React from "react";
import CountUp from "react-countup";

export function Count({ value }: { value: number }) {
  return <CountUp end={value} />;
}
export function Review({ value }: { value: number }) {
  return <CountUp end={value} decimals={1} />;
}
export function Experiences({ value }: { value: number }) {
  return (
    <div>
      <CountUp end={value} />+ years
    </div>
  );
}
