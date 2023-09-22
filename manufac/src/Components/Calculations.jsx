import React, { useState, useEffect } from "react";
import Flavanoid from "./Flavanoid";
import Gamma from "./Gamma";

function Calculations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const URL = "https://650bf03047af3fd22f66be58.mockapi.io/manufac";
      const response = await fetch(URL);
      const finaldata = await response.json();
      // console.log(finaldata)
      setData(finaldata);
    };
    getData();
  }, []);

  // Function to calculate the mean
  function calculateMean(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((total, value) => total + value, 0);
    return sum / arr.length;
  }

  // Function to calculate the median
  function calculateMedian(arr) {
    if (arr.length === 0) return 0;
    const sortedArr = [...arr].sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 1) {
      return sortedArr[middle];
    } else {
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    }
  }

  // Function to calculate the mode
  function calculateMode(arr) {
    if (arr.length === 0) return [];
    const frequencyMap = new Map();
    arr.forEach((value) => {
      if (frequencyMap.has(value)) {
        frequencyMap.set(value, frequencyMap.get(value) + 1);
      } else {
        frequencyMap.set(value, 1);
      }
    });
    let mode = [];
    let maxFrequency = 0;
    frequencyMap.forEach((frequency, value) => {
      if (frequency > maxFrequency) {
        mode = [value];
        maxFrequency = frequency;
      } else if (frequency === maxFrequency) {
        mode.push(value);
      }
    });
    return mode;
  }
  // Group data by "Alcohol" key
  const groupedData = {};
  data.forEach((entry) => {
    const alcoholKey = entry["Alcohol"];
    const flavanoidValue = entry["Flavanoids"];
    if (!groupedData[alcoholKey]) {
      groupedData[alcoholKey] = [];
    }
    groupedData[alcoholKey].push(flavanoidValue);
  });

  const gammaData = {};
  data.forEach((entry) => {
    const alcoholKey = entry["Alcohol"];
    const gammaKey = parseFloat(
      ((entry["Ash"] * entry["Hue"]) / entry["Magnesium"]).toFixed(3)
    );

    if (!gammaData[alcoholKey]) {
      gammaData[alcoholKey] = [];
    }
    gammaData[alcoholKey].push(gammaKey);
  });

  return (
    <div className="">
      <Flavanoid groupedData={groupedData} calculateMean={calculateMean}  calculateMedian={calculateMedian} calculateMode={calculateMode} />      
      <Gamma gammaData={gammaData} calculateMean={calculateMean}  calculateMedian={calculateMedian} calculateMode={calculateMode} />
        
    </div>
  );
}

export default Calculations;
