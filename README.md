## Infinite Scrolling List:

This project was built to demonstrate large-list implementation.
I'm using a free API that fetches more than 200 objects in a raw.

For handling optimized scrolling approach (without the delay for the bundler to render 200 items at once) I implemented "Load More" approach for fetching content per chunk (10 items loaded per load-scroll swipe).

Also, the list performs "Pull to Refresh" to get refresh data in case the user expects to any updates.

Although the UI is straightforward, I back it up with simple animation (Reanimated) for loading content.

<!-- Some Extra -->

axios: for fetching data (With no interceptor -> only one API call)
redux-toolkit: for state management (Even though we've just one screen)
