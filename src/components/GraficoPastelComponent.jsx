import { useState, useRef } from "react";
import { AgChartsReact } from "ag-charts-react";



export const GraficoPastelComponent = ({ data = [] }) => {

    const chartRef = useRef(null);

    const [options, setOptions] = useState({
        theme: "ag-sheets",

        data,
        series: [
            {
                type: "pie",
                angleKey: "value",
                calloutLabelKey: "label",
            },
        ],
    });



    return (
        <div className="wrapper">
            <AgChartsReact ref={chartRef} options={options} />
        </div>
    );
};




// [
//     { label: "Ubuntu", value: 25 },
//     { label: "Fedora", value: 19 },
//     { label: "CentOS", value: 17 },
// ]

