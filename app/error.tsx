"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Упс! Что-то пошло не так... Попробуй перезагрузить страницу?</p>
    </div>
  );
}
