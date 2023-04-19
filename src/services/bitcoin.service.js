import axios from "axios"
import { storageService } from "./storage.service"

export const BitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

async function getRate(coins) {
  try {
    const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    const data = await _getAndStore(url, "rate")
    return data
  } catch (err) {
    console.log("not getting coin rate", err)
    throw err
  }
}

async function getMarketPrice() {
  try {
    const url = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    const data = await _getAndStore(url, "market-price")
    return data
  } catch (err) {
    console.log("not getting market price", err)
    throw err
  }
}

async function getConfirmedTransactions() {
  try {
    const url = `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
    const data = await _getAndStore(url,"transaction")
    return data
  } catch (err) {
    console.log("not getting transactions", err)
    throw err
  }
}

async function _getAndStore(url, storageKey) {
  try {
    let urlData = storageService.load(storageKey)
    if (!urlData) {
      urlData = await axios.get(url)
      storageService.store(storageKey, urlData)
    }
    return urlData.data
  } catch (err) {
    console.log("cannot get url data", err)
    throw err
  }
}
