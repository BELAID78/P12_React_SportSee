import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, Bar } from "recharts"

/**
 * render the custom tool tip design
 * 
 * @param {object} 
 * @returns {JSX}
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const weight = payload[0],
            calory = payload[1];

        return (
            <div className="bar-tool-tip-container">
                <p>{weight.value} {weight.name}</p>
                <p>{calory.value} {calory.name}</p>
            </div>
        )
    }
}

/**
 * render the legend custom design
 * 
 * @returns {JSX}
 */
const renderLegend = () => {
    return (
      <ul className="bar-chart-lengend">
        <li key={Math.random()}>Activité quotidienne</li>
        <li key={Math.random()} className='bar-chart-lengend-label'>
            <span>Poids (kg)</span>
            <span>Calories brûlées (kCal)</span>
        </li>
      </ul>
    );
}

function UserActivityChart({data}) {
  return (
    <div>
        <BarChart width={835} height={320} data={data}>
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis axisLine={false} />
            <YAxis axisLine={false} orientation='right' />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} verticalAlign="top" align='right' height={80} iconType='circle'/>
            <Bar dataKey="kilogram" barSize={15}  fill="#282D30" />
            <Bar dataKey="calories" barSize={15} fill="#E60000" />
        </BarChart>
    </div>
  )
}

export default UserActivityChart