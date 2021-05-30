import { IndexedDBWrapper } from '../indexedDB/IndexedDBWrapper.js'

// Create IndexedDB wrapper
const wrapper = new IndexedDBWrapper('experimentalDB', 1)

/**
 * Component class for individual collections on 'collections.html'
 * @author Noah Teshima <nteshima@ucsd.edu>
 */
class CollectionItem extends HTMLElement {
  /**
       * Constructor containing the business logic for
       * creating a new container item.
       */
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    // Unfortunately this cannot be made a private field, since ESLint does not properly
    // lint private fields.
    this._entry = { name: '' }
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `<style>
                                      @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);
                                      .icon-collection {
                                          background-size: contain;
                                          width:50%;
                                          height:50%;
                                          margin:auto;
                                      }
                                      .icon-trash {
                                        visibility: hidden;
                                        background-size: contain;
                                        width:2em;
                                        height:2em;
                                        transition: transform 0.25s;
                                      }
                                      .icon-trash:hover{
                                        cursor: pointer;
                                        transform: scale(1.2);
                                      }
                                      .trash-button-icon {
                                        background: url(../images/log-item_icons/trash-solid.svg) no-repeat center center;
                                      }
                                      .folder {
                                        margin-right: 1vw;
                                        border-bottom-style:solid;
                                        border-width:7px;
                                        border-radius: 10px;
                                        display:flex;
                                        flex-direction: column;
                                        align-items: flex-start;
                                        /*TODO: change the width*/
                                        justify-content: center;
                                        width:400px;
                                        margin: 10px;
                                      }
                                      .icon-collection {
                                        transition: transform 0.25s;
                                      }
                                      .icon-collection:hover {
                                        cursor: pointer;
                                        transform: scale(1.1);
                                      }
                                      h1 {
                                        font-family: 'Pattaya', sans-serif;
                                        margin:auto;
                                      }
                                      h1:hover {
                                        cursor: pointer;
                                      }
                                      button {
                                          background-color: rgba(0,0,0,0);
                                          border:0;
                                          padding:0;
                                          font-size: inherit;
                                      }
                                      </style>
                                    <div class="folder">
                                        <span class="icon-trash trash-button-icon"></span>
                                        <img src="/source/images/icon-collection.svg" class="icon-collection">
                                        <h1>${this.getCollectionName()}</h1>
                                    </div>`
    this.setClickListeners()
    this.setHoverListeners()
  }

  /*
   * Adds event listeners for all click events on the collection item
   */
  setClickListeners () {
    this.shadowRoot.querySelector('span[class="icon-trash trash-button-icon"]').addEventListener('click', (event) => {
      // Get clicked collection-item
      const collectionItem = event.target.getRootNode().host
      // Get name of clicked collection
      const name = collectionItem.getCollectionName()

      // Open a transaction and objectStore to 'currentLogStore'
      wrapper.transaction((event) => {
        const db = event.target.result
        const transaction = db.transaction(['currentLogStore'], 'readwrite')
        const objectStore = transaction.objectStore('currentLogStore')
        objectStore.openCursor().onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            /* Update collections array to remove collection with
             * name given by this._entry.name (see below)
             * https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/update
             */

            // Get JSON
            const json = cursor.value
            // Get collections array
            const collectionsArray = json.properties.collections
            // index of collection to remove
            let index
            // Search for collection and remove
            collectionsArray.forEach(collection => {
              if (collection.name === name) {
                index = collectionsArray.indexOf(collection)
              }
            })
            collectionsArray.splice(index, 1)
            // Save changes
            const requestUpdate = cursor.update(json)
          }
        }
      })
      event.target.parentElement.remove()
    })

    // update current_collection when a collection is clicked
    this.dataset.name = this._entry.name
    this.shadowRoot.querySelector('img[class="icon-collection"]').addEventListener('click', (event) => {
      const that = this

      wrapper.transaction((event) => {
        const db = event.target.result

        const transaction = db.transaction(['currentLogStore'], 'readwrite')
        const objectStore = transaction.objectStore('currentLogStore')
        objectStore.openCursor().onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            // Get JSON
            const json = cursor.value

            // Set current_collection field
            json.current_collection = that.dataset.name

            // Save changes
            const requestUpdate = cursor.update(json)
          }
        }
      })

      // navigate to collection-edit page
      window.location.href = '/source/html/collection-edit.html'
    })

    // onclick allow editing of collection name
    this.shadowRoot.querySelector('h1').addEventListener('click', (event) => {
      // get shadow root
      const collection = event.target.getRootNode().host
      // get h1 element containing name
      const name = event.target
      name.style.display = 'none'

      /*
       * Insert text input for in-place editing
       */
      const form = document.createElement('form')
      form.style.margin = 'auto'

      const textInput = document.createElement('input')
      textInput.setAttribute('type', 'text')
      textInput.style.height = '40px'
      textInput.style.fontSize = '32px'
      textInput.style.fontWeight = 'bold'
      textInput.style.fontFamily = '"Pattaya", sans-serif'
      textInput.style.textAlign = 'center'
      textInput.style.background = 'transparent'
      textInput.value = name.textContent

      form.append(textInput)

      event.target.parentElement.append(form)

      // set focus on text input (cursor ready to type)
      textInput.focus()

      // when focus shifts from text input, cancel edit
      textInput.addEventListener('blur', () => {
        textInput.remove()
        name.style.display = 'block'
      })

      // when user presses enter, update collection name
      form.addEventListener('submit', (event) => {
        event.preventDefault()
        const collectionName = textInput.value
        collection.entry = { name: collectionName }
      })
    })
  }

  /*
   * Adds event listeners for all hover events on the collection item
   */
  setHoverListeners () {
    const trashIcon = this.shadowRoot.querySelector('.icon-trash')

    // toggles visiblity of trash icon when mouse hovers
    this.addEventListener('mouseenter', () => {
      trashIcon.style.visibility = 'visible'
    })

    this.addEventListener('mouseleave', () => {
      trashIcon.style.visibility = 'hidden'
    })
  }

  /**
     * Gets the corresponding collection name
     * @returns {String} name of the collection. If specified
     * as an empty string, "Collection" is returned instead.
     */
  getCollectionName () {
    return this._entry.name === '' ? 'Collection' : this._entry.name
  }

  /**
       * Setter for private field entry, containing
       * the name of our collection.
       * @param {Object} entry JSON object containing the
       * new fields for our log item.
       */
  set entry (entry) {
    updateCollectionName(this._entry.name, entry.name)
    this._entry = entry
    this.render()
  }

  /**
       * Getter for private field entry, containing the
       * name of our collection.
       * @return {Object} JSON object containing the
       * new fields for our collection item.
       */
  get entry () {
    return this._entry
  }
}

/**
 * Update given collection to have given name.
 * @author William Chung <wchung@ucsd.edu>
 * @param prevName Name of the collection to be udpated.
 * @param newName New name of the collection .
 */
function updateCollectionName (prevName, newName) {
  wrapper.transaction((event) => {
    const db = event.target.result

    const transaction = db.transaction(['currentLogStore'], 'readwrite')
    const objectStore = transaction.objectStore('currentLogStore')
    objectStore.openCursor().onsuccess = function (event) {
      const cursor = event.target.result
      if (cursor) {
        const json = cursor.value

        const collections = json.properties.collections

        collections.forEach(collection => {
          if (collection.name === prevName) {
            collection.name = newName
          }
        })

        // Save changes
        const requestUpdate = cursor.update(json)
        requestUpdate.onerror = function (event) {
          // Do something with the error
        }
        requestUpdate.onsuccess = function (event) {
          // Success - the data is updated!
          console.log('successfully updated "' + prevName + '" to "' + newName + '"')
        }
      }
    }
  })
}

customElements.define('collection-item', CollectionItem)

export { CollectionItem, wrapper }
