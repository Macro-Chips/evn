import React from "react";


export default function ProfileForm() {
    return (

        <div className="wrapper">
        <h1>Your Information</h1>
        <form>
        <fieldset>
        <label>
           <p>Name</p>
           <input name="name" />
         </label>

         <label>
           <p>Email Address</p>
           <input name="email" />
         </label>

         <label>
           <p>Phone number</p>
           <input name="number" />
         </label>

         <label>
           <p>Graduation Date</p>
           <select name="month" >
               <option value="">--Please choose an option--</option>
               <option value="Jan">January</option>
           </select>

           <select name="year" >
               <option value="">--Please choose an option--</option>
               <option value="2022">2022</option>
           </select>
           </label>


        <label>
           <p>Work Experience</p>
           <input name="workExp" />
         </label>

         <label>
           <p>Skills</p>
           <select name="skills" >
               <option value="">--Please choose an option--</option>
               <option value="css">CSS</option>
               <option value="python">Python</option>
           </select>
           </label>
           </fieldset>
           </form>
        <button type="submit"> Update Information </button>
        </div>
    );

        

}