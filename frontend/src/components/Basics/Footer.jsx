import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="about-content">
                    <h3>About</h3>
                    <ul>
                        <li>
                            <a href="">
                                <h6>About Us</h6>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h6>Help Centre</h6>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h6>Contact Us</h6>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <div className="fb">
                        <a href="">
                            <FaFacebook />
                        </a>
                    </div>
                    <div className="x">
                        <a href="">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="insta">
                        <a href="">
                            <FaXTwitter />
                        </a>
                    </div>
                    <div className="youtube">
                        <a href="">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright-para">
                    <p>Terms and Conditions</p>
                </div>
                <div className="copyright-right">
                    <p>Rideshare,2024&#169;</p>
                </div>
            </div>
        </>
    );
}
