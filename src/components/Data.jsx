import React from 'react'

const Data = (props) => {
    return (
        <div className='container pt-5'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">City</th>
                        <th scope="col">Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((e)=>{
                        return(
                            <tr key={e.id}>
                                <th>{e.name}</th>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                                <td>{e.website}</td>
                                <td>{e.address.city}</td>
                                <td>{e.address.zipcode}</td>
                            </tr>
                    )})}
                </tbody>
            </table>

        </div>
    )
}

export default Data