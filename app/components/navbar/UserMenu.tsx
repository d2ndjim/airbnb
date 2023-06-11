"use client";
import { FC, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = ({}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Airbnb Your home
        </div>
        <div
          onClick={toggleOpen}
          className="flex
          cursor-pointer
          items-center 
          gap-3 
          rounded-full 
          border-[1px] 
          border-neutral-200 
          p-4 
          transition 
          hover:shadow-md 
          md:px-2 
          md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="cursor-pointer flex flex-col">
            <>
              <MenuItem onClick={registerModal.onOpen} label="Signup" />
              <MenuItem onClick={loginModal.onOpen} label="Login" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
