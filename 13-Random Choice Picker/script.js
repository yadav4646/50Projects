let tagsEl = document.getElementById('tags')
let textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            UnHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function UnHighlightTag(tag) {
    tag.classList.remove('highlight')
}


// **This JavaScript code is used to create a simple tag input system.Let's go through the code step by step:

// **1. The first two lines of code retrieve the HTML elements with the IDs "tags" and "textarea" and assign them to the variables `tagsEl` and`textarea`, respectively.

// **2. The `textarea.focus()` line sets the focus on the textarea element when the page loads.

// **3. The `textarea.addEventListener('keyup', (e) => { ... })` line adds an event listener to the textarea element.It listens for the "keyup" event, which occurs when a key is released after being pressed.The callback function is executed whenever the event is triggered.

// **4. Inside the callback function, the `createTags(e.target.value)` line calls the `createTags` function and passes the value of the textarea as an argument.This function splits the input value by commas, filters out any empty or whitespace - only tags, and trims the remaining tags.It then creates HTML elements for each tag and appends them to the `tagsEl` element.

// **5. The `if (e.key === 'Enter') { ... }` condition checks if the key that was released is the Enter key.If it is, the code inside the block is executed.

// **6. Inside the block, the`setTimeout(() => { e.target.value = '' }, 10)` line sets a timeout of 10 milliseconds and clears the value of the textarea.This is done to clear the input after pressing Enter.

// **7. The `randomSelect()` function is called, which selects a random tag and highlights it.

// **8. The `randomSelect()` function starts by defining a variable `times` with a value of 30. This variable determines how many times the highlighting and unhighlighting process will be repeated.

// **9. The `interval` variable is assigned the value returned by`setInterval(() => { ... }, 100)`.This sets up a repeating interval that executes the callback function every 100 milliseconds.

// **10. Inside the callback function, the `pickRandomTag()` function is called to select a random tag from the list of tags.The selected tag is then highlighted by calling the `highlightTag()` function.

// **11. After 100 milliseconds, the`UnHighlightTag(randomTag)` function is called to remove the highlight from the tag.

// **12. This process repeats for `times` number of times.

// **13. After `times * 100` milliseconds, the`interval` is cleared using `clearInterval(interval)` to stop the repeating interval.

//** 14. After a short delay of 100 milliseconds, a final random tag is selected and highlighted.

// **15. The `pickRandomTag()` function selects a random tag from the list of tags by querying the document for elements with the class "tag" and using the `Math.random()` function to generate a random index.

// **16. The `highlightTag(tag)` function adds the "highlight" class to the specified tag element, which applies a visual highlight effect.

// **17. The `UnHighlightTag(tag)` function removes the "highlight" class from the specified tag element, removing the visual highlight effect.