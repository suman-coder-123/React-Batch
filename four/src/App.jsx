// import { useState } from "react"

// const App = () => {
//  const [formData , setFormData] = useState({
//   name : "",
//   email : "",
//   password : "", 
//   confirmPassword : "",
//   mobile : ""
//  })


//  const [success , setSuccess] = useState("");

//  const [error, setError] = useState({});

//  function handleChange(e) {
//   const {name , value} = e.target;

//   setFormData((prev) => ({
//     ...prev , 
//     [name] : value
//   }));

//   setSuccess("");
//  }



//  function validateForm () {
//   const newError = {};

//   if (!formData.name.trim()) {
//     newError.name = "Name is required";
//   } else if (formData.name.trim().length < 3) {
//     newError.name = "name must contain at least 3 characters";
//   }


//   if (!formData.email.trim()) {
//     newError.email = "email is required"
//   } else if (!formData.email.includes("@")) {
//     newError.email = "email must contain @";
//   } else if (!formData.email.includes(".") ) {
//     newError.email = "email must contain dot (.)"
//   }


//   if (!formData.password) {
//     newError.password = "password is required";
//   } else if (formData.password.trim().length < 8) {
//     newError.password = "password must contain at least 8 characters";
//   }


//     if (!formData.confirmPassword) {
//     newError.confirmPassword = "please confirm your password";
//   } else if (formData.confirmPassword !== formData.password) {
//     newError.confirmPassword = "password do not match";
//   }


//   if (!formData.mobile.trim()) {
//     newError.mobile = "mobile number is required"
//   } else if (!formData.mobile.length == 10) {
//     newError.mobile = "mobile number must contain 10 number"
//   } else if (isNaN (formData.mobile)) {
//     newError.mobile = "mobile number must contain only digit"
//   } else if (!["6" , "7" , "8" , "9"].includes(formData.mobile[0])) {
//     newError.mobile = "mobile number must start with 6,7,8,9";
//   }


// return newError;
//  }

//  function handleSubmit(e) {
//   e.preventDefault();

//   const validateError = validateForm();

//   setError(validateError);
//   if (Object.keys(validateError).length>0) {
//     setSuccess("");
//     return;
//   }

//   setSuccess("registration successfully");

//   console.log("form data " , {
//     name : formData.name.trim(),
//     email : formData.email.trim(),
//     mobile : formData.mobile.trim(),

//   })
//  }
//   return (
//     <div>
//       <h1>Registration form </h1>
//       <form onSubmit={handleSubmit} >
//         <div>
//           <label >Name : </label>
//           <input type="text" name="name" 
//            value={formData.name}
//            onChange={handleChange}
//            />
//            {error.name && (<p>{error.name}</p>)}
//         </div>


//         <div>
//           <label > Email :</label>
//           <input type="email" 
//           placeholder="enter your email address"
//           name="email"
//           value={formData.email} 
//           onChange={handleChange}/>

//            {error.email && (<p>{error.email}</p>)}
//         </div>

//         <div>
//           <label> password :</label>
//           <input type="password" 
//           name="password"
//           placeholder="******"
//           value={formData.password}
//           onChange={handleChange}/>

//            {error.password && (<p>{error.password}</p>)}
//         </div>

//         <div>
//           <label> Confirm  password :</label>
//           <input type="password" 
//           name="confirmPassword"
//           placeholder="******"
//           value={formData.confirmPassword}
//           onChange={handleChange}/>
//            {error.confirmPassword && (<p>{error.confirmPassword}</p>)}
//         </div>


//           <div>
//           <label>Mobile number  :</label>
//           <input type="tel"
//           name="mobile" 
//           placeholder="1234567890"
//           value={formData.mobile}
//           onChange={handleChange}/>
//            {error.mobile && (<p>{error.mobile}</p>)}
//         </div>


//         <div>
//           <button type="submit">Register</button>
//           {success && <p>{success}</p>}
//         </div>





//       </form>
    
//     </div>
//   )
// }

// export default App



import { useForm } from "react-hook-form";

const App = () => {
  const {register , handleSubmit} = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Registration form </h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label > Name : </label>
        <input type="text" 
        placeholder="enter your name" 
        {...register("name" , {
          required : "name is required",
          // validate : (value) => value.trim().length >=3 ||
          minLength : {
            value :3,
            message : "name value contain at least 3 character"
          }
        })  }
        />


          
        <label > Email : </label>
        <input type="email" 
        placeholder="enter your email" 
        {...register("email")}
        />


        
        <label > password : </label>
        <input type="password" 
        placeholder="enter your password" 
        {...register("password")}
        />


        
        <button type="submit"> Register</button>


      </form>
    </div>
  )
}

export default App
