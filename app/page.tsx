import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.jpg"
        alt="моё фото"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale"
        width={160}
        height={160}
        priority
      />

      <p className="mb-8 text-2xl font-medium tracking-tight">
        Привет!
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="text-base font-normal">
          Меня зовут Федоров Леонид, я бэкенд разработчик и это мой сайт-портфолио.
        </h1>
        <p>
          На данный момент, я живу в Санкт-Петербурге и работаю в{" "}
          <a
            target="_blank"
            href="https://2gis.ru"
          >
            2ГИС
          </a>{" "}
          на позиции Go-разработчика в команде UGC, а так же я учусь в{" "}
          <a
            target="_blank"
            href="https://guap.ru"
          >
            ГУАП
          </a>{" "}
          по направлению программная инженерия.
        </p>
        <p>
          В свободное от учебы и работы время, я занимаюсь личными проектами, очень увлечен разработкой игр, как from scratch, так и на Unreal Engine 5.
        </p>
        <p>
          Основные навыки: Go, PostgreSQL, JavaScript, C++, Vulkan, Unreal Engine.
        </p>
        <p>
          Связаться со мной можно по телефону{" "}
          <a href="tel:+79997955164">
            +7-999-795-51-64
          </a>
          {" "}, через{" "}
          <a href="https://t.me/z1lt0id" target="_blank">
            Telegram
          </a>
          {" "}или по почте{" "}
          <a href="mailto:leo.fed97@gmail.com">
            leo.fed97@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
