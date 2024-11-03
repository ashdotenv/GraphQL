export const schema = `#graphql

type Query {
  hello: String
  users: [User]!
  courses: [Course]!
  course(id:ID!):Course
}

type User {
  _id: ID!
  name: String!
  password: String!
  googleId: String!
  avatar: String!
  verified: String!
  createdAt: String!
  updatedAt: String!
}
type Course {
  title: String!
  description: String!
  price: Float!
  duration: Int!
  instructor: ID!
  createdAt: String
  updatedAt: String
}
type Mutation{
  newUser(name:String!,age:Int!,gender:String!):String
}

`;
