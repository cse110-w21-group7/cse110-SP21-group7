import { IndexedDBWrapper } from './indexedDB/IndexedDBWrapper.js'
import { DateConverter } from './utils/DateConverter.js'

const weekly = document.getElementById('weekly-div')
const monday = document.getElementById('Monday')
const tuesday = document.getElementById('Tuesday')
const wednesday = document.getElementById('Wednesday')
const thursday = document.getElementById('Thursday')
const friday = document.getElementById('Friday')
const saturday = document.getElementById('Saturday')
const sunday = document.getElementById('Sunday')

/**
 * Performs an AJAX call for JSON type response containing
 * the daily log information corresponding to the given date.
 * If there is no daily log information for the given date,
 * a new daily log is created if the date is the present day.
 * @author Noah Teshima <nteshima@ucsd.edu>, Zhiyuan Zhang <zhz018@ucsd.edu>
 * @throws Error object if date reference is null, undefined. Otherwise,
 * an error is thrown if the given date is not the present day and failed
 * to retrieve log info for given day.
 * @returns JSON type response, containing the information needed to
 * initialize the daily log.
 */
function getLogInfoAsJSON (cb) {
  // Do we need to open a new db?
  const wrapper = new IndexedDBWrapper('experimentalDB', 1)

  // wrapper.transaction((event) => {
  //   const db = event.target.result
  //   const transaction = db.transaction(['currentLogStore'], 'readwrite')
  //   const store = transaction.objectStore('currentLogStore')
  //   //experiemental log not the actual json
  //   let log = {
  //     type: 'note',
  //     content: 'sample note'
  //   };
  //   store.add(log);
  // })

  wrapper.transaction((event) => {
    const db = event.target.result
    const transaction = db.transaction(['currentLogStore'], 'readonly') // mode should be readonly
    const store = transaction.objectStore('currentLogStore')
    // this gets all entries and store them as an array, pass in a key, what's the key?
    const getReq = store.getAll()

    getReq.onsuccess = (event) => {
      const allEntries = getReq.result
      // populateWeeklyView(allEntries)
    }

    store.openCursor().onsuccess = function (event) {
      const cursor = event.target.result
      // this cursor hold on to the event, we have fetched the data in the db
      if (cursor) {
        // current date
        const current = new DateConverter(Date.now())
        const dailyLogs = cursor.value.$defs['daily-logs']
        const result = dailyLogs.filter((log) => {
          const timestamp = log.properties.date.time
          return current.timestampsInSameWeek(Number(timestamp))
        })
        /**
         * Mo Tues Wed Thurs Fri Sat Sun
         *  *        *     *      X 
         * Mo Tues Wed Thurs Fri Sat Sun
         *                            *
         */
        // const results_sorted = result.sort((logOne, logTwo) => {
        //   return Number(logOne.properties.date.time) - Number(logTwo.properties.date.time)
        // })
        // results_sorted.forEach((log, index) => {

        // })

        console.log(result)
        cb(result)
      }
    }
  })
}

function populateWeeklyView (entryArr) {
  const week = document.getElementById('weekly-div')
  //create a DateConverter object
  const current = new DateConverter(Date.now())
  //Use a new instance of Date to fetch the day of the week of today
  const today = new Date();
  const todayDays =  today.getDay();
  entryArr.forEach((entry) => {
    //calculate the offset between today's day and the entry's day
    let offSet = current.getDaysFromTimeStamp(Date.now()) - current.getDaysFromTimeStamp(entry.properties.date.time);
    //apply the offset to get the index
    let index = todayDays - offSet
    const weeklyItem = document.createElement('weekly-view-item')
    weeklyItem.entry = entry
    week.children[index].appendChild(weeklyItem)
  })
}

document.addEventListener('DOMContentLoaded', (event) => {
  getLogInfoAsJSON(populateWeeklyView)
  const today = new Date()
  const month = today.getMonth() + 1
  const dayNum = today.getDay()
  const date = today.getDate()
  const year = today.getFullYear()
  appendDate(dayNum, date, month, year)

  // const weeklyItem = document.createElement('weekly-view-item')
  // weeklyItem.entry = {
  //   type: 'object',
  //   required: ['date', 'description'],
  //   properties: {
  //     date: {
  //       type: 'string',
  //       time: '1621553378082',
  //       description: 'The date of the event.'
  //     },
  //     events: [
  //       {
  //         description: 'This is an event from last week',
  //         logType: 'event',
  //         time: '1621718384658'
  //       },
  //       {
  //         description: 'I walked my dog last week',
  //         logType: 'event',
  //         time: '1621729208633'
  //       }
  //     ],
  //     tasks: [
  //       {
  //         description: 'Study for midterm',
  //         logType: 'task',
  //         finished: true
  //       },
  //       {
  //         description: 'Study for final',
  //         logType: 'task',
  //         finished: false
  //       },
  //       {
  //         description: 'Study',
  //         logType: 'task',
  //         finished: true
  //       },
  //       {
  //         description: 'Weeknight meal prep',
  //         logType: 'task',
  //         finished: false
  //       }
  //     ],
  //     notes: [
  //       {
  //         description: "I should send a card for Jordan's birthday.",
  //         logType: 'note'
  //       }
  //     ],
  //     reflection: [
  //       {
  //         description: 'Today was a good day. I got a lot of work done.',
  //         logType: 'reflection'
  //       }
  //     ],
  //     mood: {
  //       type: 'number',
  //       multipleOf: 1,
  //       minimum: 0,
  //       exclusiveMaximum: 100,
  //       value: 20,
  //       description: 'Daily mood on a range of 0-99.'
  //     }
  //   }
  // }
  // tuesday.appendChild(weeklyItem)
})

function appendDate (dayNum, date, month, year) {
  for (let i = 1; i <= dayNum; i++) {
    // days before today
    let tempDate = date - (dayNum - i)
    let tempMonth = month
    if (tempDate <= 0) {
      tempMonth -= 1
      switch (month) {
        case 1:
          tempMonth = 12
          break
        case 3:
          if (year % 4 === 0) {
            // leap year
            tempDate += 29
          } else {
            tempDate += 28
          }
          break
        case 5:
        case 7:
        case 10:
        case 12:
          tempDate += 30
          break
        default:
          tempDate += 31
      }
    }
    const tempElem = document.createElement('p')
    tempElem.innerText = tempMonth + '.' + tempDate
    weekly.children[i - 1].insertBefore(tempElem, weekly.children[i - 1].children[1])
  }
  for (let i = dayNum + 1; i <= 7; i++) {
    // days after today
    let tempDate = date + (i - dayNum)
    let tempMonth = month
    switch (month) {
      case 2:
        if (year % 4 === 0) {
          if (tempDate > 29) {
            tempMonth++
            tempDate -= 29
          }
        } else {
          if (tempDate > 28) {
            tempMonth++
            tempDate -= 28
          }
        }
        break
      case 4:
      case 6:
      case 9:
      case 11:
        if (tempDate > 30) {
          tempMonth++
          tempDate -= 30
        }
        break
      default:
        if (tempDate > 31) {
          tempMonth++
          tempDate -= 31
        }
    }
    const tempElem = document.createElement('p')
    tempElem.innerText = tempMonth + '.' + tempDate
    weekly.children[i - 1].insertBefore(tempElem, weekly.children[i - 1].children[1])
  }
}
