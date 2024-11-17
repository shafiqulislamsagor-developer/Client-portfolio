import React from "react";
import { useWizard } from "react-use-wizard";

export default function Step2() {
  const { previousStep } = useWizard();
  return (
    <div>
      <button onClick={() => previousStep()}>previous</button>
    </div>
  );
}
