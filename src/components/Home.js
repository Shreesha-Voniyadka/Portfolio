import "./index.css";
import { TypeAnimation } from "react-type-animation";
import gif from "../Assets/Images/luffy-one-piece-anime.gif";
function Home() {
  return (
    <div className="Homebody">
      <div className="container">
        <h1>Hello, Myself Shreesha Voniyadka</h1>
        <p>
          I am a{" "}
          <TypeAnimation
            sequence={[
              "Software Developer",
              500,
              "Backend Developer",
              500,
              "Full Stack Developer",
              500,
              "Software Engineer",
              500,
            ]}
            repeat={Infinity}
          />
        </p>
        <img src={gif} alt="my-gif" className="gifcontainer"/>
      </div>
    </div>
  );
}

export default Home;
