"use client";

import { useState } from "react";

export const useFetchThesis = () => {
  const [loading, setLoading] = useState(true);

  const fetchThesis = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return { loading, fetchThesis };
};
