import { Modal, message, Button } from "antd";

function AddToCartModal({ visible, onClose, product }) {
  return (
    <Modal
    title={null}
    open={visible}
    onCancel={onClose}
    footer={null}
    width={800}
    onOk={onClose}
  >
<div className="ltn__modal-area ltn__add-to-cart-modal-area">
  <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
    <div className="modal-dialog modal-md" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                <div className="col-12">
                  <div className="modal-product-img">
                    <img src="img/product/1.png" alt="#" />
                  </div>
                  <div className="modal-product-info">
                    <h5>
                      <a href="product-details.html">Khandsari Brown Suger</a>
                    </h5>
                    <p className="added-cart">
                      <i className="fa fa-check-circle" /> Successfully added to
                      your Cart
                    </p>
                    <div className="btn-wrapper">
                      <a
                        href="cart.html"
                        className="theme-btn-1 btn btn-effect-1"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="theme-btn-2 btn btn-effect-2"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                  {/* additional-info */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Modal>
  )
}

export default AddToCartModal