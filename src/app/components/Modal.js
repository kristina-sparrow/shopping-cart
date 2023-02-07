import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../state/cartSlice";
import { closeModal } from "../state/modalSlice";
import { AiOutlineClose } from "react-icons/fa";

export default function Modal() {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.modal);
  const isCheckout = type === "checkout";
  let confirmedCheckout = false;

  const handleConfirm = () => {
    if (isCheckout) {
      confirmedCheckout = true;
      dispatch(clearCart());
    } else {
      dispatch(clearCart());
      dispatch(closeModal());
    }
  };

  return (
    <aside className="modal">
      {confirmedCheckout ? (
        <div className="modal-container">
          <button
            className="btn btn-close"
            onClick={() => dispatch(closeModal())}
          >
            <AiOutlineClose />
          </button>
          <h4>Thank you!</h4>
        </div>
      ) : (
        <div className="modal-container">
          <h4>
            {isCheckout
              ? "Checkout your items?"
              : "Remove all items from your cart?"}
          </h4>
          <div className="modal-button-container">
            <button className="btn btn-confirm" onClick={handleConfirm}>
              Confirm
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}