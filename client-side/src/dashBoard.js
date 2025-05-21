import React from 'react';

export default function Dashboard() {


  return (
    <div style={{ padding: '20px' }}>
      <h2>Matched Hospitals (Cardiology)</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Hospital Name</th>
            <th>Contact No</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hospital.hospital_name}</td>
              <td>
                <a href={`tel:${hospital.contact_number}`}>
                  {hospital.contact_number}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
