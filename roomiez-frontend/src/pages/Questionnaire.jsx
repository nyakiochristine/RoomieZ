import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import TipBox from "../components/TipBox";

const questions = [

  {
    id: "cleanliness",
    title: "How do you handle cleanliness?",
    subtitle: "Be honest! Cleanliness is a major compatibility factor.",
    tip: "Different cleanliness standards are one of the most common causes of roommate conflicts.",
    options: [
      { value: "neat-freak", title: "Neat Freak", desc: "Everything must stay spotless." },
      { value: "moderate", title: "Moderately Clean", desc: "I keep things tidy most of the time." },
      { value: "organized-chaos", title: "Organized Chaos", desc: "Messy but I know where things are." }
    ]
  },

  {
    id: "sleepSchedule",
    title: "What is your sleep schedule?",
    subtitle: "Matching schedules reduces conflicts.",
    tip: "Roommates with different sleep patterns can unintentionally disturb each other.",
    options: [
      { value: "early-bird", title: "Early Bird", desc: "Sleep early, wake early." },
      { value: "night-owl", title: "Night Owl", desc: "Stay up late most nights." },
      { value: "flexible", title: "Flexible", desc: "My schedule changes often." }
    ]
  },

  {
    id: "socialLevel",
    title: "How often do you bring guests over?",
    subtitle: "Guest frequency affects roommate comfort.",
    tip: "Frequent visitors may impact privacy and shared space.",
    options: [
      { value: "frequent-guests", title: "Frequent Guests", desc: "Friends visit often." },
      { value: "occasional", title: "Occasional Guests", desc: "Sometimes." },
      { value: "private-sanctuary", title: "Private Space", desc: "Rarely invite people over." }
    ]
  },

  {
    id: "noiseTolerance",
    title: "What is your noise tolerance?",
    subtitle: "Noise tolerance affects living comfort.",
    tip: "Different noise tolerances can lead to frustration between roommates.",
    options: [
      { value: "silence-needed", title: "Silence Needed", desc: "I need quiet to focus." },
      { value: "moderate-noise", title: "Moderate Noise", desc: "Some noise is okay." },
      { value: "can-sleep-anywhere", title: "High Tolerance", desc: "Noise doesn't bother me." }
    ]
  },

  {
    id: "studyEnvironment",
    title: "Where do you usually study?",
    subtitle: "Study habits affect room usage.",
    tip: "Some roommates need quiet study spaces while others study outside the room.",
    options: [
      { value: "study-at-home", title: "Study at Home", desc: "I prefer studying in my room." },
      { value: "study-at-library", title: "Library", desc: "I usually go to the library." },
      { value: "mix", title: "Mix", desc: "Depends on the day." }
    ]
  },

  {
    id: "sharingPolicy",
    title: "How do you feel about sharing items?",
    subtitle: "Sharing policies can prevent conflicts.",
    tip: "Clear boundaries about sharing help avoid misunderstandings.",
    options: [
      { value: "share-everything", title: "Share Everything", desc: "Feel free to use my things." },
      { value: "ask-first", title: "Ask First", desc: "Just ask before using." },
      { value: "do-not-share", title: "Do Not Share", desc: "I prefer personal items." }
    ]
  },

  {
    id: "smoking",
    title: "Do you smoke or vape?",
    subtitle: "Important for roommate comfort.",
    tip: "Smoking preferences strongly influence compatibility.",
    options: [
      { value: true, title: "Yes", desc: "I smoke or vape." },
      { value: false, title: "No", desc: "I do not smoke." }
    ]
  },

  {
    id: "introversion",
    title: "How would you describe your personality?",
    subtitle: "Personality compatibility matters.",
    tip: "Matching personality types helps improve communication and living harmony.",
    options: [
      { value: "introverted", title: "Introverted", desc: "I enjoy quiet time alone." },
      { value: "extroverted", title: "Extroverted", desc: "I enjoy social interaction." },
      { value: "ambiverted", title: "Ambiverted", desc: "A balance of both." }
    ]
  }

];

const Questionnaire = () => {

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[step];
  const selected = answers[currentQuestion.id];

  const handleSelect = value => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value
    });
  };

  const handleNext = () => {
    if (!selected) return;
    if (step < questions.length - 1) setStep(step + 1);
    else console.log("Submitting answers:", answers);
  };

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  useEffect(() => {

    const handleKey = e => {

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  });

  return (

    <div style={{ background: "#FFFDF5", minHeight: "100vh" }}>

      <Navbar />

      <div style={{ maxWidth: "800px", margin: "40px auto" }}>

        <ProgressBar step={step + 1} total={questions.length} />

        <QuestionCard
          question={currentQuestion}
          selected={selected}
          setSelected={handleSelect}
        />

        <div className="button-row">

          <button onClick={handlePrevious} disabled={step === 0}>
            Previous
          </button>

          <button
            onClick={handleNext}
            className="primary-button"
            disabled={!selected}
          >

            {step === questions.length - 1 ? "Finish" : "Next Question →"}

          </button>

        </div>

        <TipBox tip={currentQuestion.tip} />

      </div>

    </div>

  );

};

export default Questionnaire;