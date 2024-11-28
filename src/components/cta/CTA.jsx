import React, { useState } from 'react';
import './cta.css';
import { useTranslation } from 'react-i18next';

const CTA = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your email API endpoint or service logic
    console.log("Form Data Submitted: ", formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div>
      <div className="greentech__cta">
        <div className="greentech__cta-content">
          <p id="contacts">{t('cta.contact')}</p>
          <h3>{t('cta.writeToday')}</h3>
        </div>
        <div className="greentech__cta-btn">
          <button type="button">{t('cta.getStarted')}</button>
        </div>
      </div>
      <div className='map'>
        <h1 className="gradient__text" id ="findus" >FIND US</h1>
        <iframe src="https://storage.googleapis.com/maps-solutions-iwe0dxway6/locator-plus/sds7/locator-plus.html"
          width={"85%"}
          height={"650xp"}
          style={{ margin: "0 10%", borderRadius: "14px" }}
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default CTA;
