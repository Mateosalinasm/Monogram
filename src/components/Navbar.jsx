import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const Navbar = () => {
  return (
    <div>
      {/* <Disclosure as="nav" className="border">
        <DisclosureButton className="p-2">
          Is team pricing available?
        </DisclosureButton>
        <DisclosurePanel className="text-gray-500">
          Yes! You can purchase a license that you can share with your entire
          team.
        </DisclosurePanel>
      </Disclosure> */}
      <div className="border border-white w-screen flex justify-between ">
        <div className="border border-green-500 px-2">
          <div>
            <h1 className="">MONOGRAM</h1>
          </div>
        </div>
        <div className="flex gap-4 px-2">
          <div>
            <a href="#">HOW IT WORKS</a>
          </div>
          <div>
            <a href="#">WORKFLOWS</a>
          </div>
          <div>
            <a href="#">DOWNLOADS</a>
          </div>
          <div>
            <a href="#">BLOG</a>
          </div>
          <div>
            <a href="#">SUPPORT</a>
          </div>
          <div>
            <a href="#">SHOP</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
