import {useState} from 'react';
import Chart from 'react-apexcharts'

function Donut()
{
    const [state, setState] = useState({
        options: {
            labels: ['1', '2', '3', '4', '5']
        },
        series : [44, 55, 41, 17, 15]

    });
    return (
        <div className="donut">
            <Chart options={state.options} series={state.series} type="donut" width="380"/>
        </div>
    );
}

export default Donut;
