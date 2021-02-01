import  React       from   'react';
import { observer } from   'mobx-react';
import  UserStore   from   './stores/UserStore';
import  LoginForm   from   './LoginForm';
import  InputField  from   './InputField';
import SubmitButton from   './SubmitButton';
import Dashboard from './Dashboard';
import Contact from './Contact';
import AddDish from './AddDish';
import AddComment from './AddComment';
import Home from './Home';
import RestaurantNav from './RestaurantNav';
import About from './About';
import './App.css';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import { Restaurant } from '@material-ui/icons';


class App extends React.Component {

  async componentDidMount(){

    try{

       let res = await fetch('/isLoggedIn', {
         method: 'post',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
       });

       let result = await res.json();

       if(result && result.success){
         UserStore.loading = false;
         UserStore.isLoggedIn = true;
         UserStore.username = result.username;
       }

       else{
         UserStore.loading=false;
         UserStore.isLoggedIn=false;
       }
    }

    catch(e){
      UserStore.loading=false;
      UserStore.isLoggedIn=false;
    }
  }


  async doLogout(){

    try{

       let res = await fetch('/logout', {
         method: 'post',
         headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
         }
       });

       let result = await res.json();

       if(result && result.success){
         UserStore.isLoggedIn = false;
         UserStore.username='';
       }

    }

    catch(e){
      console.log(e);
    }
  }
  render(){

    if(UserStore.loading){

      return (
          <div className="app"> 
              <div className='container'>
                  Loading, please wait..
              </div>
          </div>
        );

    }

    else{
      if(UserStore.isLoggedIn){

          return (
              <div className="app">
                    <div className='container'>
                        Welcome {UserStore.username}

                          <SubmitButton 
                            text={'Log Out'}
                            disabled={false}
                            onClick={ () => this.doLogout()}
                          />
                    </div>
              </div>
          );

      }

    
    }


    return (
      <Router>
      <div className="app">

      <Dashboard /> 
        <Switch>
          
          
           {/* <LoginForm />     */}
             
             {/* {/* <Route exact path="/" component={Dashboard}/> */}
             <Route exact path="/" component={RestaurantNav}/>
             <Route exact path="/about" component={About}/>
             <Route exact path="/contactUs" component={Contact} />
             <Route exact path="/addDish" component={AddDish} />
             {/* <RestaurantNav /> */}
             {/* <Contact /> */}
             {/* <AddDish /> */}
             {/* <AddComment /> */}
        </Switch>     
      </div>
      </Router>
    );
}
}



export default observer(App);
