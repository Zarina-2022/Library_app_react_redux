import React from "react";
import "../assets/styles/modal.css";

/*
Bu modalda:
1. Basligini disaridan alacak (dinamik)
2.  Gosterilecek mesaji disaridan alacak
3. Kac tane buton gosterilecegini disaridan alabilecek
4. Butonlarin icerisindeki yazisi, type'i disaridan alinabilecek
5. Butonlara tiklandiginda ne yapilacagina disaridan alinabilecek (function)

NOTE: butun bu ozellestirmeler (customization) prop mantigiyla yapilabilir.

*/

const Modal = ({
  title = "",
  content = "",
  deleteBtnText = "Delete",
  deleteBtnType = "danger",
  deleteBtnOnlick = () => {},
  deleteBtn = true,
  cancelBtnText = "Cancel",
  cancelBtnType = "secondary",
  cancelBtnOnlick = () => {},
  cancelBtn = true,
  visible = false,
}) => {
  if (visible === false) return null;
  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
        width: "100",
        height: "100",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="modal-dialog modal-confirm m-0">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title mx-auto">{title}</h4>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer display-flex justify-content-center">
            {cancelBtn && (
              <button
                onClick={cancelBtnOnlick}
                type="button"
                className={`btn btn-${cancelBtnType}`}
              >
                {cancelBtnText}
              </button>
            )}
            {deleteBtn && (
              <button
                onClick={deleteBtnOnlick}
                type="button"
                className={`btn btn-${deleteBtnType}`}
              >
                {deleteBtnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
