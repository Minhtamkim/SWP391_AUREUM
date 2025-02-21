function PoliciesPage() {
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
              <li>
                <a href="/account" className="hover:text-black -500">
                  Tài khoản
                </a>
              </li>
              <li className="font-semibold">Phương thức vận chuyển</li>
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

          <div className="w-full pl-20  gap-x-4 ">
            <nav className="text-lg text-gray-600 mb-4">
              <span className="text-gray-500">Trang chủ &gt; </span>
              <span className="font-semibold">Phương thức vận chuyển</span>
            </nav>

            <h2 className="text-2xl font-bold mb-3">Phí vận chuyển tại Aureum</h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              Aureum miễn phí vận chuyển tại các tỉnh/thành phố có cửa hàng của Aureum cho các đơn hàng từ
              <strong> 90.000đ</strong> trở lên. Các đơn hàng dưới 90.000đ quý khách chỉ mất
              <strong> 10.000đ</strong> phí vận chuyển.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Đối với những khách hàng thuộc các tỉnh/thành phố không có cửa hàng Aureum sẽ miễn phí vận chuyển đối với
              đơn hàng từ <strong>249.000đ</strong> trở lên. Đơn hàng dưới 249.000đ có cước phí vận chuyển là{" "}
              <strong>25.000đ</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoliciesPage;
