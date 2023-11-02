import React from 'react';


const AllProductManage = ({ item, handelStatusChange, handelDelete }) => {
    const { _id, fastName, lastName, phone, email, message, service_id, title, img, price, description, facility, time, status } = item || {};
    console.log(status)
    return (
        <tbody>
            <tr>
                <th>
                    <button onClick={() => handelDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded-2xl w-36 h-36">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-xl">{title}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost text-xl font-semibold text-[#444]">${price}</span>
                </td>
                <td className='text-xl font-medium text-[#2D2D2D]'>{time}</td>
                <th>
                    <select defaultValue={`${status === 'pending' ? 'pending' : "approve"}`} onChange={(e) => handelStatusChange(e.target.value, _id)} name='select' id="countries" className={`hover:bg-transparent hover:text-[#FF3811] ${status === 'pending' ? 'bg-[#FF3811]' : 'bg-[#673cff]'} border text-white font-semibold  delay-100 text-lg px-5 py-3 rounded-xl `}>
                        <option value="pending">Pending</option>
                        <option value="approve">Approved</option>
                    </select>
                </th>
            </tr>
        </tbody>
    );
};

export default AllProductManage;