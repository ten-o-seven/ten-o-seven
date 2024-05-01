/* eslint-disable max-len */
import shark from './images/shark.png';
import swim from './images/swim.png';
import lifesaver from './images/lifesaver.png';
import numberOne from '../../../images/number_1.svg';
import numberTwo from '../../../images/number_2.svg';
import numberThree from '../../../images/number_3.svg';
import numberFour from '../../../images/number_4.svg';
import frank from './images/text_frank.svg';
import frankJourney from './images/user_journey_frank.png';
import jen from './images/text_jen.svg';
import jenJourney from './images/user_journey_jen.png';
import home from './images/text_home.svg';
import status from './images/text_status.svg';
import cart from './images/text_cart.svg';
import lofiOne from './images/lofi_1.png';
import lofiTwo from './images/lofi_2.png';
import lofiThree from './images/lofi_3.png';
import hifiOne from './images/hifi_1.png';
import hifiTwo from './images/hifi_2.png';
import hifiThree from './images/hifi_3.png';
import lofiMarkedOne from './images/lofi_marked_1.png';
import lofiMarkedTwo from './images/lofi_marked_2.png';
import lofiMarkedThree from './images/lofi_marked_3.png';
import percentageCharOne from './images/percentage_char_1.png';
import percentageCharTwo from './images/percentage_char_2.png';
import percentageCharThree from './images/percentage_char_3.png';
import colorTextPrimary from './images/color_text_primary.svg';
import colorTextBody from './images/color_text_body.svg';
import colorTextHelper from './images/color_text_helper.svg';
import colorTextBackground from './images/color_text_background.svg';
import colorPrimary from './images/color_primary.png';
import colorTranslucent from './images/color_translucent.png';
import colorDeemphasized from './images/color_deemphasized.png';
import colorBody from './images/color_body.png';
import colorHelper from './images/color_helper.png';
import colorBackground from './images/color_background.png';

export const hookCopy = [
  {
    title: 'Problem',
    img: shark,
    content: [
      'Customers abandoning take-out orders when facing issues during the ordering process.',
      'Third-party food delivery apps charges extra fee per order which brings down the revenue. ',
      'Customers stop coming back after multiple incidents of dissatisfied experience. ',
    ],
  },
  {
    title: 'Goal',
    img: swim,
    content: [
      'Retain take-out customers with an improved ordering experience. ',
    ],
  },
  {
    title: 'Solution',
    img: lifesaver,
    content: [
      'Remove roadblock during the food ordering process to improve customer overall experience. ',
      'Introduce an user friendly app and other incentives to attract customers and decrease their use of third-party food delivery apps.',
      'a dedicated app for pp customers to manage all take-out order related tasks without resistance.',
    ],
  },
];

export const userResearchCopy = {
  title: '01. User Reasearch Summary',
  content: 'I conducted interviews and identified that the primary users of the Pacific Paradise app are new and existing customers who hope to avoid the wait on the phone or at the restaurant. The research indicates that a shared goal among the customers is to order and acquire meals efficiently according to their schedule. Many are also interested in additional in-app features and promotions.',
};

export const opportunitiesCopy = [
  {
    title: 'Time',
    src: numberOne,
    content: 'All customers showed frustration with the unpredictable wait time at the restaurant. ',
    question: 'How may we better inform the customers when to arrive for pick up? ',
  },
  {
    title: 'Availability',
    src: numberTwo,
    content: 'Many customers would like to verify menu availabilities before placing an order. ',
    question: 'How may we clearly indicate availabilities on the PP app?',
  },
  {
    title: 'Communication',
    src: numberThree,
    content: 'Many customers dislike calling the restaurant to complete order related tasks and get order confirmation, especially during rush hours.',
    question: 'How can the restaurant efficiently communicate with the customers via the PP app regarding their orders?',
  },
  {
    title: 'Value',
    src: numberFour,
    content: 'Manager Steve occasionally forgets to type in customer order after it comes through on the fax machine.',
    question: 'How do we avoid missing orders? ',
  },
];

