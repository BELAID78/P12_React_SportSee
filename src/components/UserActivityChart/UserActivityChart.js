import { useContext } from "react";
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, Bar, ResponsiveContainer } from "recharts"
import { UserActivityContext } from "../../pages/Profile";

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

function UserActivityChart() {

    const data = useContext(UserActivityContext);

    return (
        <div className="user-activity-chart">
            <ResponsiveContainer height='100%'>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis axisLine={false} />
                    <YAxis axisLine={false} orientation='right' />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={renderLegend} verticalAlign="top" align='right' height={80} iconType='circle'/>
                    <Bar radius={[10, 10, 0, 0]} dataKey="kilogram" barSize={8}  fill="#282D30" />
                    <Bar radius={[10, 10, 0, 0]} dataKey="calories" barSize={8} fill="#E60000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserActivityChart