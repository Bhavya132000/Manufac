import React from 'react'

function Flavanoid({calculateMode,calculateMedian,calculateMean,groupedData}) {
  return (
    <div>

<div className='flavanoidtablecontainer'>
      <h1 className="tableh1">Table</h1>
      <table>
        <thead>
          <tr>
            <th>Measure </th>
            {Object.keys(groupedData).map((item, index) => (
              <th>Class {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flavanoids Mean</th>
            {Object.values(groupedData).map((val) => (
              <td>{calculateMean(val).toFixed(3)}</td>
            ))}
          </tr>

          <tr>
            <th>Flavanoids Median</th>
            {Object.values(groupedData).map((val) => (
              <td>{calculateMedian(val)}</td>
            ))}
          </tr>

          <tr>
            <th>Flavanoids Mode</th>
            {Object.values(groupedData).map((val) => (
              <td>{calculateMode(val).length > 1
                ? calculateMode(val).join(",")
                : calculateMode(val)}</td>
            ))}
          </tr>
        </tbody>
      </table>
      </div>










    </div>
  )
}

export default Flavanoid