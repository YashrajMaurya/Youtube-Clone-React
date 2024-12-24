export const API_KEY = 'AIzaSyALjqjfk2RRs4m5hwD726BoNWWQJTEHwwA';

export const valueConverter = (val)=>{
    if(val>=1000000){
        return (val/1000000).toFixed(1)+'M';
    }else if(val>=1000){
        return (val/1000).toFixed(1)+'K';
    }else{
        return val;
    }
}