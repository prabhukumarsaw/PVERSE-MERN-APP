import React from 'react';
import wp from '../img/LOGO/whatsapp-svgrepo-com.svg';
const WhatsAppWidget = () => {
  const openWhatsApp = () => {
    // Replace the phoneNumber variable with your WhatsApp number
    const phoneNumber = '9102041348';
    const message = 'Hello!';

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    

<button className="fixed-button" onClick={openWhatsApp} >
<img src={wp} alt="Logo" className="logo" />
</button>
  );
};

export default WhatsAppWidget;
