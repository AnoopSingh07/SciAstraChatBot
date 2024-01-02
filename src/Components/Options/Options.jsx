import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "SciAstra",
      handler: props.actionProvider.handleSciAstraQuiz,
      id: 1,
    },
    {
      text: "Mission/Impact",
      handler: props.actionProvider.handleMissionImpactQuiz,
      id: 2,
    },
    { text: "Community/Future", 
      handler: props.actionProvider.handleCommunityFutureQuiz,
      id: 3 
    },
    { text: "Fun Facts", 
      handler: props.actionProvider.handleFunFactsQuiz,
      id: 4
    },
    { text: "Services", 
      handler: props.actionProvider.handleServicesQuiz,
      id: 5
    },
  ];
  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));
  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
