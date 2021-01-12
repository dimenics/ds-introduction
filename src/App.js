import './App.css';
import { React, Component } from 'react';
import { IntlProvider } from 'react-intl'

import './static/css/webslides.css';
import './static/css/svg-icons.css';

import './static/js/webslides';
import './static/js/svg-icons';

import Introduction from './slides/intro';
import WhatIsDimeScheduler from './slides/whatisdimescheduler';
import ThePlanningSolution from './slides/planningsolution';
import WhyCentralizedPlanning from './slides/whycentralizedplanning';
import Properties from './slides/properties';
import Industries from './slides/industries';
import Features from './slides/features';
import Reseller from './slides/reseller';
import Stats from './slides/stats';
import UseDimeScheduler from './slides/use';
import SeamlessIntegration from './slides/seamlessintegration';
import LearnMore from './slides/learnmore';
import FlexibleAndVersatile from './slides/flexible';
import TableOfContents from './slides/toc';
import Contact from './slides/contact';
import End from './slides/end';
import MoreFeatures from './slides/morefeatures';
import CentralizedPlanningMatters from './slides/centralized';
import Testimonials from './slides/testimonials';
import Reasons from './slides/reasons';
import WhyPlanningQuote from './slides/whyplanningquote';
import Tour from './slides/tour';

import ds from "./static/images/ds-light.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBookOpen } from '@fortawesome/free-solid-svg-icons'

import messages_nl from "./i18n/nl.json";
import messages_de from "./i18n/de.json";

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const webslides = new window.WebSlides({
      loop: false,
      changeOnClick: true
    });
  }

  render() {

    const messages = {
      'nl': messages_nl,
      'de': messages_de
    };

    const language = navigator.language.split(/[-_]/)[0];  // language without region code

    return (
      <div>
        <header role="banner">
          <nav role="navigation">
            <figure><img className="alignleft" src={ds} alt="Dime.Scheduler" /></figure>
            <ul>
              <li>
                <a rel="external" href="https://www.dimescheduler.com" title="Dime.Scheduler">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </li>
              <li>
                <a rel="external" href="https://docs.dimescheduler.com" title="Dime.Scheduler Docs">
                  <FontAwesomeIcon icon={faBookOpen} />
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">

          <main role="main">
            <div id='webslides'>

              <Introduction />
              <TableOfContents />
              <WhyCentralizedPlanning />
              {Reasons}
              <WhyPlanningQuote />
              <CentralizedPlanningMatters />
              <WhatIsDimeScheduler />
              <ThePlanningSolution />
              <SeamlessIntegration />
              <FlexibleAndVersatile />
              <Features />
              {Tour()}
              <MoreFeatures />
              <Industries />
              <Properties />
              <Stats />
              <UseDimeScheduler />
              <Testimonials />
              <Reseller />
              <LearnMore />
              <Contact />
              <End />
            </div>
          </main>
        </IntlProvider>

        <footer>
          <div className="wrap">
            <p>
              <span class="alignleft">#preview</span>
              <span className="alignright">
                <a href="http://dimescheduler.com" title="Dime.Scheduler">
                  <img src={ds} alt="Dime.Scheduler" />
                </a>
              </span>
            </p>
          </div>
        </footer>
      </div >
    );
  }
}
