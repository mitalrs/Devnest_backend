$Event Loop 
In a event loop devide into three parts one of the 
1.call stack- who just parform given task.
2.web API- only store heavy stask and wait for completed ready to parform exicution task.
3.callback Queue- heavy task ready to parform exicution after waiting in a web API section just a store
                   in a queue section and after stack free then push a heavy task in a stack    



$ Async and sync
 async- give a heavy task on hold and after the comple proper read to task for execution then task is executed and the time between asign a task to the porform a task just poarfor a some light wieght task on a first property, is called async.

 sync- totally vice versa, who task come first just exicute first //it's a slow to process 


ex,
Imagine we are making a database query that takes 10 seconds to run. In
synchronous programming, our program will wait for 10 seconds for the query to
complete. However in asynchronous programming, the rest of the program will
continue running when the query is made. After 10 seconds, when the query
returns the result, a callback function is called which handles the response.

This is handled by the event loop. JS is inherently single-threaded so
concurrency is essential for good performance.


**THA
node files.js mkdir test
node files.js write test/a.txt "Hello, World."
node files.js append test/a.txt " me "
node files.js read test/a.txt
node files.js rename test/a.txt test/b.txt
node files.js rm test/b.txt
node files.js rmdir test