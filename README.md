# App Layout
- Head
- Body
   - Sidebar
   - MenuItems
- Main Container
   - Button Lists
   - Video Container
    - Video Cards


   
- Debouncing -It helps for time-consuming tasks for example in serach results it is used.
- typing slow=200ms;
- typing fast= 30ms

- iphone pro max=14 letter * 1000=14000
- with debouncing iphone pro max= 3 (api) *1000=3000

- if a serach result is < 200 ms then decline API call
- if a serach result is > 200 ms then make API call

 # Live DATA

- Web sockets-Used in trading apps, zeroda
   - Server and UI layer forms by directional connection
   - It has not  regular intervals 
   - It is used for real-time data
   - Difficult to implement(long waiting time)

- API polling -used in gmail,cricbuzz
   - Server requests to UI layer forms unidirectional connection
    -  It has egular intervals
    - Easy to implement (short waiting time)
    - Delays can occur since client  always hav to make new requests after  recieving data
