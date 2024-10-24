import { Button } from "@/components/Button";
import Image from "next/image";

export const EmptyState = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="h-[420px] flex items-center justify-center">
      <div className="bg-primary-20 p-[30px] rounded-[30px]">
        <div className="w-[350px] flex items-center flex-col">
          <div className="flex rounded-full bg-yellow-10 items-center justify-center w-[80px] h-[80px] mb-6">
            <Image
              src="/note-favorite-yellow.svg"
              alt="Search"
              width={36}
              height={36}
              priority
            />
          </div>
          <div className="flex flex-col space-y-[10px] text-center mb-[30px]">
            <div className="font-bold text-xl">Oops No task</div>
            <div className="text-primary-10">
              You need to create some tasks for your employees to work on
            </div>
          </div>
          <div className="flex w-full space-x-2">
            <div className="w-1/2">
              <Button
                label="Import"
                color="primary"
                type="outline"
                fullWidth
                onClick={onClick}
              />
            </div>

            <div className="w-1/2">
              <Button
                label="Add New"
                color="primary"
                type="fill"
                fullWidth
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
