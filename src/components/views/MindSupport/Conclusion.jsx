import React from 'react';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Sub Section
 */
export default function Conclusion() {
  return (
    <div style={{marginTop: 210}}>
      <div>
        <h4>0.6 Conclusion</h4>
        <p style={{marginTop: 30}}>
          My primary contributions to this project were guiding the team to find clarity
          and opportunities while safeguarding the product goal and the UI design. Although
          the project&lsquo;s scope and budget didn&lsquo;t allow for actual product testing, I have
          outlined below a few methods for measuring it’s impact on real users.
        </p>
        <div className="flex justify-around">
          <div style={{border: '2px solid', margin: 30, width: '40%'}}>
            <h6 style={{fontWeight: 600, borderBottom: '2px solid', padding: 20}}>
              Usability Test
            </h6>
            <ul style={{listStyleType: 'circle', listStylePosition: 'inside', padding: '0 20px'}}>
              <li>
              test if users can find support using the self support feature
              </li>
              <li>
              test if users are confused about practices and challenges.
              </li>
              <li>
              collect task completion rate, drop-off rate and time spent on
              survey questions and trainings.
              </li>
              <li>
              test if users are confused about the two different roles of peer support.
              </li>
              <li>
              monitor how people react to not being qualified for peer support.
              </li>
            </ul>
          </div>
          <div style={{border: '2px solid', margin: 30, width: '40%'}}>
            <h6
              style={{fontWeight: 600, borderBottom: '2px solid', padding: 20}}
            >
              How MS App is doing in the wild
            </h6>
            <ul style={{listStyleType: 'circle', listStylePosition: 'inside', padding: '0 20px'}}>
              <li>
              monitor social media engagement rate - like, comment, and share
              </li>
              <li>
              monitor app metrics -
                <li style={{marginLeft: 20}}>
                user engagement on new articles, practices, and challenges
                </li>
                <li style={{marginLeft: 20}}>
                number of users who install and open the app.
                </li>
                <li style={{marginLeft: 20}}>
                number of users who return to the app after their initial engagement with it
                </li>
                <li style={{marginLeft: 20}}>
                taps, views, and time spent on app.
                </li>
                <li style={{marginLeft: 20}}>
                number of sessions per day and session duration.
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4 style={{marginTop: 140}}>0.7 Lesson Learned</h4>
      <p style={{marginTop: 30}}>
        I thoroughly enjoyed working with Moustapha and the MS team. Mind Support&lsquo;s
        commendable business goal resonated with me, and I&lsquo;m happy to have played a
        part in their journey toward such a meaningful cause.
      </p>
      <br/>
      <p>
        Throughout the project, I&lsquo;ve encountered internal conflicts when I didn&lsquo;t
        fully agree with some of our client&lsquo;s decisions. However, I&lsquo;ve come to
        realize that as a UX designer, my role is to assist, consult, provide design strategy,
        and highlight risks and concerns.
      </p>
      <br/>
      <p>
        Another challenge we faced was managing client expectations. The MS team had limited
        experience with product development, so it was the UX team’s job to clearly define
        scope and remind the team that additional scope requires additional budget and time.
        The MS team member were located in different parts of the world, so their involvement
        also lacked structure which reduced the efficiency of obtaining quality feedback. As a
        result, I&lsquo;ve learned to allocate more time at the beginning of a project for detailed
        discussions on budget, timeline, scope, and milestones.
      </p>
    </div>
  );
}
