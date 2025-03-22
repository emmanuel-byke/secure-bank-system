import { InfoCard } from "./Cards";


export default function Competitions() {


    return (
        <section className="flex flex-row flex-wrap justify-around items-center mt-20" id="competitions">
            <InfoCard 
                title='Mazda Demio Contest'
                desc={`Get ready for an exciting opportunity! All account owners are invited to take part in an incredible competition 
                    where one lucky participant will drive away with the ultimate reward—a brand-new Mazda Demio. Don't miss this chance 
                    to make your dreams come true. Simply maintain an active account and pay K1,000, and you could be the fortunate 
                    winner of this fantastic grand prize`}
                actionName='Pay K1,000'
            />

            <InfoCard 
                title='Payout Challenge'
                desc={`Unlock your chance to win every week with the Prosperity Payout Challenge. Whether you’re a loyal client or a 
                    new face, this is your opportunity to grow with us!. Each week, participants will face a fun, engaging challenge—ranging 
                    from financial literacy quizzes to creative problem-solving tasks.`}
                actionName='Join'
            />
        </section>
    );
}