"use client";
import { EmptyState } from "./components/EmptyState";
import { Button } from "@/components/Button";
import { useState } from "react";
import TaskComponent, { Task } from "./components/TaskComponent/TaskComponent";
import { HeaderBar } from "./components/Header/HeaderBar";

const ManageTaskView = () => {
  const [dummyTask, setDummyTask] = useState<Task[]>([]);
  return (
    <div className="space-y-[30px]">
      <HeaderBar />
      <div className="flex">
        <div className="flex-grow">
          <div className="text-3xl font-extrabold">Manage Task</div>
          <div className="text-primary-10">
            Set the goals to grow your company
          </div>
        </div>
        {dummyTask.length > 0 && (
          <Button
            label="Add New Task"
            color="primary"
            type="fill"
            onClick={() => console.log("Clicked!")}
          />
        )}
      </div>
      {dummyTask.length > 0 ? (
        dummyTask.map((data) => {
          return <TaskComponent {...data} key={data.id} />;
        })
      ) : (
        <EmptyState
          onClick={() => {
            setDummyTask([
              {
                id: "1",
                createdAt: "12/12/2021",
                title: "Create a new design",
                assignee: "John Doe",
                dueDate: "12/12/2021",
                status: "Completed",
                priority: "High",
              },
              {
                id: "2",
                createdAt: "12/12/2021",
                title: "Create a new design",
                assignee: "John Doe",
                dueDate: "12/12/2021",
                status: "Completed",
                priority: "High",
              },
              {
                id: "3",
                createdAt: "12/12/2021",
                title: "Create a new design",
                assignee: "John Doe",
                dueDate: "12/12/2021",
                status: "Completed",
                priority: "High",
              },
            ]);
          }}
        />
      )}
    </div>
  );
};

export default ManageTaskView;
