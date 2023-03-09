import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../state/cartSlice";
import { closeModal } from "../state/modalSlice";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal() {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.modal);
  const isCheckout = type === "checkout";
  const [confirmedCheckout, setConfirmedCheckout] = useState(false);

  const handleConfirm = () => {
    if (isCheckout) {
      setConfirmedCheckout(true);
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
          <h2>Thank you!</h2>
        </div>
      ) : (
        <div className="modal-container">
          <h2>
            {isCheckout
              ? "Checkout your items?"
              : "Remove all items from your cart?"}
          </h2>
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
