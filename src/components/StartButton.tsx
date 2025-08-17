"use client";

import { Button } from "@/components/ui";

interface StartButtonProps {
  onStartClick?: () => void;
}

export default function StartButton({ onStartClick }: StartButtonProps) {
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
        size="md"
        className="font-garet relative z-20"
      >
        Comenzar el viaje
      </Button>
    </div>
  );
}
