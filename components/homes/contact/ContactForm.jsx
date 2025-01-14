


"use client";
import React, { useRef , useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
    const [activeInputBoxes, setActiveInputBoxes] = useState([])
    const form = useRef();
  
    // use Email js for recive message
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_48zyesu",
          "template_yuknlza",
          form.current,
          "oVetUCHtx8pIb7Grt"
        )
        .then(
          (result) => {
            console.log(result);
            toast.success("Message Sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
              form.current.reset(); // Gunakan referensi form untuk mereset
          },
          (error) => {
            toast.error("Ops Message not Sent!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    };
   
  return (
    <form className="contact-form"  ref={form}
              onSubmit={sendEmail}
                id="myFormOne" // Tambahkan ID ke form
    >
                    <div className="form-input-item mb-60">
                <label style={activeInputBoxes.includes('name')? {color:'#FE7878'}:{}} className="input-lebel name">name *</label>
                <input
                  name="from_name"
                  className={`input-box name ${activeInputBoxes.includes('name') && 'height'} `}
                  type="text"
                  required
                  onClick={()=>setActiveInputBoxes(pre=>!pre.includes('name') ? [...pre,'name'] : pre)}
                  style={activeInputBoxes.includes('name')? {borderColor:'#FE7878'}:{}}
                />
              </div>
              <div className="form-input-item mb-60">
                <label style={activeInputBoxes.includes('gmail')? {color:'#1B74E4'}:{}} className="input-lebel gmail">Email *</label>
                <input
                  name="from_email"
                  className={`input-box gmail ${activeInputBoxes.includes('gmail') && 'height'} `}
                  type="Email"
                  required
                  onClick={()=>setActiveInputBoxes(pre=>!pre.includes('gmail') ? [...pre,'gmail'] : pre)}
                  style={activeInputBoxes.includes('gmail')? {borderColor:'#1B74E4'}:{}}
                />
              </div>
              <div className="form-input-item mb-40">
                <label  style={activeInputBoxes.includes('message')? {color:'#CE65F3'}:{}} className="input-lebel message">Message *</label>
                <textarea
                  name="message"
                  className={`input-box message ${activeInputBoxes.includes('message') && 'height'} `}
                  onClick={()=>setActiveInputBoxes(pre=>!pre.includes('message') ? [...pre,'message'] : pre)}
                  style={activeInputBoxes.includes('message')? {borderColor:'#CE65F3'}:{}}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
                    <div className="form-btn-wrap">
                      <button type="submit" value="Send" className="form-btn">
                        submit
                      </button>
                    </div>
                  </form>
  )
}
