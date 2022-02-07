import React from "react";

const Footer = () => {
  return (
    <div className="text-center p-2 mt-5">
      <p className="fw-normal fs-5 lh-base text-uppercase">
        Copyrights &copy; {new Date().getFullYear()}. Gest Pharma
      </p>
    </div>
  );
};

export default Footer;
