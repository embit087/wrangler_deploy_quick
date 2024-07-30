console.log('Script started');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    const initialState = {
        counter: 0
    };

    console.log('Initial state:', initialState);

    function counterReducer(state = initialState, action) {
        console.log('Reducer called with action:', action);
        switch (action.type) {
            case 'INCREMENT':
                return { ...state, counter: state.counter + 1 };
            case 'DECREMENT':
                return { ...state, counter: state.counter - 1 };
            default:
                return state;
        }
    }

    console.log('Creating Redux store');
    const store = Redux.createStore(counterReducer);
    console.log('Store created:', store);

    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    console.log('DOM elements:', { counterElement, incrementButton, decrementButton });

    function render() {
        const state = store.getState();
        console.log('Rendering with state:', state);
        counterElement.textContent = state.counter;
    }

    console.log('Subscribing to store changes');
    store.subscribe(render);

    console.log('Performing initial render');
    render();

    console.log('Adding event listeners');
    incrementButton.addEventListener('click', function() {
        console.log('Increment button clicked');
        store.dispatch({ type: 'INCREMENT' });
    });

    decrementButton.addEventListener('click', function() {
        console.log('Decrement button clicked');
        store.dispatch({ type: 'DECREMENT' });
    });

    console.log('Setup complete');
});

console.log('Script ended');