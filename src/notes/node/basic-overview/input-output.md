# 1. Understanding the Problem: Blocking vs. Non-Blocking I/O

First, when your computer (or a program) tries to get information from a resource, such as a file or a network, it can work in two ways:

**Blocking I/O (Input/Output)** = In this case, when the program requests some data (like reading from a file or a network), it waits until that data is ready before doing anything else. This is like asking someone a question and standing there until they answer. During that time, you can't do anything else.

_Example in JavaScript_:

```js
const data = fs.readFileSync("file.txt"); // This blocks the code until the file is read
console.log("Data from file:", data); // Only runs after the file has been read
```

**Non-Blocking I/O** = Here, the program asks for data, but instead of waiting for the data to be ready, it continues doing other things. If the data isn’t available right away, the program can check again later. This is like asking someone a question but continuing to work on something else while they think about the answer. You’ll come back to check for their answer later.

_Example in JavaScript_:

```js
fs.readFile("file.txt", (err, data) => {
  console.log("Data from file:", data);
});
console.log("This runs immediately without waiting for the file to be read");
```

## Key Concept: Non-Blocking I/O in Operating Systems

In non-blocking I/O at the operating system level, when you try to read from a resource (like a file or a network socket), the system doesn’t wait for the data. If the data isn’t available yet, it just says, “There’s no data available right now, check again later.”

The Unix example in your text uses something called `fcntl()` to switch a file descriptor (a reference to a file or network connection) into non-blocking mode. A file descriptor is just a way for the system to keep track of open files or network connections.

If the resource (file or network) has no data available, it returns a special code, like `EAGAIN`, which means “try again later.”
In JavaScript, this concept is similar to using callbacks or promises. You ask for data, but you don’t wait for it—when the data is available, the program tells you.

### The Busy-Waiting Problem

One simple way to handle non-blocking I/O is to keep checking (or polling) whether the resource has data. The pseudocode example shows how you could write a loop that constantly checks multiple resources (like files or network connections):

```js
resources = [socketA, socketB, fileA];
while (!resources.isEmpty()) {
  for (resource of resources) {
    // try to read
    data = resource.read();

    if (data === NO_DATA_AVAILABLE) {
      // No data yet, check again later
      continue;
    }

    if (data === RESOURCE_CLOSED) {
      // Resource closed, remove it from the list
      resources.remove(i);
    } else {
      // Process the data
      consumeData(data);
    }
  }
}
```

This is like repeatedly asking someone, “Do you have the data yet? How about now?” over and over. This wastes CPU time because you’re constantly checking resources that aren’t ready yet.

In JavaScript, it’s like using a while loop to keep checking whether an asynchronous operation is done. This is inefficient because the program spends a lot of time doing nothing useful.

_Example in JavaScript_

Imagine polling for data like this in JavaScript:

```js
Copy code
while (true) {
let data = socket.read(); // hypothetical method to read data
if (data !== NO_DATA_AVAILABLE) {
process(data);
break; // exit the loop when data is available
}
// Keep looping, checking for data, which wastes CPU time
}
```

#### Why This Isn’t Efficient?

Polling or "busy-waiting" like this consumes CPU power even when there’s no work to be done (because you’re looping continuously). A better solution is to let the program know when the data is actually ready, which is where more advanced techniques like event-driven programming come into play (similar to how JavaScript’s callbacks and promises work).

### Better Way: Event-Driven Approach

In JavaScript, you wouldn’t write code like the pseudocode shown above because it’s inefficient. Instead, you use events or promises that notify you when data is ready, without constantly checking:

```js
socket.on("data", (data) => {
  process(data); // Called only when data is available
});
```

This is more efficient because the program isn’t constantly checking for data—it just gets notified when the data arrives, saving CPU resources.

### Summary

- Blocking I/O: Waits for data, doing nothing else.
- Non-blocking I/O: Doesn’t wait for data. If data isn’t ready, the program continues and checks later.
- Busy-waiting: Inefficiently checks for data in a loop, wasting CPU time.
- Event-driven I/O: The modern, efficient way—wait for the system to notify you when data is ready, rather than checking continuously. This is like using JavaScript's event listeners (on) or promises.

Non-blocking I/O is useful because it allows your program to keep working even when some resources aren’t ready yet. However, polling (busy-waiting) isn't the best way to handle it, because it wastes CPU power. Instead, the more efficient method is event-driven programming.

# 2. Handling Multiple I/O Operations Without Blocking

