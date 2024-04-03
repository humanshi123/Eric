import React, { useState } from "react";
import CloseIcon from "../components/CloseIcon";

const FormData = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent component with form data
    onSubmit({ name, phoneNumber, email, country, city });
    // Clear the form fields
    setName("");
    setPhoneNumber("");
    setEmail("");
    setCountry("");
    setCity("");
  };

  return (
    <div className="form-popup absolute top-0 left-0 right-0 w-full h-full z-10 bg-white grid place-items-center">
      <div className="inner-popup bg-[#CACAC8] p-3 max-w-[50%] mx-auto w-full ">
        <span className="close-icon" onClick={onCancel}>
          {" "}
          <CloseIcon />{" "}
        </span>
        <h2 className="font-[SunrollBold] sm:leading-[80px] tracking-[1px] mt-[20px] text-[#323233] text-center text-[30px] sm:text-[68px]">
          DIS<span className="text-white">TRI</span>BU
          <span className="text-white">DOR</span>?
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <br />
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="country">Country:</label>
          <br />
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            {/* Add more options as needed */}
          </select>
          <br />
          <label htmlFor="city">City:</label>
          <br />
          <select
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {country === "USA" && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                {/* Add more cities for USA as needed */}
              </>
            )}
            {country === "UK" && (
              <>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                {/* Add more cities for UK as needed */}
              </>
            )}
            {/* Add more options for other countries as needed */}
          </select>
          <br />
          <br />
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FormData;
