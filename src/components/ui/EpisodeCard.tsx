import React from "react";

interface EpisodeCardProps {
  title: string;
  description: string;
  duration?: string;
  episodeNumber?: number;
  isCompleted?: boolean;
  isLocked?: boolean;
  onClick?: () => void;
  className?: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  title,
  description,
  duration,
  episodeNumber,
  isCompleted = false,
  isLocked = false,
  onClick,
  className = "",
}) => {
  const handleClick = () => {
    if (!isLocked && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 ${
        isLocked
          ? "opacity-60 cursor-not-allowed"
          : "hover:border-gray-600 cursor-pointer hover:bg-gray-800/70"
      } ${
        isCompleted ? "border-green-500/50 bg-green-500/5" : ""
      } ${className}`}
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            {episodeNumber && (
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-garet font-semibold text-sm">
                  {episodeNumber}
                </span>
              </div>
            )}

            <h3 className="font-garet font-semibold text-lg text-white">
              {title}
              {isCompleted && (
                <span className="ml-2 text-green-400">
                  <svg
                    className="w-5 h-5 inline"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              {isLocked && (
                <span className="ml-2 text-gray-400">
                  <svg
                    className="w-5 h-5 inline"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </h3>
          </div>
        </div>

        {duration && (
          <div className="flex items-center text-sm text-gray-400">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {duration}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 font-garet text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {isLocked && (
            <span className="text-sm text-gray-400 font-garet">Bloqueado</span>
          )}
          {isCompleted && (
            <span className="text-sm text-green-400 font-garet">
              Completado
            </span>
          )}
        </div>

        {!isLocked && !isCompleted && (
          <div className="flex items-center text-sm text-primary font-garet">
            <span>Empezar</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeCard;
