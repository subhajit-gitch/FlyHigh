import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import "../css/CheckIn.css";

function CheckIn(_props) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ pnr: "", email: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const checkIn = () => {
    const { pnr, email } = formValue;

    fetch("http://localhost:8080/checkin", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pnr: pnr,
        email: email,
      }),
    })
      .then(async (data) => {
        const response = await data.json();
        setResponseMessage(response.message);
        setTimeout(() => {
          setResponseMessage("");
          navigate('/');
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mt-2">CheckIn</h5>
            {responseMessage && (
              <p className="text-success response-message">{responseMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">PNR</label>
                    <input
                      type="numbers"
                      name="pnr"
                      className="form-control"
                      value={formValue.pnr}
                      placeholder="PNR"
                      errorMessage="PNR should be 10 Numbers"
                      pattern="(str.match(/^\d{10}$/)"
                      rrorMessage="PNR should be 10 Numbers"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formValue.email}
                      placeholder="Email"
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit" onClick={checkIn}>
                    Check-In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckIn;
