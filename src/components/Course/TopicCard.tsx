"use client";

import { useState } from "react";
import { Topic } from "@/lib/topics";

interface TopicCardProps {
  topic: Topic;
  onSelect?: (topic: Topic) => void;
}

export default function TopicCard({ topic, onSelect }: TopicCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (topic.isUnlocked) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        onSelect?.(topic);
      }, 150);
    }
  };

  return (
    <div
      className={`p-6 ${
        topic.isUnlocked ? "topic-card-active" : "topic-card-locked"
      } ${isClicked ? "scale-[0.99]" : "scale-100"}`}
      onClick={handleClick}
    >
      {topic.isUnlocked && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Gratis
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Header con badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-1 rounded-full">
              Día {topic.id}
            </span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1">
          <h3 className="topic-title mb-3">
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent font-bold ${
                topic.isUnlocked
                  ? "from-[#f59e0b] to-[#fbbf24]"
                  : "from-[#6b7280] to-[#9ca3af]"
              }`}
            >
              {topic.title}
            </span>
          </h3>
          <div className="topic-description">{topic.description}</div>
        </div>

        {/* Botón en la parte baja - solo para cards desbloqueadas */}
        {topic.isUnlocked && (
          <div className="mt-6 pt-4 border-t border-gray-700/30">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(topic);
              }}
              className="w-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-white px-4 py-3 rounded-lg transition-all duration-300 font-garet text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Abrir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
