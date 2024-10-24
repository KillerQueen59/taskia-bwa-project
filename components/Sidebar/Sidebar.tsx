"use client";
import Image from "next/image";
import RouterComponent from "./RouterComponent";
import { usePathname, useRouter } from "next/navigation";

function SideBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`min-w-[280px] h-screen flex p-[30px] flex-col bg-primary-100 overflow-auto transition-width duration-300 easy space-y-[30px]`}>
      <div className="flex items-center space-x-1.5 ">
        <Image
          src="/logo.svg"
          alt="taskia Logo"
          width={140}
          height={85}
          priority
          className="transition-all duration-100 ease-out"
        />
      </div>
      {/* General */}
      <div className="space-y-[18px]">
        <div className="text-sm	text-white-100 font-semibold">GENERAL</div>
        <RouterComponent
          parentPathname={pathname}
          pathname="/overview"
          router={router}
          label="Overview"
          icon={
            pathname === "/overview" ? (
              <Image
                src="/3dcube-active.svg"
                alt="Overview Icon"
                width={24}
                height={24}
                priority
              />
            ) : (
              <Image
                src="/3dcube.svg"
                alt="Overview Icon"
                width={24}
                height={24}
                priority
              />
            )
          }
          isOpen={false}
        />
        <RouterComponent
          parentPathname={pathname}
          pathname="/my-people"
          router={router}
          label="My People"
          icon={
            pathname === "/my-people" ? (
              <Image
                src="/profile-2user-active.svg"
                alt="My People"
                width={24}
                height={24}
                priority
              />
            ) : (
              <Image
                src="/profile-2user.svg"
                alt="My People"
                width={24}
                height={24}
                priority
              />
            )
          }
          isOpen={false}
        />
        <RouterComponent
          parentPathname={pathname}
          pathname="/manage-task"
          router={router}
          label="Manage Task"
          icon={
            pathname === "/manage-task" ? (
              <Image
                src="/note-favorite-active.svg"
                alt="Manage Task"
                width={24}
                height={24}
                priority
              />
            ) : (
              <Image
                src="/note-favorite.svg"
                alt="Manage Task"
                width={24}
                height={24}
                priority
              />
            )
          }
          isOpen={false}
        />
        <RouterComponent
          parentPathname={pathname}
          pathname="/rewards"
          router={router}
          label="Rewards"
          icon={
            pathname === "/rewards" ? (
              <Image
                src="/crown-active.svg"
                alt="Rewards"
                width={24}
                height={24}
                priority
              />
            ) : (
              <Image
                src="/crown.svg"
                alt="Rewards"
                width={24}
                height={24}
                priority
              />
            )
          }
          isOpen={false}
        />
        <RouterComponent
          parentPathname={pathname}
          pathname="/ai-customs"
          router={router}
          label="AI Customs"
          icon={
            pathname === "/ai-customs" ? (
              <Image
                src="/hierarchy-square-3-active.svg"
                alt="AI Customs"
                width={24}
                height={24}
                priority
              />
            ) : (
              <Image
                src="/hierarchy-square-3.svg"
                alt="AI Customs"
                width={24}
                height={24}
                priority
              />
            )
          }
          isOpen={false}
        />
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-prymari-60" />

      {/* Others */}
      <div className="space-y-[18px]">
        <div className="text-sm	text-white-100 font-semibold">OTHERS</div>
        <RouterComponent
          parentPathname={pathname}
          pathname="/settings"
          router={router}
          label="Settings"
          icon={
            pathname === "/settings" ? (
              <Image
                src="/setting-2-active.svg"
                alt="Settings"
                width={24}
                height={24}
                priority
              />
            ) : (
              <Image
                src="/setting-2.svg"
                alt="Settings"
                width={24}
                height={24}
                priority
              />
            )
          }
          isOpen={false}
        />
        <RouterComponent
          parentPathname={pathname}
          pathname="/help-center"
          router={router}
          label="Help Center"
          icon={
            pathname === "/help-center" ? (
              <Image
                src="/message-question-active.svg"
                alt="Help Center"
                width={24}
                height={24}
                priority
              />
            ) : (
              <Image
                src="/message-question.svg"
                alt="Help Center"
                width={24}
                height={24}
                priority
              />
            )
          }
          isOpen={false}
        />
        <div
          className={`text-white-100 border border-primary-60 flex text-base rounded-[50px] px-4 py-3 space-x-[10px] items-center cursor-pointer`}
          onClick={() => {
            // do logout
          }}>
          <Image
            src="/forbidden-2.svg"
            alt="Logout"
            width={24}
            height={24}
            priority
          />
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
