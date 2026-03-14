"use client";

import { ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4 font-sans selection:bg-red-100 selection:text-red-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden"
      >
        {/* Header Banner */}
        <div className="bg-red-600 h-2 w-full" />
        
        <div className="p-8 md:p-12">
          {/* Icon Section */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full scale-150 blur-xl opacity-50 animate-pulse" />
              <div className="relative bg-white border-2 border-red-500 rounded-2xl p-4 shadow-lg">
                <ShieldAlert className="w-12 h-12 text-red-600" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
              Service Suspended
            </h1>
            <div className="h-px w-12 bg-zinc-200 mx-auto" />
            <p className="text-zinc-600 leading-relaxed">
              Access to this application has been temporarily restricted due to 
              <span className="font-semibold text-zinc-900"> outstanding developer payments</span>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-zinc-100 rounded-full blur-[120px] opacity-60" />
      </div>
    </div>
  );
}
