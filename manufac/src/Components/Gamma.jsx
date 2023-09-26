import React from 'react'

function Gamma({calculateMode,calculateMedian,calculateMean,gammaData}) {
  return (
    <div>
        <div className='gammatablecontainer'>
    <h1 className="tableh1">Gamma Table</h1>
    <table>
      <thead>
        <tr>
          <th>Measure </th>
          {Object.keys(gammaData).map((item, index) => (
            <th>Class {index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Gamma Mean</th>
          {Object.values(gammaData).map((val) => (
            <td>{calculateMean(val).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <th>Gamma Median</th>
          {Object.values(gammaData).map((val) => (
            <td>{calculateMedian(val).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <th>Gamma Mode</th>
          {Object.values(gammaData).map((val) => (
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

export default Gamma