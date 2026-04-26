const AulaSecreta = () => {
  return (
    <iframe
      src={`/webinar/index.html?v=${new Date().getTime()}`}
      title="Aula Secreta"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    />
  );
};

export default AulaSecreta;
