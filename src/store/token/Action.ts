export type Action = {type:"ADD_TOKEN"| "ADD_ID"; payload: string};

export const addToken = (token: string) : Action => ({
    type: "ADD_TOKEN",
    payload: token,
})
export const addId = (id: string): Action =>({
    type: "ADD_ID",
    payload: id
})
/*A ação propriamente dita, como exemplo uma tranferencia bancaria em si;*/