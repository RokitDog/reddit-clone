type Comments = {
  created_at: string
  id: number
  post_id: number
  username: string
  text: string
}

type Vote = {
  created_at: string
  id: number
  post_id: number
  username: string
  upvote: boolean
}

type Subreddit = {
  created_at: string
  id: number
  topic: string
}

type Post = {
  body: string
  created_at: string
  id: number
  image: string
  title: string
  username: string
  subreddit_id: number
  comments: Comments[]
  subreddit: Subreddit[]
  votes: Vote[]
}
