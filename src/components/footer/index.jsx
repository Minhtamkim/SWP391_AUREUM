import { useState } from "react";
import { FaFacebook, FaInstagram, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  

  return (
    <footer className="bg-[#2d2d2b] text-gray-300 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Cập Nhật Tin Tức Cùng AREUM
              </h3>

            </div>
            <a href="/">
              {" "}
              <img
                src="/images/logoAureum.png"
                alt="Company Logo"
                className="h-16 w-auto mb-4 mt-4"
                onError={(e) => {
                  e.target.src = "/public/images/aureum.png";
                  e.target.onerror = null;
                }}
              />
            </a>
            <p className="text-sm leading-7">
              CÔNG TY TNHH AUREUM SKINCARE Địa chỉ : Lô E2a-7, Đường D1, Đ. D1,
              Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000,
              Việt Nam
            </p>
            <p>Hotline: 02835359973</p>
            <p>Email: support@aureum.com</p>
          </div>

          {/* Về Aureum */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Về AUREUM</h3>
            <ul className="space-y-4">
              <a href="/aboutUs" className="hover:text-[#e3d0b1]">
                Câu chuyện thương hiệu
              </a>
            </ul>
          </div>

          {/* Hổ Trợ*/}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Hỗ Trợ</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <a
                  href="/frequentlyAskedQuestions"
                  className="hover:text-[#e3d0b1]"
                >
                  Các câu hỏi thường gặp
                </a>
              </li>
              <li className="flex items-center">
                <a href="/returnPolicy" className="hover:text-[#e3d0b1]">
                  Chính sách đổi trả
                </a>
              </li>
            </ul>
          </div>

          {/* Thông Tin */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Thông Tin</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <a href="/privacyPolicy" className="hover:text-[#e3d0b1]">
                  Chính sách bảo mật
                </a>
              </li>
              <li className="flex items-center">
                <a href="/termsOfUse" className="hover:text-[#e3d0b1]">
                  Điều khoản sử dụng
                </a>
              </li>
              <li className="flex items-center">
                <a href="/contact" className="hover:text-[#e3d0b1]">
                  Liên Hệ
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <img src="/images/logoFooter.png" alt="Logo" />
            </div>
            <div className="mt-10">
              <h3 className="text-white text-lg font-semibold mb-4">
                Theo Dõi Chúng Tôi
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebook, label: "Facebook" },
                  { icon: FaInstagram, label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-gray-800">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Aureum Vietnam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
