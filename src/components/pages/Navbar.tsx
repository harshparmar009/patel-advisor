'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ChevronRight} from 'lucide-react'
import logo from '../../../public/image/patel_logo.png'
import whatsappData from './Animation.json'
import Lottie from 'lottie-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  // const [isAboutOpen3, setIsAboutOpen3] = useState(false)

  const phoneNumber = "+919680719296"; 

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const whatsappURL = `https://wa.me/${phoneNumber}`

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);



  return (
   <div>

<div 
    className="bg-white border-b-2 border-black shadow-md fixed top-0 right-0 w-full z-50 ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 pt-2">
            <Link href="/">
            <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-28 rounded-2xl mb-[10px]"
            
          />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href={'/'}
                className="text-black text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">
                <button>Home</button>
              </Link>
             

              <Link
              href={'./about'}
              className="text-black text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">                            
                About Us            
              </Link>

              <Link
              href={'./certificates'}
              className="text-black text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium">               
                Certificate            
              </Link>

              <div className="relative group">
                <button 
                  className="text-black text-opacity-90 hover:text-opacity-100 px-3 py-2 rounded-md text-xl font-medium inline-flex items-center"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  Contact
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutOpen && (
                  <div 
                    className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href={'./gallery'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Gallery
                      </Link>
                      <Link href={'./contact'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Contact
                      </Link>
                    </div>
                  </div>
                )}
              </div>


              <div className="relative">
          {/* Services Button */}
          <button
            className="px-4 py-2 rounded-md text-lg flex items-center text-black text-opacity-90 hover:text-opacity-100"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            Services <ChevronDown className="ml-1 h-4 w-4" />
          </button>

          {/* Services Dropdown */}
          {isServicesOpen && (
            <div
              className="absolute left-0  w-56 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="py-2">
                {/* Registraions */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu("register")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-gray-700 ">
                    Registration <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Submenu for Commercial Services */}
                  {openSubmenu === "register" && (
                    <div className="absolute left-full top-0 w-48 h-[300px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30 overflow-y-auto">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Drug License
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Pasara License
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        MD-42 License
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Ayush License
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Darpan Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Halal Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Ice Gate Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Money Lending Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        12A & 80G Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Copyright Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        MSME Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        DIN Application
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      IEC Application
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        FSSAI Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Digital Signature Certificate
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Pan & Tan Application
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Trademarks Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                       EPF Registraion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      ESI Registration
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      APEDA Registraion
                      </Link>
                     
                    </div>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu("terms")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-gray-700">
                    Start-Up <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Submenu for Terms & Conditions */}
                  {openSubmenu === "terms" && (
                    <div className="absolute left-full top-0 h-[300px] overflow-y-auto w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Private Limited Company Incorporation
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Section 8 Incorporation
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        One Person Company Incorporation
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Public Limited Company Incorporation
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Nidhi Company Incorporation
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Producer Company Incorporation
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        LLP Incorporation
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Partnership Registrarion
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Hindu Undevided Family
                      </Link>
                    </div>
                  )}
                </div>

                {/* Commercial Services */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu("commercial")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-gray-700 ">
                    Commercial Services <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Submenu for Commercial Services */}
                  {openSubmenu === "commercial" && (
                    <div className="absolute left-full top-0 h-[300px] overflow-y-auto w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Change of Director
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Change of Partners
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Change in DIN
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Change in Company Address
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Director-KYC
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Transfer of Share
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        DIN Surrender
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Increasing the Authorized Capital
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Increasing Paid-Up Capital
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      INC 20A Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      ROC Search Report
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      MOA/AOA Printing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Apointment to Auditor
                      </Link>
                    </div>
                  )}
                </div>

                


                {/* GST Services */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu("gst")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-gray-700 ">
                    GST Services <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Submenu for Commercial Services */}
                  {openSubmenu === "gst" && (
                    <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        GST Monthly Return
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        GST Registration
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      GST Annual Return
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        GST Modification
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        LUT under GST
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        GST Cancellation
                      </Link>
                     
                    </div>
                  )}
                </div>


                {/* Compliances */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu("compliances")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-gray-700 ">
                      Compliances <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Submenu for Commercial Services */}
                  {openSubmenu === "compliances" && (
                    <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Company Annual Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        OPC Anual Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Pub LTD Anual Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Section 8 Anual Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Nidhi Anual Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Producer Anual Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        LLP Anual Filing
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Accounting & Bookkeeping
                      </Link>
                     
                    </div>
                  )}
                </div>


                {/* Return */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu("return")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-gray-700 ">
                      Return <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Submenu for Commercial Services */}
                  {openSubmenu === "return" && (
                    <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                       Taxation & ITR
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        PE Return
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      TDS Return
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        ESI Return
                      </Link>
                    
                     
                    </div>
                  )}
                </div>


                {/* agreement */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu("agreement")}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100 text-gray-700 ">
                      Agreements <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Submenu for Commercial Services */}
                  {openSubmenu === "agreement" && (
                    <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                       Lease Agreement
                      </Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Rent Agreement
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
              
            </div>
          </div>

          {/* contact info */}
          <div className="hidden md:block flex items-center">
            <a
            href='tel:+919680719296'
             className="bg-transparent hover:text-opacity-60 
            border-solid border-[1px] 
            border-white text-black px-5 py-3 rounded-md 
            text-sm font-medium">
              +91 9680719296
            </a>

            <Link
            href={"./contact"} 
             className="bg-transparent hover:text-opacity-60
            border-solid border-[1px] 
            border-white text-black px-5 py-3 rounded-md 
            text-sm font-medium">
              support@Pateladvisors.in
            </Link>
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <button
            onClick={makeCall} 
             className="bg-black hover:bg-opacity-70 
            border-solid border-[1px] 
            border-white text-black px-5 py-3 rounded-md 
            text-sm font-medium text-white" >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="inline-flex z-50 items-center justify-center p-2 rounded-md text-black "
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block  text-white h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 fixed inset-0 pt-[5rem] -z-10 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            
            <Link href={"./about"} className="text-white block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <Link href={"./certificates"} className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Certificate
            </Link>

            <div className="relative">
              <button 
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
              >
                Contact
                <ChevronDown className={`h-4 w-4 transform ${isAboutOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
              </button>
              {isAboutOpen && (
                <div className="pl-4">
                  <Link href={"./gallery"} className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    Gallery
                  </Link>
                  <Link href={"./contact"} className="block px-3 py-2 rounded-md text-base font-medium text-white">
                    Contact
                  </Link>
                </div>
                
              )}
            </div>
      

<div className="relative">
  <button 
    onClick={() => setServiceOpen(!serviceOpen)}
    className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center "
  >
    Services
    <ChevronDown className={`h-4 w-4 transform ${serviceOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
  </button>

  {serviceOpen && (
    <div className="pl-2">
      {[
        {
          key: "startup",
          title: "Start-Up",
          links: [
            "Private Limited Company Incorporation",
            "Section 8 Incorporation",
            "One Person Company Incorporation",
            "Public Limited Company Incorporation",
            "Nidhi Company Incorporation",
            "Producer Company Incorporation",
            "LLP Incorporation",
            "Partnership Registrarion",
            "Hindu Undevided Family",
          ],
        },
        {
          key: "commercial",
          title: "Commercial Services",
          links: [
            "Change of Director",
            "Change of Partners",
            "Change in DIN",
            "Change in Company Address",
            "Director-KYC",
            "Transfer of Share",
            "DIN Surrender",
            "Increasing the Authorized Capital",
            "Increasing Paid-Up Capital",
            "INC 20A Filing",
            "ROC Search Report",
            "MOA/AOA Printing",
            "Apointment to Auditor",
          ],
        },
        {
          key: "registration",
          title: "Registration",
          links: [
            "Drug License",
            "Psara License",
            "MD-42 License",
            "Ayush License",
            "Darpan Register",
            "Halal Register",
            "Ice Gate Register",
            "Money Lending License",
            "12A &80G Register",
            "Copyright Register",
           "MSME Registraion",
            "DIN Application",
            "IEC Application",
            "FSSAI Registraion",
            "Digital Signature Certificate",
            "Pan & Tan Application",
            "Trademarks Registraion",
            "EPF Registraion",
            "ESI Registration",
            "APEDA Registraion",
          ],
        },
        {
          key: "gst",
          title: "GST Services",
          links: [
            "GST Monthly Return",
            "GST Registration",
            "GST Annual Return",
            "GST Modification",
            "LUT under GST",
            "GST Cancellation",
          ],
        },
        {
          key: "compliances",
          title: "Compliances",
          links: [
            "Company Annual Filing",
            "OPC Anual Filing",
            "Pub LTD Anual Filing",
            "Section 8 Anual Filing",
            "Nidhi Anual Filing",
            "Producer Anual Filing",
            "LLP Anual Filing",
            "Accounting & Bookkeeping",
          ],
        },
        {
          key: "return",
          title: "Return",
          links: [
            "Taxation & ITR",
            "PE Return",
            "TDS Return",
            "ESI Return",
          ],
        },
        {
          key: "agreements",
          title: "Agreements",
          links: [
            "Lease Agreement",
            "Rent Agreement",
          ],
        },
      ].map((section) => (
        <div key={section.key} className="mb-2">
          <button
            onClick={() =>
              setOpenMobileSubmenu(
                openMobileSubmenu === section.key ? null : section.key
              )
            }
            className="text-white w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium"
          >
            {section.title}
            <ChevronDown
              className={`h-4 w-4 transform ${
                openMobileSubmenu === section.key ? "rotate-180" : ""
              } transition-transform duration-200`}
            />
          </button>

          {openMobileSubmenu === section.key && (
            <div className="pl-4 space-y-1">
              {section.links.map((linkName, i) => (
                <Link
                  href="/"
                  key={i}
                  className="block text-sm text-white hover:underline"
                >
                  {linkName}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>


            {/* <Link href="/privacy" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                Privacy-Policy
            </Link> */}
          <div className="w-full flex items-center justify-center">
            <Link
            href={"./contact"} 
             className="bg-transparent  
            text-white px-5 py-3 rounded-md 
            text-sm font-medium">
              +91 9680719296
            </Link>
            <Link
            href={"./contact"} 
             className="bg-transparent  
            text-white px-5 py-3 rounded-md 
            text-sm font-medium">
              support@Pateladvisors.in
            </Link>
          </div>

          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button 
            onClick={makeCall}
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium">
              Contact Us
            </button>
          </div>
          
        </div>
      )}

    </div>

      <div className='z-50 fixed bottom-[5px] right-[5px]'>
        <a href={whatsappURL} target='_blank' rel='noopenernorefferrer'>
         <Lottie animationData={whatsappData} loop={true}  style={{ width: 80, height: 80 }} />
        </a>
      </div>
   </div>
  )
}