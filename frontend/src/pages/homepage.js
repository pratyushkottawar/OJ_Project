import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProblemComp from "../components/problemComp";

const Homepage = () => {
  const [problems, setProblems] = useState(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/problems");

        if (response.status === 200) {
          setProblems(response.data);
        }
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };
    fetchProblems();
  }, []);

  return (
    <div className="home">
      <div className="problems">
        {problems &&
          problems.map((problem) => (
            <ProblemComp key={problem._id} problem={problem} />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
