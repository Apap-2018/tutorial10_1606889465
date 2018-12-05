import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStaffFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaffFarmasi.map(staffFarmasi => {
                return (
                    <tr key={staffFarmasi.id}>
                        <td>{staffFarmasi.nama}</td>
                        <td>{staffFarmasi.jenis}</td>
                        <td>
                            <Link to={`/update-staff-farmasi/${staffFarmasi.id}`} className="btn btn-info">Update</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
