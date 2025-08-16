import React from "react";

interface ExerciseCardProps {
  title: string;
  description: string;
  duration?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  category?: string;
  isCompleted?: boolean;
  onClick?: () => void;
  className?: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  description,
  duration,
  difficulty = "beginner",
  category,
  isCompleted = false,
  onClick,
  className = "",
}) => {
  const difficultyColors = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  const difficultyLabels = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
  };

  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer ${
        isCompleted ? "border-green-500/50 bg-green-500/5" : ""
      } ${className}`}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-garet font-semibold text-lg text-white mb-2">
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
          </h3>

          {category && (
            <span className="inline-block px-2 py-1 text-xs font-garet bg-gray-700/50 text-gray-300 rounded-md">
              {category}
            </span>
          )}
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
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-garet border ${difficultyColors[difficulty]}`}
        >
          {difficultyLabels[difficulty]}
        </span>

        {isCompleted && (
          <span className="text-sm text-green-400 font-garet">Completado</span>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
