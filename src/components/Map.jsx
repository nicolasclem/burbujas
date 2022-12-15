import React from "react";
const Map = () => {
  return (
    <div className="map-component">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6567.929004509253!2d-58.435749276849045!3d-34.60505912545951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca71c57d4e21%3A0x6a11d4b3ac6c5a36!2sAguirre%2C%20C1414%20CABA!5e0!3m2!1ses-419!2sar!4v1669057666876!5m2!1ses-419!2sar"
        width="750"
        height="450"
        title="Burbujas de algodón ubicación"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
