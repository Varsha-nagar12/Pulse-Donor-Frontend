// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export default function Verification() {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   // STEP 1 : Verify Email
//   const verifyEmail = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:8989/noauth/check", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });

//     const data = await res.json();

//     if (data.status) {
//       toast.success("Email Verified!");
//       setStep(2);
//     } else {
//       toast.error(data.msg);
//     }
//   };

//   // STEP 2 : Save Password
//   const savePassword = async (e) => {
//     e.preventDefault();
//     const password = e.target.password.value;

//     const res = await fetch("http://localhost:8989/noauth/set-password", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (data.status) {
//       toast.success("Password Saved!");
//       navigate("/login");
//     } else {
//       toast.error(data.msg);
//     }
//   };

//   return (
//     <div className="container py-5" style={{ maxWidth: "550px" }}>
//       <div
//         className="card shadow-lg p-4"
//         style={{ borderTop: "5px solid #C1121F", borderRadius: "10px" }}
//       >
//         <h2
//           className="text-center mb-4"
//           style={{ color: "#C1121F", fontWeight: "600" }}
//         >
//           Email Verification
//         </h2>

//         {/* STEP 1: Email Input */}
//         {step === 1 && (
//           <form onSubmit={verifyEmail}>
//             <label className="fw-bold">Registered Email</label>
//             <input
//               type="email"
//               className="form-control mb-3"
//               placeholder="Enter your email"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <button
//               className="btn w-100 py-2 text-white"
//               style={{
//                 backgroundColor: "#C1121F",
//                 fontSize: "17px",
//                 borderRadius: "5px",
//               }}
//             >
//               Verify Email
//             </button>
//           </form>
//         )}

//         {/* STEP 2: Password Input */}
//         {step === 2 && (
//           <>
//             <p className="text-success text-center fw-bold">
//               ✓ Email Verified Successfully
//             </p>

//             <form onSubmit={savePassword}>
//               <label className="fw-bold">Create New Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control mb-3"
//                 placeholder="Enter password"
//                 required
//               />

//               <button
//                 className="btn w-100 py-2 text-white"
//                 style={{
//                   backgroundColor: "green",
//                   fontSize: "17px",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Save Password
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// const token = params.get("token")


// export default function Verification() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const data = { email, password };
 

// fetch(`http://localhost:8989/noauth/email/verification/${token}`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 alert(result.message || "Verification Saved!");
//             })
//             .catch((err) => console.log(err));
//     };

//     return (
//         <>

//             <div className="container-xxl py-5">
//                 <div className="container">
//                     <div className="row g-5 justify-content-center">

//                         <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <h6 className="section-title bg-white text-start text-primary pe-3">
//                                 Email Verification
//                             </h6>

//                             <h1 className="mb-4">Verify Your Email</h1>

//                             <p className="mb-4">
//                                 Please enter your registered email and password. We will send a
//                                 verification link to your email address.
//                             </p>

//                             <form onSubmit={handleSubmit}>
//                                 <div className="form-floating mb-3">
//                                     <input
//                                         type="email"
//                                         className="form-control"
//                                         id="email"
//                                         placeholder="Enter Email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                     />
//                                     <label htmlFor="email">Email Address</label>
//                                 </div>

//                                 <div className="form-floating mb-3">
//                                     <input
//                                         type="password"
//                                         className="form-control"
//                                         id="password"
//                                         placeholder="Enter Password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         required
//                                     />
//                                     <label htmlFor="password">Password</label>
//                                 </div>

//                                 <button className="btn btn-primary py-3 px-5 mt-2 w-100">
//                                     Verify Now
//                                 </button>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }











import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Verification() {
  // ✅ hooks component ke top pe
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const token = params.get("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Invalid or expired verification link");
      return;
    }

    fetch(`http://localhost:8989/noauth/email/verification/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          toast.success(result.msg || "Verification Successful");
          navigate("/login");
        } else {
          toast.error(result.msg || "Verification failed");
        }
      })
      .catch(() => toast.error("Server error"));
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-6">
            <div className="bg-light rounded shadow p-5">

              <h1 className="mb-4 text-center text-primary">
                Verify Your Email
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label>Email Address</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label>Create Password</label>
                </div>

                <button className="btn btn-primary w-100 py-2">
                  Verify Now
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}











