import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts"

function UserPerformanceChart({userPerformance}) {
    return (
        <div className="user-chart-performance">
            <ResponsiveContainer height={270}>
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