import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div>
      <div className="parent">
            <div className="cards">
              
              <div className="top">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                />
                <button>
                  Save <Bookmark size={16} />
                </button>
              </div>
      
              <div className="center">
                <h3>
                  Amazon <span>5 days ago</span>
                </h3>
      
                <h2>Senior UI UX Designer</h2>
      
                <div>
                  <h4>Part Time</h4>
                  <h4>Senior Level</h4>
                </div>
              </div>
      
              <div className="bottom">
                <div>
                  <h3>$120/hr</h3>
                  <p>Mumbai, India</p>
                </div>
      
                <button>Apply</button>
              </div>
      
            </div>
          </div>
    </div>
  )
}

export default Card
