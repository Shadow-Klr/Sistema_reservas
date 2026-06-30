"use client";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex gap-6">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.5, 1, 0.5], 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut" 
            }}
          >
            <Utensils className="w-10 h-10 text-amber-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}