export const userStories = [
  {
    title: 'Existing Customers',
    name: frank,
    demographics: [{Age: 45}, {Hometown: 'Albuquerque, NM'}, {Family: 'Married'}, {Occupation: 'Attorney'}],
    background: 'Frank is a New Mexico native. His family has been the long-time regular at Pacific Paradise. Frank doesn’t like to spend a lot of time on cooking. When he is on dinner duty, he usually picks up food on the way home. Frank’s favorite dish is the chili over spicy beef from the secret menu. He orders from pacific paradise at least once a week.',
    frustration: [
      'Order ahead of time, but it’s not in the system. The last things he wants to deal with after a long work day.',
      'It’s hard to predicate the wait time.',
      'The restaurant calls to inform Austin that an item is unavailable after he places the order.',
    ],
    goals: [
      'To get take-out from his favorite restaurant regularly.',
      'To order ahead and pick up the food after a reasonably amount of wait time.',
      'To check the availability of  particular items.',
    ],
    desire: 'wants to schedule a take-out order using the Pacific Paradise app in-between meetings. He plans to pick up the food on his way home after a long work day.',
    journey: frankJourney,
    id: 'existing',
  },
  {
    title: 'New Customers',
    name: jen,
    demographics: [{Age: 26}, {Hometown: 'Boulder, CO'}, {Family: 'Single, lives alone'}, {Occupation: 'Graduate Student'}],
    background: 'Jen moved in to town last year, and she is going to UNM for med school. Jen has a stressful schedule, so she often treats herself with good food. On her free time, she enjoys going to the gym and studying at coffee shops. She loves asian food, and she recently discovered Pacific Paradise which is very close to her new apartment.',
    frustration: [
      'Unable to get restaurant coupons without using food delivery apps.',
      'Food delivery apps are expensive.',
      'It’s been hard to explore food places around town because of her dietary restrictions',
    ],
    goals: [
      'To not waste too much time on meal prepping.',
      'To order ahead and pick up the food after a reasonably amount of wait time.',
      'To save money wherever possible',
    ],
    desire: 'wants to explore new dishes from Pacific Paradise because she enjoyed her food when she dined in with her friends. ',
    journey: jenJourney,
    id: 'new',
  },
];

export const lofi = [
  {
    number: numberOne,
    text: home,
    description: 'The home screen prioritizes major user flows using key access points at the bottom menu bar. Additional features are organized in a hamburger menu, guiding users to secondary app features. PP regulars can navigate to their favorite quickly using tools like the search bar and bookmark. Section titles and filters help guiding customers who are interested in exploring the full menu and additional features the PP app offers.',
    wireframe: lofiOne,
    callout: [
      {
        emphasis: {first: 'avoid crowding'},
        copy: 'secondary features are tucked away to {first} on the home page',
        style: {top: 0, left: 30},
      },
      {
        emphasis: {first: 'quick search bar'},
        copy: 'prominent {first}',
        style: {top: 180, left: 30},
      },
      {
        emphasis: {first: 'more refined filters'},
        copy: 'additional categories using {first}',
        style: {top: 380, left: 30},
      },
      {
        emphasis: {first: 'user familiarity'},
        copy: '{first} - categories matching the restaurant\'s existing menu',
        style: {top: 150, right: 40},
      },
      {
        emphasis: {first: 'access to key user flow'},
        copy: 'immediate {first}',
        style: {top: 420, right: 40},
      },
    ],
  },
  {
    number: numberTwo,
    text: cart,
    description: 'Strategically removing the menu bar at the bottom of some screens helps the users focus on the particular task at hand. This also frees up white space for easy arrangement of contents into digestible sections and visual hierarchy on the screen.',
    wireframe: lofiTwo,
    callout: [
      {
        emphasis: {first: 'consistency'},
        copy: 'use iterations of elements with the same style  through out the app to maintain {first}',
        style: {top: 100, left: 20},
      },
      {
        emphasis: {first: 'Subtle cues'},
        copy: '{first} - gentle nudge towards membership',
        style: {top: 350, left: 20},
      },
      {
        emphasis: {first: 'Navigational keys'},
        copy: '{first} users locate themselves in the app',
        style: {top: 0, right: 30},
      },
      {
        emphasis: {first: 'sections, boundaries, and hierarchy'},
        copy: 'use white space to establish {first}',
        style: {top: 200, right: 30},
      },
      {
        emphasis: {first: 'simplify'},
        copy: '{first} options for users',
        style: {top: 350, right: 30},
      },
      {
        emphasis: {first: 'emphasize CTA'},
        copy: '{first}',
        style: {top: 450, right: 30},
      },
    ],
  },
  {
    number: numberThree,
    text: status,
    wireframe: lofiThree,
    description: 'Strategically removing the menu bar at the bottom of some screens helps the users focus on the particular task at hand. This also frees up white space for easy arrangement of contents into digestible sections and visual hierarchy on the screen. ',
    callout: [
      {
        emphasis: {first: 'step-by-step'},
        copy: 'guide users through flows {first}',
        style: {top: 100, left: 20},
      },
      {
        emphasis: {first: 'differentiate information'},
        copy: 'when displaying heavy text, {first} of the highest priority from others',
        style: {top: 300, left: 30},
      },
      {
        emphasis: {first: 'add movement', second: 'avoid scrolling fatigue'},
        copy: '{first} on the screen and {second}',
        style: {top: 70, right: 30},
      },
      {
        emphasis: {first: 'anticipate questions'},
        copy: '{first} and provide response to minimize resistance',
        style: {top: 230, right: 30},
      },
      {
        emphasis: {first: 'provide', second: 'options'},
        copy: '{first} users with {second}',
        style: {top: 470, right: 30},
      },
    ],
  },
];

