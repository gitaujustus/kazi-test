const ProposalOverview = () => {
    return ( 
        <div className="p-4 flex justify-center items-center h-64 bg-gray-100 rounded-lg">
        <div className="text-center">
            <div className="bg-gray-300 rounded-full p-4 inline-block mb-2">
                <svg className="w-8 h-8 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            </div>
            <p className="text-gray-600 font-medium">Not Enough Data</p>
        </div>
    </div>
     );
}
 
export default ProposalOverview;