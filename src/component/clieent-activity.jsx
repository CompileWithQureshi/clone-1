"use client";
import { Button } from "keep-react";
import { TableComponent } from "./tabel";
import { HiMiniBell } from "react-icons/hi2";

function Client() {
  return (
    <>
      <main className=" flex-col">
        <p>client activity</p>
        <div className=" flex gap-5 border-b-2 pb-3  justify-start items-start">
          <div>
            <span>image</span>
            <p>new ccliet(week)</p>
          </div>
          <div>
            <span>image</span>

            <p>new ccliet(Month)</p>
          </div>
        </div>
        <ButtonGroupComponent />
        <TableComponent />
      </main>
    </>
  );
}

export default Client;

export const ButtonGroupComponent = () => {
  return (
    <main className=" flex justify-between items-center">
      <div>
        <Button.Group className="mt-5  ">
          <Button positionInGroup="start">Profile</Button>
          <Button positionInGroup="middle">Settings</Button>
          <Button positionInGroup="end">Messages</Button>
        </Button.Group>
      </div>
      <div className="mt-5 flex">
        <span className=" mr-2 border rounded-md w-6 h-6 grid items-center place-content-center">
          <HiMiniBell />
        </span>
        <span className=" mr-2 border rounded-md w-6 h-6 grid items-center place-content-center">
          <HiMiniBell />
        </span>
      </div>
    </main>
  );
};
