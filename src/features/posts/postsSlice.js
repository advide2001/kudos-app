import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Just finished reading a great book! #booklover #reading',
  },
  {
    id: '2',
    title: 'Second Post.',
    content:
      'Had a great workout this morning! #fitnessmotivation #workoutdone',
  },
]

// Create a postsSlice reducer that knows how to handle our posts data
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

export default postsSlice.reducer
