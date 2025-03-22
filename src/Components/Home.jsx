import AdminDashboard from "./Admin";
import Competitions from "./Competitions";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Profile from "./Profile";
import TransactionDetails from "./TransactionDetails";

export default function Home() {
  const linkItems = [{name: "Home", href: "#home"}, {name: "Transactions", href: "#transactions"}, 
    {name: "Competitions", href: "#competitions"}, {name: "About", href: "#about"}]
  
  return(
    <div className="font-montserrat">
      <Navbar 
        linkItems={linkItems}
        isLoggedIn={true}
      />
      <Hero />
      <TransactionDetails />
      <Competitions />
      <ContactUs />
    </div>
  );
}
  