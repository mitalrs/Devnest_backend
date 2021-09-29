$Express Middleware

  middleware use we can add multiple functions to be called when that
route is requested. this function call a before calling main functon for the purpose of the
athorization, login, parmission for system, etc.


>next()
  next is a therd paramter of function, it is use to function move on to next function after 
  check everything is ok.
    //when everything is not ok the throw the error what ever you pass 
      ```like
            res.staatus(400).send("error");
      ```           
        
Example:

```js
app.get(
  "/",
  (req, res, next) => {
    console.log("u in first",req.query);
    if(req.query.admin==='true'){
      next();
    } else{
      res.status(400).send("error");
    }
   
  },
  (req, res) => res.send("red")
);
```

To use a middleware for all requests, use `app.use(middleware)`. Also this must
be before any routes for it to occur (sequence matters).

NOTE: incase you not use if else and just use if then next is not valid on this point.
