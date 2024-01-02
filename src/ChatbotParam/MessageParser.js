class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowercase.includes("SciAstra") || lowercase.includes("sciastra")) {
        this.actionProvider.handleJavascriptQuiz();
      }
      if (lowercase.includes("Mission/Impact") || lowercase.includes("mission") || lowercase.includes("impact")) {
        this.actionProvider.handleMissionImpactQuiz();
      }
      if (lowercase.includes("Community/Future") || lowercase.includes("community") || lowercase.includes("future")) {
        this.actionProvider.handleCommunityFutureQuiz();
      }
      if (lowercase.includes("Fun Facts") || lowercase.includes("fun facts")) {
        this.actionProvider.handleFunFactsQuiz();
      }
      if (lowercase.includes("Services") || lowercase.includes("services")) {
        this.actionProvider.handleServicesQuiz();
      }
    }
  }
  export default MessageParser;
  