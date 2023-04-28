const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('posts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('posts');           
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    },
    Mutation: {
        //mutation to add user
        addUser: async (parent, { username, email, password}) => {
           const user = await User.create  ({ username, email, password });
           const token = signToken(user);
           return { token,user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
            },
             //to add post
            addPost: async (parent, { postText, postAuthor }) => {
                const post = await Post.create({ postText, postAuthor });
              
                await User.findOneAndUpdate(
                    { username: postAuthor },
                    { $addToSet: { thoughts: thought._id } }
                );

                return post;
            },
            //to add comment
            addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
                return Thought.findOneAndUpdate(
                    { _id: thoughtId },
                    {
                        $addToSet: { comments: { commentText, commentAuthor } },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            },
            //to delete post
            removePost: async (parent, { postId }) => {
                return Post.findOneAndDelete({_id: postId });
            },
            //to delete comment
            removeComment: async (parent, { postId, commentId }) => {
                return Post.findOneAndUpdate(
                    { _id: thoughtId },
                    { $pull: { comments: { _id: commentId } } },
                    { new: true }
                );
            },
        },
    };

    module.exports = resolvers;

