import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import TipBox from "../components/TipBox";

/* QUESTIONS ARRAY (must match backend schema) */
const questions = [
  {
    id: "cleanliness",
    title: "How do you handle cleanliness?",
    subtitle: "Be honest! Cleanliness is a major compatibility factor.",
    options: [
      { value: "neat-freak", title: "Neat Freak", desc: "Everything must stay spotless." },
      { value: "moderate", title: "Moderately Clean", desc: "I clean regularly." },
      { value: "organized-chaos", title: "Organized Chaos", desc: "Messy but functional." }
    ]
  },

  {
    id: "sleepSchedule",
    title: "What is your sleep schedule?",
    subtitle: "Matching schedules reduces conflicts.",
    options: [
      { value: "early-bird", title: "Early Bird", desc: "Sleep early, wake early." },
      { value: "night-owl", title: "Night Owl", desc: "Stay up late most nights." },
      { value: "flexible", title: "Flexible", desc: "Changes often." }
    ]
  },

  {
    id: "socialLevel",
    title: "How often do you bring guests over?",
    subtitle: "Some roommates prefer quiet spaces.",
    options: [
      { value: "frequent-guests", title: "Frequent Guests", desc: "Friends visit often." },
      { value: "occasional", title: "Occasional", desc: "Sometimes." },
      { value: "private-sanctuary", title: "Private Space", desc: "Rarely invite people." }
    ]
  },

  {
    id: "noiseTolerance",
    title: "What is your noise tolerance?",
    subtitle: "Noise tolerance affects living comfort.",
    options: [
      { value: "silence-needed", title: "Silence Needed", desc: "I need quiet." },
      { value: "moderate-noise", title: "Moderate Noise", desc: "Music or chatter is fine." },
      { value: "can-sleep-anywhere", title: "High Tolerance", desc: "Noise doesn't bother me." }
    ]
  },

  {
    id: "studyEnvironment",
    title: "Where do you prefer studying?",
    subtitle: "Study habits affect room usage.",
    options: [
      { value: "study-at-home", title: "In the Room", desc: "I study at home." },
      { value: "study-at-library", title: "Library", desc: "Prefer library." },
      { value: "mix", title: "Mix", desc: "Depends on mood." }
    ]
  },

  {
    id: "sharingPolicy",
    title: "How do you feel about sharing items?",
    subtitle: "Sharing policies can cause conflicts.",
    options: [
      { value: "share-everything", title: "Share Everything", desc: "Use anything you need." },
      { value: "ask-first", title: "Ask First", desc: "Just ask before using." },
      { value: "do-not-share", title: "Do Not Share", desc: "Prefer personal items." }
    ]
  },

  {
    id: "smoking",
    title: "Do you smoke or vape?",
    subtitle: "Important for roommate comfort.",
    options: [
      { value: true, title: "Yes", desc: "I smoke or vape." },
      { value: false, title: "No", desc: "I don't smoke." }
    ]
  },

  {
    id: "introversion",
    title: "How would you describe yourself?",
    subtitle: "Personality compatibility matters.",
    options: [
      { value: "introverted", title: "Introverted", desc: "Prefer quiet time." },
      { value: "extroverted", title: "Extroverted", desc: "Love social interaction." },
      { value: "ambiverted", title: "Ambiverted", desc: "Balance of both." }
    ]
  }
];

const Questionnaire = () => {

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[step];
  const previousAnswer = answers[currentQuestion.id] ?? null;

  /* API submission placeholder for Mike */
  const submitAnswers = async (data) => {
    console.log("Submitting answers:", data);

    // Mike will replace with:
    // await api.post("/profile/update", data)
  };

  const handleNext = () => {

    if (!selected) return;

    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: selected
    };

    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
      setSelected(null);
    } else {
      submitAnswers(updatedAnswers);
    }
  };

  const handlePrevious = () => {

    if (step > 0) {
      setStep(step - 1);
      setSelected(null);
    }

  };

  return (
    <div style={{ background: "#FFFDF5", minHeight: "100vh" }}>

      <Navbar />

      <div style={{ maxWidth: "800px", margin: "40px auto" }}>

        <ProgressBar step={step + 1} total={questions.length} />

        <QuestionCard
          question={currentQuestion}
          selected={selected ?? previousAnswer}
          setSelected={setSelected}
        />

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >

          <button
            onClick={handlePrevious}
            disabled={step === 0}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!selected}
            style={{
              background: "#FF6F61",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px"
            }}
          >
            {step === questions.length - 1
              ? "Finish"
              : "Next Question →"}
          </button>

        </div>

        <TipBox />

      </div>

    </div>
  );
};

export default Questionnaire;