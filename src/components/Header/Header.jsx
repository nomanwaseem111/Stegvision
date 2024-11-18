import React, { useEffect, useState } from "react";
import StegvisionLogo from "../../assets/icons/stegvisionlogo.svg?react";
import Button from "../Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const navItems = ["Welcome", "Services", "About us", "Contact us"];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full px-5">
      <div className="max-w-[1296px] flex px-[32px] mx-auto  justify-between items-center min-h-[75px] rounded-[12px] border-[1.25px] border-custom-border bg-custom-background backdrop-blur-[40px]">
        <StegvisionLogo aria-label="Stegvision Logo" />

        <ul className="lg:flex hidden lg:gap-x-[25px] xl:gap-x-[45px] ">
          {navItems.map((item, index) => (
            <>
              {" "}
              <li
                key={index}
                className={`cursor-pointer font-[500] hover:text-primary ${
                  index === 0 ? "text-primary" : "text-secondary"
                } `}
              >
                {item}
              </li>
              <li>{index === 3 ? "" : "/"}</li>
            </>
          ))}
        </ul>

        
        <Button className="w-[227px] font-[500] h-[52px] relative hover:bg-black hover:border hover:border-white hover:text-white rounded-[8px] lg:flex hidden justify-center items-center gap-x-[8px]">
        Request a demo 
      </Button>
        <div className="relative block lg:hidden ">
          <GiHamburgerMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="block lg:hidden"
          />
          {menuOpen && (
            <ul className="lg:hidden border border-[#27393E] rounded-[16px] flex flex-col text-center space-y-5 pt-5 w-[200px] absolute top-5 -right-1 h-[200px] bg-black text-primary">
              {navItems.map((item, index) => (
                <>
                  {" "}
                  <li
                    key={index}
                    className={`cursor-pointer ${
                      index === 0 ? "text-primary" : "text-secondary"
                    } `}
                  >
                    {item}
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
