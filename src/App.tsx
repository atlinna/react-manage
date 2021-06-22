import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'
import { router, navigator } from './router';
import Origin from './pages/origin';


function App(props: any) {
  // let history = useHistory()

  return (
    <div className="App">
      <Switch>
        {
          router.map(item => {
            if (item.path === "/origin") {
              return <Route key={item.name} path={item.path} component={() => {
                return (
                  <Origin >
                    {
                      navigator.map(ele => {
                        return <Route key={ele.name} exact={item.exact} path={`${item.path}${ele.path}`} component={ele.component} />
                      })
                    }
                  </Origin>
                )

              }} />
            }
            return <Route key={item.name} exact path={item.path} component={item.component} />
          })
        }
      </Switch>
    </div>
  );
}

export default App;
