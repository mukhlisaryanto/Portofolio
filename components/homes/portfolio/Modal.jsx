"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Modal({ setShowModal, showModal, modalContent }) {
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const modalDialog = document.querySelector(".modal");
      const modalContent = document.querySelector(".modal-content");

      // Check if the click is outside of modal-content but inside modal-dialog
      if (
        modalDialog &&
        modalContent &&
        !modalContent.contains(event.target) &&
        modalDialog.contains(event.target)
      ) {
        // Your logic for handling the click outside modal-content
        setShowModal(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <>
      <div
        className={`modal portfolio-modal-box fade ${showModal ? "show" : ""} `}
        id="portfolio-1"
        tabIndex="-1"
        role="dialog"
        style={{
          transition: "0.4s",
          display: `block`,
          visibility: `${showModal ? "visible" : "hidden"}`,
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h6 className="blog-title">{modalContent?.title}</h6>

              <div className="portfolio-modal-table">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-regular fa-file-lines"></i>
                      Project : <span>{modalContent?.project}</span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-regular fa-user "></i>
                      Client : <span>{modalContent?.client}</span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-solid fa-code"></i>
                      Langages :{" "}
                      <span>{modalContent?.languages.join(", ")}</span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      Preview :{" "}
                      <a href={modalContent?.previewLink}>
                        {modalContent?.previewName}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="h1-modal-paragraph">
                {modalContent?.desc.map((elm, i) => (
                    <p key={i}>{elm}</p>
                ))}
              </div>
              <div className="h1-modal-img">
                {modalContent?.imgSrc && (
                    <Image
                        width={800}
                        height={800}
                        style={{
                          width: "100%",
                          height: "fit-content",
                          maxHeight: "450px",
                          objectFit: "cover",
                        }}
                        src={modalContent?.imgSrc}
                        alt="portfolio"
                    />
                )}
              </div>
              {/*Add the new image column here custom */}
              <div className="h1-modal-images">
                {modalContent?.imageColumn?.length > 0 && (
                    <div className="image-grid">
                      {modalContent.imageColumn.map((image, index) => (
                          <div key={index} className="image-item"
                               /* Untuk Margin antar gambar
                               style={{
                                 marginTop: "10px", //Space above
                                 marginBottom: "10px" //Space below
                               }} */
                          >
                            <Image
                                width={800}
                                height={800}
                                style={{
                                  width: "100%",
                                  height: "fit-content",
                                  maxHeight: "450px",
                                  objectFit: "cover",
                                }}
                                src={image}
                                alt={`Additional image ${index + 1}`}
                            />
                          </div>
                      ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
          <div className="modal-header">
            <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
            >
              <i className="far fa-times"></i>
            </button>
          </div>
      )}
    </>
  );
}
