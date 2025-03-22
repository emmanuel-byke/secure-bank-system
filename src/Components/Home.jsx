import Competitions from "./Competitions";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Profile from "./Profile";
import TransactionDetails from "./TransactionDetails";

export default function Home() {
  const linkItems = [{name: "Home", href: "#"}, {name: "Details", href: "#"}, {name: "Payments", href: "#"}]
  
  return(
    <div className="font-montserrat">
      <Profile />
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
  