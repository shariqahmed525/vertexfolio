"use client";

import { useEffect } from "react";
import { FiCheck, FiAlertCircle, FiX } from "react-icons/fi";

interface AlertProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export default function Alert({ message, type, onClose, duration = 4000 }: AlertProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const isSuccess = type === "success";

  return (
    <div role="alert" className="fixed top-[2.5rem] left-1/2 z-[1000] flex items-center gap-4 py-3 pl-5 pr-4 rounded-[10px] bg-ink border border-brand shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-w-[90vw] min-w-[320px] overflow-hidden animate-slide-down">
      {/* Left accent strip */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${isSuccess ? "bg-[#10b981]" : "bg-[#f43f5e]"}`} />

      {/* Icon */}
      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${isSuccess ? "bg-[#10b981]/15 text-[#10b981]" : "bg-[#f43f5e]/15 text-[#f43f5e]"}`}>
        {isSuccess ? (
          <FiCheck size={16} />
        ) : (
          <FiAlertCircle size={16} />
        )}
      </div>

      {/* Message */}
      <p className="flex-1 text-base font-medium text-paper leading-[1.4] m-0">{message}</p>

      {/* Close button */}
      <button onClick={onClose} aria-label="Dismiss" className="bg-white/5 border-none w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-mist cursor-pointer transition-colors duration-200 hover:bg-white/10 hover:text-paper">
        <FiX size={14} />
      </button>

      {/* Progress bar */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] animate-shrink ${isSuccess ? "bg-[#10b981]" : "bg-[#f43f5e]"}`}
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}
