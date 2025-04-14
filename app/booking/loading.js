"use client";

import { PuffLoader } from "react-spinners";

function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PuffLoader />
    </div>
  );
}

export default loading;
