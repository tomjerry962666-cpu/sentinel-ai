"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function useDashboard() {
  const [data, setData] = useState({
    workers: 0,
    dangerZones: 0,
    safetyScore: 0,
    sensors: 0,
  });

  useEffect(() => {
    api.get("/dashboard").then((res) => {
      setData(res.data);
    });
  }, []);

  return data;
}