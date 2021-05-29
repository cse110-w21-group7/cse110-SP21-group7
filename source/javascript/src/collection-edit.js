import { IndexedDBWrapper } from './indexedDB/IndexedDBWrapper.js'
import { MediaItem, MEDIA_TYPE } from './components/MediaItem.js'

const collapse = document.getElementById('collapse')
const imageBox = document.getElementById('image-collection')
const videoBox = document.getElementById('video-collection')
const gallery = document.getElementById('media-gallery')
const addBtn = document.querySelector('.addBtn')
const imageButton = document.getElementById('add-image-btn')
const videoButton = document.getElementById('add-video-btn')
/*
 * This onclick toggles the display style of the media gallery
 * TODO: When onclick, the size of the media gallery should be changed
 *
 */
collapse.addEventListener('click', () => {
  if (collapse.innerHTML === 'expand') {
    collapse.innerHTML = 'collapse'
    imageBox.style.visibility = 'visible'
    videoBox.style.display = 'block'
    gallery.style.visibility = 'visible'
  } else {
    collapse.innerHTML = 'expand'
    imageBox.style.visibility = 'hidden'
    videoBox.style.display = 'none'
    gallery.style.visibility = 'hidden'
  }
})

addBtn.addEventListener('click', () => {
  newElement()
})

function newElement () {
  const span = document.createElement('select')
  span.className = 'dropdown'
  const txt = document.createElement('option')
  const close = document.createElement('option')
  const complete = document.createElement('option')
  close.text = 'delete'
  close.value = 'close'
  close.className = 'close'
  complete.text = 'complete'
  complete.value = 'complete'
  complete.className = 'complete'
  txt.text = 'options'
  txt.value = 'value'
  // span.className = 'select';
  span.appendChild(txt)
  span.appendChild(close)
  span.appendChild(complete)
  const li = document.createElement('li')
  const inputValue = document.getElementById('myInput').value
  const t = document.createTextNode(inputValue)
  li.appendChild(span)
  li.appendChild(t)
  if (inputValue === '') {
    alert('You must write something!')
  } else {
    // span.appendChild(li);
    // document.getElementById('myUL').appendChild(span);
    document.getElementById('myUL').appendChild(li)
  }
  document.getElementById('myInput').value = ''
}

/**
 * Business logic subroutine used to fill the page with
 * the tasks corresponding to a collection.
 * @param {Object} JSON object containing the collection
 * surfaced from indexedDB
 */
function populateTasks (collection) {
  function createLogItem (task) {
    const logItem = document.createElement('log-item')
    logItem.itemEntry = task
    return logItem
  }
  const tasks = collection.tasks
  const taskList = document.getElementById('myUL')
  try {
    tasks.forEach((task, index) => {
      const logItem = createLogItem(task)
      const li = document.createElement('li')
      li.appendChild(logItem)
      taskList.appendChild(li)
    })
  } catch (err) {
    console.log('collection has no tasks')
  }
}

/**
 * Business logic subroutine used to add the collection
 * name to the title of the page.
 * @param {Object} JSON object containing the collection
 * surfaced from indexedDB
 */
function populateCollectionName (collection) {
  const name = collection.name
  const title = document.querySelector('#title > h1')
  title.textContent = name
}

/**
 * Business logic subroutine used to populate the
 * media components of the given collection
 * @param {Object} collection JSON object containing the
 * collection images and videos to display
 */
function populateMedia (collection, mediaType = MEDIA_TYPE.IMAGE) {
  function createMediaItem (media) {
    const mediaItem = document.createElement('media-item')
    mediaItem.file = media.file
    mediaItem.media = mediaType
    return mediaItem
  }
  let target
  let mediaCollection
  if (mediaType === MEDIA_TYPE.IMAGE) {
    target = collection.images
    mediaCollection = document.getElementById('image-collection')
  } else {
    target = collection.videos
    mediaCollection = document.getElementById('video-collection')
  }
  try {
    target.forEach((media, index) => {
      const mediaItem = createMediaItem(media)
      mediaCollection.appendChild(mediaItem)
    })
  } catch (err) {
    console.log('collection has no media')
  }
}

