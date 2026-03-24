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
                <h4>Data Analyst Intern</h4>
                <h5>Brainic Solutions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <ul className="career-list">
              <li>Analyzed 12,000+ housing records using Python and SQL, improving price prediction model accuracy (R² from 0.72 to 0.85).</li>
              <li>Performed data preprocessing, outlier detection, and correlation analysis to support accurate insights.</li>
              <li>Compared regression models and reduced RMSE by 15 percent, improving price prediction reliability.</li>
              <li>Presented findings using visualizations to highlight pricing patterns and feature importance.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Cognifyz Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <ul className="career-list">
              <li>Cleaned and transformed 25,000+ restaurant records using Pandas, reducing missing data by 30 percent and improving data reliability for analysis.</li>
              <li>Conducted exploratory data analysis to uncover trends in customer ratings, pricing, and restaurant features.</li>
              <li>Created visual reports (bar charts, heatmaps, correlation plots) to communicate insights clearly.</li>
              <li>Documented analytical workflows in Jupyter Notebook for reproducibility and reporting.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application</h4>
                <h5>Mohan Babu University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <ul className="career-list">
              <li>Relevant Coursework: Data Science, Database Management, Data Structures, Operating Systems, Computer Networking.</li>
              <li>President of Hackathon Club (Spring 2024 - Present): Directed club operations for 80+ members.</li>
              <li>Active Kaggle participant focused on data analysis and EDA competitions.</li>
              <li>Maintained GitHub repositories related to data analysis and Python.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
