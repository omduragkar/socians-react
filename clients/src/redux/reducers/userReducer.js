const { ULR, URR, ULS, URS, ULF, URF, ULOS, ULOR } = require("../constants/userConstants");

export const userReducer = (state={loading:false, login:false, token:undefined}, action)=>{
    switch(action.type)
    {
        case ULR:
            state ={loading:true};
            return state;
        case ULS:
            state={ loading:false, login:true, token:action.payload};
            return state;
        case ULF:
            state ={ loading:false, login:false, token:undefined, message:action.payload};
            return state;
        case URR:
            state ={loading:true};
            return state;
        case URS:
            state={loading:false, login:true, token:action.payload};
            return state;
        case URF:
            state ={ loading:false, login:false, token:undefined, message:action.payload};
            return state;
        case ULOR:
            state ={loading:true};
            return state;
        case ULOS:
            state={ loading:false, login:false, token:""};
            return state;
        default: return state;
        
    }
}