/**
 * Gets collection information as JSON corresponding to the field current_collection
 * in indexedDB. This collection data is passed as JSON to a callback to handle the
 * presentation logic for the page.
 * @author Noah Teshima <nteshima@ucsd.edu>
 * @param {Function} cb Callback function, which takes a JSON object
 * representing the collection data being used
 */
function getLogInfoAsJSON (cb) {
  const wrapper = new IndexedDBWrapper('experimentalDB', 1)

  wrapper.transaction((event) => {
    const db = event.target.result

    const transaction = db.transaction(['currentLogStore'], 'readonly')
    const store = transaction.objectStore('currentLogStore')
    store.openCursor().onsuccess = function (event) {
      const cursor = event.target.result
      if (cursor) {
        console.log(cursor.value)
        const collectionName = cursor.value.current_collection
        const collection = cursor.value.properties.collections.find((element) => {
          return element.name === collectionName
        })
        console.log(collection)
        cb.bind(this)
        cb(collection)
      }
    }
  })
}

/**
 * Write transaction to indexedDB in order to update the current collection.
 * The manner in which our write transaction occurs depends on the specified
 * callback.
 * @param {Function} cb Callback function which takes collection data as JSON
 * and returns the modified collection to write to indexedDb
 */
function updateLogInfo (cb) {
  const wrapper = new IndexedDBWrapper('experimentalDB', 1)

  wrapper.transaction((event) => {
    const db = event.target.result

    const transaction = db.transaction(['currentLogStore'], 'readwrite')
    const store = transaction.objectStore('currentLogStore')
    store.openCursor().onsuccess = function (event) {
      const cursor = event.target.result
      if (cursor) {
        const collectionName = cursor.value.current_collection
        let collection = cursor.value.properties.collections.find((element) => {
          return element.name === collectionName
        })
        collection = cb(collection)
        cursor.update(cursor.value)
      }
    }
  })
}

/**
 * Event handler for adding videos and images
 * to a collection. When a collection has a new
 * video/image, we must perform a write transaction
 * to indexedDB to save this media element, in addition
 * to performing the necessary presentation logic on the
 * page itself
 * @param {Number} media Enum value denoting whether an
 * image or video is being created.
 */
function insertMedia (event, media = MEDIA_TYPE.IMAGE) {
  const selectedFile = event.target.files[0]
  const mediaItem = document.createElement('media-item')
  mediaItem.file = selectedFile
  mediaItem.media = media
  updateLogInfo((collection) => {
    console.log('collection', collection)
    const target = (media === MEDIA_TYPE.IMAGE) ? collection.images : collection.videos
    target.push({
      type: 'string',
      file: selectedFile
    })
    console.log(`pushed to ${media === MEDIA_TYPE.IMAGE ? 'images' : 'videos'}!`)
    return collection
  })
  if (media === MEDIA_TYPE.IMAGE) {
    document.getElementById('image-collection').appendChild(mediaItem)
  } else {
    document.getElementById('video-collection').appendChild(mediaItem)
  }
}

/**
 * Business logic to call all necessary subroutines
 * to display colleciton data on the page
 * @param {Object} response JSON object containing the
 * collection data for the collection to view
 */
function populatePage (response) {
  populateTasks(response)
  populateCollectionName(response)
  populateMedia(response, MEDIA_TYPE.IMAGE)
  populateMedia(response, MEDIA_TYPE.VIDEO)
}

document.addEventListener('DOMContentLoaded', (event) => {
  getLogInfoAsJSON(populatePage)

  imageButton.addEventListener('input', (event) => {
    insertMedia.bind(event)
    insertMedia(event, MEDIA_TYPE.IMAGE)
  })

  videoButton.addEventListener('input', (event) => {
    insertMedia.bind(event)
    insertMedia(event, MEDIA_TYPE.VIDEO)
  })
})
