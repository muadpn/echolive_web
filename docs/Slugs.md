# Router for Elixir Endpoints.
<!-- elixir.api.post = echolive.com/api/<slugs> -->
---
## Auth Endpoints.
---

### Login.

```
{{elixir.api.post}}/auth/login (for authenticate)  [high] ["TODO"] 
    input: 
        - email:string
        - password:string
    output:
        ERROR   -> {error: string}
        Success -> Redirect to dashboard page.
---
### Sign up.

{{elixir.api.post}}/auth/signup (for authenticate) [high] ["TODO"]
    -- check for confirm_password.
    input: 
        - email:string
        - password:string
    output:
    ERROR   -> {error: string}
    Success -> prompt user to check email then -> Redirect to login page after 4 seconds.. 
```
---
### Forgot Password.

```
{{elixir.api.post}}/auth/forgot-password  [low] ["TODO"]
    - input: 
        - email:string
    - output: (always success)
        success -> Prompt users to check email. 
```
---

## Protected Endpoints.
---
### Website add.

```
{{elixir.api.post}}/website  [high] ["TODO"]
    - input: 
        - app_name: string
        - url:string (should not include https should be single website endpoint without trailing slash) 
            eg: globexhost.com || echolive.globexhost.com
    - output: 
        success -> {success: string}
        error: -> {error: string} 
```        
---
### Website Get details.
```
{{elixir.api.get}}/website/:id [high] ["TODO"]
    - input: none.
    - output: {id:string, app_name: string, app_url: string, total_visits?: number}
```
---
### Website's Get details.
```
{{elixir.api.get}}/websites/:id [high] ["TODO"]
    - input: none
    - output: {id:string, app_name: string, app_url: string, total_visits?: number}[]
```