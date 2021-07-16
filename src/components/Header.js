import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="print:hidden">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>
          <h1 className="text-5xl font-bold ml-3">WiFi nè.</h1>
        </div>
        <div>
          <div className="text-xl py-3">
            Trang web giúp bạn chia sẻ mã truy cập WiFi của bạn thông qua QR
            code.
          </div>
          <div className="text-sm text-gray-600">
            Tham khảo ý tưởng từ{" "}
            <a href="https://wificard.io" target="_blank" rel="noreferrer">
              https://wificard.io
            </a>
            . Mục đích thực hành code ReactJS & TailwindCSS.
            <br />
            <span className="font-bold text-red-600">
              Toàn bộ thông tin sẽ không được gửi lên server.
            </span>{" "}
            Source code:{" "}
            <a href="https://github.com/tvqqq/wifi-ne">
              https://github.com/tvqqq/wifi-ne
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
