import { useContext } from "react"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts"
import { UserPerformanceContext } from "../../pages/Profile"
import Spinner from "../Spinner/Spinner";

/**
 * Component for render the user performance chart 
 * 
 * @returns {React.ReactElement}
 */
function UserPerformanceChart() {
    //get the user performance data from the context
    const userPerformance = useContext(UserPerformanceContext);

    //if the data are empty array render spinner component
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

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {

}

//export UserPerformanceChart component
export default UserPerformanceChart