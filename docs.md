## Classes

<dl>
<dt><a href="#CollectionItem">CollectionItem</a></dt>
<dd><p>Component class for individual collections on &#39;collections.html&#39;</p>
</dd>
<dt><a href="#LogItem">LogItem</a></dt>
<dd><p>Component class used in order to add individual
tasks, notes, and events to the daily logging page
and monthly/weekly view</p>
</dd>
<dt><a href="#MediaItem">MediaItem</a></dt>
<dd><p>Component class used in order to add individual
images/video to the collections-edit page.</p>
</dd>
<dt><a href="#ReflectionItem">ReflectionItem</a></dt>
<dd><p>Component class for creating the reflection field
on the daily log.</p>
</dd>
<dt><a href="#SearchItem">SearchItem</a></dt>
<dd><p>Component class used to list daily-logs on
the search page.</p>
</dd>
<dt><a href="#WeeklyViewItem">WeeklyViewItem</a></dt>
<dd><p>Component class for individual columns for daily log information on &#39;weekly.html&#39;</p>
</dd>
<dt><a href="#Book">Book</a></dt>
<dd><p>Component class used to create a new book containing
the month of a given year. This component is clickable,
and allows the user to navigate to the weekly view and
see daily log entries for the given month.</p>
</dd>
<dt><a href="#Shelf">Shelf</a></dt>
<dd><p>Represents a book shelf.</p>
</dd>
<dt><a href="#Tag">Tag</a></dt>
<dd><p>Represents a collection tag.</p>
</dd>
<dt><a href="#IndexedDBWrapper">IndexedDBWrapper</a></dt>
<dd><p>Wrapper class containing the relevant operations used
across different pages for the bullet journal. Examples of
this include opening a transaction for a specific daily log,
updating the timestamp of the daily log that should be
opened, and error handling subroutines (i.e. when a transaction
to search for an entry yields nothing).</p>
</dd>
<dt><a href="#DateConverter">DateConverter</a></dt>
<dd><p>Data massaging layer to help with convering
UNIX timestamps to relevant formats.</p>
</dd>
<dt><a href="#Router">Router</a></dt>
<dd><p>Routing class used to help with navigating between pages
for our site.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#ROUTES">ROUTES</a></dt>
<dd><p>Constant field containing all the routes for our bullet journal.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#updateCollectionName">updateCollectionName(prevName, newName)</a></dt>
<dd><p>Update given collection to have given name.</p>
</dd>
</dl>

<a name="CollectionItem"></a>

## CollectionItem
Component class for individual collections on 'collections.html'

**Kind**: global class  
**Author**: Noah Teshima <nteshima@ucsd.edu>  

