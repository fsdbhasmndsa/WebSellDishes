import React, { useState } from "react";

const AccountManagement = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Render nội dung dựa trên tab hiện tại
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="card shadow-sm border-0 rounded" style={{minHeight:530}}>
            <div className="card-header bg-primary text-light">
              <h5>
                <i className="bi bi-person-circle me-2"></i> Tài Khoản Của Tôi
              </h5>
            </div>
            <div className="card-body">
              <p>Thông tin tài khoản của bạn sẽ được hiển thị tại đây.</p>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="card shadow-sm border-0 rounded" style={{minHeight:530}}>
            <div className="card-header bg-gradient bg-danger text-light">
              <h5>
                <i className="bi bi-heart-fill me-2"></i> Đơn Mua
              </h5>
            </div>
            <div className="card-body">
              <div className="row align-items-center mb-4 py-3 border-bottom">
                <div className="col-md-2">
                  <img
                    src="https://via.placeholder.com/80"
                    className="img-fluid rounded border shadow-sm"
                    alt="Product"
                  />
                </div>
                <div className="col-md-7">
                  <h6 className="fw-bold text-dark mb-1">
                    Áo thun tay lỡ form rộng saidboiz khủng long dino
                  </h6>
                  <p className="text-muted">x1</p>
                </div>
                <div className="col-md-3 text-end">
                  <p className="text-danger fw-bold">59.000₫</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "voucher":
        return (
          <div className="card shadow-sm border-0 rounded" style={{minHeight:530}}>
            <div className="card-header bg-success text-light">
              <h5>
                <i className="bi bi-gift-fill me-2"></i> Kho Voucher
              </h5>
            </div>
            <div className="card-body">
              <p>Danh sách voucher của bạn sẽ được hiển thị tại đây.</p>
            </div>
          </div>
        );
      case "shopee-xu":
        return (
          <div className="card shadow-sm border-0 rounded" style={{minHeight:530}}>
            <div className="card-header bg-warning text-dark">
              <h5>
                <i className="bi bi-coin me-2"></i> Shopee Xu
              </h5>
            </div>
            <div className="card-body">
              <p>Thông tin về Shopee Xu của bạn.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        {/* Sidebar Menu */}
        <div className="col-md-3">
          <div className="list-group shadow-sm rounded sticky-top">
            <button
              onClick={() => setActiveTab("profile")}
              className={`list-group-item list-group-item-action py-3 d-flex align-items-center ${
                activeTab === "profile" ? "active bg-primary text-light" : ""
              }`}
            >
              <i className="bi bi-person-circle me-3 fs-4"></i>
              <span className="fw-bold">Tài Khoản Của Tôi</span>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`list-group-item list-group-item-action py-3 d-flex align-items-center ${
                activeTab === "orders" ? "active bg-danger text-light" : ""
              }`}
            >
              <i className="bi bi-box-seam me-3 fs-4"></i>
              <span className="fw-bold">Đơn Mua</span>
            </button>
            <button
              onClick={() => setActiveTab("voucher")}
              className={`list-group-item list-group-item-action py-3 d-flex align-items-center ${
                activeTab === "voucher" ? "active bg-success text-light" : ""
              }`}
            >
              <i className="bi bi-gift-fill me-3 fs-4"></i>
              <span className="fw-bold">Kho Voucher</span>
            </button>
            <button
              onClick={() => setActiveTab("shopee-xu")}
              className={`list-group-item list-group-item-action py-3 d-flex align-items-center ${
                activeTab === "shopee-xu" ? "active bg-warning text-light" : ""
              }`}
            >
              <i className="bi bi-coin me-3 fs-4"></i>
              <span className="fw-bold">Shopee Xu</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AccountManagement;
