import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  list: any[];
  a: any;
}

export interface StudentsState {
  students: State;
}

export const initialState: State = {
  list: [],
  a: 1
};

export class GetStudents implements Action {
  readonly type = 'GetStudents';
}

export class GetStudentsSuccess implements Action {
  readonly type = 'GetStudentsSuccess';
}

export function studentReducer(
  state = initialState,
  action: any
): State {
  console.log(state)
  switch (action.type) {
    case 'GetStudentsSuccess': {
      console.log('in reducer')
      return {
        a: 2,
        list: action.payload,
        // students: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}


export const reducers: ActionReducerMap<StudentsState> = {
  students: studentReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
