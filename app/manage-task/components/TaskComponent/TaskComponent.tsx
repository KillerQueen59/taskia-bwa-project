import { Button } from "@/components/Button";
import StatusIcon from "@/components/Icons/StatusIcon";
import Image from "next/image";

export type Task = {
  id: string;
  title: string;
  createdAt: string;
  priority: string;
  dueDate: string;
  status: string;
  assignee: string;
};

const TaskComponent = ({
  id,
  title,
  createdAt,
  priority,
  dueDate,
  status,
  assignee,
}: Task) => {
  const getBgColor = (id: string) => {
    switch (id) {
      case "1":
        return "bg-blue";
      case "2":
        return "bg-secondary-100";
      case "3":
        return "bg-purple-100";
      default:
        return "bg-white-100";
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "1":
        return "/ghost.svg";
      case "2":
        return "/bank.svg";
      case "3":
        return "/code.svg";
      default:
        return "/layer.svg";
    }
  };
  return (
    <div className="p-5 bg-primary-20 w-full rounded-[24px] flex" key={id}>
      {/* main component */}
      <div className="flex w-full">
        <div className="flex flex-col space-y-5 flex-grow">
          <div className="flex space-x-3">
            <div
              className={`${getBgColor(
                id
              )} w-[50px] h-[50px] rounded-full flex items-center justify-center`}>
              <Image
                src={getIcon(id)}
                alt="Search"
                width={20}
                height={20}
                priority
              />
            </div>
            <div>
              <div className="text-lg font bold">{title}</div>
              <div className="text-primary-10">Created At {createdAt}</div>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* priority */}
            <div className="flex space-x-1 items-center">
              <Image
                src="/layer.svg"
                alt="Search"
                width={20}
                height={20}
                priority
              />
              <div className="text-primary-10 font-semibold">{priority}</div>
            </div>
            {/* date */}
            <div className="flex space-x-1 items-center">
              <Image
                src="/clock.svg"
                alt="Search"
                width={20}
                height={20}
                priority
              />
              <div className="text-danger font-semibold">{dueDate}</div>
            </div>
            {/* status */}
            <div className="flex space-x-1 items-center">
              <StatusIcon
                width={20}
                height={20}
                color={status === "Completed" ? "#51EC96" : "##7E7997"}
              />
              <div
                className={`font-semibold ${
                  status === "Completed" ? "text-success" : "text-primary-10"
                }`}>
                {status}
              </div>
            </div>
            {/* priority */}
            <div className="flex space-x-1 items-center">
              <Image
                src="/profile-circle.svg"
                alt="Search"
                width={20}
                height={20}
                priority
              />
              <div className="text-primary-10 font-semibold">{assignee}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            label="Delete"
            color="danger"
            type="outline"
            onClick={() => console.log("Clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
