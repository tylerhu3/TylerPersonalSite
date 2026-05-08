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
            <h4 style={{ color: "grey" }}>Senior Software Engineer</h4>
            <hr style={{ borderTop: "3px solid #000", width: "100%" }} />
            <p>
            Experienced Software Engineer with 5+ years of expertise in developing high-performance mobile/front-end applications. Proficient in Kotlin, Java, Coroutines, Dagger, Jetpack Compose, ReactJs, and NodeJS. Proven track record in optimizing app performance, enhancing user experience, and delivering robust, stable, and scalable software solutions. Adept at collaborating with cross-functional teams to achieve business goals and drive continuous improvement.
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
            
            <Skills skill="Kotlin / Java" progress={95} />
            <Skills skill="Android / Jetpack Compose" progress={90} />
            <Skills skill="Dagger / Room / Coroutines" progress={85} />
            <Skills skill="RxJava" progress={85} />
            <Skills skill="Javascript / Typescript" progress={85} />
            <Skills skill="ReactJS / NodeJS" progress={80} />
            <Skills skill="HTML / CSS / XML" progress={80} />
            <Skills skill="RESTful APIs / GraphQL" progress={80} />
            <Skills skill="MySQL / NoSQL / SQLite" progress={75} />
            <Skills skill="Python / C++ / C" progress={75} />
            <Skills skill="Flutter / React-Native" progress={60} />
            <Skills skill="Angular / SwiftUI" progress={50} />
          </Cell>

          <Cell className="resume-right-col" tablet={12} phone={12}  col={8}>
            
            <h3>Experience</h3>

            <Experience
              startYear="Nov 2024"
              endYear="Present"
              jobName="Senior Software Engineer"
              company="Insulet, San Diego, CA"
              jobDescription="
              • Designed and developed high-quality Android mobile applications and SDKs using Java, Kotlin, and KMM, delivering medical-grade solutions for patient and device-centric products.
              • Collaborated with cross-functional teams to define, design, and deploy new features and software releases, ensuring alignment with customer and market needs.
              • Architected and built next-generation cloud-based mobile application platforms, supporting scalable and secure solutions for future healthcare products.
              "
            />

            <Experience
              startYear="May 2022"
              endYear="Nov 2024"
              jobName="Software Engineer"
              company="Amazon, Sunnyvale, CA"
              jobDescription="
              • Refactored substantial portions of the codebase to properly implement MVVM architecture, improving code organization, testability, and maintainability.
              • Managed the end-to-end software development lifecycle for Amazon Kids and Amazon Kids Browser app, collaborating with 4+ cross-functional teams, implement 4 new features for 1,000,000+ users leading to a 10% increase in revenue and a 10% boost in engagement.
              • Implemented proactive monitoring and automation, utilizing 30+ AWS CloudWatch metrics and alarms, ensuring 100% application uptime.
              • Leveraged customer metrics to drive continuous app improvements, implementing 20+ updates to functionality and design, aligning with customer needs and business goals.
              • Migrated key components of Kids Browser app from traditional Kotlin + XML to Jetpack Compose, enhancing UI development efficiency and maintaining consistency.
              • Implemented 200+ unit tests and debugged 20+ critical application issues, ensuring app stability and performance.
              "
            />

            <Experience
              startYear="Aug 2023"
              endYear="Sep 2023"
              jobName="Software Engineer (Volunteer)"
              company="Alameda Food Bank, Alameda, CA"
              jobDescription="
              • Developed a robust ticketing system for the Alameda Food Bank using Express.js and SQLite3, resulting in a 30% increase in operational efficiency.
              • Designed and implemented 6 RESTful APIs to enable seamless communication between frontend and backend components, enhancing system functionality.
              • Conducted 5 comprehensive training sessions and provided ongoing support, empowering 20+ volunteer members to effectively utilize the system.
              "
            />

            <Experience
              startYear="Mar 2020"
              endYear="May 2022"
              jobName="Software Engineer"
              company="Fidelity, San Francisco, CA"
              jobDescription="
              • Developed new features for proprietary banking apps on Android phones and tablets, enhancing user experience and functionality for 500,000+ users.
              • Automated company app build and test processes through Jenkins, reducing build times by 10% and improving efficiency.
              • Collaborated with 3 Software Architects to determine technical feasibility and best approaches for 20+ customer requests.
              • Work on location tracking agents, analyze user habits, summarize data in user-friendly format, log and connect external fraud detection SDK.
              • Implemented 200+ unit tests and debugged 20+ critical application issues, ensuring app stability and performance.
              "
            />

            <Experience
              startYear="Jan 2020"
              endYear="Mar 2020"
              jobName="Software Developer Internship"
              company="Infinite Options, San Jose, CA"
              jobDescription="
              • Created, modified, maintained SQL procedures to consume data from multiple excel sheet, analyze customer data, identify best-selling product, tracked trends of Key Performance Indicators.
              • Designed backend server API adhering to RESTful architecture then implement with NodeJS, Express.
              • Designed frontend website, then implement with ReactJS, connected Google Calendar API and Firebase Firestore to our backend server.
              "
            />

            <Experience
              startYear="Oct 2007"
              endYear="Jul 2014"
              jobName="Staff Sergeant and Mechanic"
              company="United States Air Force, Misawa AB, Japan"
              jobDescription="
              • Performed maintenance and inspections on over 1.5K pieces of aircraft equipment valued at $32.3M.
              • Security Escort for third country personnel in Republic of Korea.
              • Supported training and contingency missions of 5 different aircraft: A-10, F-16E, C-130, B-1, J-Star.
              "
            />
            <hr style={{ borderTop: "3px solid #ffffff" }} />

      <h3>Education</h3>
            <Education
              startYear="Sep 2017"
              endYear="Sep 2019"
              schoolName="University of California, Santa Cruz - Santa Cruz, CA"
              degree="Bachelor of Science in Computer Science"
              highlights="Graduated with 3.22 GPA, Member of Association for Computing Machinery."
            />

            <Education
              startYear="Jan 2015"
              endYear="Sep 2017"
              schoolName="Chabot Community College - Hayward, CA"
              degree="Associate of Science in Math and Computer Science"
              highlights=" 
              Graduated with 3.45 GPA, Two Time Recipient of Veteran's Scholarship, Dean's List Spring 2017              
              "
            />
            <hr style={{ borderTop: "3px solid #ffffff" }} />

          <h3>Frameworks / Tools</h3>

          <Skills skill="Android Studio / IntelliJ" progress={95} />
          <Skills skill="Git / Github" progress={90} />
          <Skills skill="Unix Shell Scripting / Linux" progress={85} />
          <Skills skill="System Design" progress={85} />
          <Skills skill="JIRA / Agile Principles" progress={85} />
          <Skills skill="Gradle / Jenkins" progress={80} />
          <Skills skill="JUnit / Jest" progress={80} />
          <Skills skill="AWS" progress={70} />
          <Skills skill="Jupyter Notebook" progress={70} />
          
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
