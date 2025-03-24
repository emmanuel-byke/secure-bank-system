import Competitions from "./Competitions";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TransactionDetails from "./TransactionDetails";

export default function Home() {
  const linkItems = [{name: "Home", href: "#home"}, {name: "Transactions", href: "#transactions"}, 
    {name: "Competitions", href: "#competitions"}, {name: "About", href: "#about"}];  
  
  return(
    <div className="font-montserrat">
      <Navbar 
        linkItems={linkItems}
      />
      <Hero />
      <TransactionDetails />
      <Competitions />
      <ContactUs />
    </div>
  );
}
  