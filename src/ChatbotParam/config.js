import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../Components/Options/Options";
import Quiz from "../Components/Quiz/Quiz";

const config = {
  botName: "SciAstraBot",
  initialMessages: [
    createChatBotMessage(`Hello. What kind of query do you have?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "SciAstra",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is SciAstra?",
            answer:
              "SciAstra is a science communication platform dedicated to making high-quality scientific content accessible and engaging for everyone. We create videos, articles, and other forms of media on a wide range of scientific topics, from astrophysics to biology to environmental science.",
            id: 1,
          },
          {
            question: "Who founded SciAstra?",
            answer:
              "SciAstra was founded in 2015 by Abhijit Nair, a physicist and science communicator with a passion for making science accessible to everyone.",
            id: 2,
          },
          {
            question: "What kind of content does SciAstra produce?",
            answer:
              `We produce a variety of content, including:
              Explainer videos: Animated videos that break down complex scientific concepts into bite-sized, easy-to-understand chunks.
              Articles: In-depth written pieces exploring scientific topics in more detail.
              Podcasts: Interviews with scientists and discussions on current scientific news and events.
              Live streams: Interactive Q&A sessions and other live events with scientists.`,
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "MissionImpact",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is SciAstra's mission?",
            answer:
              "Our mission is to inspire a passion for science in people of all ages and backgrounds. We believe that everyone deserves access to high-quality scientific information, and we strive to make it informative, engaging, and enjoyable.",
            id: 1,
          },
          {
            question: "How does SciAstra make a difference?",
            answer:
              `We hope to:
              Spark curiosity: Ignite a love for science in our viewers and readers.
              Combat misinformation: Provide accurate and reliable scientific information to counter misinformation and pseudoscience.
              Empower people: Equip individuals with the knowledge and understanding to make informed decisions about the world around them.`,
            id: 2,
          },
          {
            question: "What are some of SciAstra's achievements?",
            answer:
              `We have reached millions of people around the world with our content. We have also received numerous awards and accolades for our work, including:
              The YouTube Silver Play Button
              The Webby Award for Science & Education
              The American Chemical Society (ACS) James T. Grady - James H. Stack Public Outreach Award`,
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "CommunityFuture",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "How can I get involved with SciAstra?",
            answer:
              `There are many ways to get involved! You can:
              Subscribe to our YouTube channel and social media pages.
              Support us on Patreon or through one-time donations.
              Create your own science content and share it with us!`,
            id: 1,
          },
          {
            question: "What are some of SciAstra's future plans?",
            answer:
              `We are always looking for new ways to expand our reach and impact. We hope to:
              Continue to create high-quality scientific content in new and innovative formats.
              Partner with other science communicators and organizations to reach a wider audience.
              Develop educational resources for schools and classrooms.`,
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "FunFacts",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: `What is the meaning of the name "SciAstra"?`,
            answer:
              `SciAstra is a combination of the words "science" and "astra" (meaning "star" in Sanskrit). It represents our mission to illuminate the world with the light of science.`,
            id: 1,
          },
          {
            question: "What is SciAstra's mascot?",
            answer:
              "Our mascot is a cute little tardigrade (water bear)! These incredibly resilient creatures represent the tenacity and wonder of science.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "Services",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What services does SciAstra offer specifically for students?",
            answer:
              `We provide several resources to help students navigate the world of scientific education and careers. These include:
              Exam preparation guidance: We offer articles, videos, and live sessions on preparing for competitive exams like IAT, IISER, NISER, CMI, and IACS.
              College & course exploration: We provide information on various science colleges and courses, helping you explore and identify the best fit for your interests and aspirations.
              Career advice: We interview scientists and professionals from various fields to offer insights into different career paths and skills needed for success.
              Learning resources: We create engaging content on diverse scientific topics, helping you solidify your understanding and discover new areas of interest.`,
            id: 1,
          },
          {
            question: "What are some of SciAstra's achievements in aiding students?",
            answer:
              `We've helped numerous students achieve their academic goals, including:
              Securing admission to top science colleges through exam preparation guidance.
              Finding fulfilling careers in diverse scientific fields through informative career talks.
              Discovering new areas of passion and interest through our wide range of content.`,
            id: 2,
          },
          {
            question: "Which colleges can I target with my academic goals?",
            answer:
              `Your target colleges should depend on your academic strengths, interests, and desired field of study. SciAstra offers information on various institutions like IISERs, NISERs, CMI, IACS, and other top science colleges. Explore our articles, college spotlights, and student interviews to learn more about their programs, admission requirements, and campus life.`,
            id: 3,
          },
          {
            question: "Which exams should I prepare for to achieve my academic goals?",
            answer:
              ` The relevant exam depends on your desired college and program. SciAstra offers extensive guidance for competitive exams like IAT, IISER Aptitude Test, JEST, JEE Main & Advanced, NEET, and others. We provide study materials, tips & tricks, and strategies to maximize your score and secure admission to your dream college.
              `,
            id: 4,
          },
          {
            question: "What can I learn through SciAstra's resources?",
            answer:
              `SciAstra caters to a wide range of learning styles and interests. You can delve into:
              Fundamental scientific concepts through our explainer videos.
              Advanced topics and recent discoveries through in-depth articles and podcasts.
              Practical applications of science through interviews with researchers and professionals.
              The human side of science through engaging stories and behind-the-scenes glimpses.`,
            id: 5,
          },
          {
            question: "What are the typical fees or patterns of courses offered through SciAstra?",
            answer:
              "While SciAstra primarily focuses on free educational content, some additional services such as personalized mentoring or tutoring programs might involve fees. The course patterns also vary depending on the specific content and format. Be sure to check individual resources for detailed information on fees and course structure.",
            id: 6,
          },
          {
            question: "How can I stay updated on SciAstra's latest resources and offerings?",
            answer:
              " Subscribe to our YouTube channel, follow us on social media, and visit our website regularly for the latest updates. We also recommend joining our student community forums to connect with like-minded individuals and stay informed about upcoming events and opportunities.",
            id: 7,
          },
        ],
      },
    },
  ],
};

export default config;