export const usabilityTesting = [
  {
    bubble: 'Why are there two different sets of category filters. It’s confusing.',
    percentage: '60%',
    description: 'of the customers ignore the category filters and try to order food using cards or the search bar. ',
    src: percentageCharOne,
    copyStyle: {width: 170, top: 50, left: 50},
    bubbleStyle: {top: -70, left: -250},
  },
  {
    bubble: 'The “Back” button didn’t always take me back to where I wanted to go.',
    percentage: '50%',
    description: 'of the customers miss navigation queues and get lost during a user flow.',
    src: percentageCharTwo,
    copyStyle: {width: 130, top: 30, left: 50},
    bubbleStyle: {top: -50, right: -40},
  },
  {
    percentage: '80%',
    description: 'of the customers find the bottom menu bar confusing.',
    src: percentageCharThree,
  },
];

export const highFidelity = [
  {
    number: numberOne,
    text: home,
    description: 'Based on user feedback, I\'ve made some improvements. I added labels for clarity and organized the menu categories like the physical one. To avoid confusion, I replaced multiple filters with just one button. We also revamped the card layout to show dish details more clearly, including pricing and reviews, for quick reference.',
    flow: [
      'I moved the search bar to the top to create space for promotions and marketing materials.',
      'At the request of PP owners to promote restaurant-related merchandise, I have placed a shop icon in the top left corner of the home screen as a secondary feature.',
      'I replaced multiple filters with just one button.',
      'I moved the hamburger menu to the be near the main access points at the bottom menu bar, as it encapsulates additional features.',
    ],
    lofi: lofiMarkedOne,
    hifi: hifiOne,
  },
  {
    number: numberTwo,
    text: cart,
    description: 'During the usability test, many users encountered difficulty navigating away from the cart screen. The generic back button failed to provide clear direction regarding their destination. To address this issue, I implemented specific buttons to anticipate and facilitate common user actions on this screen.',
    flow: [
      'I\'ve divided the back button into multiple paths, giving users the option to return to either the home screen or the menu page to add more items.',
      'I eliminated the dish image to make room for customization information for each item.',
      'This screen shows the estimated wait time provided by kitchen staff, enabling customers to plan ahead and greatly reduce their wait time at the restaurant.',
      'I positioned the total price on the CTA button to ensure users are aware of their commitment before proceeding to the next screen.',
    ],
    lofi: lofiMarkedTwo,
    hifi: hifiTwo,
  },
  {
    number: numberThree,
    text: status,
    description: 'During the usability test, status updates proved vital to users as they assist in determining when to arrive at the restaurant. For PP customers, who often make creative special requests, confirmation from the kitchen is essential as it assures users that their dish will be prepared to their specifications.',
    flow: [
      'I removed unnecessary and irrelevant information from the order status screen, such as dish details, which can be viewed on the order receipt.',
      'The back button isn\'t applicable on this screen since users don\'t need to return to the order placement flow.',
      'I added a help button in the top right corner of the screen, allowing users to address common questions without them having to contact the restaurant. ',
      'Users can receive regular updates at every step of the process on this screen.',
    ],
    lofi: lofiMarkedThree,
    hifi: hifiThree,
  },
];

export const styleGuide = {
  colors: [
    {
      text: colorTextPrimary,
      swatch: [colorPrimary, colorTranslucent],
    },
    {
      text: colorTextBody,
      swatch: [colorBody, colorDeemphasized],
    },
    {
      text: colorTextHelper,
      swatch: [colorHelper],
    },
    {
      text: colorTextBackground,
      swatch: [colorBackground],
    },
  ],
};
