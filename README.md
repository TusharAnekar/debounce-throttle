# Debouncing and Throttling in React

## Live Link - https://debounce-throttle-react.netlify.app/

Debouncing and throttling are two techniques used to control the frequency of function calls in React applications. Both techniques are crucial for optimizing performance and enhancing user experience, particularly when dealing with event-driven components.

### Debouncing

Debouncing aims to prevent a function from being executed too rapidly, ensuring that it is only called once after a specified delay. This delay, typically measured in milliseconds, provides a buffer for user input, preventing unnecessary function calls during continuous input events like typing or scrolling.

### Throttling

In contrast, throttling limits the number of times a function can be called within a specified time interval. This ensures that the function is not executed more than a certain frequency, regardless of how often it is triggered. Throttling is particularly useful for handling events that occur in rapid succession, such as resizing or scrolling, preventing the function from overloading the application.
