import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";

type RouterComponentProps = {
  parentPathname: string;
  pathname: string;
  router: AppRouterInstance;
  label: string;
  icon: React.ReactNode;
  isOpen: boolean;
};

export default function RouterComponent({
  parentPathname,
  pathname,
  router,
  label,
  icon,
}: RouterComponentProps) {
  return (
    <div
      className={`${
        parentPathname === pathname
          ? "bg-secondary-100 text-primary-100 shadow-custom-yellow"
          : "text-white-100 border border-primary-60"
      } flex text-base rounded-[50px] px-4 py-3 space-x-[10px] items-center cursor-pointer hover:bg-secondary-100 hover:text-primary-100 hover:shadow-custom-yellow`}
      onClick={() => {
        router.replace(pathname);
      }}>
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  );
}
