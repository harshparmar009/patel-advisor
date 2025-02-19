import { Phone, Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black text-sm mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Contact and Links */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            {/* <h3 className="font-bold">Main Office</h3> */}
            {/* <p>A/8, Dhanlaxmi Tower, Vastrapur, Near Vastrapur Lake, Ahmedabad, Gujarat - 380015</p> */}
            <h3 className="font-bold mt-4">Branch Office</h3>
            <p>E-202, Swagat Rainforest-1, Kudasan, Gandhinager-382481, Gujarat</p>
          </div>
          <div>
            <h3 className="font-bold">Main Services</h3>
            <ul>
              <li>Company Incorporation</li>
              <li>LLP Incorporation</li>
              <li>GST Registration</li>
              <li>FSSAI License</li>
              <li>Import Export Code</li>
              <li>MSME Registration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Policy</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Payment & Refund Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3">
            <Phone /> <span>+91 9680719296</span>
            <Mail /> <span>support@Pateladvisors.in</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <MessageCircle className="text-xl cursor-pointer" />
            <Instagram className="text-xl cursor-pointer" />
            <Linkedin className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 py-4 bg-gray-200">
        &copy; Created by JackInfoSoft LLP
      </div>
    </footer>
  );
};

export default Footer;
