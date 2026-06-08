import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>Freelance & Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building production-ready AI applications powered by LLMs, RAG pipelines,
              and OpenAI/Anthropic Claude APIs. Delivering end-to-end full-stack
              solutions for real-world clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E Computer Science With (AIML)</h4>
                <h5>University of Mumbai</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Pursuing a specialization in Artificial Intelligence and Machine Learning.
              Coursework covers deep learning, NLP, data structures, algorithms,
              and software engineering principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Self-Taught & Open Source</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Developed expertise in React.js, Next.js, Node.js, and TypeScript
              through hands-on projects. Built and deployed multiple production
              web applications integrating modern UI/UX and backend APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
