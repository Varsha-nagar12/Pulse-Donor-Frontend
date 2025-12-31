import { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { setData } from "./reduxconfig/UserSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();   // ✅ FIXED
  const navigate = useNavigate();

  const mailRef = useRef();
  const passRef = useRef();

  const login = (event) => {
    event.preventDefault();

    const data = {
      email: mailRef.current.value,
      password: passRef.current.value,
    };

    fetch("http://localhost:8989/noauth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          event.target.reset();
          toast.success(result.msg);

          dispatch(setData(result.data)); // ✅ now works

          navigate("/donor/welcome");
        } else {
          toast.error(result.msg);
        }
      });
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded shadow-lg">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4 text-primary fw-bold">
                    Welcome to the Blood Donation Platform
                  </h1>

                  <form onSubmit={login}>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" ref={mailRef} required />
                      <label>Email</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" ref={passRef} required />
                      <label>Password</label>
                    </div>

                    <button className="btn btn-primary w-100 py-3">
                      Login
                    </button>

                    <div className="text-center mt-3">
                      New here? <Link to="/register">Register</Link>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 p-5 text-center">
                <h3 className="text-primary fw-bold">Your Donation Saves Lives</h3>
                <p className="text-muted">
                  Every time you donate blood, you're giving someone a chance to live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
