import { DateConverter } from '../utils/DateConverter.js'
import { wrapper } from './CollectionItem.js'
import { ROUTES, Router } from '../utils/Router.js'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    @import './css/font/bootstrap-icons.css';

    :host {
      display: inline-flex;
      margin-left: 5px;
      align-items: center;
      background: #EE6C4D;
      color: white;
      padding: 5px 5px 5px 10px;
      border-radius: 15px;
      border: none;
    }

    :host(:hover) .bi-x {
      visibility: visible;
    }

    .tag-name {
      font-size: 16px;
      font-weight: bold;
      font-family: sans-serif;
    }

    .tag-name:hover {
      cursor: pointer;
    }

    .bi-x {
      visibility: hidden;
      transition: transform 0.5s;
    }

    .bi-x:hover {
      cursor: pointer;
      color: red;
      transform: scale(1.4);
    }
  </style>
  <span class="tag-name">Test</span>
  <i class="bi bi-x" style="font-size: 24px;"></i>
`

/**
 * Represents a collection tag.
 * @author William Chung <wchung@ucsd.edu>
 */
class Tag extends HTMLElement {
  /**
     * Constructs a Tag with the specified name.
     * @constructor
     * @param {string} name - The name of the collection
     */
  constructor (name) {
    super()

    // create a shadow root for this web component
    this.attachShadow({ mode: 'open' })
    // attach cloned content of template to shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.name = name

    // navigation to corresponding collection-edit page when collection name is clicked
    this.shadowRoot.querySelector('.tag-name').addEventListener('click', () => {
      const url = new URL(ROUTES['collection-edit'], window.location.origin)
      url.searchParams.append('name', this.name)
      new Router(url).navigate()
    })

    // delete collection tag from parent element when "X" is clicked
    this.shadowRoot.querySelector('.bi-x').addEventListener('click', () => {
      const collectionName = this.shadowRoot.querySelector('.tag-name').textContent
      this.removeCollectionTag(collectionName)
      this.remove()
    })
  }

  /**
     * Returns name of collection tag.
     * @returns {string} Name of collection tag
     */
  get name () {
    const shadowRoot = this.shadowRoot
    return shadowRoot.querySelector('.tag-name').textContent
  }

  /**
     * Sets name of collection tag.
     * @param {string} name - Name of collection tag
     */
  set name (name) {
    const shadowRoot = this.shadowRoot
    shadowRoot.querySelector('.tag-name').textContent = name
  }

  /**
     * Removes collection tag from daily log.
     * Updates database to reflect removal and replaces option to add removed tag.
     * @param {string} collectionName - Name of collection to be removed
     */
  removeCollectionTag (collectionName) {
    wrapper.transaction((event) => {
      const db = event.target.result
      const transaction = db.transaction(['currentLogStore'], 'readwrite')
      const objectStore = transaction.objectStore('currentLogStore')
      objectStore.openCursor().onsuccess = function (event) {
        const cursor = event.target.result

        if (cursor) {
          const json = cursor.value
          const collections = json.properties.collections
          const router = new Router()
          const params = router.url.searchParams
          const dateConverter = new DateConverter(Number(params.get('timestamp')))
          const currentLog = dateConverter.timestamp
          const findLog = (collection) => {
            return collection.findIndex((log) => {
              return dateConverter.equals(new DateConverter(log))
            })
          }

          collections.forEach(collection => {
            if (collection.name === collectionName) {
              const index = findLog(collection.logs)
              if (!(index === undefined)) {
                collection.logs.splice(index, 1)
              }
            }
          })
          cursor.update(json)
        }
      }
    })

    // replace tag option
    const tagOptions = document.querySelector('.tag-options')
    const anchor = document.createElement('a')
    anchor.setAttribute('href', '#')
    anchor.textContent = collectionName
    tagOptions.append(anchor)
  }
}

customElements.define('collection-tag', Tag)

export { Tag }
