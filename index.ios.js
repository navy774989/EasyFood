import { Navigation } from 'react-native-navigation';
import { registerScreens } from './Screens';
import Search from './Screens/Search';
import RNAccountKit,{Color,
  StatusBarStyle} from 'react-native-facebook-account-kit';
registerScreens(); // this is where you register all of your app's screens
global.PaymentRequest = require('react-native-payments').PaymentRequest;

RNAccountKit.configure({
  defaultCountry: 'TW',
  theme: {
    backgroundColor: Color.rgba(255, 255, 255, 1),
    headerBackgroundColor: Color.rgba(230, 145, 55, 1.0),
    buttonBackgroundColor: Color.rgba(230, 145, 55, 1.0),
    buttonBorderColor: Color.rgba(230, 145, 55, 1.0),
    buttonDisabledBackgroundColor: Color.rgba(236, 236, 236, 0.5),
    buttonDisabledBorderColor: Color.rgba(255, 255, 255, 0),
    inputBackgroundColor: Color.rgba(236, 236, 236, 0.5),
    iconColor: Color.rgba(230, 145, 55, 1.0),
  }
});
RNAccountKit.getCurrentAccessToken()
      .then(token => {
        if (token) {
          RNAccountKit.getCurrentAccount().then(account => {
            Navigation.startTabBasedApp({
              tabs: [
                {
                  label: '新鮮',
                  screen: 'Fresh', // this is a registered name for a screen
                  icon: require('./Image/New.png'),
                  title: 'Fresh'
                },

                {
                  label: '搜尋',
                  screen: 'Search',
                  icon: require('./Image/Search.png'),
                  title: 'Search'
                },
                {
                  label: '購物車',
                  screen: 'ShopCart',
                  icon: require('./Image/Order.png'),
                  title: 'Order'
                },
                {
                  label: '訂單',
                  screen: 'Order',
                  icon: require('./Image/applicationform.png'),
                  title: 'Order'
                },
              ],
              tabsStyle: {
                tabBarHidden: false, // make the tab bar hidden
    // change the color of the tab icons and text (also unselected)
                tabBarSelectedButtonColor: '#e69137', // change the color of the selected tab icon and text (only selected)// change the background color of the tab bar
                tabBarTranslucent: true, // change the translucent of the tab bar to false
                tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family// iOS only. change the color of tab text
                tabBarSelectedLabelColor: '#e69137', // iOS only. change the color of the selected tab text
                forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
              }
            });
          });
        } else {
          Navigation.startSingleScreenApp({
            screen: {
              screen: 'Login', // unique ID registered with Navigation.registerScreen
              title: 'Welcome', // title of the screen as appears in the nav bar (optional)
              navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
              navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            },
            passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
            animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
          });
        }
      })
      .catch(e => console.log('Failed to get current access token', e));

