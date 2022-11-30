import { useDispatch, useSelector } from "react-redux";
import UserShow from "./components/user_show";
import { setFirstname, setLastname, setAge } from "./redux/userSlice";

function App() {
  const authState = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(">>APP AUTH STATE", authState);
  console.log(">>APP USER STATE", userState);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12 my-2">
              <label htmlFor="email">
                İsim <span className="text-muted"></span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Your Name"
                onChange={(event) => dispatch(setFirstname(event.target.value))}
              />
              <div className="invalid-feedback">
                Please enter a valid name for shipping updates.
              </div>
            </div>

            <div className="col-12 my-2">
              <label htmlFor="email">
                Soyisim <span className="text-muted"></span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Your Last Name"
                onChange={(event) => dispatch(setLastname(event.target.value))}
              />
              <div className="invalid-feedback">
                Please enter a valid surname for shipping updates.
              </div>
            </div>
            <div className="col-12 my-2">
              <label htmlFor="email">
                Yaş <span className="text-muted"></span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Your Age"
                onChange={(event) => dispatch(setAge(event.target.value))}
                onKeyUp={event=> console.log('KEY UP EVENT EXECUTED  ' + event.target.value)}
                onKeyDown={event=> console.log('KEY DOWN EVENT EXECUTED  ' + event.target.value)}
                onBlur={event=> console.log('KEY BLUR EVENT EXECUTED  ' + event.target.value)}
                onFocus={event=> console.log('KEY FOCUS EVENT EXECUTED  ' + event.target.value)}
                onClick={event=> console.log('ONCLICK EVENT EXECUTED  ' + event.target.value)}

              />
              <div className="invalid-feedback">
                Please enter a valid age for shipping updates.
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <UserShow />
        </div>
        <br/>
        <div className="col-12">{JSON.stringify(userState)}</div> 
        <br></br>
        
        <div className="col-12">İSİM: {userState.firstname}</div>
        <br></br>
        <div className="col-12">SOYAD: {userState.lastname}</div>
        <br></br>
        <div className="col-12">YAŞ: {userState.age}</div>
        
      </div>
    </div>
  );
}

export default App;
