import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/Kendrink" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/chukwuka-izamoje-a38807236" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; chukwuka izamoje  | 
            </p>

        </div>
    )
}

export default Footer;