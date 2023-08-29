
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { questions, imgs } from "../data"
import { Question } from "../components/Question"
// mezclar las preguntas de cada categoria y reducirla a 5
const shuffleArray = array => {
	const newArray = array.sort(() => Math.random() - 0.5);
	return newArray.slice(0, 5);
};

export function CategoryPage ()  {
    //aca vamos a leer el parametro de la URL
    const { category } = useParams()
    const [imgCategory] = imgs.filter(
		img => img === `/assets/${category.toLowerCase()}.webp`
    );
    const [questionsFiltered, setQuestionsFiltered] = useState(
        questions.filter(question => question.category === category)
    )
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [activeQuiz, setActiveQuiz] = useState(false)

    useEffect(() => {
        const newQuestions = shuffleArray(questionsFiltered)
        setQuestionsFiltered(newQuestions)
    }, [])

    return (
        <div 
            className="container flex flex-col items-center justify-center gap-10" 
            style={{ height: 'calc(100vh - 10rem)'}}
        > 
        {activeQuiz ? (<Question 
            filteredQuestion={questionsFiltered[indexQuestion]}
            setIndexQuestion={setIndexQuestion}
            indexQuestion={indexQuestion}
            questionsFiltered={questionsFiltered} 
            setActiveQuiz={setActiveQuiz}
            />) : 
            (<>
                <div className="flex flex-col text-center gap-5">
                    <h1 className="text-3xl text-teal-900 text-center font-bold">
                        {category}
                    </h1>
                    <div className="flex justify-center items-center">
                        <img 
                            src={imgCategory}
                            alt={category}
                            className='w-72 animate-bounce'

                            // className="w-22 h-52" 
                        />
                    </div>
                </div>
                    <button 
                        className="text-slate-950  bg-blue-200 py-2 rounded-lg font-bold px-5  hover:bg-blue-400 hover:text-black-400 transition-all"
                        onClick={() => setActiveQuiz(true)}>
                            Iniciar Quiz
                    </button>
                
            </>)}
    </div>
  )
}
