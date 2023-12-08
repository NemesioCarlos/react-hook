import { useState, useEffect } from 'react';

export default function Timer() {
  // Cria uma variável de estado chamada seconds que armazena o tempo restante em segundos
  const [seconds, setSeconds] = useState(0);

  // Cria uma variável de estado chamada isRunning que indica se o timer está rodando ou não
  const [isRunning, setIsRunning] = useState(false);

  // Cria uma função que inicia ou pausa o timer
  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  // Cria uma função que atualiza o tempo restante
  const updateSeconds = () => {
    setSeconds((prev) => {
      // Se o tempo restante for zero, para o timer e retorna zero
      if (prev === 0) {
        setIsRunning(false);
        return 0;
      }
      // Senão, diminui o tempo restante em um segundo e retorna o novo valor
      return prev - 1;
    });
  };

  // Cria um efeito que roda quando o componente é montado ou quando o estado isRunning muda
  useEffect(() => {
    // Se o timer estiver rodando, cria um intervalo que chama a função updateSeconds a cada 1000 milissegundos
    if (isRunning) {
      const interval = setInterval(updateSeconds, 1000);
      // Retorna uma função que limpa o intervalo quando o efeito é desmontado
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  // Cria uma função que formata o tempo restante em minutos e segundos
  const formatTime = () => {
    // Calcula os minutos e os segundos a partir dos segundos totais
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    // Retorna uma string no formato mm:ss, adicionando um zero à esquerda se necessário
    return `${minutes.toString().padStart(2, '0')}:${secondsLeft
      .toString()
      .padStart(2, '0')}`;
  };

  // Cria uma função que lida com a mudança do campo de entrada
  const handleChange = (event) => {
    // Obtém o valor do campo de entrada em segundos
    const value = Number(event.target.value);
    // Se o valor for um número válido e não negativo, atualiza o estado seconds
    if (!isNaN(value) && value >= 0) {
      setSeconds(value);
    }
  };

  // Retorna o JSX do componente
  return (
    <div className="border  border-black grid grid-cols-1">
      <h1>Timer</h1>
      <p>{formatTime()}</p>
      <button onClick={toggleTimer} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{isRunning ? 'Pausar' : 'Iniciar'}</button>
      <input type="number" value={seconds} onChange={handleChange} className='border  border-black' />
    </div>
  );
}
