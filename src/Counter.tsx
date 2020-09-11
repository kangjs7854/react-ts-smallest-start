import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

//state
type StoreState = number;

//action
const INCREMENT:string = "INCREMENT"
type INCREMENT = typeof INCREMENT

const DECREMENT = "DECREMENT";
type DECREMENT = typeof DECREMENT;

interface IINCREMENTAction {
    type: INCREMENT;
}
interface IDECREMENTAction {
    type: DECREMENT;
}
type ModifyAction = IINCREMENTAction | IDECREMENTAction;

const increment = (): IINCREMENTAction => ({
    type: INCREMENT,
})

const decrement = (): IDECREMENTAction => ({
    type: DECREMENT
})


//reducer
export function reducers(state = 0, action: ModifyAction): number {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}


//counter组件
interface IProps {
    value: number,
    onIncrement: () => void,
    onDecrement: () => void
}

class Counter extends React.Component<IProps>{
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: { value } times
                <br />
                <br />
                <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
                <button onClick={ onDecrement }> - </button>
            </p>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState): { value: number } => ({
    value: state
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})

//与redux连接过后的counter组件
export const CounterStore = connect(mapStateToProps, mapDispatchToProps)(Counter);
