// import React, { useRef } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// import '../App.css' ;
// import { Link } from 'react-router-dom';
//  import toast from 'react-hot-toast';

// export default function Register() {
//   const nameRef = useRef();
//   const mobRef = useRef();
//   const mailRef = useRef();
//   const genderRef = useRef();
//   const bloodRef = useRef();

//   const register = (event) => {
//     event.preventDefault();

//     const data = {
//       name: nameRef.current.value,
//       mobile: mobRef.current.value,
//       email: mailRef.current.value,
//       gender: genderRef.current.value,
//       bloodGroup: bloodRef.current.value,
//     };

//     fetch('http://localhost:8989/noauth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         if (result.status) {
//          toast.success(result.msg);
//           event.target.reset(); 
//         } else {
//          toast.error(result.msg);
//         }
//       });
//   };

//   return (
//     <>
//       <div className="container-fluid py-2">
//         <div className="container py-8">
//           <div className="row justify-content-center">
//             <div className="col-md-12">
//               <div className="card shadow-lg rounded">
//                 <div className="card-body p-5">
//                   <h2 className="text-center text-primary mb-4">Registration Form</h2>
//                   <p className="text-center text-muted mb-4">
//                     Join our community by filling out the form below!
//                   </p>

                  

//                   {/* Registration Form */}
//                   <form onSubmit={register}>
//                     <div className="row g-3">
//                       {/* Name Field */}
//                       <div className="col-sm-6">
//                         <div className="form-floating">
//                           <input type="text"
//                             className="form-control"
//                             id="name"
//                             placeholder="Please Enter Your Name"
//                             ref={nameRef}
//                             required />
//                           <label htmlFor="name" className="text-dark">Name</label>
//                         </div>
//                       </div>

//                       {/* Mobile Field */}
//                       <div className="col-sm-6">
//                         <div className="form-floating">
//                           <input
//                             type="tel"
//                             className="form-control"
//                             id="mobile"
//                             placeholder="Mobile Number"
//                             maxLength="10"
//                             minLength="10"
//                             ref={mobRef}
//                             required
//                           />
//                           <label htmlFor="mobile" className="text-dark">Mobile Number</label>
//                         </div>
//                       </div>
//                     </div>
//                     <br />
//                     <div className="row g-3">
//                       {/* Email Field */}
//                       <div className="col-sm-6">
//                         <div className="form-floating">
//                           <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             placeholder="Email"
//                             ref={mailRef}
//                             required
//                           />
//                           <label htmlFor="email" className="text-dark">Email</label>
//                         </div>
//                       </div>

//                       {/* Gender Field */}
//                       <div className="col-sm-6">
//                         <div className="form-floating">
//                           <select className="form-select" ref={genderRef} required>
//                             <option value="">Choose Your Gender</option>
//                             <option value="1">Male</option>
//                             <option value="2">Female</option>
//                           </select>
//                           <label htmlFor="gender" className="text-dark">Gender</label>
//                         </div>
//                       </div>
//                     </div>
//                     <br />

//                     {/* Blood Group Field */}
//                     <div className="mb-3">
//                       <select className="form-select" ref={bloodRef} required>
//                         <option value="">Choose Blood Group</option>
//                         <option value="1">A+</option>
//                         <option value="2">A-</option>
//                         <option value="3">AB+</option>
//                         <option value="4">AB-</option>
//                         <option value="5">B+</option>
//                         <option value="6">B-</option>
//                         <option value="7">O+</option>
//                         <option value="8">O-</option>
//                       </select>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="col-12">
//                       <button className="btn btn-primary w-100 py-3" type="submit">
//                         Register
//                       </button>
//                     </div>
//                   </form>

//                   {/* Footer with login link */}
//                   <div className="text-center mt-3">
//                     <p className="text-muted">
//                       Already have an Account? <Link to="/login" className="register-link">Login now</Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }








import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../App.css';

export default function Register() {
  const nameRef = useRef();
  const mobRef = useRef();
  const mailRef = useRef();
  const genderRef = useRef();
  const bloodRef = useRef();

  const [loading, setLoading] = useState(false); // ✅ loading state

  const register = async (event) => {
    event.preventDefault();

    setLoading(true); // start loading

    const data = {
      name: nameRef.current.value,
      mobile: mobRef.current.value,
      email: mailRef.current.value,
      gender: genderRef.current.value,
      bloodGroup: bloodRef.current.value,
    };

    try {
      const res = await fetch('http://localhost:8989/noauth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status) {
        toast.success(result.msg || 'Registration successful!');
        event.target.reset();
      } else {
        toast.error(result.msg || 'Registration failed!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Server error, please try again.');
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="container-fluid py-2">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg rounded">
              <div className="card-body p-5">
                <h2 className="text-center text-primary mb-4">Registration Form</h2>
                <p className="text-center text-muted mb-4">
                  Join our community by filling out the form below!
                </p>

                <form onSubmit={register}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          ref={nameRef}
                          required
                        />
                        <label>Name</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile Number"
                          maxLength="10"
                          minLength="10"
                          ref={mobRef}
                          required
                        />
                        <label>Mobile Number</label>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 mt-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          ref={mailRef}
                          required
                        />
                        <label>Email</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <select className="form-select" ref={genderRef} required>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <label>Gender</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-floating mt-3">
                    <select className="form-select" ref={bloodRef} required>
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                    <label>Blood Group</label>
                  </div>

                  <button className="btn btn-primary w-100 py-3 mt-4" type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                  </button>
                </form>

                <div className="text-center mt-3">
                  <p className="text-muted">
                    Already have an account? <Link to="/login" className="text-primary">Login now</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

