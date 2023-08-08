const problemComp = ({ problem }) => {
  return (
    <div className="problemComp">
      <div className="problemTitle">
        <strong>{problem.problemTitle}</strong>
      </div>

      <div className={problem.difficulty}>
        <strong>{problem.difficulty}</strong>
      </div>
    </div>
  );
};

export default problemComp;
