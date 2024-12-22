import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        404 - Страница не найдена
      </h1>
      <p className="mb-4">
        Упс! Страница, которую вы ищете, похоже, не существует.
      </p>
    </section>
  );
}
