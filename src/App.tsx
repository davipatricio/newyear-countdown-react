import Title from './components/Title'
import Counter from './components/Counter'

import useCountdown from './hooks/useCountdown'


const newYear = new Date().getFullYear() + 1

function App() {
  const [day, hour, minute, second] = useCountdown(`${newYear}-01-01 00:00:00`)

  return (
    <div className={`App flex justify-center items-center min-h-screen bg-[cover] bg-center bg-[url('./assets/Fireworks.jpg')]`}>
      <div className="container min-w-[50%] min-h-[300px] p-8 rounded-2xl bg-white/[0.8]">
        <Title title={`Contagem regressiva para ${newYear}`} />
        <div className="countdown-container flex justify-center items-center h-[200px] gap-8">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )

}

export default App
