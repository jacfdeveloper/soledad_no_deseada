import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
export function Estadisticas() {

  const [usersData, setUsersData] = useState(false)
  const [labels, setLabels] = useState(null)
  const [dataPop, setDataPop] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getUserAsigned() {
      const res = await fetch(`/getUsers`)
      const usersFinded = await res.json()
      setUsersData(usersFinded)
      const localidades = usersFinded.map(element => { return element.location })
      var labelsSet = new Set(localidades)
      var dataLabels = [];
      var labelsb = []
      for await (let element of labelsSet) {
        const population = localidades.filter(x => x === element).length
        dataLabels.push(population);
        labelsb.push(element)
      }
      setLabels(labelsb)
      setDataPop(dataLabels)
  
    }
    getUserAsigned();
  }, [])

  useEffect(() => {
    if (labels) {
      const datab = {
        labels: labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: dataPop,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
      setData(datab)
    }
  },[])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: 'y',
    responsive: true,
    scales: {
      y: {
        ticks: {
            padding: 1,
            autoSkip: false,
            textStrokeWidth:1,
            beginAtZero: true,
            font: {
              size: 8
          }
        }
      },
      x:{
        ticks:{
          display:true,
          autoSkip:false,
          stepSize: 1
        }
      }
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    }
  };

  const datab = {
    labels,
    datasets: [
      {
        label: 'Usuarios por población',
        data: dataPop,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  if (datab) {
    return <Bar options={options} data={datab} />;
  }
}
