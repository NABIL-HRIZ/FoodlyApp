
import '../styles/WhatsappButton.css';
const WhatsappButton = () => {
  const phoneNumber = '0663009864'; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;
