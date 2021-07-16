import React from "react";
import QRCode from "qrcode.react";

class WifiCard extends React.Component {
  constructor() {
    super();
    this.state = {
      ssid: "",
      password: "",
      encryptionMode: "WPA",
      hidePassword: false,
      qrCode: "Welcome to Wifi nè.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleHidePassword = this.handleHidePassword.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.setState({
          qrCode: `WIFI:T:${this.state.encryptionMode};S:${this.state.ssid};P:${this.state.password};;`,
        });
      }
    );
  }

  handleHidePassword(event) {
    this.setState({
      hidePassword: event.target.checked,
    });
  }

  onPrint() {
    window.print();
  }

  render() {
    return (
      <div>
        <div className="mt-6 p-5 border-dashed border-2 border-gray-600">
          <div className="text-4xl font-bold">Đăng nhập WiFi</div>
          <div className="flex mt-2">
            <div className="w-1/3 flex justify-center items-center">
              <QRCode
                value={this.state.qrCode}
                className="w-auto shadow-md"
                renderAs={"svg"}
                size={200}
                level={"H"}
                includeMargin={true}
              />
            </div>
            <div className="w-2/3">
              <label className="block my-3">
                <span className="text-gray-700">Tên Wifi</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 print:text-2xl print:font-mono"
                  name="ssid"
                  value={this.state.ssid}
                  onChange={this.handleChange}
                />
              </label>

              {!this.state.hidePassword && (
                <label className="block my-3">
                  <span className="text-gray-700">Mật Khẩu</span>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 print:text-2xl print:font-mono"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>
              )}

              <div className="block my-3 print:hidden">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                    value={this.state.hidePassword}
                    onChange={this.handleHidePassword}
                  />
                  <span className="ml-2">Ẩn mật khẩu khi in</span>
                </label>
              </div>

              <div className="block my-3 print:hidden">
                <div className="inline-flex items-center">
                  <span className="text-gray-700 mr-3">Mã hóa:</span>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="rounded-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                      name="encryptionMode"
                      value="nopass"
                      onChange={this.handleChange}
                    />
                    <span className="ml-1 mr-4">Không có</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="rounded-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                      defaultChecked
                      name="encryptionMode"
                      value="WPA"
                      onChange={this.handleChange}
                    />
                    <span className="ml-1 mr-4">WPA/WPA2</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="rounded-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                      name="encryptionMode"
                      value="WEP"
                      onChange={this.handleChange}
                    />
                    <span className="ml-1">WEP</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 print:hidden">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex"
            onClick={this.onPrint}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            <span className="ml-2">In</span>
          </button>
        </div>
      </div>
    );
  }
}

export default WifiCard;
