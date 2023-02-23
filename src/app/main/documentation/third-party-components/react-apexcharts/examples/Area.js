import Chart from 'react-apexcharts'
import {useState} from 'react';

function Area()
{
    const [state, setState] = useState({
        options: {
            xaxis: {
                categories: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه', 'یکشنبه']
            }
        },
        series : [
            {
                name: 'سلسله-1',
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }, {
                name: 'سلسله-2',
                data: [23, 12, 54, 61, 32, 56, 81, 19]
            }
        ],
    })

    return (
        <div className="area">
            <Chart options={state.options} series={state.series} type="area" width="500"/>
        </div>
    );
}

export default Area;
