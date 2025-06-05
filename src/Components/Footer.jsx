import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-indigo-700 h-308px md: md:h-[230px] max-w-fill">
      <div className="max-w-[1280px] mx-auto">
        <div className="py-10 px-5 md:flex items-center justify-between">
          <div className="md:w-[247px] md:[200px]">
            <div className="flex gap-2 items-center">
              <Film className="text-white md:w-[16px] md:h-[16px]" />
              <p className="text-white text-sm">Movie Z</p>
            </div>
            <p className="text-white text-sm">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-20 pt-[28px] md:h-200px md:p-[0px]">
            <div>
              <p className="text-white text-sm">Contact Information</p>
              <div className="flex items-center gap-2">
                <Mail className="text-white" />
                <div>
                  <p className="text-white text-sm">Email:</p>
                  <p className="text-white text-sm">support@movieZ.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-white" />
                <div>
                  <p className="text-white text-sm">Phone:</p>
                  <p className="text-white text-sm">+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white text-sm">Follow us</p>
              <p className="text-white text-sm">Facebook</p>
              <p className="text-white text-sm">Instagram</p>
              <p className="text-white text-sm">Twitter</p>
              <p className="text-white text-sm">Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
