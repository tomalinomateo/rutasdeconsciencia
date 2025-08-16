"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

interface Topic {
  id: number;
  title: string;
  description: string;
  isUnlocked: boolean;
}

interface TopicCardProps {
  topic: Topic;
  onSelect?: (topic: Topic) => void;
}

export default function TopicCard({ topic, onSelect }: TopicCardProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [showLockedPopup, setShowLockedPopup] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const getCardClass = (dayNumber: number) => {
    // Día 1 (libre) usa clase activa, días 2-21 (bloqueados) usan clase bloqueada
    return dayNumber === 1 ? "topic-card-active" : "topic-card-locked";
  };

  const getBadgeClass = (dayNumber: number) => {
    // Badge del día: activo usa clase activa, bloqueado usa clase bloqueada
    return dayNumber === 1 ? "topic-badge-active" : "topic-badge-locked";
  };

  const handleClick = () => {
    if (topic.isUnlocked) {
      setIsClicked(true);
      // Reset animation after a short delay
      setTimeout(() => {
        setIsClicked(false);
        onSelect?.(topic);
      }, 150);
    } else {
      // Show popup for locked content
      setIsClicked(true);
      setShowLockedPopup(true);
      // Animate popup in
      setTimeout(() => setIsPopupVisible(true), 10);
      setTimeout(() => {
        setIsClicked(false);
        // Animate popup out
        setIsPopupVisible(false);
        setTimeout(() => setShowLockedPopup(false), 300);
      }, 2000);
    }
  };

  return (
    <div
      className={`p-6 ${getCardClass(topic.id)} ${
        isClicked ? "scale-[0.99]" : "scale-100"
      }`}
      onClick={handleClick}
    >
      {topic.id === 1 && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Libre
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`${getBadgeClass(
              topic.id
            )} flex items-center justify-center`}
          >
            Día {topic.id}
          </div>
          <div className="flex-1">
            <h3 className="topic-title">{topic.title}</h3>
            <div className="topic-description">{topic.description}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {topic.id !== 1 && (
            <div className="relative">
              <div className="flex items-center justify-center w-8 h-8">
                <Lock size={20} className="topic-lock-icon" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popup para contenido bloqueado */}
      {showLockedPopup && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
          <div
            className={`bg-gray-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ease-out ${
              isPopupVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            Obtén acceso completo al adquirir el programa
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      )}
    </div>
  );
}