In programming, **I/O operations** (like reading from a file or network) can take time. We want to find a way to handle many of these operations at the same time without using up too many resources like CPU power or threads. We don’t want to use the [busy-waiting](#the-busy-waiting-problem) technique, which wastes CPU by constantly checking if something is ready.

The solution to this problem is using a mechanism called **event demultiplexing**, which lets us handle many I/O tasks efficiently in one thread.

## Multiplexing and Demultiplexing: What Does It Mean?

To explain event demultiplexing, let’s first understand the terms:

**Multiplexing**: Imagine you have multiple signals (like radio signals) that need to be sent through a single wire. Instead of sending each signal separately, you combine them into one signal and send them together. That’s multiplexing—combining multiple things into one.

**Demultiplexing**: Once the combined signal reaches the other end, you need to split it back into the original signals. This process of splitting is called demultiplexing.

> In programming, _event demultiplexing_ refers to watching multiple I/O operations (like reading from files or network sockets) using a single thread. Instead of checking each operation individually (which is inefficient), the demultiplexer watches all of them at once and notifies you when any one of them is ready to do something (like when data is ready to be read). It essentially "splits" the events into individual components for you to handle.

### Synchronous Event Demultiplexer: How It Works

The synchronous event demultiplexer is a tool provided by the operating system that helps you watch multiple resources (like files or network connections) for events (such as data being available to read). It does this without wasting CPU time, because it waits (or blocks) until one of those resources has an event (like data ready to be read). Once an event happens, the demultiplexer tells you which resource is ready, and you can then handle it without any delay.

In simple terms, instead of repeatedly checking if any of your resources are ready (which wastes CPU), the system will notify you when something is ready.

### How It Looks in Code (Pseudocode Explanation)

Here’s a simplified version of how the event demultiplexer works using pseudocode:

Add resources to watch: We tell the demultiplexer to watch certain resources, like socketA or fileB, and we specify what kind of operation we’re interested in (e.g., reading data).

```js
watchedList.add(socketA, FOR_READ); // Watch socketA for data to read
watchedList.add(fileB, FOR_READ); // Watch fileB for data to read
```

Event loop: We then enter a loop where the demultiplexer waits for events. The demultiplexer blocks (waits) until one of the resources (e.g., socketA or fileB) has data ready to be read. Once an event occurs, it tells us which resource is ready.

```js
while ((events = demultiplexer.watch(watchedList))) {
  for (event of events) {
    data = event.resource.read(); // This will not block; data is ready
    if (data === RESOURCE_CLOSED) {
      demultiplexer.unwatch(event.resource); // Stop watching closed resource
    } else {
      consumeData(data); // Process the data
    }
  }
}
```

Processing events: When data is available, we process it. If the resource is closed (like a file being done reading), we remove it from the watchlist.

### Why Is This Efficient?

The key idea is that this technique allows us to handle multiple I/O-bound tasks (like reading files or network requests) using just one thread. Here’s why this is important:

**No busy-waiting**: Instead of constantly checking if a resource is ready (which wastes CPU time), the demultiplexer notifies us only when an event (like data being ready) occurs. This minimizes the time the CPU spends doing nothing.

**Single-threaded but concurrent**: We can handle multiple I/O tasks concurrently (at the same time) with just one thread. In JavaScript, this is similar to how the event loop handles asynchronous operations like setTimeout or network requests. You only process them when they’re ready, and you don’t need multiple threads for that.

**Simpler concurrency**: By using a single thread, we avoid many of the problems that come with multithreaded programming, such as race conditions (when two parts of a program try to access the same data at the same time). This makes the code simpler and less prone to bugs.

_Example in JavaScript: Event Loop_

In JavaScript, the event loop works similarly to an event demultiplexer. The event loop listens for events (like setTimeout completing or data arriving from a network request) and only processes them when they’re ready. This is done without wasting CPU or using multiple threads.

```js
const socket = getSocketConnection();

socket.on("data", (data) => {
  console.log("Received data:", data); // Only called when data is ready
});

console.log("This code runs immediately, while the event loop waits for data");
```

Here, the `socket.on('data')` function is similar to what happens with a demultiplexer. You don’t keep checking whether the socket has data—instead, the event loop waits until data arrives, and then it processes it.

### Summary

- Busy-waiting wastes CPU time by constantly checking for data.
  Event demultiplexing efficiently watches multiple resources (like files or network sockets) for events (like data becoming available) using a single thread.
- The demultiplexer blocks (waits) until one of the resources is ready, then processes the event without wasting CPU time.
- This allows us to handle multiple I/O-bound tasks in one thread, much like how JavaScript's event loop works.
- Advantages include simpler code (no need for multiple threads) and more efficient CPU usage.

So, event demultiplexing helps you handle multiple tasks without creating unnecessary overhead, which is similar to how JavaScript’s event loop allows you to handle many asynchronous tasks concurrently without blocking or wasting CPU.

## Mental Model

Let's try to go over all this again, this time using a visual model correlated with a real life example.

### What’s the Problem?

Imagine you're a waiter at a restaurant, and you’re responsible for serving food. You have several tables to serve, but you don’t know when each table’s food will be ready. The kitchen doesn’t tell you the exact moment when the food will be ready, so you have two ways to deal with this:

- **Busy-Waiting**: You could keep going to the kitchen and asking, “Is the food ready for table 1? How about table 2? Table 3?” You keep asking over and over, wasting your time when there’s no food ready.

This is like busy-waiting in programming: you keep checking if data is available, even when it isn’t.

- **Event Notification**: A better solution is for the kitchen to call you over when any table’s food is ready. Now, you don’t have to waste time asking—you’ll only be notified when something is ready to be served.

This is like event demultiplexing in programming. You only take action when something important happens, like when data is ready to be read.

### Event Demultiplexing in Programming

In programming, imagine you’re working with multiple things at the same time, like:

- A network socket waiting for data from the internet
- A file being read from the disk

If you used busy-waiting, you would keep asking: “Is there data ready on the network? How about the file? Now?” This would waste time because often, there’s nothing ready.

With event demultiplexing, the computer’s operating system watches all these resources (like network connections and files) for you. The operating system will tell you, “Hey, this resource (file or network socket) is ready now. You can read data from it!”

### How It Works in Code

Let’s compare this to JavaScript:

In JavaScript, you often deal with events like user clicks, network requests, or timers. You don’t manually check every second if a user clicked a button. Instead, you write code that waits for an event to happen, and when it does, your code is triggered. This is similar to event demultiplexing.

Here’s a simple example in JavaScript:

```js
// Register an event listener for button clicks
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});
```

You don’t check every millisecond whether the button was clicked. Instead, the system watches the button for you. When the user clicks the button, your callback (function()) is triggered.

### How Event Demultiplexing Works in Programming

Let’s relate this back to event demultiplexing. In programming:

You have multiple resources (files, network connections) that you need to handle.
Instead of constantly checking each resource to see if it’s ready (which wastes CPU time), the event demultiplexer keeps an eye on all of them for you.
When one of those resources (like a file or network connection) has data ready to be read, the event demultiplexer says, “This one is ready now. Go handle it.”
The key idea is that you don’t waste time and resources checking everything. Instead, you just wait until something important happens, and only then do you act.

_Pseudocode Example_

```js
// Add resources (like files or network connections) to a list to be watched
watchedList.add(socketA, FOR_READ); // Watching a network socket for data
watchedList.add(fileB, FOR_READ); // Watching a file for data

// Now we enter an event loop, waiting for something to happen
while ((events = demultiplexer.watch(watchedList))) {
  // We have some events, meaning some resource is ready
  for (event of events) {
    data = event.resource.read(); // Read the data from the ready resource

    if (data === RESOURCE_CLOSED) {
      demultiplexer.unwatch(event.resource); // Stop watching closed resources
    } else {
      consumeData(data); // Process the data from the resource
    }
  }
}
```

#### What’s Happening in This Code?

- **Setup**: First, we tell the demultiplexer to watch several resources (like a network socket and a file) for data.

This is like telling the kitchen, "Let me know when the food for table 1 or table 2 is ready."

- **Waiting for Events**: The demultiplexer is now waiting. It’s watching those resources and doing nothing until something is ready (an event). This waiting is called blocking, meaning the program just pauses here without using CPU time until there’s something to do.

This is like waiting for the kitchen to call you over when the food is ready.

- **Processing Events**: When the demultiplexer notices that one of the resources has data ready (like a network socket getting a message), it tells you, and you handle the event. In this case, you would read the data and do something with it.

This is like the kitchen calling you and saying, “Table 2’s food is ready!” You then serve the food.

_Example in JavaScript: Handling Events_

JavaScript’s event loop works in a similar way. The browser listens for events like button clicks, network responses, or timers finishing, and when an event happens, it calls the corresponding function.

For example, here’s how you handle multiple network requests efficiently:

```js
fetch("https://example.com/data1").then((response) => {
  console.log("Data from request 1:", response);
});

fetch("https://example.com/data2").then((response) => {
  console.log("Data from request 2:", response);
});

console.log("Waiting for network requests...");
```

You don’t need to constantly check if the network requests are done. The event loop waits for the responses, and when they come in, it runs the code inside then(). This is similar to how event demultiplexing works.

### Recap

- Without event demultiplexing (busy-waiting), you’d constantly check every resource (file, network, etc.) to see if it’s ready. This wastes CPU time.
- With event demultiplexing, you tell the system to watch the resources for you. When one of them has data ready, the system tells you. This way, you handle multiple resources efficiently using just one thread.
- In JavaScript, this is similar to how the event loop listens for multiple events like button clicks or network responses and runs the appropriate code when the event happens.

### In Summary

- Event demultiplexing. It watches multiple resources (files, network connections) and notifies you when one of them is ready.
- Benefit. You handle many tasks efficiently with a single thread, without wasting CPU time.
- Similar to JavaScript's event loop. Just like how the browser waits for events like clicks or network data and triggers your code when something happens.
