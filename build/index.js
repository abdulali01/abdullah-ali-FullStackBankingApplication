function App() {
    return (
      <HashRouter>
        <NavBar />
        <UserContext.Provider
          value= {{user: "test", email: "test@test.test"}}
        >
          <div className="main-content">
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/transfer/" component={Transfer} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </HashRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);