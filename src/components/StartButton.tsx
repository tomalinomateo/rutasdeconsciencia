"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export default function StartButton() {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push("/course");
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
