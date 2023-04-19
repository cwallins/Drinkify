import React from 'react';

export default function About() {
  return (
    <React.Fragment>
      <main className="about">
        <div className="about-container">
          <div className="search">
            Welcome to Drinkify 2.0 - Your cocktail database online!
            <br />
            <br />
            This project originally aimed to use APIs and frameworks to create a dynamic web application.
            <br />
            By using this site you can browse and store your favorite drinks in the web's local storage.
            <br />
            <br />
            The project group is now re-structuring this project from last autumn - 22 for the course: Individuell Fördjupning.
            The code has been re-written to follow React standards and has implemented standard hooks throughout to make it better. 
            <br />
            <br /> Furthermore, we have created a version with custom hooks that investigates if the use of those in a project like
            this is benefitial. 
            <br />
            <br />
            Happy Drink Hunting!
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
