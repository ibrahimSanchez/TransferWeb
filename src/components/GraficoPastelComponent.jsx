import { useState } from "react";
import { AgChartsReact } from "ag-charts-react";



export const GraficoPastelComponent = ({ data = [] }) => {

    // console.log(data)


    const [options, setOptions] = useState({
        theme: "ag-sheets",

        data,
        series: [
            {
                type: "pie",
                angleKey: "amount",
                calloutLabelKey: "asset",
                sectorLabelKey: "amount",
                fills: ['#dc3545', '#198754', '#0dcaf0'],
                sectorLabel: {
                    color: "white",
                    fontWeight: "bold",
                    formatter: ({ value }) => `$${(value).toFixed(0)}`,
                },
            },
        ],
    });


    return (
        // <div className="wrapper">
        // </div>
            <AgChartsReact options={options} />
    );
};




// [
//     { label: "Ubuntu", value: 25 },
//     { label: "Fedora", value: 19 },
//     { label: "CentOS", value: 17 },
// ]

