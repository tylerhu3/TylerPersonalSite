import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import avatarPic from "../assets/ProfileHead.png";
class Resume extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Oxygen" }}>
        <Grid>
          <Cell tablet={12} phone={12} col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={avatarPic}
                  alt="avatar"
                style={{ height: "200px" }}
              />
              <h2 style={{ paddingTop: "0.5 em" }}>Tyler Hu</h2>
            </div>
            <br></br>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            <hr style={{ borderTop: "3px solid #000", width: "100%" }} />
            <p>
            I graduated from University of California, Santa Cruz with a BS in Computer Science and I am a seven-year veteran from the United States Air Force.
            I believe my discipline, attention to detail, academic strengths, and passion for creative solutions will be a positive addition to your company.
            </p>
            <hr style={{ borderTop: "3px solid #000", width: "100%" }} />
            <h5>Address</h5>
            <p>San Lorenzo, 94580</p>
            <h5>Phone</h5>
            <p>(510) 701-7525</p>
            <h5>Email</h5>
            <p>tylerhu8@gmail.com</p>
            <hr style={{ borderTop: "3px solid #000", width: "100%" }} />
            <h3>Skills</h3>
            
            <Skills skill="Python" progress={91} />
            <Skills skill="Java" progress={87} />
            <Skills skill="Android" progress={84} />
            <Skills skill="C++" progress={83} />
            <Skills skill="Javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={75} />
            <Skills skill="NodeJS" progress={70} />
            <Skills skill="MySQL" progress={70} />
            <Skills skill="Express" progress={70} />
            <Skills skill="React" progress={60} />
            <Skills skill="MongoDB/NoSQL" progress={50} />
          </Cell>

          <Cell className="resume-right-col" tablet={12} phone={12}  col={8}>
            
            <h3>Experience</h3>

            <Experience
              startYear="March 2020"
              endYear="Present"
              jobName="Android Engineer"
              company="Infinite Options, San Jose, CA"
              jobDescription="
              Worked on location nearby agents with respect to the customer with the ability to navigate to the agent and detect fraud.
              Fixed bugs with code, design patterns and miscellaneous occurrences during project.
              Tested the application on multiple android targets and debugged the issues that were found.
              Developed the database wrapper functions for data staging and modeled the data objects relevant to the mobile application.
              "
            />

            <Experience
              startYear="Jan 2020"
              endYear="March 2020"
              jobName="Software Developer Internship"
              company="Infinite Options, San Jose, CA"
              jobDescription="
              Design backend server API adhering to RESTful architecture; implemented with NodeJS, Express.
              Design frontend website, implemented with ReactJS, Bootstrap 4, React Material Design.
              Connected Google Calendar API and Firebase Firestore to our backend server required for core functionality of webpage
              
              "
            />

            <Experience
              startYear="Aug 2016"
              endYear="May 2017"
              jobName="Computer Science and Math Tutor"
              company="Chabot Community College, Hayward, CA"
              jobDescription="Tutor students in subjects: Multi-variable Calculus, Java, C++, identify lagging skills and correct weaknesses.
              Explained concepts in caring and encouraging environment to help students thrive and learn.
              "
            />

            <Experience
              startYear="Jun 2015"
              endYear="Mar 2016"
              jobName="Vaccine Customer Service and Rig Manager"
              company="Vetco, Newark, CA"
              jobDescription="Perform administration paperwork for pet vaccinations, educated customers on proper yearly pet vaccinations helping reduce overall common pet deaths.
              	Consistently deliver vacines on time and worked extended hours to meet costumer's needs.
              "
            />

            <Experience
              startYear="Oct 2007"
              endYear="Jul 2014"
              jobName="Aerospace Equipment Mechanic"
              company="United States Air Force, Misawa, Japan"
              jobDescription="
              Staff Sergeant/ Firstline Supervisor on swing shift. 
              Supported training and contingency missions of 5 different aircraft: A-10, F-16E, C-130, B-1, J-Star.
              Security Escort for third country personnel in Republic of Korea.
              Performs maintenance and inspections over 1.5K pieces of aircraft equipment valued at $32.3M.
              
              "
            />
            <hr style={{ borderTop: "3px solid #ffffff" }} />

      <h3>Education</h3>
            <Education
              startYear="Aug 2017"
              endYear="June 2019"
              schoolName="University of California, Santa Cruz - Santa Cruz, CA"
              degree="Computer Science BS"
              highlights="Graduated with 3.22 GPA, Member of Association for Computing Machinery."
            />

            <Education
              startYear="Jan 2015"
              endYear="May 2017"
              schoolName="Chabot Community College - Hayward, CA"
              degree="Computer Science and Math AS"
              highlights=" 
              Graduated with 3.45 GPA,
              Two Time Recipient of Veteran's Scholarship, 
              Dean's List Spring 2017              
              "
            />

            <Education
              startYear="Oct 2007"
              endYear="May 2012"
              schoolName="Community College of The Air Force - Montgomery, AL"
              degree="Applied Sciences AS"
              highlights="Graduated with 3.67 GPA, Honors student.   
              "
            />
            <hr style={{ borderTop: "3px solid #ffffff" }} />

          <h3>Technologies</h3>

          <Skills skill="Bash Shell" progress={85} />
          <Skills skill="Github" progress={85} />
          <Skills skill="MS Visual Code" progress={79} />
          <Skills skill="Android Studio" progress={78} />
          
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
