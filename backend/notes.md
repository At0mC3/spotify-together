# user1 -> login -> authorize with spotify -> store the token with the user

# user2 -> login -> authorize with spotify -> store the token with the user

# create a room -> add the members -> refresh their tokens -> fetch their data -> compile them
- Unique id
- Owner id -> points to the admin of the room
- Holds global playlist
- Holds all of id of the members allowed in the rooms
- Option for password protection

# user1
- Have its unique id

# HTTP
- GET, POST, PUT, UPDATE, DELETE

api/v1/user
