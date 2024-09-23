"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";

import { Input } from "../components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { create } from "zustand";
import CareLogo from "../assets/cares-logo.webp";
import {
  FaUserMd,
  FaHospital,
  FaStethoscope,
  FaCalendarAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const useLanguageStore = create((set) => ({
  language: "English",
  setLanguage: (lang) => set({ language: lang }),
}));

function SideMenu({ isOpen, onClose }) {
  const menuItems = ["Home", "About Us", "Blogs", "Careers", "Awards", "Media"];

  const socialIcons = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaYoutube, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="px-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="block py-2 text-lg text-blue-900 hover:text-blue-700 relative group"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        {socialIcons.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-gray-600 hover:text-blue-700"
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

const Dropdown = ({ title, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="text-gray-700 font-semibold">{title}</button>
      {isHovered && (
        <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguageStore();

  const topNavItems = [
    "About Us",
    "International Patients",
    "Pay Online",
    "Online Lab Reports",
    "Careers",
    "Enquire Now",
    "Feedback",
    "+91-4061656565",
  ];

  const navItems = [
    {
      icon: (
        <FaUserMd className="transition-transform duration-300 hover:scale-125" />
      ),
      text: "Doctors",
      href: "#",
    },
    {
      icon: (
        <FaStethoscope className="transition-transform duration-300 hover:scale-125" />
      ),
      text: (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="after:hidden">
                <h3>
                  {" "}
                  Specialities & <br />
                  Treatments
                </h3>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div>
                    <aside>
                      <h3>Center of Excellence</h3>
                      <ul>
                        <li>Cardiac Sciences</li>
                        <li>Gastro Sciences</li>
                        <li>Nephrology</li>
                        <li>Neurology</li>
                      </ul>
                    </aside>
                    <aside>
                      <h3>Specialties</h3>
                      <ul>
                        <li>Cardiology</li>
                        <li>Cardiac Surgery</li>
                        <li>Dermatology</li>
                      </ul>
                    </aside>
                    <aside>
                      <h3>Treatments and Procedures</h3>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </aside>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        // <Dropdown title="Specialities & Treatments">
        //   <ul>
        //     <li>
        //       <Link href="/cardiology">Cardiology</Link>
        //     </li>
        //     <li>
        //       <Link href="/neurology">Neurology</Link>
        //     </li>
        //     <li>
        //       <Link href="/orthopedics">Orthopedics</Link>
        //     </li>
        //   </ul>
        // </Dropdown>
      ),
      href: "#",
    },
    {
      icon: (
        <FaHospital className="transition-transform duration-300 hover:scale-125" />
      ),
      text: (
        <Dropdown title="Hospitals & Directions">
          <ul>
            <li>
              <Link href="/hospital-1">Hospital 1</Link>
            </li>
            <li>
              <Link href="/hospital-2">Hospital 2</Link>
            </li>
            <li>
              <Link href="/hospital-3">Hospital 3</Link>
            </li>
          </ul>
        </Dropdown>
      ),
      href: "#",
    },
    {
      icon: (
        <FaCalendarAlt className="transition-transform duration-300 hover:scale-125" />
      ),
      text: (
        <Dropdown title="Book an Appointment">
          <ul>
            <li>
              <Link href="/appointment-1">Doctor Appointment</Link>
            </li>
            <li>
              <Link href="/appointment-2">Specialist Appointment</Link>
            </li>
          </ul>
        </Dropdown>
      ),
      href: "#",
    },
    {
      icon: (
        <MdContactPhone className="transition-transform duration-300 hover:scale-125" />
      ),
      text: "Contact Us",
      href: "#",
    },
  ];

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      {!isScrolled && (
        <div className="bg-[#00b3b3] text-white transition-all duration-300">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-end py-1">
              <nav className="hidden lg:flex space-x-4 gap-nav">
                {topNavItems.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-xs hover:text-gray-200 relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-2 ml-4">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[100px] h-7 bg-white text-[#000000] border-none text-xs flex justify-between items-center px-2">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50 w-[120px]">
                    <SelectGroup className="text-[#000000] px-2">
                      {/* <SelectLabel className="flex text-center text-sm flex-row">
                        Select Language
                      </SelectLabel> */}
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Hindi">Hindi</SelectItem>
                      <SelectItem value="Telugu">Telugu</SelectItem>
                      <SelectItem value="Kannada">Kannada</SelectItem>
                      <SelectItem value="Marathi">Marathi</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select className="flex text-center">
                  <SelectTrigger className="w-[100px] h-7 bg-white text-[#000000] border-none text-xs flex justify-between items-center px-2 select-trigger">
                    <SelectValue placeholder="Hospitals" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50 w-[250px]">
                    <SelectGroup className="text-[#000000] px-2">
                      <SelectItem value="Hspitals">Hospitals</SelectItem>
                      <SelectItem value="Hyderabad-b">
                        CARE Hospitals, Banjara Hills, Hyderabad
                      </SelectItem>
                      <SelectItem value="Hyderabad-o-b">
                        CARE Hospitals, Outpatient Center, Banjara Hills,
                        Hyderabad
                      </SelectItem>
                      <SelectItem value="Hyderabad-htec">
                        CARE Hospitals, HTEC City, Hyderabad
                      </SelectItem>
                      <SelectItem value="Bubaneshwar">
                        CARE Hospitals, Bubaneshwar
                      </SelectItem>
                      <SelectItem value="Arilova">
                        CARE Hospitals, Health City, Arilova
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[100px] h-7 bg-white text-[#000000] border-none text-xs flex justify-between items-center px-2 ">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50 w-[100px]">
                    <SelectItem value="English" className="text-[#000000] px-2">
                      English
                    </SelectItem>
                    <SelectItem value="Hindi" className="text-[#000000] px-2">
                      Hindi
                    </SelectItem>
                    <SelectItem value="Telugu" className="text-[#000000] px-2">
                      Telugu
                    </SelectItem>
                  </SelectContent>
                </Select> */}

                {/* <Select>
                  <SelectTrigger className="w-[100px] h-7 bg-white text-[#000000] border-none text-xs flex justify-between items-center px-2">
                    <SelectValue placeholder="Hospitals" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50 w-[100px]">
                    <SelectItem
                      value="hyderabad"
                      className="text-[#000000] px-2"
                    >
                      Hyderabad
                    </SelectItem>
                    <SelectItem
                      value="bangalore"
                      className="text-[#000000] px-2"
                    >
                      Bangalore
                    </SelectItem>
                    <SelectItem value="mumbai" className="text-[#000000] px-2">
                      Mumbai
                    </SelectItem>
                  </SelectContent>
                </Select> */}

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-gray-200 h-7 w-7"
                  onClick={toggleSearch}
                >
                  <Search className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-gray-200 h-7 w-7"
                  onClick={toggleSideMenu}
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search here"
                className="w-full pr-20 pl-4 py-2 rounded-full"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={toggleSearch}
              >
                <X className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-[50px]">
          <Image
            src={CareLogo}
            alt="Care Hospitals Logo"
            width={70}
            height={10}
            className="ml-4 margin-left-care"
          />
          <nav className="hidden lg:flex space-x-6 relative items-center gap-8 mr-3">
            {navItems.map((item, index) => (
              <div key={index} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold text-sm">{item.text}</span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </header>
  );
}
