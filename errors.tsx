// TO CHECK

const Layout =
  (Component) =>
  ({ ...props }) =>
    (
      <div className='layout'>
        <h1>123</h1>
        <div className='container'>
          <h2>456</h2>
          <div className='main-container'>
            <Component {...props} />
          </div>
        </div>
      </div>
    );