* [CollectionItem](#CollectionItem)
    * [new CollectionItem()](#new_CollectionItem_new)
    * [.entry](#CollectionItem+entry)
    * [.entry](#CollectionItem+entry) ⇒ <code>Object</code>
    * [.setClickListeners()](#CollectionItem+setClickListeners)
    * [.setHoverListeners()](#CollectionItem+setHoverListeners)
    * [.getCollectionName()](#CollectionItem+getCollectionName) ⇒ <code>String</code>

<a name="new_CollectionItem_new"></a>

### new CollectionItem()
Constructor containing the business logic for
creating a new container item.

<a name="CollectionItem+entry"></a>

### collectionItem.entry
Setter for private field entry, containing
the name of our collection.

**Kind**: instance property of [<code>CollectionItem</code>](#CollectionItem)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>Object</code> | JSON object containing the new fields for our log item. |

<a name="CollectionItem+entry"></a>

### collectionItem.entry ⇒ <code>Object</code>
Getter for private field entry, containing the
name of our collection.

**Kind**: instance property of [<code>CollectionItem</code>](#CollectionItem)  
**Returns**: <code>Object</code> - JSON object containing the
new fields for our collection item.  
<a name="CollectionItem+setClickListeners"></a>

### collectionItem.setClickListeners()
Adds event listeners for all click events on the collection item

**Kind**: instance method of [<code>CollectionItem</code>](#CollectionItem)  
<a name="CollectionItem+setHoverListeners"></a>

### collectionItem.setHoverListeners()
Adds event listeners for all hover events on the collection item

**Kind**: instance method of [<code>CollectionItem</code>](#CollectionItem)  
<a name="CollectionItem+getCollectionName"></a>

### collectionItem.getCollectionName() ⇒ <code>String</code>
Gets the corresponding collection name

**Kind**: instance method of [<code>CollectionItem</code>](#CollectionItem)  
**Returns**: <code>String</code> - name of the collection. If specified
as an empty string, "Collection" is returned instead.  
<a name="LogItem"></a>

## LogItem
Component class used in order to add individual
tasks, notes, and events to the daily logging page
and monthly/weekly view

**Kind**: global class  
**Author**: Noah Teshima <nteshima@ucsd.edu>  

* [LogItem](#LogItem)
    * [new LogItem()](#new_LogItem_new)
    * [.itemEntry](#LogItem+itemEntry)
    * [.page](#LogItem+page) ⇒ <code>Number</code>
    * [.page](#LogItem+page)
    * [.itemEntry](#LogItem+itemEntry) ⇒ <code>Object</code>
    * [.setHoverListeners()](#LogItem+setHoverListeners)
    * [.getMilitaryTime()](#LogItem+getMilitaryTime) ⇒
    * [.getFormattedTime()](#LogItem+getFormattedTime)
    * [.getFASymbolClass()](#LogItem+getFASymbolClass)

<a name="new_LogItem_new"></a>

### new LogItem()
Constructor containing the business logic for
creating a new log item.

<a name="LogItem+itemEntry"></a>

### logItem.itemEntry
Setter for private field itemEntry, containing
the logType, description, and date of our entry.

**Kind**: instance property of [<code>LogItem</code>](#LogItem)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>Object</code> | JSON object containing the new fields for our log item. |

<a name="LogItem+page"></a>

### logItem.page ⇒ <code>Number</code>
Getter for field page, which denotes the
page in which the task is being created

**Kind**: instance property of [<code>LogItem</code>](#LogItem)  
**Returns**: <code>Number</code> - Number corresponding to
the key/value mappings from PAGES  
<a name="LogItem+page"></a>

### logItem.page
Setter for field page, which denotes the
page in which the task is being created

**Kind**: instance property of [<code>LogItem</code>](#LogItem)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Number</code> | corresponding to the key/value mappings from PAGES |

<a name="LogItem+itemEntry"></a>

### logItem.itemEntry ⇒ <code>Object</code>
Getter for private field itemEntry, containing
the logType, description, and date of our entry.

**Kind**: instance property of [<code>LogItem</code>](#LogItem)  
**Returns**: <code>Object</code> - JSON object containing the
new fields for our log item.  
<a name="LogItem+setHoverListeners"></a>

### logItem.setHoverListeners()
Adds event listeners for all hover events on the collection item

**Kind**: instance method of [<code>LogItem</code>](#LogItem)  
<a name="LogItem+getMilitaryTime"></a>

### logItem.getMilitaryTime() ⇒
Get the corresponding time in military time for events.

**Kind**: instance method of [<code>LogItem</code>](#LogItem)  
**Returns**: The corresponding time in military time. If the
log item is not an event, an empty string is returned.  
<a name="LogItem+getFormattedTime"></a>

### logItem.getFormattedTime()
Gets the formatted time of the corresponding event. This method
formats time as HH:MM[AM,PM], where AM is displayed if the hour is
on the interval [0, 11]. Otherwise, PM is displayed.

**Kind**: instance method of [<code>LogItem</code>](#LogItem)  
<a name="LogItem+getFASymbolClass"></a>

### logItem.getFASymbolClass()
Private method to get the font awesome icons corresponding
to our log item.

**Kind**: instance method of [<code>LogItem</code>](#LogItem)  
<a name="MediaItem"></a>

## MediaItem
Component class used in order to add individual
images/video to the collections-edit page.

**Kind**: global class  
**Author**: Noah Teshima <nteshima@ucsd.edu>  

* [MediaItem](#MediaItem)
    * [new MediaItem()](#new_MediaItem_new)
    * [.file](#MediaItem+file)
    * [.file](#MediaItem+file) ⇒ <code>File</code>
    * [.media](#MediaItem+media)
    * [.media](#MediaItem+media) ⇒ <code>Number</code>
    * [.setHoverListeners()](#MediaItem+setHoverListeners)
    * [.getMedia()](#MediaItem+getMedia) ⇒ <code>HTMLElement</code>

<a name="new_MediaItem_new"></a>

### new MediaItem()
Constructor containing the business logic for
creating a new media item.

<a name="MediaItem+file"></a>

### mediaItem.file
Setter for the file used to render the media item.
Setting the file triggers a re-render of this
component.

**Kind**: instance property of [<code>MediaItem</code>](#MediaItem)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>File</code> | File object containing the image to render. |

<a name="MediaItem+file"></a>

### mediaItem.file ⇒ <code>File</code>
Getter for the file used to render the media item.

**Kind**: instance property of [<code>MediaItem</code>](#MediaItem)  
**Returns**: <code>File</code> - File object containing the media item
displayed  
<a name="MediaItem+media"></a>

### mediaItem.media
Setter for the media type used to render the
component.
Changing the media type triggers a re-render of this
component.

**Kind**: instance property of [<code>MediaItem</code>](#MediaItem)  

| Param | Type | Description |
| --- | --- | --- |
| media | <code>Number</code> | enum value from the field MEDIA_TYPE. The possible values are MEDIA_TYPE.IMAGE (0) and MEDIA_TYPE.VIDEO (1) |

<a name="MediaItem+media"></a>

### mediaItem.media ⇒ <code>Number</code>
Getter for the media type used to render the component.

**Kind**: instance property of [<code>MediaItem</code>](#MediaItem)  
**Returns**: <code>Number</code> - Enum value containing the enum
from the field MEDIA_TYPE  
<a name="MediaItem+setHoverListeners"></a>

### mediaItem.setHoverListeners()
Adds event listeners for all hover events on the collection item

**Kind**: instance method of [<code>MediaItem</code>](#MediaItem)  
<a name="MediaItem+getMedia"></a>

### mediaItem.getMedia() ⇒ <code>HTMLElement</code>
Subroutine used to make an <img> element
from the field _file.

**Kind**: instance method of [<code>MediaItem</code>](#MediaItem)  
**Returns**: <code>HTMLElement</code> - HTMLImageElement or HTMLVideoElement containing
the source corresponding to the field _file  
<a name="ReflectionItem"></a>

## ReflectionItem
Component class for creating the reflection field
on the daily log.

**Kind**: global class  
**Author**: Noah Teshima <nteshima@ucsd.edu>  

* [ReflectionItem](#ReflectionItem)
    * [new ReflectionItem()](#new_ReflectionItem_new)
    * [.entry](#ReflectionItem+entry) ⇒ <code>Object</code>
    * [.entry](#ReflectionItem+entry)
    * [.getMoodWord()](#ReflectionItem+getMoodWord) ⇒ <code>String</code>
    * [.getFASymbolClass()](#ReflectionItem+getFASymbolClass)

<a name="new_ReflectionItem_new"></a>

### new ReflectionItem()
Constructor containing the business logic for
creating a new reflection item.

<a name="ReflectionItem+entry"></a>

### reflectionItem.entry ⇒ <code>Object</code>
Getter for the entry data corresponding to this
component's reflection.

**Kind**: instance property of [<code>ReflectionItem</code>](#ReflectionItem)  
**Returns**: <code>Object</code> - JSON object containing the reflection
data, such as mood.  
<a name="ReflectionItem+entry"></a>

### reflectionItem.entry
Setter for the entry data corresponding to this
component's reflection.

**Kind**: instance property of [<code>ReflectionItem</code>](#ReflectionItem)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>Object</code> | JSON object containing the new reflection data. |

<a name="ReflectionItem+getMoodWord"></a>

### reflectionItem.getMoodWord() ⇒ <code>String</code>
Get a word corresponding to the mood exhibited on this
component's input value.

**Kind**: instance method of [<code>ReflectionItem</code>](#ReflectionItem)  
**Returns**: <code>String</code> - String containing the corresponding word
to use to describe the user's mood.  
<a name="ReflectionItem+getFASymbolClass"></a>

### reflectionItem.getFASymbolClass()
Private method to get the font awesome icons corresponding
to our log item.

**Kind**: instance method of [<code>ReflectionItem</code>](#ReflectionItem)  
<a name="SearchItem"></a>

## SearchItem
Component class used to list daily-logs on
the search page.

**Kind**: global class  
**Author**: Noah Teshima <nteshima@ucsd.edu>  

* [SearchItem](#SearchItem)
    * [new SearchItem()](#new_SearchItem_new)
    * [.entry](#SearchItem+entry)
    * [.entry](#SearchItem+entry) ⇒ <code>Object</code>
    * [.populateLogEntries()](#SearchItem+populateLogEntries)
    * [.populateCollectionTasks()](#SearchItem+populateCollectionTasks)
    * [.addAsListItems(list)](#SearchItem+addAsListItems)
    * [.getDate()](#SearchItem+getDate)

<a name="new_SearchItem_new"></a>

### new SearchItem()
Constructor containing the business logic for
creating a new search item.

<a name="SearchItem+entry"></a>

### searchItem.entry
Setter for private field entry, containing
the tasks, notes, events, reflections, description,
and date of our search item.

**Kind**: instance property of [<code>SearchItem</code>](#SearchItem)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>Object</code> | JSON object containing the new fields for our search item. |

<a name="SearchItem+entry"></a>

### searchItem.entry ⇒ <code>Object</code>
Getter for private field entry, containing
the tasks, notes, events, reflections, description,
and date of our search item.

**Kind**: instance property of [<code>SearchItem</code>](#SearchItem)  
**Returns**: <code>Object</code> - JSON object containing the
new fields for our search item.  
<a name="SearchItem+populateLogEntries"></a>

### searchItem.populateLogEntries()
Subroutine used in order to show the relevant tasks, notes,
events, and reflection data in the contained daily log as
list items.

**Kind**: instance method of [<code>SearchItem</code>](#SearchItem)  
<a name="SearchItem+populateCollectionTasks"></a>

### searchItem.populateCollectionTasks()
Subroutine used in order to show the relevant tasks
in the contained collection as list items.

**Kind**: instance method of [<code>SearchItem</code>](#SearchItem)  
<a name="SearchItem+addAsListItems"></a>

### searchItem.addAsListItems(list)
Business/presentation logic subroutine used in order
to display entries as list items on the current search component.

**Kind**: instance method of [<code>SearchItem</code>](#SearchItem)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array.&lt;Object&gt;</code> | Array of JSON objects with which to create list entries |

<a name="SearchItem+getDate"></a>

### searchItem.getDate()
Subroutine used in order to show the date of the
entry being shown

**Kind**: instance method of [<code>SearchItem</code>](#SearchItem)  
<a name="WeeklyViewItem"></a>

## WeeklyViewItem
Component class for individual columns for daily log information on 'weekly.html'

**Kind**: global class  
**Author**: Yuzi Lyu <yul134@ucsd.edu>  
**Author**: Noah Teshima <nteshima@ucsd.edu>  

* [WeeklyViewItem](#WeeklyViewItem)
    * [new WeeklyViewItem()](#new_WeeklyViewItem_new)
    * [.entry](#WeeklyViewItem+entry)
    * [.entry](#WeeklyViewItem+entry) ⇒ <code>Object</code>
    * [.makeRow()](#WeeklyViewItem+makeRow) ⇒ <code>p</code>
    * [.getDate()](#WeeklyViewItem+getDate) ⇒ <code>String</code>
    * [.getEntryToWeeklyView(entry)](#WeeklyViewItem+getEntryToWeeklyView) ⇒ [<code>LogItem</code>](#LogItem)

<a name="new_WeeklyViewItem_new"></a>

### new WeeklyViewItem()
Constructor containing the business logic for
creating a new container item.

<a name="WeeklyViewItem+entry"></a>

### weeklyViewItem.entry
Setter for private field entry, containing
the name of our collection.

**Kind**: instance property of [<code>WeeklyViewItem</code>](#WeeklyViewItem)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>Object</code> | JSON object containing the new fields for our log item. |

<a name="WeeklyViewItem+entry"></a>

### weeklyViewItem.entry ⇒ <code>Object</code>
Getter for private field entry, containing the
name of our collection.

**Kind**: instance property of [<code>WeeklyViewItem</code>](#WeeklyViewItem)  
**Returns**: <code>Object</code> - JSON object containing the
new fields for our collection item.  
<a name="WeeklyViewItem+makeRow"></a>

### weeklyViewItem.makeRow() ⇒ <code>p</code>
Subroutine for creating one row of logItem

**Kind**: instance method of [<code>WeeklyViewItem</code>](#WeeklyViewItem)  
**Returns**: <code>p</code> - The row that should be appended to the div  
<a name="WeeklyViewItem+getDate"></a>

### weeklyViewItem.getDate() ⇒ <code>String</code>
Getter for getting the date correpsonding to the given
weekly view item

**Kind**: instance method of [<code>WeeklyViewItem</code>](#WeeklyViewItem)  
**Returns**: <code>String</code> - The date corresponding to the weekly view
item being displayed, corresponding to  
<a name="WeeklyViewItem+getEntryToWeeklyView"></a>

### weeklyViewItem.getEntryToWeeklyView(entry) ⇒ [<code>LogItem</code>](#LogItem)
Subroutine to add a task/note/event to the weekly view.

**Kind**: instance method of [<code>WeeklyViewItem</code>](#WeeklyViewItem)  
**Returns**: [<code>LogItem</code>](#LogItem) - LogItem object containing the representation of
the given entry as a log item in the weekly view.  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>Object</code> | JSON object containing the task/note/event data to add to the weekly view item. |

<a name="Book"></a>

## Book
Component class used to create a new book containing
the month of a given year. This component is clickable,
and allows the user to navigate to the weekly view and
see daily log entries for the given month.

**Kind**: global class  
**Author**: William Chung <wchung@ucsd.edu>  

* [Book](#Book)
    * [new Book()](#new_Book_new)
    * [.color](#Book+color) ⇒ <code>String</code>
    * [.color](#Book+color)
    * [.title](#Book+title) ⇒ <code>String</code>
    * [.title](#Book+title)
    * [.shelf](#Book+shelf) ⇒ <code>String</code>
    * [.shelf](#Book+shelf)
    * [.makeInteractive()](#Book+makeInteractive)
    * [.offset(month)](#Book+offset)
    * [.getTitle(month)](#Book+getTitle) ⇒ <code>String</code>

<a name="new_Book_new"></a>

### new Book()
Constructor for creating a new book component. Note
that initializing a book does not set the title of the
book itself. The title of the book can be set using
the setter for the field 'title'

<a name="Book+color"></a>

### book.color ⇒ <code>String</code>
Getter used to determine what color is being used for the book componemt.

**Kind**: instance property of [<code>Book</code>](#Book)  
**Returns**: <code>String</code> - String reference containing the color being used for
the book.  
<a name="Book+color"></a>

### book.color
Setter used to define the color that should be used for the book's background.

**Kind**: instance property of [<code>Book</code>](#Book)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | String reference containing the color that should be used for the book. |

<a name="Book+title"></a>

### book.title ⇒ <code>String</code>
Gets the title of a book (the month that a book represents).

**Kind**: instance property of [<code>Book</code>](#Book)  
**Returns**: <code>String</code> - String reference containing the title of the book.  
<a name="Book+title"></a>

### book.title
Sets the the title of a book (the month that a book represents).

**Kind**: instance property of [<code>Book</code>](#Book)  

| Param | Type | Description |
| --- | --- | --- |
| month | <code>Number</code> | The month that will serve as the title of a book |

<a name="Book+shelf"></a>

### book.shelf ⇒ <code>String</code>
Gets the shelf that book belongs to.

**Kind**: instance property of [<code>Book</code>](#Book)  
**Returns**: <code>String</code> - String reference containing the label of the shelf the book belongs to.  
<a name="Book+shelf"></a>

### book.shelf
Sets the shelf that a book belongs to.

**Kind**: instance property of [<code>Book</code>](#Book)  

| Param | Type | Description |
| --- | --- | --- |
| shelf | <code>String</code> | The label of the shelf |

<a name="Book+makeInteractive"></a>

### book.makeInteractive()
Makes a book interactive by adding a transition on hover, adding an event
listener to navigate to Weekly View on click, and changing color from grey

**Kind**: instance method of [<code>Book</code>](#Book)  
<a name="Book+offset"></a>

### book.offset(month)
Helper method to offset each book from beginning based on the book's month.

**Kind**: instance method of [<code>Book</code>](#Book)  

| Param | Type | Description |
| --- | --- | --- |
| month | <code>Number</code> | The month of the book to offset |

<a name="Book+getTitle"></a>

### book.getTitle(month) ⇒ <code>String</code>
Getter used to return the corresponding month for
this book.

**Kind**: instance method of [<code>Book</code>](#Book)  
**Returns**: <code>String</code> - String containing the month that
should be displayed on the book.  

| Param | Type | Description |
| --- | --- | --- |
| month | <code>Number</code> | Integer containing the month corresponding to the month that should be returned. Months are indexed from 1-12 inclusive, |

<a name="Shelf"></a>

## Shelf
Represents a book shelf.

**Kind**: global class  
**Author**: William Chung <wchung@ucsd.edu>  

* [Shelf](#Shelf)
    * [new Shelf()](#new_Shelf_new)
    * [.label](#Shelf+label) ⇒ <code>number</code>
    * [.label](#Shelf+label)
    * [.books](#Shelf+books) ⇒ <code>Array.&lt;object&gt;</code>
    * [.books](#Shelf+books)
    * [.hasEntryForYearMonth(dailyLogs, month)](#Shelf+hasEntryForYearMonth) ⇒ <code>Boolean</code>
    * [.createBooks()](#Shelf+createBooks) ⇒
    * [.updateBooks()](#Shelf+updateBooks)

<a name="new_Shelf_new"></a>

### new Shelf()
Creates new book shelf and populates with books (one for each month of the year).

<a name="Shelf+label"></a>

### shelf.label ⇒ <code>number</code>
Returns shelf label (year)

**Kind**: instance property of [<code>Shelf</code>](#Shelf)  
**Returns**: <code>number</code> - Shelf label (year)  
<a name="Shelf+label"></a>

### shelf.label
Sets shelf label (year)

**Kind**: instance property of [<code>Shelf</code>](#Shelf)  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>number</code> | Shelf label (year) |

<a name="Shelf+books"></a>

### shelf.books ⇒ <code>Array.&lt;object&gt;</code>
Returns books on the shelf.

**Kind**: instance property of [<code>Shelf</code>](#Shelf)  
**Returns**: <code>Array.&lt;object&gt;</code> - Array of books contained on the shelf  
<a name="Shelf+books"></a>

### shelf.books
Sets books on the shelf.

**Kind**: instance property of [<code>Shelf</code>](#Shelf)  

| Param | Type | Description |
| --- | --- | --- |
| books | <code>Array.&lt;object&gt;</code> | Array of books contained on the shelf |

<a name="Shelf+hasEntryForYearMonth"></a>

### shelf.hasEntryForYearMonth(dailyLogs, month) ⇒ <code>Boolean</code>
Subroutine used in order to determine whether there exists
daily logs with the given month and year.

**Kind**: instance method of [<code>Shelf</code>](#Shelf)  
**Returns**: <code>Boolean</code> - boolean value that determines whether there exists
a daily log with the given month and year  

| Param | Type | Description |
| --- | --- | --- |
| dailyLogs | <code>Array.&lt;Object&gt;</code> | Array of JSON objects containing the daily log entries to check. |
| month | <code>Number</code> | Number containing the month (indexed from 1 to 12 inclusive) with which to compare the date of each daily log |

<a name="Shelf+createBooks"></a>

### shelf.createBooks() ⇒
Creates default array of books containing one book for each month of the year.

**Kind**: instance method of [<code>Shelf</code>](#Shelf)  
**Returns**: Array of books with one book for each month of the year  
<a name="Shelf+updateBooks"></a>

### shelf.updateBooks()
Updates all books on the shelf.
Sets each books' "shelf" field to the label of this shelf.

**Kind**: instance method of [<code>Shelf</code>](#Shelf)  
<a name="Tag"></a>

## Tag
Represents a collection tag.

**Kind**: global class  
**Author**: William Chung <wchung@ucsd.edu>  

* [Tag](#Tag)
    * [new Tag(name)](#new_Tag_new)
    * [.name](#Tag+name) ⇒ <code>string</code>
    * [.name](#Tag+name)
    * [.removeCollectionTag(collectionName)](#Tag+removeCollectionTag)

<a name="new_Tag_new"></a>

### new Tag(name)
Constructs a Tag with the specified name.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the collection |

<a name="Tag+name"></a>

### tag.name ⇒ <code>string</code>
Returns name of collection tag.

**Kind**: instance property of [<code>Tag</code>](#Tag)  
**Returns**: <code>string</code> - Name of collection tag  
<a name="Tag+name"></a>

### tag.name
Sets name of collection tag.

**Kind**: instance property of [<code>Tag</code>](#Tag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of collection tag |

<a name="Tag+removeCollectionTag"></a>

### tag.removeCollectionTag(collectionName)
Removes collection tag from daily log.
Updates database to reflect removal and replaces option to add removed tag.

**Kind**: instance method of [<code>Tag</code>](#Tag)  

| Param | Type | Description |
| --- | --- | --- |
| collectionName | <code>string</code> | Name of collection to be removed |

<a name="IndexedDBWrapper"></a>

## IndexedDBWrapper
Wrapper class containing the relevant operations used
across different pages for the bullet journal. Examples of
this include opening a transaction for a specific daily log,
updating the timestamp of the daily log that should be
opened, and error handling subroutines (i.e. when a transaction
to search for an entry yields nothing).

**Kind**: global class  
**Author**: Noah Teshima <nteshima@ucsd.edu>  

* [IndexedDBWrapper](#IndexedDBWrapper)
    * [new IndexedDBWrapper(dbName, version)](#new_IndexedDBWrapper_new)
    * [.dbName](#IndexedDBWrapper+dbName) ⇒ <code>String</code>
    * [.dbName](#IndexedDBWrapper+dbName)
    * [.version](#IndexedDBWrapper+version) ⇒ <code>Number</code>
    * [.version](#IndexedDBWrapper+version)
    * [.init(event, LOG_DATA)](#IndexedDBWrapper+init)
    * [.addNewLog(event, synthetic)](#IndexedDBWrapper+addNewLog)
    * [.transaction(timestamp, successCb, upgradeCb, synthetic)](#IndexedDBWrapper+transaction)

<a name="new_IndexedDBWrapper_new"></a>

### new IndexedDBWrapper(dbName, version)
Initialize our wrapper with the specified
name and version for indexedDB


| Param | Type | Description |
| --- | --- | --- |
| dbName | <code>String</code> | Contains the name of the indexedDB database being used |
| version | <code>Number</code> | Specifies the version number corresponding with the given database. |

<a name="IndexedDBWrapper+dbName"></a>

### indexedDBWrapper.dbName ⇒ <code>String</code>
Getter for the current database name

**Kind**: instance property of [<code>IndexedDBWrapper</code>](#IndexedDBWrapper)  
**Returns**: <code>String</code> - The name of the
indexedDB database being used  
<a name="IndexedDBWrapper+dbName"></a>

### indexedDBWrapper.dbName
Setter for the current database name

**Kind**: instance property of [<code>IndexedDBWrapper</code>](#IndexedDBWrapper)  

| Param | Type | Description |
| --- | --- | --- |
| dbName | <code>String</code> | Contains the name of the indexedDB database to used |

<a name="IndexedDBWrapper+version"></a>

### indexedDBWrapper.version ⇒ <code>Number</code>
Getter for the version number corresponding
with the given database.

**Kind**: instance property of [<code>IndexedDBWrapper</code>](#IndexedDBWrapper)  
**Returns**: <code>Number</code> - Version number
corresponding with the given database.  
<a name="IndexedDBWrapper+version"></a>

### indexedDBWrapper.version
Setter for the version number being used.

**Kind**: instance property of [<code>IndexedDBWrapper</code>](#IndexedDBWrapper)  

| Param | Type | Description |
| --- | --- | --- |
| version | <code>Number</code> | Specifies the version number corresponding with the given database. |

<a name="IndexedDBWrapper+init"></a>

### indexedDBWrapper.init(event, LOG_DATA)
Default callback for version change event handler.
For simple read/write transactions, this should not
be changed.

**Kind**: instance method of [<code>IndexedDBWrapper</code>](#IndexedDBWrapper)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>IDBVersionChangeEvent</code> | Handler for the onupgradeneeded event. |
| LOG_DATA | <code>String</code> | String containing the relpath of the schema to use |

<a name="IndexedDBWrapper+addNewLog"></a>

### indexedDBWrapper.addNewLog(event, synthetic)
Default event handler for onsuccess callback
for IDBOpenDBRequest objects.

**Kind**: instance method of [<code>IndexedDBWrapper</code>](#IndexedDBWrapper)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>Event</code> |  | Event object containing the result of our callback. Using event.target.result yields an IDBRequest object for transactions. |
| synthetic | <code>Boolean</code> | <code>false</code> | Determines whether we use a mock response to populate our daily log. Solely for testing purposes. |

<a name="IndexedDBWrapper+transaction"></a>

### indexedDBWrapper.transaction(timestamp, successCb, upgradeCb, synthetic)
Updates the daily log that should be initialized
when the daily log page is visited.

**Kind**: instance method of [<code>IndexedDBWrapper</code>](#IndexedDBWrapper)  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | Contains the UNIX timestamp that will be used during our search transaction with indexedDB. During this transaction, all daily logs are referenced until the daily log with the same day as the given timestamp is found. |
| successCb | <code>function</code> | Callback function that will handle what kind of transaction to undergo |
| upgradeCb | <code>function</code> | Callback function that should be invoked when the version number or specified database changes. |
| synthetic | <code>Boolean</code> | Determines whether we use a mock response to populate our daily log. Solely for testing purposes. |

<a name="DateConverter"></a>

## DateConverter
Data massaging layer to help with convering
UNIX timestamps to relevant formats.

**Kind**: global class  
**Author**: Thanh Tong <ttong@ucsd.edu>  
**Author**: Noah Teshima <nteshima@ucsd.edu>  
**Author**: Zhiyuan Zhang <zhz018@ucsd.edu>  

* [DateConverter](#DateConverter)
    * [new DateConverter(timestamp)](#new_DateConverter_new)
    * [.timestamp](#DateConverter+timestamp) ⇒ <code>Number</code>
    * [.timestamp](#DateConverter+timestamp)
    * [.getDaysFromTimeStamp(Number)](#DateConverter+getDaysFromTimeStamp) ⇒ <code>Number</code>
    * [.timestampsInSameWeek(timestamp)](#DateConverter+timestampsInSameWeek) ⇒ <code>Boolean</code>
    * [.oldTimestampInSameWeek(timestamp)](#DateConverter+oldTimestampInSameWeek) ⇒ <code>Boolean</code>
    * [.getBeginningOfWeek()](#DateConverter+getBeginningOfWeek) ⇒ <code>Number</code>
    * [.equals(timestamp)](#DateConverter+equals)

<a name="new_DateConverter_new"></a>

### new DateConverter(timestamp)
Constructor to create a DateConverter object
relative to the given timestamp


| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | Number containing the UNIX timestamp for formatting |

<a name="DateConverter+timestamp"></a>

### dateConverter.timestamp ⇒ <code>Number</code>
Getter for the UNIX timestamp used for formatting in given timezone.

**Kind**: instance property of [<code>DateConverter</code>](#DateConverter)  
**Returns**: <code>Number</code> - Number containing the UNIX timestamp used for
formatting  
<a name="DateConverter+timestamp"></a>

### dateConverter.timestamp
Setter for the UNIX timestamp to use for formatting

**Kind**: instance property of [<code>DateConverter</code>](#DateConverter)  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | Number containing the UNIX timestamp for formatting |

<a name="DateConverter+getDaysFromTimeStamp"></a>

### dateConverter.getDaysFromTimeStamp(Number) ⇒ <code>Number</code>
Converts a UNIX timestamp to the number of days since
January 1, 1970 in local time.

**Kind**: instance method of [<code>DateConverter</code>](#DateConverter)  
**Returns**: <code>Number</code> - Number of days since January 1, 1970 given
by the UNIX timestamp  

| Param | Type | Description |
| --- | --- | --- |
| Number | <code>timestamp</code> | containing the UNIX timestamp in local time |

<a name="DateConverter+timestampsInSameWeek"></a>

### dateConverter.timestampsInSameWeek(timestamp) ⇒ <code>Boolean</code>
Determines whether the given UNIX timestamp meets the following criteria:
1. The day of the week corresponding to this timestamp is at or before
the day of the week for the timestamp inside this DateConverter object
2. The date of the corresponding timestamp is within seven days of the
timestamp inside this dateconverter object.

**Kind**: instance method of [<code>DateConverter</code>](#DateConverter)  
**Returns**: <code>Boolean</code> - Whether the given UNIX timestamp is within the same week
as the current date.  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | UNIX timestamp for comparison |

<a name="DateConverter+oldTimestampInSameWeek"></a>

### dateConverter.oldTimestampInSameWeek(timestamp) ⇒ <code>Boolean</code>
Determines whether the given UNIX timestamp meets the following criteria:
1. The date of the corresponding timestamp is in the same week as the
curren timestamp.

**Kind**: instance method of [<code>DateConverter</code>](#DateConverter)  
**Returns**: <code>Boolean</code> - Whether the given UNIX timestamp is within the same week
as the current date.  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | UNIX timestamp for comparison |

<a name="DateConverter+getBeginningOfWeek"></a>

### dateConverter.getBeginningOfWeek() ⇒ <code>Number</code>
Get a UNIX timestamp for Monday of the current week.
Note that this UNIX timestamp is unique up to the number
of days since 12:00AM January 1, 1970 GMT.

**Kind**: instance method of [<code>DateConverter</code>](#DateConverter)  
**Returns**: <code>Number</code> - UNIX timestamp representing the date for
Monday of the current week  
<a name="DateConverter+equals"></a>

### dateConverter.equals(timestamp)
Checks if the given UNIX timestamp is correct up to the
number of days.

**Kind**: instance method of [<code>DateConverter</code>](#DateConverter)  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | UNIX timestamp (in GMT time) to check for equality to the number of days |

<a name="Router"></a>

## Router
Routing class used to help with navigating between pages
for our site.

**Kind**: global class  
**Author**: William Chung <wchung@ucsd.edu>, Noah Teshima <nteshima@ucsd.edu>  

* [Router](#Router)
    * [new Router(...params)](#new_Router_new)
    * [.url](#Router+url)
    * [.url](#Router+url) ⇒ <code>URL</code>
    * [.navigate()](#Router+navigate)
    * [.toString()](#Router+toString) ⇒ <code>String</code>

<a name="new_Router_new"></a>

### new Router(...params)
Constructor used to create a URL from the current page location.


| Param | Type | Description |
| --- | --- | --- |
| ...params | <code>Array.&lt;Object&gt;</code> | Rest parameter reference containing information for creating the relevant route. If no argument is provided, we initialize the corresponding URL with the href of the current page. Otherwise, we assume the first argument is a URL reference containing the URL to use for navigation. |

<a name="Router+url"></a>

### router.url
Sets the URL to use for navigation or parameter parsing.

**Kind**: instance property of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>URL</code> | URL object containing the URL to use for navigation. |

<a name="Router+url"></a>

### router.url ⇒ <code>URL</code>
**Kind**: instance property of [<code>Router</code>](#Router)  
**Returns**: <code>URL</code> - URL object containing the
URL to use for navigation.  
<a name="Router+navigate"></a>

### router.navigate()
Subroutine of Router which changes the page's href
to the value of the field url

**Kind**: instance method of [<code>Router</code>](#Router)  
<a name="Router+toString"></a>

### router.toString() ⇒ <code>String</code>
**Kind**: instance method of [<code>Router</code>](#Router)  
**Returns**: <code>String</code> - String representation of the Router object  
<a name="ROUTES"></a>

## ROUTES
Constant field containing all the routes for our bullet journal.

**Kind**: global constant  
<a name="updateCollectionName"></a>

## updateCollectionName(prevName, newName)
Update given collection to have given name.

**Kind**: global function  
**Author**: William Chung <wchung@ucsd.edu>  

| Param | Description |
| --- | --- |
| prevName | Name of the collection to be udpated. |
| newName | New name of the collection. |

