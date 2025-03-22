import { Banknote, DollarSign, FileText, Gift, Lightbulb, School } from "lucide-react";
import { NeonIcon } from "./IconEnhancer";
import { BGIconCard, IconCard } from "./Cards";



export default function TransactionDetails() {


    return (
        <main>
            <div className="w-full flex flex-row flex-wrap justify-center mt-20">
                <IconCard 
                    icon={NeonIcon}
                    iconControls={{icon: Banknote, color: 'var(--color-primary)'}}

                    title='Check Balance'
                    desc={`The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.`}
                    actionName='Proceed'
                />

                <IconCard 
                    icon={NeonIcon}
                    iconControls={{icon: FileText, color: 'var(--color-primary)'}}

                    title='Bank Statement'
                    desc={`request detailed transcactions made`}
                    actionName='Check'
                />

                <IconCard 
                    icon={NeonIcon}
                    iconControls={{icon: Gift, color: 'var(--color-primary)'}}

                    title='Bonuses'
                    desc={`request detailed transcactions made`}
                    actionName='Claim'
                />
                
            </div>

            <div className="flex flex-row flex-wrap mt-30 justify-center items-center">
                <BGIconCard 
                    icon={NeonIcon}
                    iconControls={{icon: DollarSign, size: 200, color: 'var(--color-primary)'}}

                    title='Send Money'
                    desc={`Transfer funds to other bank accounts, mobile money wallets or make digital money transfer (crypto currency)`}
                    actionName='Send'
                />
                <BGIconCard 
                    icon={NeonIcon}
                    iconControls={{icon: Lightbulb, size: 200, color: 'var(--color-primary)'}}

                    title='Payments'
                    desc={`Pay your bills here. You can pay for electricity, water, internet, medical cover and tv subscriptions.`}
                    actionName='Pay'
                />
                <BGIconCard 
                    icon={NeonIcon}
                    iconControls={{icon: School, size: 200, color: 'var(--color-primary)'}}

                    title='Tuition Payment'
                    desc={`You can now pay tuition for different universities and secondary schools across Malawi through this interface`}
                    actionName='Pay Fees'
                />
            </div>

        </main>
    );
}