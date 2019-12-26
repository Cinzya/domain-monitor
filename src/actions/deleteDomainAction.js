import {DELETE_ROW} from './index';

export function deleteEvent(index) {
    const copyRowArray = Object.assign([], this.state.domains);
    copyRowArray.splice (index, 1);

    return {
        type: DELETE_ROW,
        payload: copyRowArray
    }
}