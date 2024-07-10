import { FaDatabase } from "react-icons/fa6";
const LatestClients = () => {
    return ( 
        // <div className="text-center mx-auto bg-white rounded-lg">
            <div className="overflow-x-auto w-full bg-white">
                <table className="w-full">
                        <thead>
                            <tr className="text-sm text-blue-theme border border-gray-300">
                                <th className="p-3 text-center">Email</th>
                                <th className="p-3 text-center">Created</th>
                                <th className="p-3 text-center">Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3" className="p-8">
                                    <div className="mx-auto bg-gray-300 rounded-t-lg rounded-bl-lg w-32 h-28 p-2 flex flex-col items-center justify-center">
                                        <FaDatabase className=" text-blue-theme  m-2" size={50} />
                                        <p className="text-xs text-blue-theme ">Not Enough Data</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        // </div>
     );
}
 
export default LatestClients;