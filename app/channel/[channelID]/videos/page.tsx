"use client";
import Button from "@/components/Button";
import useChannelData from "@/hooks/useChannelData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  const { channelVideos } = useChannelData();
  return (
    <div className="w-full flex flex-col gap-4">
      <ul className="flex gap-2">
        <li>
          <Button variant="dark" className="text-sm px-3 rounded-md">
            Latest
          </Button>
        </li>
        <li>
          <Button className="text-sm px-3 rounded-md">Popular</Button>
        </li>
        <li>
          <Button className="text-sm px-3 rounded-md">Oldest</Button>
        </li>
      </ul>
      <ul className="grid grid-cols-4 gap-4">
        {channelVideos?.videoResults?.map((videoList) => (
          <Link href={`/watch?id=${videoList.videoId}`} key={videoList.videoId}>
            <div className="space-y-2">
              <div className="flex relative">
                <Image
                  src={videoList.thumbnail as string}
                  alt={"video_thumbnail"}
                  className="w-[auto] rounded-xl"
                  width={336}
                  height={188}
                />
                <p className="bg-[#00000083] backdrop-blur-2xl shadow-2xl text-white text-[10px] px-1 rounded-sm absolute bottom-1 right-2">
                  {videoList.durationText}
                </p>
              </div>
              <div className="w-full flex flex-col gap-1 text-sm font-semibold">
                <h3 className="line-clamp-2 leading-6">{videoList.title}</h3>
                <h3 className="text-[12px] text-gray-400 font-normal">
                  {`${videoList.viewCount} • ${videoList.publishedDate}`}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Page;
