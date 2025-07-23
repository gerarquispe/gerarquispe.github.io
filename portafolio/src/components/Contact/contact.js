import React, { useRef } from 'react';
import { Mail, MessageSquareText } from 'lucide-react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwiterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sv7feqv', 'template_e16azcc', form.current, {
        publicKey: '2sa2ViDA5_x8kgvKH2bDT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientsDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div>

        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Feel free to contact with me if you have any questions:</span>


            <div className="links-icon">
              <a 
              href="https://api.whatsapp.com/send?phone=51951128230&text=Hi%20Francis!%20I%20saw%20your%20website%20and%20I%20am%20interested%20in%20hiring%20your%20services."
              className="" target="_blank" rel="noopener noreferrer"
              >
                <MessageSquareText className="link-icon" />
              </a>

              <a href="mailto:gerarfrancisq@gmail.com" className="">
                <Mail className="link-icon" />
              </a>
            </div>


            {/* <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
            </form> */}

            <div className="links">
              <a href="https://www.facebook.com/gfquispe" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Facebook" className="link" />
              </a>
              <a href="https://x.com/GerarQuispe" target="_blank" rel="noopener noreferrer">
                  <img src={TwiterIcon} alt="Twitter" className="link" />
              </a>
              <a href="https://www.youtube.com/@gfquispe" target="_blank" rel="noopener noreferrer">
                  <img src={YouTubeIcon} alt="Youtube" className="link" />
              </a>
              <a href="https://www.instagram.com/gerar.francis/" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram" className="link" />
              </a>
            </div>
        </div>

    </section>
  );
}

export default Contact;
