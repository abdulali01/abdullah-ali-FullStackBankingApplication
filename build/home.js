function Home() {
    const ctx = React.useContext(UserContext);
    console.log(ctx);
  
    React.useEffect(() => {
      const navCreateAccount = document.getElementById('nav-create-account');
      const navLogin = document.getElementById('nav-login');
      const navDeposit = document.getElementById('nav-deposit');
      const navWithdraw = document.getElementById('nav-withdraw');
      const navTransfer = document.getElementById('nav-transfer');
      const navBalance = document.getElementById('nav-balance');
      const navAllData = document.getElementById('nav-allData');
      const navLogout = document.getElementById('nav-logout');
  
      navCreateAccount.style.display = "block";
      navLogin.style.display = "block";
      navDeposit.style.display = "none";
      navWithdraw.style.display = "none";
      navTransfer.style.display = "none";
      navBalance.style.display = "none";
      navAllData.style.display = "none";
      navLogout.style.display = "none";
      },[])
   
  
    return (
      <>
      
      <Card
        txtcolor="black"
        bgcolor="light"
        header="Bank Landing Page"
        title="Welcome to your bank!"
        text="We are here to server you!  Please Login or create a new account to use our features."
        body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
      />
      <img src="links2.jpg" className="img-fluid" alt="Responsive image" />
      </>
    );
  }