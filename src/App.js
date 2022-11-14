import './App.css';
import Card from './components/card'
import './practice/Login.css'
function App() {
  let data = [{
plan:'FREE',
price :0,
user : "Single User",
userEnabler:true,
storage : "5GB Storage",
storageEnabler:true,
publicProjects:"Unlimited Public Projects",
publicProjectsEnabler:true,
communityAccess : "Community Access",
communityAccessEnabler:true,
privateProjects :  "Unlimited Private Projects",
privateProjectsEnabler:false,
phoneSupport :"Dedicated Phone Support",
phoneSupportEnabler:false,
subdomain :"Free Sub Domain",
subdomainEnabler:false,
reports: "Monthly Status Reports",
reportsEnabler:false
  },{
    plan:'PLUS',
price :9,
user : "5 Users",
userEnabler:true,
storage : "50GB Storage",
storageEnabler:true,
publicProjects:"Unlimited Public Projects",
publicProjectsEnabler:true,
communityAccess : "Community Access",
communityAccessEnabler:true,
privateProjects :  "Unlimited Private Projects",
privateProjectsEnabler:true,
phoneSupport :"Dedicated Phone Support",
phoneSupportEnabler:true,
subdomain :"Free Sub Domain",
subdomainEnabler:true,
reports: "Monthly Status Reports",
reportsEnabler:false
  },{
    plan:'PRO',
price :49,
user : "Unlimited Users",
userEnabler:true,
storage : "150GB Storage",
storageEnabler:true,
publicProjects:"Unlimited Public Projects",
publicProjectsEnabler:true,
communityAccess : "Community Access",
communityAccessEnabler:true,
privateProjects :  "Unlimited Private Projects",
privateProjectsEnabler:true,
phoneSupport :"Dedicated Phone Support",
phoneSupportEnabler:true,
subdomain :" Sub Domain",
subdomainEnabler:true,
reports: "Monthly Status Reports",
reportsEnabler:true
  }]
  return <>
  {/* day1 */}
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {/* <Card data = {data[0]}/>
     <Card data = {data[1]}/>
     <Card data = {data[2]}/> */}
    {/* JSX - Javascript XML enables us to write JS in html tags */}
    {
      data.map((event)=>{
        return <Card data = {event}/>
      })
    }  
     

      
    </div>
  </div>
</section>

{/* Login page */}

<body>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"></input>
                <label className="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr className="my-4"/>
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase fw-bold hover" type="submit">
                  <i className="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-facebook btn-login text-uppercase fw-bold hover" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>


  </>
} 

export default App;
