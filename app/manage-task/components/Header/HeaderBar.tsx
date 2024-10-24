"use client";
import SearchField from "../../../../components/SearchField";
import Image from "next/image";

export const HeaderBar = () => {
  return (
    <div className="rounded-[18px] flex bg-primary-20 w-full p-4">
      <SearchField
        onSearch={() => {
          console.log("searching...");
        }}
        className="flex-grow"
      />
      <div className="flex space-x-[30px]">
        {/* icon button */}
        <div className="flex space-x-3">
          <div className="flex rounded-full border border-primary-60 cursor-pointer flex items-center justify-center w-12 h-12 ">
            <Image
              src="/direct.svg"
              alt="Search"
              width={24}
              height={24}
              priority
              className="m-[10px]"
            />
          </div>
          <div className="flex rounded-full border border-primary-60 cursor-pointer flex items-center justify-center w-12 h-12 ">
            <Image
              src="/activity.svg"
              alt="Search"
              width={24}
              height={24}
              priority
              className="m-[10px]"
            />
          </div>
        </div>
        <div className="w-[1px] h-full bg-primary-60" />
        <div className="flex space-x-3">
          <div className="text-right">
            <div className="text-primary-10 text-sm">Howdy,</div>
            <div className="font-bold text-base">Jannellia</div>
          </div>
          <Image
            src="/profile.png"
            alt="profile"
            width={48}
            height={48}
            priority
          />
        </div>
      </div>
    </div>
  );
};
