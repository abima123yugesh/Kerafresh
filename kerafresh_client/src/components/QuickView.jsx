import { Modal, message, Button } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, getUserCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function QuickView({ visible, onClose, product }) {
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    try {
      await dispatch(addToCart({ product, quantity }));
      setCart({ ...cart, [product?._id]: { product, quantity } });
      message.success("Product added to your cart");
      setTimeout(() => {
        onClose()
      }, 300);
      dispatch(getUserCart());
    } catch (error) {
      console.error(error);
      message.error("Unable to add product to cart");
    }
  };


  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      onOk={onClose}
    >
      <div className="modal-body">
        <div className="ltn__quick-view-modal-inner">
          <div className="modal-product-item">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="modal-product-img">
                  <img src={product?.images} alt="#" />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="modal-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="far fa-star" />
                      </li>
                      <li className="review-total"> ( 95 Reviews )</li>
                    </ul>
                  </div>
                  <h3>{product?.title}</h3>
                  <div className="product-price">
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign" />{" "}
                      {product?.price}
                    </span>
                    <del>
                      <i className="fa-solid fa-indian-rupee-sign" />{" "}
                      {product?.price + 20}
                    </del>
                  </div>
                  <div className="modal-product-meta ltn__product-details-menu-1">
                    <ul>
                      <li>
                        <strong>Categories:</strong>
                        <span>
                          <Link to="#">{product?.category}</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__product-details-menu-2">
                    <ul>
                      <li>
                        <div className="cart-plus-minus">
                          <Button
                            className="mx-0"
                            onClick={() =>
                              setQuantity(Math.max(quantity - 1, 1))
                            }
                            disabled={quantity <= 1}
                          >
                            -
                          </Button>
                          <span>
                            <b className="text-success">{quantity}</b>
                          </span>
                          <Button
                            className="mx-0"
                            onClick={() => setQuantity(quantity + 1)}
                            disabled={quantity >= product?.quantity}
                          >
                            +
                          </Button>
                        </div>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="theme-btn-1 btn btn-effect-1"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                          onClick={() => handleAddToCart()}
                        >
                          <i className="fas fa-shopping-cart" />
                          <span>ADD TO CART</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__product-details-menu-3">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          className
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart" />
                          <span>Add to Wishlist</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className
                          title="Compare"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="fas fa-exchange-alt" />
                          <span>Compare</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="ltn__social-media">
                    <ul>
                      <li>Share:</li>
                      <li>
                        <i className="fab fa-facebook-f" />
                      </li>
                      <li>
                        <i className="fab fa-twitter" />
                      </li>
                      <li>
                        <i className="fab fa-linkedin" />
                      </li>
                      <li>
                        <i className="fab fa-instagram" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default QuickView;
