import { combineEpics } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

function dummyEpic(action, state) {
    return action.pipe(mapTo({ type: "Dummy" }));
}

export default combineEpics(
    // place epics in here
    dummyEpic
);