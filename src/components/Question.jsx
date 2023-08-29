/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"

import { Results } from './Results';

export const Question = ({
    filteredQuestion,
    questionsFiltered,
    indexQuestion,
    setIndexQuestion,
    setActiveQuiz
    }) => {
    
    // definiremos las posibles respuestas y como mostrarlas, ademas del score
    const [score, setScore] = useState(0)
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)
    const [answered, setAnswered] = useState(false) //boolean, nos determina si ya fue conestada la pregunta
    const [answersRandom, setAnswersRandom] = useState([]) 
    const [activeResults, setActiveResults] = useState(false)
    // const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null)
    useEffect(() => {
        const answers = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer
        ]

        setAnswersRandom(answers.sort(() => Math.random() - 0.5))
        // const correctIndex = answers.findIndex(answer => answer === filteredQuestion.correct_answer);
        // setCorrectAnswerIndex(correctIndex)
    }, [filteredQuestion])    

    //checkea si la rta es correcta o no
    const checkAnswer = (answerText, index ) => {
		if (answerText === filteredQuestion.correct_answer) {
			setScore(score + 1)
            
        }
		setSelectAnswerIndex(index);
		setAnswered(true);
	};
   
    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
        setSelectAnswerIndex(null) // debe iniciar en null xq si lo inicias en numero la rta se marca
        setAnswered(false)  
       
    }
    
    const onReset = () => {
        setScore('')
        setActiveQuiz(false)
        setIndexQuestion(0)
    }
    return(
        <>
            {activeResults ? (
                
                <Results 
                    questionsFiltered={questionsFiltered}
                    score={score}
                    onReset={onReset}
                />
            ) : (
            <div 
                className="bg-white flex flex-col md:max-xl:flex justify-between shadow-md shadow-slate-300
                    w-full md:w-[600px] h-[600px] p-4 md:p-6 lg:p-8 rounded-lg">
                
                    <div className="flex justify-between">
                        <span className="text-xl font-bold">
                                {indexQuestion + 1}/{questionsFiltered.length}
                        </span>
                        <div>
                            <span className="font-semibold"> Dificultad: </span>
                            <span className="font-bold">
                                {/* La dificukltad de la preg */}
                                {filteredQuestion.difficulty}
                            </span>
                        </div>
                    </div>
                <button 
                    className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-blue-200 hover:text-gray-900"
                    onClick={onReset}
                >
                    Reiniciar
                </button>
                <div>
                    <h1 className="font-bold">{filteredQuestion.question}</h1>
                </div>
                {/* las respuestas van aca */}
                <div className="grid grid-cols-2 gap-5">
                    {/* mapear el array de respuestas correctas e incorrects */}
                    {
                        answersRandom.map((answer, index, ) => (
                            <button 
                            className= {`border p-5 rounded-lg flex justify-center items-center transition-all hover:scale-105 ${
                                index === selectAnswerIndex && 
                                selectAnswerIndex !== null
                                 ? answer === filteredQuestion.correct_answer
                                  ? 'bg-green-500' 
                                  : 'bg-red-500' 
                                : ''
                            } ${
                                index !== selectAnswerIndex && selectAnswerIndex !== null && answer === filteredQuestion.correct_answer
                                    ? 'bg-green-500' 
                                    : ''    
                            }`}
                            key={answer}
                            onClick={() => checkAnswer(answer, index  )}
                            disabled={answered && selectAnswerIndex !== index}
                        >
                             
                            <p className= 'font-medium text-center text-sm '>
                            {answer}
                            </p>
                        </button>
                        ))
                    }
                  
                </div>
                {/* condicional para mostrar el boton de siguiente  o finalizar*/}
                {
                    indexQuestion + 1 === questionsFiltered.length ? (
                    <button 
                        className="border-2 border-blue-200 text-blue-600 rounded-md px-5 py-2 hover:bg-blue-200 hover:text-black font-medium transition-all"
                        onClick={() => {
                            setAnswered(false)
                            setActiveResults(true)
                        }}>
                            Finalizar 
                    </button>
                    ) : (
                    <button 
                        className="border-2 border-blue-200 text-blue-600 rounded-md px-5 py-2 hover:bg-blue-200 hover:text-black font-medium transition-all"
                        onClick={onNextQuestion}>
                            Siguiente Pregunta
                    </button>   
                    )
                }

             
            </div>)}
        </>
        
    )
}
