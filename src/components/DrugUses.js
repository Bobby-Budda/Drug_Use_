import React from 'react';
import {Line} from 'react-chartjs-2'; 

const DrugUses = () => {
    const[chartDate, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['alcohol-use', 'marijuana-use', 'cocaine-use', 'crack-use', 'heroin-use']
            datasets: [
                {
                    label: 'level of thiccness'
                    data: [83.1, 24.9, 4.0, 0.5, 0.7]
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])
    return(
        <div className="App">
            <h1>DrugUses</h1>          // Überschrift? 
        </div>
    )
}

export default DrugUses