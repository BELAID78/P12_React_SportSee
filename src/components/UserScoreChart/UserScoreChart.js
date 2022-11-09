import { useContext, useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts"
import { UserScoreContext } from "../../pages/Profile";

/**
 * render the chart legend 
 * 
 * @param {array} score 
 * @returns {React.ReactElement}
 */
const renderLegend = (score) => {
    return (
      <div className="user-chart-score-legend">
        <p>{score[0].name}</p>
        <p>de votre objectif</p>
      </div>
    );
}

/**
 * Component for render the user score chart
 * 
 * @returns {React.ReactElement}
 */
function UserScoreChart() {
    //get user score chart
    const userScore = useContext(UserScoreContext);

    //user score chart as array
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
    
    //state for handle the window height
    const [windowHeight, setWindowHeight] = useState(window.outerHeight);

    //chart inner radius value by window height
    const innerRadiusValue = windowHeight >= 720 && windowHeight <= 910 ? 70 : 90;

    //chart outer radius value by window height
    const outerRadiusValue = windowHeight >= 720 && windowHeight <= 910 ? 80 : 100;

    //add resize event listener when chart mounted
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

//export UserScoreChart component
export default UserScoreChart