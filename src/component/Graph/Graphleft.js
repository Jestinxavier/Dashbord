import React, { useState } from 'react'
import Chart from "react-apexcharts";
function Graphleft() {
    const [first, setfirst] = useState(
      {  chart: {
        height: 80,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 23, 2]
        }
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan"
        ]
      }}
    )
   
    const latestOrders = {
        header: ["user", "total price", "date", "status"],
        body: [
          {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
          },
          {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
          },
          {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
          },
          {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
          },
          {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
          }
        ]
      };

      const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [48, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    },

  ],
  options: {
    chart: {
      background: "white"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    },
    legend: {
      position: "bottom"
    },
    grid: {
      show: false
    }
  }
};

const topCustomers = {
  head: ["user", "spending"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
};     
      
      
      
     
  return (
    <div> 
        
            <Chart
            style={{    width: 200,
                marginTop:40,
                height: 108}}
                  options={chartOptions.options}
                  series={first.series}
                  type="line"
                  height="100%"
                  className="dashboard__first__right__card__area__content__graphic"
                 
                />
    </div>
        
  )
}

export default Graphleft