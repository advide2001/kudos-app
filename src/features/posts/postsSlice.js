import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

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
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
