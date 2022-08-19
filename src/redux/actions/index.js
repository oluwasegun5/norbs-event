export const setBudget = (items) =>({type: 'SET_EVENTS', payload: items})
export const addItemToEvents = (items) =>({type: 'ADD_TO_EVENTS', payload: items})
export const updateEventsAction = (item) =>({type: 'UPDATE_EVENT', payload: item})
export const deleteEventsAction = (id) =>({type: 'DELETE_EVENT', payload: id})