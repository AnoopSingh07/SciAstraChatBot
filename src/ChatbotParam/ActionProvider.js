class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greet() {
      const message = this.createChatBotMessage("Hello, friend");
      this.addMessageToState(message);
    }
  
    handleSciAstraQuiz = () => {
      const message = this.createChatBotMessage(
        "Here are some of the FAQs about SciAstra!!!",
        {
          widget: "SciAstra",
        }
      );
      this.addMessageToState(message);
    };
    handleMissionImpactQuiz = () => {
      const message = this.createChatBotMessage(
        "Here are some of the FAQs about SciAstra's mission and impact!!!",        {
          widget: "MissionImpact",
        }
      );
      this.addMessageToState(message);
    };
    handleCommunityFutureQuiz = () => {
      const message = this.createChatBotMessage(
        "Here are some of the FAQs about SciAstra's community and future!!!",        {
          widget: "CommunityFuture",
        }
      );
      this.addMessageToState(message);
    };
    handleFunFactsQuiz = () => {
      const message = this.createChatBotMessage(
        "Here are some of the FAQs about SciAstra's fun facts!!!",        {
          widget: "FunFacts",
        }
      );
      this.addMessageToState(message);
    };
    handleServicesQuiz = () => {
      const message = this.createChatBotMessage(
        "Here are some of the FAQs about SciAstra's services!!!",         {
          widget: "Services",
        }
      );
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  