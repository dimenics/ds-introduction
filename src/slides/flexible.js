import { FormattedMessage } from 'react-intl'

import bgImage2 from "../static/images/ds-screenshot-5.png";
import ds from "../static/images/ds-light.png";

export default function Integration() {
    return (
        <section id="section-34" className="slide current">
            <div className="wrap">
                <div className="grid vertical-align">
                    <div className="column">
                        <figure>
                            <img src={bgImage2} alt="Dime.Scheduler" />
                        </figure>
                    </div>

                    <div className="column">
                        <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
                        <br />
                        <h2><FormattedMessage id="ds.property3.title" defaultMessage="Tailored to your needs" /></h2>
                        <p className="text-intro"><FormattedMessage id="ds.property3.content" defaultMessage="A flexible design allows for easy usage, integration, configuration and customization. You tell Dime.Scheduler what to do, not the other way around." /></p>
                    </div>

                </div>
            </div>
        </section>
    )
}