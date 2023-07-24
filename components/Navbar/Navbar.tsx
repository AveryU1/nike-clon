import { useState } from "react";
import { navLinks } from "../../constants";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [subMenu, setSubMenu] = useState<string>("");

  return (
    <>
      {navLinks.map(categories => (
        <div key={categories.id}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h3
              className="py-7 flex justify-between items-center lg:p-[12px] hover:lg:border-b-[1px] hover:xl:border-b-[1px] border-black xl:p-[12px] xs:z-[1]"
              onClick={() => {
                subMenu !== categories.title
                  ? setSubMenu(categories.title)
                  : setSubMenu("");
              }}
            >
              {categories.title}
              <span className="lg:hidden md:hidden xl:hidden hover:rotate-90 ">
                <MdKeyboardArrowRight
                  style={{ fontSize: "20px" }}
                />
              </span>
            </h3>
            {categories.submenu && (
              <div>
                <div className="absolute top-18 hidden group-hover:lg:block hover:lg:block group-hover:xl:block hover:xl:block z-[1]">
                  <div className="bg-white p-5 grid grid-cols-2 gap-10 z-[1]">
                    {categories.fields.map(category => (
                      <div key={category.title}>
                        <h3 className="text-base font-medium">
                          {category.title}
                        </h3>
                        {category.options.map(
                          option => (
                            <ul key={option.name}>
                              <li className="text-sm text-zinc-400 my-2.5 cursor-pointer hover:text-black">
                                {option.name}
                              </li>
                            </ul>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* mobile menu */}

          <div
            className={`${subMenu === categories.title
                ? "md:hidden"
                : "hidden"
              }`}
          >
            {categories.fields.map(category => (
              <div key={category.title}>
                <div>
                  <h3 className="py-4 pl-7 font-medium md:pr-0 pr-5 ">
                    {category.title}
                  </h3>
                  <div>
                    {category.options.map(
                      (option, index) => (
                        <ul key={index}>
                          <li className="pb-3 pl-14 text-sm text-zinc-400 cursor-pointer hover:text-black">
                            {option.name}
                          </li>
                        </ul>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navbar;
