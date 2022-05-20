import { gql } from '@apollo/client'

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      id
      body
      created_at
      image
      title
      username
      subreddit_id
      comments {
        created_at
        id
        post_id
        username
        text
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        username
        upvote
      }
    }
  }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      comments {
        created_at
        id
        post_id
        username
        text
      }
      created_at
      id
      image
      subreddit {
        created_at
        id
        topic
      }
      title
      username
      subreddit_id
      votes {
        created_at
        id
        post_id
        username
        upvote
      }
    }
  }
`

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostByPostId(post_id: $post_id) {
      body
      comments {
        created_at
        id
        post_id
        username
        text
      }
      created_at
      id
      image
      subreddit {
        created_at
        id
        topic
      }
      title
      username
      subreddit_id
      votes {
        created_at
        id
        post_id
        username
        upvote
      }
    }
  }
`

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      created_at
      id
      post_id
      username
      upvote
    }
  }
`

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      id
      topic
      created_at
    }
  }
`
