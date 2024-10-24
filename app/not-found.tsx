import Image from "next/image";

const NotFound = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
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
              <div className="font-bold text-xl">404</div>
              <div className="text-primary-10">Page Not Found</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
