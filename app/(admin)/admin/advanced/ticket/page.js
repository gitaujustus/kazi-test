import NavPills from "@/components/advancedNavigation";
import TicketTabs from "@/components/admin/advanced/ticket/ticketTabs";
import { IoTicket } from "react-icons/io5";




const Ticket = () => {
    let unresolvedTickets = 20;
    let resolvedTickets = 20;

    return ( 
        <main className="bg-[#c7c7c7] dark:bg-dark-background">
            <section className="max-w-4xl mx-auto px-4 py-8">
                {/* Navigation pills */}
                <NavPills />

                {/* Common width class for all outer divs */}
                <div className="mt-8">

                    {/* Row 1 */}
                    <div className="bg-blue-theme text-white rounded-lg p-4 mb-8 px-4">
                        <h1 className="text-center text-white font-semibold">Tickets</h1>
                        <div className="flex justify-between items-start my-4">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p>Unresolved Tickets</p>
                                <p className="text-red-700 font-bold">{unresolvedTickets}</p>
                            </div>
                            <div>
                                <IoTicket size={30} />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p>Resolved Tickets</p>
                                <p className="text-green-700 font-bold">{unresolvedTickets}</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="bg-blue-theme text-white rounded-lg p-4 mb-8 flex flex-col gap-4 px-16">
                        <div className="flex justify-between">
                        <h1 className="text-center text-white font-semibold">Total Unassigned Tickets</h1>
                        <IoTicket size={30} />
                        </div>
                        <p className="text-red-700 font-bold">{unresolvedTickets}</p>
                    </div>

                    <TicketTabs />

                </div>
            </section>
        </main>
    );
}
 
export default Ticket;
