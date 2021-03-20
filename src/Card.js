import React from "react";
import "./Card.css";
import "./Header.css";



export default function Card(props){
    const [notify, setNotify] = React.useState(false);

    function handleClick(){
        setNotify(true);
    }

    return (
        
    <div class="container">
        {
            notify && (
                <div class="alert">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    <strong>Successful!</strong> Thank you for applying!
                </div>

            )
        }
        <div class="card">
    <div class="card__container">
      <div className="jobLogo">
            <img className="logo"src={props.logo} ></img>
            </div>
       

        {
        props.student && (
            <div> 
            <p class="card__body">
                {props.job}
            </p> 
            <button onClick={handleClick}class="btn default">Quick Apply</button>
            </div>
        )
    }
        {
            props.recruiter && (
                <p class="card__body"><a href="/recruiter/jobs/candidates">{props.job}</a></p>
            )
        }
    <p class="card__body">
                {props.job}
            </p> 
    
    
    </div>
    </div>
   </div>
);


}