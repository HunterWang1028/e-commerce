"use client";

import { useRouter } from "next/navigation";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { Button } from "./ui/button";

export const DisableDraftMode = () => {
  const enviorment = useDraftModeEnvironment();
  const router = useRouter();

  if (enviorment !== "live" && enviorment !== "unknown") return null;

  const handleClick = async () => {
    await fetch("/draft-mode/disable");
    router.refresh();
  };

  return (
    <Button
      onClick={handleClick}
      className=" fixed bottom-4 right-4 bg-gray-50 px-4 py-2 z-50"
    >
      Disable Draft Mode
    </Button>
  );
};
