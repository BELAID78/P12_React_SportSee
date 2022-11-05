import Calories from './../../assets/images/calories.svg';
import Carbs from './../../assets/images/carbs.svg';
import Fat from './../../assets/images/fat.svg';
import Protein from './../../assets/images/protein.svg';

function UserCardInformations({userCardInfos}) {
    const {calorieCount, carbohydrateCount, lipidCount, proteinCount} = userCardInfos
    return (
        <>
            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Calories} />
                </div>
                <div>
                    <p>{calorieCount}Kcal</p>
                    <p>Calories</p>
                </div>
            </div>

            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Protein} />
                </div>
                <div>
                    <p>{proteinCount}g</p>
                    <p>Proteines</p>
                </div>
            </div>

            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Carbs} />
                </div>
                <div>
                    <p>{carbohydrateCount}g</p>
                    <p>Glucides</p>
                </div>
            </div>

            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Fat} />
                </div>
                <div>
                    <p>{lipidCount}g</p>
                    <p>Lipides</p>
                </div>
            </div>
        </>
    )
}

export default UserCardInformations