import { PieChart, Pie, ResponsiveContainer } from "recharts"

const renderLegend = (score) => {
    return (
      <div className="user-chart-score-legend">
        <p>{score[0].name}</p>
        <p>de votre objectif</p>
      </div>
    );
}

function UserScoreChart({score}) {
    return (
        <div className="user-chart-score">
            <p className="chart-legend">Score</p>
            {renderLegend(score)}
            <ResponsiveContainer height={270}>
                <PieChart>
                    <Pie data={score} cornerRadius={10} innerRadius={90} outerRadius={100} paddingAngle={0} dataKey="x" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserScoreChart