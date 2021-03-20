import React from "react";
import Card from "../Card";
import Header from "../Header";


export default function Candidates() {
    const cells = [];
  const randJobs = ["Software Engineering Intern #534", "Software Engineering Intern #123", "Software Engineering Intern #713", "Software Engineering Intern #223", "Software Engineering Intern #771"];
  const randLogo = ["https://image.flaticon.com/icons/png/512/194/194630.png", "https://images.vexels.com/media/users/3/127599/isolated/preview/988c91fc3a15761d109250ff449e7241-elephant-cartoon-circle-icon-by-vexels.png", "https://i.pinimg.com/originals/c3/41/a6/c341a655711fb185956e281d0f8bc0cf.png","https://www.pngkey.com/png/full/983-9834664_gilian-avatar-ear-mite.png", "https://oakhammockah.com/wp-content/uploads/2017/12/cat-circle.png"]
  for (let i = 0; i < 5; i++) {
    cells.push(
        <Card job={randJobs[i]} logo={randLogo[i]} recruiter={true}/>
    );
  }
    return (
    <div classname="app">
    <Header logged="true" />
    {cells}
    </div>
    );

}