import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";


import "./fotter.scss";
import ContentWrapper from "../wraper/Wrapper";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                *IMDb is the world's most popular and authoritative source for information on movies, TV shows and celebrities. Products and services to help fans decide what to watch and where to watch it include: the IMDb website for desktop and mobile devices; apps for iOS and Android; and X-Ray on Prime Video. IMDb also produces IMDb original video series and podcasts. 
                </div>
                <div className="socialIcons">
                    
                    <a href="https://www.instagram.com/chiragajmera24/">
                    <span className="icon">
                        
                        <FaInstagram />
                    </span>
                        </a>
                    
                    <a href="https://www.linkedin.com/in/chirag-ajmera-08467425b/">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                    
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
