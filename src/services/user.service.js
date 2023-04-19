import { storageService } from '../services/storage.service'

export const UserService = {
    getUser,
    signup,
    addMove,
}

function getUser() {
    const loggedInUser = storageService.load('user')
    if(loggedInUser) return loggedInUser
    return {
        name: "Ochoa Hyde",
        coins: 100,
        moves: [],
    }
}

function signup(name) {
    const loggedInUser = storageService.load('user')
    
    if (loggedInUser && loggedInUser.name === name) return
    const user = {
        name,
        coins: 100,
        moves: [],
    }
    storageService.store('user', user)
}

function addMove(contact, amount) {
    const loggedInUser = storageService.load('user')
    if(loggedInUser.coins < amount) return loggedInUser
    loggedInUser.coins -= amount
    
    loggedInUser.moves.unshift({
        toId: contact._id,
        to: contact.name,
        at: _getTime(Date.now()),
        amount,
    })
    
    storageService.store('user', loggedInUser)
    
    return loggedInUser
    
}

function _getTime(date) {
    date = new Date(date)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    const hours12 = hours % 12 || 12
    return `${day}/${month}/${year} ${hours12}:${minutes} ${ampm}`
  }
