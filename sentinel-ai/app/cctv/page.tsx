"use client";

import { useEffect, useRef } from "react";

export default function CCTV() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error(err);
      }
    }

    startCamera();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold text-red-400 mb-2">
        AI CCTV Monitoring
      </h1>

      <p className="text-gray-400 mb-8">
        Live Industrial Safety Monitoring
      </p>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-slate-900 rounded-2xl overflow-hidden relative">

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-[550px] object-cover"
          />

          <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded-full animate-pulse">
            ● LIVE
          </div>

          <div className="absolute top-4 right-4 bg-green-600 px-4 py-2 rounded-full">
            AI ACTIVE
          </div>

          <div className="absolute bottom-6 left-6 bg-black/70 p-4 rounded-xl">

            <p className="text-green-400 font-bold">
              ✓ Helmet Detected
            </p>

            <p className="text-green-400">
              ✓ PPE Compliance
            </p>

            <p className="text-yellow-400">
              ⚠ Worker Near Restricted Area
            </p>

          </div>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            AI Detection
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>Helmet Detection</span>
              <span className="text-green-400">99%</span>
            </div>

            <div className="flex justify-between">
              <span>Person Detection</span>
              <span className="text-green-400">Active</span>
            </div>

            <div className="flex justify-between">
              <span>Fire Detection</span>
              <span className="text-green-400">Ready</span>
            </div>

            <div className="flex justify-between">
              <span>Smoke Detection</span>
              <span className="text-green-400">Ready</span>
            </div>

            <div className="flex justify-between">
              <span>Fall Detection</span>
              <span className="text-yellow-400">
                Monitoring
              </span>
            </div>

            <div className="flex justify-between">
              <span>Risk Score</span>
              <span className="text-red-400">
                18%
              </span>
            </div>

          </div>

          <div className="mt-10 bg-slate-800 rounded-xl p-4">

            <h3 className="font-bold mb-2">
              Latest Alert
            </h3>

            <p className="text-yellow-400">
              Worker approaching Hazard Zone B
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}