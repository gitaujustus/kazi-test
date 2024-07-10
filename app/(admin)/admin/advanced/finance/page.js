// "use client"
import NavPills from "@/components/advancedNavigation";
import { FaFileInvoice } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import FinanceTabs from "@/components/admin/advanced/finance/financeTabs";




const Finance = () => {
    let paidInvoices = 20;
    let dueInvoices = 20;
    let totalPendingAmount = 13000.00;
    let totalExpenses = 0.00;
    let totalEarnings = 0.00;

    return ( 
        <main className="bg-[#c7c7c7] dark:bg-dark-background">
            <section className="max-w-4xl mx-auto px-4 py-8">
                {/* Navigation pills */}
                <NavPills />

                {/* Common width class for all outer divs */}
                <div className="mt-8">

                    {/* Row 1 */}
                    <div className="bg-blue-theme text-white rounded-lg p-4 mb-8 px-4">
                        <h1 className="text-center text-white font-semibold">Invoices</h1>
                        <div className="flex justify-between items-start my-4">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p>Paid Ivoices</p>
                                <p className="text-green-700 font-bold">{paidInvoices}</p>
                            </div>
                            <div>
                                <FaFileInvoice size={30} />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p>Due Invoices</p>
                                <p className="text-red-700 font-bold">{dueInvoices}</p>
                            </div>
                        </div>
                    </div>

                     {/* Row 2 */}
                     <div className="bg-blue-theme text-white rounded-lg p-4 mb-8 flex flex-col gap-4 px-16">
                        <div className="flex justify-between">
                        <h1 className="text-center text-white font-semibold">Total Pending Amount</h1>
                        <IoTicket size={30} />
                        </div>
                        <p className="text-red-700 font-bold">Ksh {totalPendingAmount}</p>
                    </div>

                    {/* Row 3 */}
                    <div className="bg-blue-theme text-white rounded-lg p-4 mb-8 px-4">
                        <h1 className="text-center text-white font-semibold">Finance</h1>
                        <div className="flex justify-between items-start my-4">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p>Total Expenses</p>
                                <p className="text-green-700 font-bold">Ksh {totalExpenses}</p>
                            </div>
                            <div>
                                <FaFileInvoice size={30} />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p>Total Earnings</p>
                                <p className="text-green-700 font-bold">Ksh {totalEarnings}</p>
                            </div>
                        </div>
                    </div>

                   

                    <FinanceTabs />

                </div>
            </section>
        </main>
    );
}
 
export default Finance;
