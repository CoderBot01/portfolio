import "@styles/globals.css";

export const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div>
        <h1 className="head_text text-center">
          Discover, Who am I?
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">About me</span>
        </h1>
        <p className="desc text-center">
          Passionate about fusing cybersecurity with software development, I
          leverage HTML, CSS, JavaScript, Python, and Java for secure digital
          solutions. With expertise in SQL, I drive decisions with data
          insights. Additionally, I prioritize cloud security, integrating best
          practices for safeguarding data and applications. Committed to
          excellence, I deliver innovative solutions that prioritize
          functionality and mitigate risks, ensuring business success in the
          tech industry.
        </p>
      </div>
      <div>
        <h1>
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center head_text text-center">
            Skills
          </span>
        </h1>
      </div>
      <ul className="center">
        <li>HTML5
        </li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>React Js</li>
        <li>Node Js</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Java</li>
      </ul>

      <div>
        <h1>
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center head_text text-center">
            Certifications
          </span>
        </h1>
      </div>
      <ul className="center1">
        <li>Python and SQL</li>
        <li>Web Development</li>
        <li>Java</li>
        <li>Network Defense Essentials</li>
        <li>Ethical Hacking</li>
        <li>Networking</li>
        <li>Product Management</li>
      </ul>
    </section>
  );
};
export default Home;
