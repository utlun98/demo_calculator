
export const initialState = {
    result: 0,
    op: '',
    num1: 0,
    num2: '',
    num3: ''
  };
const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
      case "2":
        if (!state.num1) {
          return {...state, num1: state.num2, op: action.payload, num2: ''}
        }
        if(!state.num2) {
          return {...state, op: action.payload}
        }
        if(state.num1 && state.op) {
          console.log('called')
          return {...state, result: eval(state.result+state.op+state.num2), op: action.payload}
        }
        return {...state, result: eval(state.num1+state.op+state.num2), num2: '', op: action.payload, num1: eval(state.num1+state.op+state.num2)}
  
      case "1":
        if (state.num2 === '' && action.payload==='.') {
          return { ...state, num2: '0'+action.payload }
        } else if (state.num2 === '') {
          return { ...state, num2: action.payload }
        } else {
          if (action.payload === '.' && state.num2.includes('.')){
            return state
          } else {
          return { ...state, num2: state.num2 + action.payload }
          }     
        }
        
      case "3":
        if (state.op && state.num2) {
          return {...state, result: eval(state.num1+state.op+state.num2), num2: '', num1: eval(state.num1+state.op+state.num2), num3 : state.num2}
        } else if (state.op && state.result) {
          return {...state, result: eval(state.result+state.op+state.num3)}
        } else {
          return state
        }
    
      case "c":  
        if (state.num2.length === 2 && state.num2.includes('0.')) {
          return {...state, num2: ''}
        } else if (state.num2.length>1) {
          return {...state, num2: state.num2.slice(0, -1)}
        } else {
          return {...state, num2: ''}
        }
        //state.num2.length > 1 ? return {...state, num2: state.num2.slice(0, -1)} : return {...state, num2:0}
  
      case "ac":
        return {
          result: 0,
          op: '',
          num1: 0,
          num2: ''
        }
        
      default:
        return state
    }
  }

  export default reducer