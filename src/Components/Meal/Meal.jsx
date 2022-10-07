import { Fragment } from "react";

import MealSummery from './MealSummery';
import AvailableMeal from './AvailableMeal';

const Meal = () => {
    return <Fragment>
        <MealSummery />
        <AvailableMeal />
    </Fragment>
}

export default Meal