import { ImageResponse } from "next/og";
import { metaData } from "app/config";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || metaData.titleDefault;

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col w-full py-12 px-4 items-left justify-between p-8">
          <h2 tw="flex flex-row text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
          <p>{metaData.author}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
