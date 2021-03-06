import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ds from "../static/images/ds-logo2.png";

export default function End() {
    return (
        <section className="aligncenter">
            <div className="wrap size-50">
                <figure>
                    <img src={ds} alt="Dime.Scheduler" style={{ maxHeight: 150 }} />
                </figure>

                <br />
                <br />
                <p className="text-symbols">Stop puzzling. Start planning.</p>
                <p><FormattedMessage id="end.title" defaultMessage="Connect with us" /></p>
                <nav className="aligncenter">
                    <ul>
                        <li><a href="https://be.linkedin.com/company/dimenics" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                        <li><a href="http://www.facebook.com/pages/Dime/352837688099832" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                        <li><a href="https://twitter.com/Dimenics" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                        <li><a href="https://www.youtube.com/user/DimenicsTV" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}