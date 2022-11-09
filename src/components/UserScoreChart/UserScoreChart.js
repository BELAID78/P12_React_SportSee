import { useContext, useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts"
import { UserScoreContext } from "../../pages/Profile";

const renderLegend = (score) => {
    return (
      <div className="user-chart-score-legend">
        <p>{score[0].name}</p>
        <p>de votre objectif</p>
      </div>
    );
}

function UserScoreChart() {
    const userScore = useContext(UserScoreContext);

    const score = [
        {
            name: (userScore * 100) + '%',
            x: userScore * 100,
            fill: 'red'
        },
        {
            name: 'B',
            x: 100 - (userScore * 100),
            fill: 'white'
        }
    ]
    
    
    const [windowHeight, setWindowHeight] = useState(window.outerHeight);

    const innerRadiusValue = windowHeight >= 720 && windowHeight <= 910 ? 70 : 90;
    const outerRadiusValue = windowHeight >= 720 && windowHeight <= 910 ? 80 : 100;

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowHeight(window.outerHeight);
        });
    }, []);

    return (
        <div className="user-chart-score">
            <p className="chart-legend">Score</p>
            {renderLegend(score)}
            <ResponsiveContainer height='100%'>
                <PieChart>
                    <Pie data={score} cornerRadius={10} innerRadius={innerRadiusValue} outerRadius={outerRadiusValue} paddingAngle={0} dataKey="x" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserScoreChart