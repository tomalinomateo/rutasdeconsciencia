"use client";

import { Button } from "@/components/ui";

interface StartButtonProps {
  onStartClick?: () => void;
  isLoading?: boolean;
}

export default function StartButton({
  onStartClick,
  isLoading = false,
}: StartButtonProps) {
  const handleStartJourney = () => {
    if (onStartClick) {
      onStartClick();
    }
  };

  return (
    <div className="mt-8 relative z-0">
      <Button
        onClick={handleStartJourney}
        variant="primary"
        size="lg"
        className="font-garet relative z-20 min-w-[200px] h-12 flex items-center justify-center"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Acceder al programa"
        )}
      </Button>
    </div>
  );
}
