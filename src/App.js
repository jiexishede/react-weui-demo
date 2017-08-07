import React, { Component } from 'react';
import logo from './logo.svg';


import Pages from './componentIndex';


import 'weui';


import { TransitionGroup, CSSTransition } from 'react-transition-group';


import {
  Switch,
  HashRouter as Router,
  Route,
  IndexRoute,
  Link
} from 'react-router-dom';


const { Home, Button, List, Input, Toast, Dialog, Progress, Article,
  ActionSheet, Icons, Panel, NavBar, NavBar2, TabBar, TabBar2, SearchBar, Gallery,
  Uploader, Flex, Footer, Grid, LoadMore, Preview, MsgDemo, MsgSuccess, MsgFail, TopTips,
  Popup, Picker, Slider, Badge, PTR, Infinite, Swiper, Page
} = Pages;


// const {  Msg  } = Pages;



const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/button', component: Button },
  { path: '/list', component: List },
  { path: '/input', component: Input },
  { path: '/toast', component: Toast },
  { path: '/dialog', component: Dialog },
  { path: '/progress', component: Progress },
  { path: '/msg', component: MsgDemo, exact: true },
  { path: '/msg/success', component: MsgSuccess },
  { path: '/msg/fail', component: MsgFail },
  { path: '/article', component: Article },
  { path: '/actionsheet', component: ActionSheet },
  { path: '/icons', component: Icons },
  { path: '/panel', component: Panel },
  { path: '/navbar', component: NavBar },
  { path: '/navbar2', component: NavBar2 },
  { path: '/tabbar', component: TabBar },
  { path: '/tabbar2', component: TabBar2 },
  { path: '/searchbar', component: SearchBar },
  { path: '/gallery', component: Gallery },
  { path: '/uploader', component: Uploader },
  { path: '/flex', component: Flex },
  { path: '/footer', component: Footer },
  { path: '/grid', component: Grid },
  { path: '/loadmore', component: LoadMore },
  { path: '/preview', component: Preview },
  { path: '/toptips', component: TopTips },
  { path: '/popup', component: Popup },
  { path: '/picker', component: Picker },
  { path: '/slider', component: Slider },
  { path: '/badge', component: Badge },
  { path: '/ptr', component: PTR },
  { path: '/infinite', component: Infinite },
  { path: '/swiper', component: Swiper },
  { path: '/page', component: Page }
];

const App = (props, context) =>
  (
    <Router>
      <Switch>
        {
          routes.map( route=> (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
          ))
        }
      </Switch>
    </Router>
  );




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to HHH</h2>
//         </div>
//         <Button>hello wechat</Button>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
