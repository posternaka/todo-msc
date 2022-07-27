import store from '../redux/store';
import { setInputValue, checkbox, deleteTask  } from '../redux/actions/setValueAction';


describe('Test redux action', () => {

  test('Add todo item', () => {
    let state = store.getState().inputValue;
    expect(state.length).toBe(0);
  
    store.dispatch(setInputValue('Text'));
    state = store.getState().inputValue;
    expect(state.length).toBe(1);
    expect(state[0].textTask).toBe('Text');
  });
  
  test('Set checkbox', () => {
    let state = store.getState().inputValue;
    expect(state.length).toBe(1);
    expect(state[0].checkbox).toBe(false);
  
    store.dispatch(checkbox(state[0].id));
    state = store.getState().inputValue;
    expect(state.length).toBe(1);
    expect(state[0].checkbox).toBe(true);
  });
  
  test('Delete checked item', () => {
    let state = store.getState().inputValue;
    expect(state.length).toBe(1);
  
    store.dispatch(deleteTask());
    state = store.getState().inputValue;
    expect(state.length).toBe(0);
  });

});