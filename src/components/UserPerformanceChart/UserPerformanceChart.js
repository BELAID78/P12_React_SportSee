import { useContext } from "react"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts"
import { UserPerformanceContext } from "../../pages/Profile"
import Spinner from "../Spinner/Spinner";

function UserPerformanceChart() {
    const userPerformance = useContext(UserPerformanceContext);

    if(userPerformance.length === 0) {
        return <Spinner />
    }

    return (
        <div className="user-chart-performance">
            <ResponsiveContainer height='100%'>
                <RadarChart data={userPerformance}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserPerformanceChart