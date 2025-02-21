function AccountPage() {
  return (
    <div>
      <div className="relative h-24 flex items-center justify-center bg-[#f8f6f3] p-10 z-0">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div
            className=" mx-10   rounded-lg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{ backgroundImage: "url('./images/Banner.jpg')" }}
          ></div>
        </div>

        <div className="relative text-center px-4 z-10">
          <h2 className="text-lg font-semibold text-gray-800">Xin chào, chúng tôi có thể giúp gì cho bạn?</h2>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm sản phẩm, thương hiệu bạn mong muốn..."
              className="w-[500px] p-2 rounded-full border border-gray-300 shadow-sm focus:ring focus:ring-blue-300 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f8f6f3] min-h-screen py-10 px-10">
        <div className="  w-full flex ">
          <div className="w-1/3 border-r pr-4 text-gray-700 px-10">
            <ul className="space-y-2 text-lg">
              <li className="font-semibold"> Tài khoản</li>
              <li>
                <a href="/policies" className="hover:text-black -500">
                  Phương thức vận chuyển
                </a>
              </li>
              <li>
                <a href="/huong-dan-nhap-hang" className="hover:text-black -500">
                  Hướng dẫn nhập hàng
                </a>
              </li>
              <li>
                <a href="/chinh-sach-doi-tra" className="hover:text-black -500">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="/chinh-sach-bao-mat" className="hover:text-black -500">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/dieu-khoan-su-dung" className="hover:text-black -500">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="/cau-hoi-thuong-gap" className="hover:text-black -500">
                  Các câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full pl-20 gap-x-4">
            <nav className="text-lg text-gray-600 mb-4">
              <span className="text-gray-500">Trang chủ &gt; </span>
              <span className="font-semibold">Tài khoản</span>
            </nav>

            <h2 className="text-2xl font-bold mb-3">Tài Khoản</h2>
            <hr className="my-4 border-black -300"></hr>

            <h2 className="text-lg font-bold mb-3 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-400 after:mt-1">
              Đăng ký thành viên như thế nào?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              Quý khách vui lòng nhấn vào nút Đăng nhập - Đăng ký tài khoản trên góc phải màn hình và chọn Đăng ký/Đăng
              ký ngay để điền các thông tin được yêu cầu, sau đó nhấn nút Đăng ký.
            </p>
            <h2 className="text-lg font-bold mb-3 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-400 after:mt-1">
              Tại sao tôi không thể đăng nhập vào tài khoản của tôi?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Quý khách vui lòng kiểm tra kỹ và chắc chắn không bật phím Caps Lock trong quá trình nhập mật khẩu. Nếu
              vẫn không đăng nhập được, quý khách có thể sử dụng chức năng Quên mật khẩu để đặt lại mật khẩu mới.
            </p>

            <h2 className="text-lg font-bold mb-3 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-400 after:mt-1">
              Tôi muốn thay đổi thông tin tài khoản như thế nào?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Để thay đổi thông tin cá nhân, quý khách vui lòng đăng nhập vào tài khoản của mình, chọn Tài khoản của bạn
              rồi chỉnh sửa thông tin cần thiết.
            </p>

            <h2 className="text-lg font-bold mb-3 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-400 after:mt-1">
              Tôi có thể sử dụng chung một tài khoản khác được không?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Quý khách nên sử dụng tài khoản cá nhân để đảm bảo an toàn dữ liệu và quyền lợi của mình. Hệ thống có thể
              ghi nhận những tài khoản có dấu hiệu đáng ngờ và hạn chế quyền truy cập.
            </p>

            <h2 className="text-lg font-bold mb-3 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-400 after:mt-1">
              Đăng ký thành viên tại Aureum giúp ích gì cho tôi?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Việc đăng ký tài khoản là cơ hội để quý khách trở thành một trong những khách hàng thân thiết tại Aureum,
              với cơ hội nhận nhanh nhất các chương trình khuyến mãi, thông tin ưu đãi khi mua sắm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
