import { useContext } from 'react';
import { UserCardContext } from '../../pages/Profile';
import Spinner from '../Spinner/Spinner';
import UserCardItem from '../UserCardItem/UserCardItem';
import Calories from './../../assets/images/calories.svg';
import Carbs from './../../assets/images/carbs.svg';
import Fat from './../../assets/images/fat.svg';
import Protein from './../../assets/images/protein.svg';

/**
 * Component for render user card information
 * 
 * @returns {React.ReactElement}
 */
function UserCardInformations() {
    //get the data from the context 
    const {calorieCount, carbohydrateCount, lipidCount, proteinCount} = useContext(UserCardContext);

    //if there is no data render the spinner component
    if(!calorieCount) {
        return <Spinner />
    }

    return (
        <>
            <UserCardItem icon={Calories} value={calorieCount} text="Calories" unit="Kcal" />

            <UserCardItem icon={Protein} value={proteinCount} text="Proteines" unit="g" />
            
            <UserCardItem icon={Carbs} value={carbohydrateCount} text="Glucides" unit="g" />
            
            <UserCardItem icon={Fat} value={lipidCount} text="Lipides" unit="g" />
        </>
    )
}

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {
    
}

//export UserCardInformations component
export default UserCardInformations