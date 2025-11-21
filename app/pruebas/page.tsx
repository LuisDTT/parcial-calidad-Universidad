const page = () => {
  const saludar = () => {
    return "Hola mundo";
  };

  return (
    <>
      <div>Esta pagina es de pruebas</div>
      <h1>{saludar()}</h1>
      <h2>{saludar()}</h2>
      <h4>{saludar()}</h4>
      <h3>{saludar()}</h3>
      <h5>{saludar()}</h5>
    </>
  );
};

export default page;
