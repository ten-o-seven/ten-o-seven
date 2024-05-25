import React from 'react';
import BoldedText from '../../common/BoldedText';
import danJourney from './images/dan_user_journey.png';
import emmaJourney from './images/emma_user_journey.png';
import barbaraJourney from './images/barbara_user_journey.png';
import danText from './images/text_dan.svg';
import emmaText from './images/text_emma.svg';
import barbaraText from './images/text_barbara.svg';
import intro from './images/intro.png';
import decisionTree from './images/decision_tree.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function UserFlow() {
  return (
    <div style={{marginTop: 210}}>
      <h4>0.1 Understand the User Flow</h4>
      <p>
        The MS team had a broad idea of how users should navigate the two features,
        but struggled to provide detailed specifics. To address this, my team initiated
        the design process by guiding them through the entire user journey. We assisted
        them in reorganizing and prioritizing key steps to ensure better alignment with
        their goals. Throughout this process, we identified potential issues, opportunities,
        and risks. By involving the MS team in this exercise, we efficiently obtained
        clear directions that guided our design approach.
      </p>
      <div className="flex flex-column align-items-center">
        <div className="flex align-items-center" style={{marginTop: 70}}>
          <h2 style={{fontSize: 36}}>curious new user</h2>
          <img src={danText} style={{marginLeft: 20, marginTop: 5, height: 36}}/>
        </div>
        <BoldedText
          className="text-box"
          style={{marginTop: 20}}
          bolded={{
            firstBolded: 'As a',
            secondBolded: 'I want to',
            thirdBolded: 'so that',
          }}
          italics={{
            firstItalics: 'busy working adult',
            secondItalics: 'learn to adopt good mental health practices',
            thirdItalics: 'I can better manage my stressful life',
          }}
          message={`
            {firstBolded} {firstItalics},
            {secondBolded} {secondItalics},
            {thirdBolded} {thirdItalics}.
          `}
        />
        <img src={danJourney} style={{width: '100%', marginTop: 40}}/>

        <div className="flex align-items-center" style={{marginTop: 70}}>
          <h2 style={{fontSize: 36}}>curious new user</h2>
          <img src={emmaText} style={{marginLeft: 20, marginTop: 5, height: 36}}/>
          <h2 style={{fontSize: 36, marginLeft: 20}}>looking FOR support</h2>
        </div>
        <BoldedText
          className="text-box"
          style={{marginTop: 20}}
          bolded={{
            firstBolded: 'As a',
            secondBolded: 'I want to',
            thirdBolded: 'so that',
          }}
          italics={{
            firstItalics: 'college student who suffers from PTSD',
            secondItalics: 'get free help and see how others deal with similar experiences',
            thirdItalics: `I can learn to cope and talk about the 
            incident without going to expensive therapy sessions`,
          }}
          message={`
            {firstBolded} {firstItalics}, 
            {secondBolded} {secondItalics}, 
            {thirdBolded} {thirdItalics}.
          `}
        />
        <img src={emmaJourney} style={{width: '100%', marginTop: 40}}/>

        <div className="flex align-items-center" style={{marginTop: 70}}>
          <h2 style={{fontSize: 36}}>curious new user</h2>
          <img src={barbaraText} style={{marginLeft: 20, marginTop: 5, height: 36}}/>
          <h2 style={{fontSize: 36, marginLeft: 20}}>looking TO support</h2>
        </div>
        <BoldedText
          className="text-box"
          style={{marginTop: 20}}
          bolded={{
            firstBolded: 'As a',
            secondBolded: 'I want to',
            thirdBolded: 'so that',
          }}
          italics={{
            firstItalics: 'person who has spent years dealing with bio-polar disorder',
            secondItalics: 'I want to connect with people who are also fighting it',
            thirdItalics: 'we can help and support each other',
          }}
          message={`
            {firstBolded} {firstItalics}, 
            {secondBolded} {secondItalics}, 
            {thirdBolded} {thirdItalics}.
          `}
        />
        <img src={barbaraJourney} style={{width: '100%', marginTop: 40}}/>
      </div>

      <div className="flex flex-column align-items-center" style={{marginTop: 140}}>
        <h2 style={{fontSize: 36}}>introducing new users to MS</h2>
        <p className="text-box" style={{marginTop: 20}}>
          The biggest challenger is to onboard users for the peer support feature. After
          reviewing the user journey maps, we has a few thoughts on how to to best achieve our goal.
        </p>
        <div className="flex justify-center" style={{marginTop: 70}}>
          <div
            style={{width: '25%', height: 520}}
            className="flex flex-column justify-around"
          >
            <div>
              <h6 style={{fontWeight: 700}}>Resistance Free</h6>
              <p>
                The branding of &quot;free mental support for all&quot; should be mirrored in
                providing full access to the self-support content without requiring users to
                sign up.
              </p>
            </div>
            <div>
              <h6 style={{fontWeight: 700}}>Build Trust</h6>
              <p>
                Users can see that MS only provides contents based on credible research data
              </p>
            </div>
            <div>
              <h6 style={{fontWeight: 700}}>Manageable Process</h6>
              <p>
                Users have complete control over the timing and pace at which they complete
                the survey questions and training modules.
              </p>
            </div>
          </div>
          <img src={intro} style={{height: 520, marginLeft: 30}} />
          <div
            style={{width: '25%', height: 520, marginLeft: 30}}
            className="flex flex-column justify-evenly"
          >
            <div>
              <h6 style={{fontWeight: 700}}>intuitive self support feature</h6>
              <p>
                Users can enjoy the self support feature before deciding whether to
                join peer support.
              </p>
            </div>
            <div>
              <h6 style={{fontWeight: 700}}>build the community</h6>
              <p>
                The users can engage and grow with the community in the app and on social media.
              </p>
            </div>
          </div>
        </div>
        <h2 style={{fontSize: 36, marginTop: 140}}>
          onboarding users to Peer Support
        </h2>
        <p className="text-box" style={{marginTop: 20}}>
          Upon onboarding, users will be guided through the following path to successfully
          match with a MS buddy. The supporter path differs from the supportee path because
          it has an additional requirement for training.
        </p>
        <img src={decisionTree} style={{height: 1200, marginTop: 70}} />
      </div>
    </div>
  );
}
