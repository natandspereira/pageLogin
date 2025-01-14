import React, { useState, useEffect } from 'react';

function App() {
  // Estado para armazenar a cor de fundo
  const [backgroundColor, setBackgroundColor] = useState('bg-primary');

  // Função para mudar a cor de fundo
  const changeBackgroundColor = () => {
    const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  // Usando useEffect para configurar o intervalo
  useEffect(() => {
    // Mudar a cor de fundo a cada 30 segundos (30000ms)
    const interval = setInterval(changeBackgroundColor, 30000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  const MyStyle = {
    height: '300px',
    width: '300px',
  };

  return (
    <>
      <div className={`vh-100 d-flex justify-content-center align-items-center ${backgroundColor}`}>
        <div className="text-white border border-2 rounded-3 d-grid justify-content-center align-items-center" style={MyStyle}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>

          <div>
            <label htmlFor="inputPassword5" className="form-label">
              Password
            </label>
            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-light">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
